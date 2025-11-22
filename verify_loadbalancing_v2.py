import re
import os
import sys

def verify_component(filepath, component_name):
    if not os.path.exists(filepath):
        print(f"❌ File {filepath} does not exist.")
        return False

    with open(filepath, 'r') as f:
        content = f.read()

    # Check if component is defined
    if f"export const {component_name}" not in content:
        print(f"❌ Component {component_name} not exported in {filepath}")
        return False

    print(f"✅ Component {component_name} found in {filepath}")

    # Check if it compiles (basic syntax check via regex for balanced braces is hard,
    # but we can check for obvious missing imports or syntax errors if we had a linter.
    # For now, we rely on existence).

    return True

def verify_root_duration(filepath, component_id, expected_duration):
    with open(filepath, 'r') as f:
        content = f.read()

    # Look for Composition with specific id and duration
    pattern = r'<Composition\s+id="' + component_id + r'"[^>]*durationInFrames={(\d+)}'
    match = re.search(pattern, content)

    if match:
        duration = int(match.group(1))
        if duration == expected_duration:
             print(f"✅ {component_id} duration is correct: {duration}")
             return True
        else:
             print(f"❌ {component_id} duration mismatch. Expected {expected_duration}, found {duration}")
             return False
    else:
        print(f"❌ Composition {component_id} not found or format mismatch in {filepath}")
        return False

def main():
    print("Verifying LoadBalancingEnhanced changes...")

    # Verify file exists and component exported
    if not verify_component("src/topics/LoadBalancingEnhanced.tsx", "LoadBalancingEnhanced"):
        sys.exit(1)

    # Verify Duration in Root.tsx
    if not verify_root_duration("src/Root.tsx", "LoadBalancingEnhanced", 3780):
        sys.exit(1)

    print("\nVerifying specific content updates...")
    with open("src/topics/LoadBalancingEnhanced.tsx", "r") as f:
        content = f.read()

    # Check for new duration constants
    if "intro: 240" in content:
        print("✅ Intro duration updated to 240")
    else:
         print("❌ Intro duration not found or incorrect")

    if "deployment: 540" in content:
        print("✅ Deployment duration updated to 540")
    else:
         print("❌ Deployment duration not found or incorrect")

    # Check for carousel logic (Canary, Blue-Green, A/B)
    if "Canary Deployment" in content and "Blue-Green Deployment" in content and "A/B Testing" in content:
        print("✅ Deployment patterns text found")
    else:
        print("❌ Deployment patterns text missing")

    if "interpolate" in content:
         print("✅ Interpolate imported")
    else:
         print("❌ Interpolate missing")

    print("\nVerification Complete.")

if __name__ == "__main__":
    main()
