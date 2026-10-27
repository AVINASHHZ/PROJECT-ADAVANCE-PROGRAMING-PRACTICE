"""
Fixes the placement of CampaignManager so it is properly defined at top-level scope
and campaign.init() runs during page initialization.
"""

INDEX_PATH = "d:/app game/src/main/resources/static/index.html"
TARGET_COPIES = [
    "d:/app game/index.html",
    "d:/app game/shadow_reborn_crimson_ronin.html"
]

with open(INDEX_PATH, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Restore opt-reset-match listener
broken_reset = """  document.getElementById('opt-reset-match').addEventListener('click', () => {
    toggleMenu();"""

# Extract CampaignManager block
cm_start_token = "  // ============================================================================\n  // 10. CAMPAIGN MANAGER: STORY, MAP, DIALOGUE, REWARDS & ENDINGS"
cm_end_token = "    campaign.init();\n    startNewRound(true);\n  });"

start_idx = code.find(cm_start_token)
end_idx = code.find(cm_end_token)

if start_idx != -1 and end_idx != -1:
    cm_block = code[start_idx:end_idx].strip()
    
    # Remove it from inside opt-reset-match
    cut_end = end_idx + len(cm_end_token)
    code = code[:start_idx] + "    startNewRound(true);\n  });" + code[cut_end:]
    print("Extracted CampaignManager from inside opt-reset-match")

    # Now place CampaignManager right before global startNewRound(true); requestAnimationFrame(loop);
    target_boot = "  startNewRound(true);\n  requestAnimationFrame(loop);"
    new_boot = cm_block + """

  // Initialize Campaign Manager on boot
  const campaign = new CampaignManager();
  campaign.init();

  startNewRound(true);
  requestAnimationFrame(loop);"""

    if target_boot in code:
        code = code.replace(target_boot, new_boot, 1)
        print("Placed CampaignManager at top-level scope before loop boot!")
    else:
        print("Warning: target_boot not found")

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(code)

for target in TARGET_COPIES:
    with open(target, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Synchronized with {target}")

print("Fix completed!")
