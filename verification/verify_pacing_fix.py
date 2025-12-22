from playwright.sync_api import sync_playwright
import time

def verify_rest_api():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1920, 'height': 1080})
        page = context.new_page()

        print("Navigating to Remotion Studio...")
        page.goto("http://localhost:3000/compositions/RESTAPIDesign")
        time.sleep(10) # Wait for player to load

        print("Taking screenshot to verify Credit Bookmark position (should be Top Right)...")
        # Capture the initial frame (Intro) where the bookmark is visible
        page.screenshot(path="verification/rest_api_fix_pacing.png")

        browser.close()

if __name__ == "__main__":
    verify_rest_api()
