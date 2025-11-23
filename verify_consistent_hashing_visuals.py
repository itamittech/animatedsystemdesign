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

        # Wait for load
        try:
            page.wait_for_load_state("networkidle", timeout=5000)
        except:
            print("Network idle timeout, proceeding...")

        # Helper to seek and screenshot
        def capture_frame(frame_number, name):
            print(f"Capturing frame {frame_number} for {name}...")
            target_url = f"{url}?frame={frame_number}"
            page.goto(target_url)
            time.sleep(2) # Wait for render
            page.screenshot(path=f"/home/jules/verification/{name}.png")
            print(f"Saved {name}.png")

        # Calculated based on starts in ConsistentHashingCAP.tsx:
        # intro: 0
        # capTheorem: 300
        # cpVsAp: 900
        # transition: 1200
        # moduloHashing: 1500
        # consistentHashing: 1900
        # virtualNodes: 2700
        # conclusion: 3300

        # 1. CAP Triangle (Frame 450)
        capture_frame(450, "cap_triangle")

        # 2. CP vs AP (Frame 1050)
        capture_frame(1050, "cp_vs_ap")

        # 3. Modulo Hashing Chaos (Frame 1750)
        capture_frame(1750, "modulo_chaos")

        # 4. The Ring (Frame 2150)
        capture_frame(2150, "hashing_ring")

        # 5. Virtual Nodes (Frame 2900)
        capture_frame(2900, "virtual_nodes")

        browser.close()

if __name__ == "__main__":
    import os
    os.makedirs("/home/jules/verification", exist_ok=True)
    verify_visuals()
