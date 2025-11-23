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
    return True

def verify_root_registration(filepath, component_id):
    with open(filepath, 'r') as f:
        content = f.read()

    if f'id="{component_id}"' in content and f'component={{{component_id}}}' in content:
        print(f"✅ {component_id} registered in {filepath}")
        return True
    else:
        print(f"❌ {component_id} not correctly registered in {filepath}")
        return False

def verify_content_elements(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    required_terms = [
        "CAP Theorem",
        "Consistency",
        "Availability",
        "Partition Tolerance",
        "Modulo Hashing",
        "Consistent Hashing",
        "Virtual Nodes",
        "Data Skew"
    ]

    all_found = True
    for term in required_terms:
        if term in content:
            print(f"✅ Found term: {term}")
        else:
            print(f"❌ Missing term: {term}")
            all_found = False

    return all_found

def main():
    print("Verifying ConsistentHashingCAP...")

    if not verify_component("src/topics/ConsistentHashingCAP.tsx", "ConsistentHashingCAP"):
        sys.exit(1)

    if not verify_root_registration("src/Root.tsx", "ConsistentHashingCAP"):
        sys.exit(1)

    if not verify_content_elements("src/topics/ConsistentHashingCAP.tsx"):
        sys.exit(1)

    print("\nVerification Complete.")

if __name__ == "__main__":
    main()
