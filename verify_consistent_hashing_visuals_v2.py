import time
from playwright.sync_api import sync_playwright

def verify_visuals():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the composition
        url = "http://localhost:3000/compositions/ConsistentHashingCAP"
        print(f"Navigating to {url}")
        page.goto(url)

        # Wait for player to load
        try:
            page.wait_for_load_state("networkidle", timeout=5000)
        except:
            pass

        # Helper to seek and screenshot
        def capture_frame(frame_number, name):
            print(f"Capturing frame {frame_number} for {name}...")

            # Try to wait for the Remotion Player to be ready in the DOM
            # In the Studio, it's an iframe usually or a canvas.

            # Attempt to set frame via URL reload (standard way)
            page.goto(f"{url}?frame={frame_number}")
            time.sleep(3)

            page.screenshot(path=f"/home/jules/verification/{name}.png")
            print(f"Saved {name}.png")

        # Just try one frame that definitely has content
        capture_frame(450, "cap_triangle_retry")

        browser.close()

if __name__ == "__main__":
    import os
    os.makedirs("/home/jules/verification", exist_ok=True)
    verify_visuals()
