from playwright.sync_api import sync_playwright

def verify_rest_api_design():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000/compositions/RESTAPIDesign")
            page.goto("http://localhost:3000/compositions/RESTAPIDesign", timeout=60000)

            print(f"Page title: {page.title()}")

            # Wait a bit for the player to initialize
            page.wait_for_timeout(5000)

            page.screenshot(path="verification/rest_api_design_baseline.png")
            print("Screenshot taken at verification/rest_api_design_baseline.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_rest_api_design()
