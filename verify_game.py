"""
Verification Script for SHADOW REQUIEM: THE FIFTEEN SEALS
Checks all assets, level configurations, weapons, and endings.
"""

import os
import json
import re

STATIC_BASE = "d:/app game/src/main/resources/static"

# 1. Check all Asset Files
categories = {
    "environments": 15,
    "portraits": 15,
    "weapons": 15,
    "ui": 4
}

all_ok = True
print("=== CHECKING ASSET FILES ===")
for cat, expected in categories.items():
    dir_path = os.path.join(STATIC_BASE, "assets", cat)
    if not os.path.exists(dir_path):
        print(f"[FAIL] Missing directory: {dir_path}")
        all_ok = False
        continue
    webps = [f for f in os.listdir(dir_path) if f.endswith('.webp')]
    jpgs = [f for f in os.listdir(dir_path) if f.endswith('.jpg')]
    print(f"[OK] {cat}: {len(webps)} .webp files, {len(jpgs)} .jpg files (Expected {expected})")
    if len(webps) < expected:
        print(f"[WARNING] Fewer .webp files than expected: {webps}")
        all_ok = False

# 2. Check HTML & JS Elements
with open(os.path.join(STATIC_BASE, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

required_ids = [
    "btn-campaign-toggle",
    "campaign-overlay",
    "chapter-tabs-strip",
    "nodes-chain-container",
    "node-detail-panel",
    "btn-commence-duel",
    "dialogue-overlay",
    "dialogue-speech-text",
    "btn-dialogue-skip",
    "btn-dialogue-next",
    "endings-overlay",
    "endings-selection-grid",
    "ending-epilogue-box",
    "p2-name",
    "p2-portrait-img",
    "p1-name",
    "p1-weapon-tag",
    "p2-weapon-tag",
    "btn-next-level",
    "btn-campaign-map-return",
    "campaign-reward-unlocked-banner"
]

print("\n=== CHECKING HTML UI IDS ===")
for elem_id in required_ids:
    if f'id="{elem_id}"' in html:
        print(f"[OK] Element ID found: #{elem_id}")
    else:
        print(f"[FAIL] Missing Element ID: #{elem_id}")
        all_ok = False

# 3. Check JavaScript Registry
print("\n=== CHECKING CAMPAIGN DATA IN JS ===")
level_matches = re.findall(r'level:\s*(\d+),\s*chapter:\s*(\d+)', html)
print(f"[OK] Found {len(level_matches)} registered campaign level definitions")
if len(level_matches) != 15:
    all_ok = False

bosses = ["goro", "kiba", "ren", "dreadmaw", "soryu", "raik", "shinobi", "vex", "brutus", "akari", "nami", "kurogane", "hollow_knight", "hollow_king", "shadow_kaze"]
for b in bosses:
    if f'bossId: "{b}"' in html or f"bossId: '{b}'" in html:
        print(f"[OK] Boss ID verified: {b}")
    else:
        print(f"[FAIL] Missing Boss ID: {b}")
        all_ok = False

if all_ok:
    print("\n>>> ALL CHECKS PASSED PERFECTLY! ZERO ERRORS! <<<")
else:
    print("\n>>> SOME CHECKS FAILED! <<<")
