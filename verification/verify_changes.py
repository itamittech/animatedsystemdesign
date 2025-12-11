from playwright.sync_api import sync_playwright

def verify_rest_api_design_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000/compositions/RESTAPIDesign")
            page.goto("http://localhost:3000/compositions/RESTAPIDesign", timeout=60000)

            # Wait for player to load
            print("Waiting for player...")
            page.wait_for_timeout(10000)

            # Try to force play via keyboard without clicking specific element, or click a known coordinate
            # Click center of screen
            print("Clicking center...")
            page.mouse.click(960, 540)

            print("Pressing Space...")
            page.keyboard.press("Space")

            print("Waiting 15s...")
            page.wait_for_timeout(15000)

            page.screenshot(path="verification/rest_api_design_scene2.png")
            print("Screenshot taken")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_rest_api_design_changes()
