from playwright.sync_api import sync_playwright, expect
import time

def verify_video(page):
    print("Navigating to Remotion Studio...")
    # The URL pattern for a specific composition in Remotion Studio
    page.goto("http://localhost:3000/compositions/LoadBalancingEnhanced")

    print("Waiting for player to load...")
    # Wait for the canvas or some player element
    page.wait_for_selector("video", timeout=60000)

    print("Player loaded. Seeking to Consistent Hashing scene (frame ~4500)...")

    # Remotion Studio usually has inputs for current frame.
    # We can try to use keyboard shortcuts or URL params if supported,
    # but URL params usually work best for seeking.
    # Let's try reloading with a specific frame if possible, or use JS to seek.

    # Try using JS to set the frame if the Remotion internal API is exposed,
    # but usually it's easier to just wait or interact with UI.
    # Let's try to click the timeline or set the input.

    # Alternative: Remotion allows seeking via URL hash or query params in some versions,
    # but standard studio might not.

    # Let's try to find the frame input.
    # It usually displays the current frame.

    # Attempt to use keyboard to seek.
    # Right arrow seeks 1 frame. Shift+Right seeks 30 (1 sec).
    # We need to go to frame 4500. That's 150 seconds.
    # That's a lot of key presses.

    # Better approach: Remotion Studio often supports `?frame=4500` in URL.
    # Let's try that.
    page.goto("http://localhost:3000/compositions/LoadBalancingEnhanced?frame=4500")
    page.wait_for_selector("video", timeout=60000)

    # Wait a bit for render
    time.sleep(5)

    print("Taking screenshot...")
    page.screenshot(path="verification/consistent_hashing.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_video(page)
            print("Verification complete.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
