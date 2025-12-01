import time
from playwright.sync_api import sync_playwright, expect

def verify_fix():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Increase timeout for slow environment
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()

        # Navigate to the composition
        # Composition ID: LoadBalancingEnhanced
        # The URL structure is typically http://localhost:3000/compositions/LoadBalancingEnhanced
        # But let's check the studio output if possible, or assume localhost:3000
        print("Navigating to Remotion Studio...")
        try:
            page.goto("http://localhost:3000/compositions/LoadBalancingEnhanced", timeout=60000)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        print("Page loaded. Waiting for canvas...")
        # Wait for the canvas to appear
        try:
            page.wait_for_selector("video", timeout=60000) # Remotion uses a video element or canvas? Usually there is a viewport.
            # Actually, let's look for something specific to the studio.
            # Or just wait a bit.
        except:
            print("Video element not found, checking for canvas...")

        # We need to seek to the frame where the bug was happening.
        # The bug was in `clientSideLB` scene.
        # starts.clientSideLB is calculated in the file.
        # sceneDurations: intro(300) + singleServer(210) + basicLB(240) + algorithms(480) + l4vsL7(540) + healthChecks(240) + stickySessions(420) + serverlessLB(420)
        # starts.clientSideLB = 300+210+240+480+540+240+420+420 = 2850
        # The bug is at starts.clientSideLB + 50 = 2900 approx.

        target_frame = 2900
        print(f"Seeking to frame {target_frame}...")

        # In Remotion Studio, we can usually set the frame via URL param?
        # e.g. http://localhost:3000/compositions/LoadBalancingEnhanced?frame=2900
        # Let's try navigating directly to that frame.
        page.goto(f"http://localhost:3000/compositions/LoadBalancingEnhanced?frame={target_frame}", timeout=60000)

        # Wait for render
        time.sleep(10) # Give it time to render the frame

        # Take screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification/load_balancing_fix.png")
        print("Screenshot saved to verification/load_balancing_fix.png")

        browser.close()

if __name__ == "__main__":
    verify_fix()
