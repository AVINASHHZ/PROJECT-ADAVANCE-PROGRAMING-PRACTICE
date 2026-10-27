"""
Campaign Injection Script for SHADOW REQUIEM: THE FIFTEEN SEALS
Integrates 15 levels, 15 boss silhouettes, 15 weapons, dynamic environments,
pre-battle dialogue cutscenes, rewards, and 3 endings into the fighting game.
"""

import os
import re

INDEX_PATH = "d:/app game/src/main/resources/static/index.html"
TARGET_COPIES = [
    "d:/app game/index.html",
    "d:/app game/shadow_reborn_crimson_ronin.html"
]

with open(INDEX_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# -----------------------------------------------------------------------------
# 1. CSS STYLES TO INJECT
# -----------------------------------------------------------------------------
CAMPAIGN_CSS = """
  /* ==================== CAMPAIGN MAP & LORE MODAL ==================== */
  #campaign-overlay {
    z-index: 110;
  }

  .campaign-modal-card {
    background: linear-gradient(180deg, rgba(20, 16, 26, 0.98), rgba(10, 8, 14, 0.98));
    border: 1.5px solid rgba(246, 211, 101, 0.45);
    border-top: 3px solid #ff6b00;
    border-radius: 10px;
    padding: 18px 24px 28px;
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 107, 0, 0.2);
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  .campaign-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(246, 211, 101, 0.25);
    padding-bottom: 12px;
    margin-bottom: 16px;
  }

  .campaign-title-group h2 {
    font-family: 'Cinzel', serif;
    font-size: 1.35rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    color: #f6d365;
    text-shadow: 0 2px 8px rgba(0,0,0,0.8);
  }

  .campaign-title-group p {
    font-size: 0.78rem;
    color: #cbd5e1;
    margin-top: 2px;
  }

  .campaign-progress-badge {
    background: rgba(30, 20, 15, 0.85);
    border: 1.5px solid rgba(246, 211, 101, 0.5);
    border-radius: 6px;
    padding: 6px 14px;
    font-family: 'Cinzel', serif;
    font-size: 0.82rem;
    color: #fef08a;
    font-weight: 700;
  }

  /* Chapter Navigation Tabs */
  .chapter-tabs-strip {
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
    overflow-x: auto;
    padding-bottom: 4px;
  }

  .chapter-tab-btn {
    flex: 1;
    min-width: 160px;
    background: rgba(25, 20, 32, 0.85);
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 6px;
    padding: 8px 10px;
    cursor: pointer;
    text-align: left;
    transition: all 0.2s;
    color: #94a3b8;
  }

  .chapter-tab-btn.active {
    background: linear-gradient(135deg, rgba(80, 28, 16, 0.95), rgba(40, 14, 18, 0.95));
    border-color: #f6d365;
    color: #fff;
    box-shadow: 0 0 12px rgba(246, 211, 101, 0.3);
  }

  .chapter-tab-num {
    font-family: 'Cinzel', serif;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #f6d365;
    text-transform: uppercase;
  }

  .chapter-tab-name {
    font-size: 0.82rem;
    font-weight: 700;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Map Nodes & Level Detail Grid */
  .campaign-body-grid {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 20px;
  }

  @media (max-width: 860px) {
    .campaign-body-grid {
      grid-template-columns: 1fr;
    }
  }

  .nodes-chain-container {
    background: rgba(14, 11, 18, 0.9);
    border: 1px solid rgba(255, 209, 102, 0.2);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .node-card-row {
    display: flex;
    align-items: center;
    background: rgba(22, 18, 28, 0.88);
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 10px 14px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
  }

  .node-card-row:hover {
    border-color: rgba(246, 211, 101, 0.6);
    background: rgba(35, 28, 45, 0.95);
    transform: translateX(4px);
  }

  .node-card-row.selected {
    border-color: #f6d365;
    background: linear-gradient(90deg, rgba(70, 24, 14, 0.95), rgba(30, 22, 38, 0.95));
    box-shadow: 0 0 15px rgba(246, 211, 101, 0.25);
  }

  .node-card-row.locked {
    opacity: 0.55;
    cursor: not-allowed;
    filter: grayscale(0.85);
  }

  .node-card-row.locked:hover {
    transform: none;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .node-number-seal {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #08060c;
    border: 2px solid #555;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cinzel', serif;
    font-weight: 900;
    font-size: 1.05rem;
    color: #e2e8f0;
    flex-shrink: 0;
    margin-right: 14px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.8);
  }

  .node-card-row.completed .node-number-seal {
    border-color: #f6d365;
    color: #f6d365;
    background: radial-gradient(circle, #3d2208 0%, #0c0804 100%);
    box-shadow: 0 0 10px rgba(246, 211, 101, 0.4);
  }

  .node-card-row.selected .node-number-seal {
    border-color: #ff6b00;
    color: #fff;
    background: #ff6b00;
  }

  .node-info-text {
    flex: 1;
    min-width: 0;
  }

  .node-level-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .node-boss-subtitle {
    font-size: 0.76rem;
    color: #f6d365;
    margin-top: 2px;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.04em;
  }

  .node-status-badge {
    font-size: 0.7rem;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
  }

  .node-status-badge.completed {
    background: rgba(34, 197, 94, 0.18);
    color: #4ade80;
    border: 1px solid #22c55e;
  }

  .node-status-badge.available {
    background: rgba(246, 211, 101, 0.2);
    color: #fef08a;
    border: 1px solid #f6d365;
    animation: pulseBadge 1.8s infinite;
  }

  .node-status-badge.locked {
    background: rgba(100, 116, 139, 0.2);
    color: #94a3b8;
    border: 1px solid #64748b;
  }

  @keyframes pulseBadge {
    0%, 100% { box-shadow: 0 0 0 rgba(246, 211, 101, 0); }
    50% { box-shadow: 0 0 10px rgba(246, 211, 101, 0.6); }
  }

  /* Node Detail Inspector Panel */
  .node-detail-panel {
    background: rgba(16, 13, 22, 0.95);
    border: 1.5px solid rgba(246, 211, 101, 0.35);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .inspector-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: 8px;
  }

  .inspector-header .seal-tag {
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    font-weight: 800;
    color: #ff6b00;
    letter-spacing: 0.08em;
  }

  .inspector-header h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #fff;
    margin-top: 2px;
  }

  .inspector-env-preview {
    width: 100%;
    height: 120px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    overflow: hidden;
    position: relative;
    background: #08060c;
  }

  .inspector-env-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .inspector-boss-row {
    display: flex;
    gap: 12px;
    align-items: center;
    background: rgba(24, 19, 32, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 8px 10px;
  }

  .inspector-boss-portrait {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid #f6d365;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.8);
  }

  .inspector-boss-portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .inspector-boss-info {
    flex: 1;
    min-width: 0;
  }

  .inspector-boss-name {
    font-family: 'Cinzel', serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: #fff;
  }

  .inspector-boss-title {
    font-size: 0.72rem;
    color: #f6d365;
    margin-top: 1px;
  }

  .inspector-boss-combat {
    font-size: 0.72rem;
    color: #cbd5e1;
    margin-top: 3px;
    line-height: 1.3;
  }

  .inspector-story-summary {
    font-size: 0.76rem;
    color: #94a3b8;
    line-height: 1.45;
    font-style: italic;
    background: rgba(10, 8, 14, 0.6);
    border-left: 3px solid #ff6b00;
    padding: 6px 10px;
    border-radius: 0 4px 4px 0;
  }

  .inspector-reward-box {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(30, 24, 16, 0.65);
    border: 1px solid rgba(246, 211, 101, 0.3);
    border-radius: 6px;
    padding: 8px 10px;
  }

  .inspector-reward-icon {
    width: 44px;
    height: 44px;
    border-radius: 6px;
    border: 1.5px solid #f6d365;
    overflow: hidden;
    flex-shrink: 0;
    background: #08060c;
  }

  .inspector-reward-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .inspector-reward-details span {
    display: block;
    font-size: 0.68rem;
    color: #f6d365;
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
  }

  .inspector-reward-details strong {
    font-size: 0.84rem;
    color: #fff;
  }

  .campaign-commence-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #d9251d 0%, #ff6b00 100%);
    border: 1.5px solid #fef08a;
    border-radius: 6px;
    color: #fff;
    font-family: 'Cinzel', serif;
    font-size: 0.95rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(217, 37, 29, 0.45);
    transition: all 0.2s;
  }

  .campaign-commence-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 0, 0.6);
  }

  .campaign-commence-btn:disabled {
    background: #334155;
    border-color: #64748b;
    color: #94a3b8;
    cursor: not-allowed;
    box-shadow: none;
  }

  /* ==================== PRE-BATTLE STORY DIALOGUE MODAL ==================== */
  #dialogue-overlay {
    z-index: 120;
    background: rgba(3, 2, 5, 0.88);
    display: none;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;
  }

  #dialogue-overlay.active {
    display: flex;
  }

  .dialogue-cinematic-frame {
    max-width: 960px;
    width: 95%;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(22, 18, 28, 0.96), rgba(12, 10, 16, 0.98));
    border: 2px solid rgba(246, 211, 101, 0.45);
    border-radius: 10px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.98), 0 0 40px rgba(255, 107, 0, 0.25);
    padding: 16px 22px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .dialogue-speakers-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: 10px;
  }

  .dialogue-speaker-card {
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0.45;
    transition: all 0.3s ease;
  }

  .dialogue-speaker-card.active-speaker {
    opacity: 1.0;
    transform: scale(1.05);
  }

  .dialogue-speaker-card.right {
    flex-direction: row-reverse;
  }

  .dialogue-speaker-medallion {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2.5px solid #f6d365;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.85);
    background: #08060c;
  }

  .dialogue-speaker-medallion img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dialogue-speaker-text-group {
    display: flex;
    flex-direction: column;
  }

  .dialogue-speaker-card.right .dialogue-speaker-text-group {
    align-items: flex-end;
  }

  .dialogue-speaker-name {
    font-family: 'Cinzel', serif;
    font-size: 1.0rem;
    font-weight: 900;
    color: #f6d365;
  }

  .dialogue-speaker-title {
    font-size: 0.72rem;
    color: #cbd5e1;
  }

  .dialogue-speech-box {
    min-height: 85px;
    background: rgba(8, 6, 12, 0.85);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 14px 18px;
    font-size: 1.05rem;
    line-height: 1.55;
    color: #f8fafc;
    font-family: 'Inter', serif;
    position: relative;
  }

  .dialogue-speech-box::after {
    content: '▼';
    position: absolute;
    bottom: 8px;
    right: 14px;
    color: #f6d365;
    font-size: 0.75rem;
    animation: blinkIndicator 1s infinite;
  }

  @keyframes blinkIndicator {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1.0; }
  }

  .dialogue-actions-strip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
  }

  .dialogue-hint {
    font-size: 0.74rem;
    color: #94a3b8;
  }

  .dialogue-btn {
    padding: 8px 20px;
    border-radius: 6px;
    font-family: 'Cinzel', serif;
    font-size: 0.85rem;
    font-weight: 800;
    cursor: pointer;
    border: 1.5px solid transparent;
  }

  .dialogue-btn.skip {
    background: rgba(40, 32, 50, 0.7);
    color: #cbd5e1;
    border-color: rgba(255, 255, 255, 0.2);
  }

  .dialogue-btn.next {
    background: linear-gradient(135deg, #d9251d, #ff6b00);
    color: #fff;
    border-color: #fef08a;
    box-shadow: 0 4px 15px rgba(255, 107, 0, 0.4);
  }

  /* ==================== THREE ENDINGS MODAL ==================== */
  #endings-overlay {
    z-index: 130;
  }

  .endings-modal-card {
    background: linear-gradient(180deg, rgba(20, 14, 28, 0.98), rgba(8, 6, 12, 0.98));
    border: 2px solid #f6d365;
    border-radius: 12px;
    padding: 24px 30px;
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 30px 80px rgba(0,0,0,0.98), 0 0 50px rgba(246, 211, 101, 0.25);
    text-align: center;
  }

  .endings-modal-card h1 {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 900;
    color: #f6d365;
    letter-spacing: 0.12em;
  }

  .endings-modal-card p.subtitle {
    font-size: 0.88rem;
    color: #e2e8f0;
    margin-top: 4px;
    margin-bottom: 24px;
  }

  .endings-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-bottom: 24px;
  }

  @media (max-width: 860px) {
    .endings-cards-grid {
      grid-template-columns: 1fr;
    }
  }

  .ending-choice-card {
    background: rgba(18, 14, 24, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.25s ease;
    text-align: left;
  }

  .ending-choice-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
  }

  .ending-choice-card.true-ronin:hover {
    border-color: #f6d365;
    box-shadow: 0 0 25px rgba(246, 211, 101, 0.4);
  }

  .ending-choice-card.eternal-shadow:hover {
    border-color: #ef4444;
    box-shadow: 0 0 25px rgba(239, 68, 68, 0.4);
  }

  .ending-choice-card.broken-seal:hover {
    border-color: #38bdf8;
    box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
  }

  .ending-card-thumb {
    width: 100%;
    height: 160px;
    background: #08060c;
    overflow: hidden;
  }

  .ending-card-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ending-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
  }

  .ending-card-title {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: #fff;
  }

  .ending-choice-card.true-ronin .ending-card-title { color: #f6d365; }
  .ending-choice-card.eternal-shadow .ending-card-title { color: #ef4444; }
  .ending-choice-card.broken-seal .ending-card-title { color: #38bdf8; }

  .ending-card-desc {
    font-size: 0.78rem;
    color: #cbd5e1;
    line-height: 1.45;
    flex: 1;
  }

  .ending-card-btn {
    margin-top: 10px;
    padding: 10px;
    border-radius: 6px;
    font-family: 'Cinzel', serif;
    font-size: 0.85rem;
    font-weight: 800;
    cursor: pointer;
    text-align: center;
    border: none;
    color: #fff;
  }

  .ending-choice-card.true-ronin .ending-card-btn { background: #d97706; }
  .ending-choice-card.eternal-shadow .ending-card-btn { background: #b91c1c; }
  .ending-choice-card.broken-seal .ending-card-btn { background: #0284c7; }

  /* Epilogue Narrative Box */
  .ending-epilogue-box {
    display: none;
    background: rgba(10, 8, 14, 0.95);
    border: 1.5px solid #f6d365;
    border-radius: 8px;
    padding: 24px;
    text-align: left;
    margin-top: 18px;
    animation: fadeInEpilogue 0.8s ease;
  }

  @keyframes fadeInEpilogue {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .epilogue-title {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    font-weight: 900;
    color: #f6d365;
    margin-bottom: 12px;
  }

  .epilogue-text {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #f1f5f9;
    font-style: italic;
    margin-bottom: 20px;
  }
"""

# Insert CSS into <style> block
if "/* ==================== CAMPAIGN MAP & LORE MODAL ==================== */" not in content:
    content = content.replace("</style>", CAMPAIGN_CSS + "\n</style>", 1)
    print("Injected CAMPAIGN_CSS")

# -----------------------------------------------------------------------------
# 2. UPDATE TOP TOOLBAR & HUD
# -----------------------------------------------------------------------------
# Add Campaign Button to quick-toolbar
if 'id="btn-campaign-toggle"' not in content:
    campaign_btn_html = '<button class="q-pill campaign-pill" id="btn-campaign-toggle" style="background:linear-gradient(135deg, #7c2d12, #b91c1c); border-color:#facc15; color:#fff; font-weight:800; box-shadow:0 0 10px rgba(239,68,68,0.45);">📜 Campaign (15 Seals)</button>\n    '
    content = content.replace('<button class="q-pill server-pill online"', campaign_btn_html + '<button class="q-pill server-pill online"', 1)
    print("Injected Campaign Button into quick-toolbar")

# Update Opponent medallion and name row in HUD
if 'id="p2-portrait-img"' not in content:
    old_p2_hud = """    <div class="hud-side right">
      <div class="medallion p2-med" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <!-- Masked Ninja / Kid Portrait matching SF2 reference -->
          <circle cx="54" cy="30" r="14" fill="#adb5bd" stroke="#111" stroke-width="2"/>
          <!-- Eye cutout -->
          <rect x="42" y="25" width="16" height="6" rx="2" fill="#d4a373"/>
          <circle cx="46" cy="28" r="1.8" fill="#111"/>
          <circle cx="53" cy="28" r="1.8" fill="#111"/>
          <!-- Ninja Gi & Raised Guard Hand -->
          <path d="M26 98 C28 60 38 46 56 45 C74 46 84 64 86 98 Z" fill="#ced4da" stroke="#111" stroke-width="2"/>
          <path d="M18 32 L28 58 L46 68" stroke="#adb5bd" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="M15 24 L22 36" stroke="#111" stroke-width="5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="bars-column">
        <div class="name-row">
          <span class="sf-name">KID</span>
          <span class="sf-style-tag" id="p2-weapon-tag">RONIN BLADE</span>
        </div>"""

    new_p2_hud = """    <div class="hud-side right">
      <div class="medallion p2-med" id="p2-medallion" aria-hidden="true">
        <img id="p2-portrait-img" src="assets/portraits/boss_goro_portrait.webp" alt="Opponent" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='block';" />
        <svg viewBox="0 0 100 100" style="display:none;">
          <circle cx="54" cy="30" r="14" fill="#adb5bd" stroke="#111" stroke-width="2"/>
          <rect x="42" y="25" width="16" height="6" rx="2" fill="#d4a373"/>
          <circle cx="46" cy="28" r="1.8" fill="#111"/>
          <circle cx="53" cy="28" r="1.8" fill="#111"/>
          <path d="M26 98 C28 60 38 46 56 45 C74 46 84 64 86 98 Z" fill="#ced4da" stroke="#111" stroke-width="2"/>
          <path d="M18 32 L28 58 L46 68" stroke="#adb5bd" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="M15 24 L22 36" stroke="#111" stroke-width="5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="bars-column">
        <div class="name-row">
          <span class="sf-name" id="p2-name">GORO</span>
          <span class="sf-style-tag" id="p2-weapon-tag">THE EXILED BLADE</span>
        </div>"""

    if old_p2_hud in content:
        content = content.replace(old_p2_hud, new_p2_hud, 1)
        print("Updated P2 HUD Medallion & Name")
    else:
        print("Warning: old_p2_hud exact string not found, checking alternatives...")

# Update P1 HUD Name
content = content.replace('<span class="sf-name">SHADOW</span>', '<span class="sf-name" id="p1-name">KAZE</span>', 1)
content = content.replace('<span class="sf-style-tag" id="p1-weapon-tag">KATANA</span>', '<span class="sf-style-tag" id="p1-weapon-tag">RONIN</span>', 1)

# -----------------------------------------------------------------------------
# 3. HTML MODALS: CAMPAIGN MAP, DIALOGUE, ENDINGS
# -----------------------------------------------------------------------------
MODALS_HTML = """
  <!-- ==================== CAMPAIGN MAP MODAL ==================== -->
  <div class="overlay-screen" id="campaign-overlay">
    <div class="campaign-modal-card">
      <button class="modal-close-x" id="btn-campaign-close-x" title="Close Map (Esc)">✕</button>
      
      <div class="campaign-header-row">
        <div class="campaign-title-group">
          <h2>SHADOW REQUIEM: THE FIFTEEN SEALS</h2>
          <p>Confront the ancient corrupted clans, awaken Nightfall, reunite with Akari, and slay the Hollow King.</p>
        </div>
        <div class="campaign-progress-badge" id="campaign-progress-text">SEAL 1 / 15</div>
      </div>

      <!-- Chapter Tabs Strip -->
      <div class="chapter-tabs-strip" id="chapter-tabs-strip">
        <button class="chapter-tab-btn active" data-chapter="1">
          <div class="chapter-tab-num">Chapter I</div>
          <div class="chapter-tab-name">The Broken Oath</div>
        </button>
        <button class="chapter-tab-btn" data-chapter="2">
          <div class="chapter-tab-num">Chapter II</div>
          <div class="chapter-tab-name">The Iron Chain</div>
        </button>
        <button class="chapter-tab-btn" data-chapter="3">
          <div class="chapter-tab-num">Chapter III</div>
          <div class="chapter-tab-name">Shadows of Betrayal</div>
        </button>
        <button class="chapter-tab-btn" data-chapter="4">
          <div class="chapter-tab-num">Chapter IV</div>
          <div class="chapter-tab-name">The Veiled Truth</div>
        </button>
        <button class="chapter-tab-btn" data-chapter="5">
          <div class="chapter-tab-num">Chapter V</div>
          <div class="chapter-tab-name">The Eternal Void</div>
        </button>
      </div>

      <!-- Campaign Body Grid -->
      <div class="campaign-body-grid">
        <!-- Left: Chapter Nodes Chain -->
        <div class="nodes-chain-container" id="nodes-chain-container">
          <!-- Filled dynamically by JavaScript -->
        </div>

        <!-- Right: Selected Node Detail Inspector -->
        <div class="node-detail-panel" id="node-detail-panel">
          <div class="inspector-header">
            <div class="seal-tag" id="insp-seal-tag">SEAL I — CHAPTER I</div>
            <h3 id="insp-level-name">Ashen Forest</h3>
          </div>

          <div class="inspector-env-preview">
            <img id="insp-env-img" src="assets/environments/level01_ashen_forest_bg.webp" alt="Arena Environment" />
          </div>

          <div class="inspector-boss-row">
            <div class="inspector-boss-portrait">
              <img id="insp-boss-img" src="assets/portraits/boss_goro_portrait.webp" alt="Boss Portrait" />
            </div>
            <div class="inspector-boss-info">
              <div class="inspector-boss-name" id="insp-boss-name">Goro</div>
              <div class="inspector-boss-title" id="insp-boss-title">The Exiled Blade</div>
              <div class="inspector-boss-combat" id="insp-boss-combat">Heavy two-handed Katana slashes with high guard crush.</div>
            </div>
          </div>

          <div class="inspector-story-summary" id="insp-story-summary">
            Kaze enters the moonlit bamboo grove, seeking the truth behind the cursed black blade Nightfall.
          </div>

          <div class="inspector-reward-box">
            <div class="inspector-reward-icon">
              <img id="insp-reward-img" src="assets/weapons/weapon_iron_katana.webp" alt="Reward" />
            </div>
            <div class="inspector-reward-details">
              <span id="insp-reward-type">WEAPON UNLOCK</span>
              <strong id="insp-reward-name">Iron Katana</strong>
            </div>
          </div>

          <button class="campaign-commence-btn" id="btn-commence-duel">COMMENCE DUEL</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== PRE-BATTLE STORY DIALOGUE MODAL ==================== -->
  <div class="overlay-screen" id="dialogue-overlay">
    <div class="dialogue-cinematic-frame">
      <div class="dialogue-speakers-row">
        <!-- Left Speaker: Kaze (Player) -->
        <div class="dialogue-speaker-card active-speaker" id="dialogue-speaker-kaze">
          <div class="dialogue-speaker-medallion">
            <img src="assets/portraits/boss_goro_portrait.webp" id="dialogue-kaze-img" alt="Kaze" style="filter:grayscale(1) contrast(1.3);" />
          </div>
          <div class="dialogue-speaker-text-group">
            <div class="dialogue-speaker-name">KAZE</div>
            <div class="dialogue-speaker-title">The Ronin</div>
          </div>
        </div>

        <!-- Right Speaker: Boss -->
        <div class="dialogue-speaker-card right" id="dialogue-speaker-boss">
          <div class="dialogue-speaker-medallion">
            <img src="assets/portraits/boss_goro_portrait.webp" id="dialogue-boss-img" alt="Opponent" />
          </div>
          <div class="dialogue-speaker-text-group">
            <div class="dialogue-speaker-name" id="dialogue-boss-name">GORO</div>
            <div class="dialogue-speaker-title" id="dialogue-boss-title">The Exiled Blade</div>
          </div>
        </div>
      </div>

      <!-- Dialogue Speech Box with Typewriter Effect -->
      <div class="dialogue-speech-box" id="dialogue-speech-text">
        "Turn back, Kaze. The seal you shattered has poisoned the earth. Your black blade hungers for your soul."
      </div>

      <div class="dialogue-actions-strip">
        <span class="dialogue-hint">Press [Space] or click Next to advance</span>
        <div style="display:flex;gap:8px;">
          <button class="dialogue-btn skip" id="btn-dialogue-skip">SKIP (ESC)</button>
          <button class="dialogue-btn next" id="btn-dialogue-next">CONTINUE ▶</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== THREE ENDINGS MODAL ==================== -->
  <div class="overlay-screen" id="endings-overlay">
    <div class="endings-modal-card">
      <h1>THE DESTINY OF THE FIFTEEN SEALS</h1>
      <p class="subtitle">With the defeat of Kaze's Shadow, the ultimate fate of the shadow realm lies in your hands.</p>

      <div class="endings-cards-grid" id="endings-selection-grid">
        <!-- 1. TRUE RONIN -->
        <div class="ending-choice-card true-ronin" data-ending="TRUE_RONIN">
          <div class="ending-card-thumb">
            <img src="assets/ui/ending_true_ronin.webp" alt="True Ronin" />
          </div>
          <div class="ending-card-content">
            <div class="ending-card-title">TRUE RONIN</div>
            <div class="ending-card-desc">
              Shatter Nightfall against the obsidian stone. Release all stolen shadows back to the winds and walk away with Akari as mortals.
            </div>
            <button class="ending-card-btn">CHOOSE DESTINY</button>
          </div>
        </div>

        <!-- 2. ETERNAL SHADOW -->
        <div class="ending-choice-card eternal-shadow" data-ending="ETERNAL_SHADOW">
          <div class="ending-card-thumb">
            <img src="assets/ui/ending_eternal_shadow.webp" alt="Eternal Shadow" />
          </div>
          <div class="ending-card-content">
            <div class="ending-card-title">ETERNAL SHADOW</div>
            <div class="ending-card-desc">
              Absorb the remaining dark power of the fifteen seals. Claim the Hollow Throne and become the immortal Sovereign of Shadows.
            </div>
            <button class="ending-card-btn">CHOOSE DESTINY</button>
          </div>
        </div>

        <!-- 3. BROKEN SEAL -->
        <div class="ending-choice-card broken-seal" data-ending="BROKEN_SEAL">
          <div class="ending-card-thumb">
            <img src="assets/ui/ending_broken_seal.webp" alt="Broken Seal" />
          </div>
          <div class="ending-card-content">
            <div class="ending-card-title">BROKEN SEAL</div>
            <div class="ending-card-desc">
              Sacrifice your own mortal soul to permanently bind and seal the void gateway forever, ensuring the world never bleeds again.
            </div>
            <button class="ending-card-btn">CHOOSE DESTINY</button>
          </div>
        </div>
      </div>

      <!-- Epilogue Scroll -->
      <div class="ending-epilogue-box" id="ending-epilogue-box">
        <div class="epilogue-title" id="epilogue-title">DESTINY FULFILLED</div>
        <div class="epilogue-text" id="epilogue-text">...</div>
        <button class="sf-btn" id="btn-epilogue-return">Return to Campaign Map</button>
      </div>
    </div>
  </div>
"""

# Insert modals right before the closing tag of #game-root or before #menu-overlay
if 'id="campaign-overlay"' not in content:
    content = content.replace('<div class="overlay-screen" id="menu-overlay">', MODALS_HTML + '\n  <div class="overlay-screen" id="menu-overlay">', 1)
    print("Injected Campaign, Dialogue, and Endings Modals HTML")

# Update Result Overlay with Next Level and Campaign Map buttons
OLD_RESULT_BTNS = """      <div class="btn-row">
        <button class="sf-btn" id="btn-rematch">Fight Again</button>
        <button class="sf-btn secondary" id="btn-change-gear">Change Gear</button>
      </div>"""

NEW_RESULT_BTNS = """      <!-- Campaign Next Level & Reward Banner -->
      <div id="campaign-reward-unlocked-banner" style="display:none; margin-bottom:12px; background:rgba(30,22,12,0.85); border:1.5px solid #f6d365; border-radius:8px; padding:10px 14px; text-align:left;">
        <div style="font-family:'Cinzel',serif; font-size:0.75rem; color:#f6d365; font-weight:800;">🎉 NEW REWARD UNLOCKED</div>
        <div style="display:flex; align-items:center; gap:10px; margin-top:4px;">
          <img id="unlocked-reward-img" src="assets/weapons/weapon_iron_katana.webp" style="width:40px;height:40px;border-radius:6px;border:1px solid #f6d365;" />
          <div>
            <div id="unlocked-reward-name" style="font-weight:700;color:#fff;font-size:0.9rem;">Iron Katana</div>
            <div id="unlocked-reward-sub" style="font-size:0.75rem;color:#cbd5e1;">Equipped in your Arsenal</div>
          </div>
        </div>
      </div>

      <div class="btn-row">
        <button class="sf-btn" id="btn-next-level" style="display:none; background:linear-gradient(135deg, #d9251d, #ff6b00); border-color:#fef08a;">Next Seal ▶</button>
        <button class="sf-btn" id="btn-campaign-map-return">Campaign Map</button>
        <button class="sf-btn secondary" id="btn-rematch">Fight Again</button>
        <button class="sf-btn secondary" id="btn-change-gear">Change Gear</button>
      </div>"""

if OLD_RESULT_BTNS in content:
    content = content.replace(OLD_RESULT_BTNS, NEW_RESULT_BTNS, 1)
    print("Updated Result Overlay Buttons")

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("Base HTML structure update complete.")
