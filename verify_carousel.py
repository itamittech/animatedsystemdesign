import time
from playwright.sync_api import sync_playwright

def verify_carousel():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Wait for server to start
        time.sleep(2)

        # Navigate to the composition
        url = "http://localhost:3000/compositions/LoadBalancingEnhanced"
        print(f"Navigating to {url}")
        page.goto(url)

        # Wait for some content to load
        try:
            page.wait_for_load_state("networkidle", timeout=5000)
            print("Network idle.")
        except:
            print("Network idle timeout, proceeding...")

        # Debug: Print title
        print(f"Page Title: {page.title()}")

        # Take a debug screenshot of initial load
        page.screenshot(path="/home/jules/verification/debug_initial_load.png")
        print("Saved debug_initial_load.png")

        # Helper to seek and screenshot
        def capture_frame(frame_number, name):
            print(f"Capturing frame {frame_number} for {name}...")
            target_url = f"{url}?frame={frame_number}"
            print(f"Going to {target_url}")
            page.goto(target_url)
            time.sleep(3) # Wait for render
            page.screenshot(path=f"/home/jules/verification/{name}.png")
            print(f"Saved {name}.png")

        # Intro dialogue check
        capture_frame(60, "intro_dialogue_1")

        # Deployment starts ~2520.
        deployment_start = 2520

        # Canary Phase (Start + 100 to + 240) -> ~2620+
        capture_frame(deployment_start + 150, "deployment_canary")

        # Blue/Green Phase (Start + 240 to + 380) -> ~2760+
        capture_frame(deployment_start + 300, "deployment_bluegreen")

        # A/B Phase (Start + 380 to + 520) -> ~2900+
        capture_frame(deployment_start + 450, "deployment_ab")

        browser.close()

if __name__ == "__main__":
    import os
    os.makedirs("/home/jules/verification", exist_ok=True)
    verify_carousel()
