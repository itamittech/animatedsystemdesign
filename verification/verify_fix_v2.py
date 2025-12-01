import time
from playwright.sync_api import sync_playwright, expect

def verify_fix():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()

        # Navigate to the composition
        print("Navigating to Remotion Studio...")
        # Add frame parameter directly
        page.goto("http://localhost:3000/compositions/LoadBalancingEnhanced", timeout=60000)

        # Wait for page load
        print("Waiting for load...")
        time.sleep(15)

        # Check for error overlay
        # Remotion errors usually appear in a div with specific styling or text
        content = page.content()
        if "Runtime Error" in content or "Cannot read properties of undefined" in content:
             print("ERROR DETECTED in page content!")
        else:
             print("No obvious error text found in page content.")

        # Try to verify that the element is rendered?
        # It's hard without seeking.
        # But if the component mounts without error, that's a good sign.
        # The faulty code was in the render return, so it runs on every render.
        # However, "frame" is used in "fadeIn".
        # The crash happens when reading `theme.colors.text.primary`.
        # This code is inside the component body, executed on every render.
        # So if the component renders AT ALL, it should have crashed if the bug was present.

        # Let's take a screenshot of the initial state (Frame 0) just to show it loaded.
        page.screenshot(path="verification/load_balancing_fix_v2.png")
        print("Screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_fix()
