"""
Injects Fighter boss silhouettes, Arena dynamic backgrounds, AIController boss behaviors,
CampaignManager state & UI wiring, and Result/Endings flow.
"""

INDEX_PATH = "d:/app game/src/main/resources/static/index.html"
TARGET_COPIES = [
    "d:/app game/index.html",
    "d:/app game/shadow_reborn_crimson_ronin.html"
]

with open(INDEX_PATH, "r", encoding="utf-8") as f:
    code = f.read()

# -----------------------------------------------------------------------------
# 1. ENHANCE FIGHTER SILHOUETTE RENDERING
# -----------------------------------------------------------------------------
OLD_HEAD_SILHOUETTE = """    drawHeadSilhouette(ctx, j, f, fill, rim) {
      ctx.save();
      ctx.translate(j.headX, j.headY);

      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(0, 0, 11.5, 0, Math.PI * 2);
      ctx.fill();

      if (this.role === 'shadow') {
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(f * 3.5, -2.2);
        ctx.lineTo(f * 9.5, -3.2);
        ctx.lineTo(f * 7.5, -0.2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Wide Conical Kasa Straw Hat
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(-32, -1);
        ctx.lineTo(0, -16);
        ctx.lineTo(32, -1);
        ctx.quadraticCurveTo(0, -4, -32, -1);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = rim;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      ctx.restore();
    }"""

NEW_HEAD_SILHOUETTE = """    drawHeadSilhouette(ctx, j, f, fill, rim) {
      ctx.save();
      ctx.translate(j.headX, j.headY);

      const bId = this.bossId || (this.role === 'shadow' ? 'kaze' : 'goro');
      const isPlayer = (this.role === 'shadow');

      // Base Skull Silhouette
      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.arc(0, 0, 11.5, 0, Math.PI * 2);
      ctx.fill();

      // ==================== BOSS-SPECIFIC DARK HEADWEAR & SILHOUETTES ====================
      if (isPlayer) {
        // Player Kaze: Headband ribbons & glowing white eyes
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(f * 3.5, -2.2);
        ctx.lineTo(f * 9.5, -3.2);
        ctx.lineTo(f * 7.5, -0.2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (bId === 'kiba') {
        // 2. Kiba: Ragged Wolf Cowl with Ears & Fanged Mask
        ctx.fillStyle = fill;
        // Wolf cowl hood
        ctx.beginPath();
        ctx.moveTo(-16, -2);
        ctx.lineTo(-12, -17);
        ctx.lineTo(12, -17);
        ctx.lineTo(16, -2);
        ctx.closePath();
        ctx.fill();
        // Pointed Wolf Ears
        ctx.beginPath();
        ctx.moveTo(-9, -15);
        ctx.lineTo(-15, -28);
        ctx.lineTo(-4, -17);
        ctx.moveTo(9, -15);
        ctx.lineTo(15, -28);
        ctx.lineTo(4, -17);
        ctx.fill();
        // Glowing Amber Predator Eyes
        ctx.fillStyle = '#facc15';
        ctx.shadowColor = '#facc15';
        ctx.shadowBlur = 5;
        ctx.fillRect(f * 3.5, -3.2, 5, 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'ren') {
        // 3. Master Ren: Topknot with Cord & Long Flowing Master Beard
        ctx.fillStyle = fill;
        // Topknot bun
        ctx.beginPath();
        ctx.arc(0, -16, 4.5, 0, Math.PI * 2);
        ctx.fill();
        // Blindfold cloth
        ctx.fillStyle = '#1e1b24';
        ctx.fillRect(-12, -5, 24, 6);
        // Flowing Long White Beard Silhouette down past neck
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.moveTo(-7, 4);
        ctx.quadraticCurveTo(0, 26, f * 5, 34);
        ctx.quadraticCurveTo(f * 2, 20, 7, 4);
        ctx.closePath();
        ctx.fill();
        // Golden Inner Eye Glimmer behind blindfold
        ctx.fillStyle = '#f6d365';
        ctx.fillRect(f * 4, -3, 3, 2);
      } else if (bId === 'dreadmaw') {
        // 4. Dreadmaw: Brutal Horned Iron Jailer Helmet
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(0, -1, 13.5, 0, Math.PI * 2);
        ctx.fill();
        // Curved Iron Horns
        ctx.beginPath();
        ctx.moveTo(-8, -10);
        ctx.quadraticCurveTo(-24, -22, -18, -34);
        ctx.quadraticCurveTo(-12, -22, -4, -12);
        ctx.moveTo(8, -10);
        ctx.quadraticCurveTo(24, -22, 18, -34);
        ctx.quadraticCurveTo(12, -22, 4, -12);
        ctx.fill();
        // Glowing Emerald Slit Eyes
        ctx.fillStyle = '#22c55e';
        ctx.shadowColor = '#22c55e';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 4, -3, 6, 2.5);
        ctx.shadowBlur = 0;
      } else if (bId === 'soryu') {
        // 5. Lady Soryu: High Coiffure with Kanzashi Pins
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(0, -15, 7.5, 0, Math.PI * 2);
        ctx.fill();
        // Kanzashi Hair Needles
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-16, -20);
        ctx.lineTo(16, -10);
        ctx.moveTo(-14, -10);
        ctx.lineTo(18, -22);
        ctx.stroke();
        // Fiery Crimson Eyes
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 3.5, -3, 5.5, 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'raik') {
        // 6. General Raik: Imperial Thunder Kabuto with Crescent
        ctx.fillStyle = fill;
        // Crescent Horns
        ctx.strokeStyle = '#f6d365';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(0, -12, 18, Math.PI * 1.1, Math.PI * 1.9);
        ctx.stroke();
        // Neck Shikoro Plates
        ctx.fillStyle = fill;
        ctx.fillRect(-16, 2, 8, 12);
        ctx.fillRect(8, 2, 8, 12);
        // Cyan Lightning Eyes
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 7;
        ctx.fillRect(f * 3.5, -3, 6, 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'shinobi') {
        // 7. Shinobi: Masked Kitsune Face & Scarf
        ctx.fillStyle = fill;
        // Kitsune Ears
        ctx.beginPath();
        ctx.moveTo(-8, -12);
        ctx.lineTo(-12, -22);
        ctx.lineTo(-3, -15);
        ctx.moveTo(8, -12);
        ctx.lineTo(12, -22);
        ctx.lineTo(3, -15);
        ctx.fill();
        // Pale Blue Slit Eyes
        ctx.fillStyle = '#67e8f9';
        ctx.shadowColor = '#67e8f9';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 3.5, -2.5, 5.5, 2);
        ctx.shadowBlur = 0;
      } else if (bId === 'vex') {
        // 8. Vex: Pointed Trickster Cowl
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(-15, 0);
        ctx.lineTo(-2, -26);
        ctx.lineTo(15, 0);
        ctx.closePath();
        ctx.fill();
        // Phantom Violet Eyes
        ctx.fillStyle = '#c084fc';
        ctx.shadowColor = '#c084fc';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 4, -3, 5, 2);
        ctx.shadowBlur = 0;
      } else if (bId === 'brutus') {
        // 9. Brutus: Armored Centurion Horned Crest
        ctx.fillStyle = fill;
        ctx.fillRect(-6, -26, 12, 14);
        ctx.strokeStyle = '#ea580c';
        ctx.lineWidth = 3;
        ctx.strokeRect(-6, -26, 12, 14);
        // Blood Orange Eyes
        ctx.fillStyle = '#f97316';
        ctx.shadowColor = '#f97316';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 4, -3, 6, 2.5);
        ctx.shadowBlur = 0;
      } else if (bId === 'akari') {
        // 10. Akari: Unmasked Sister with High Tied Ponytail & Red Ribbon
        ctx.fillStyle = fill;
        // Ponytail
        ctx.beginPath();
        ctx.arc(-f * 8, -12, 5, 0, Math.PI * 2);
        ctx.fill();
        // Fluttering Red Silk Ribbon
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        ctx.moveTo(-f * 8, -12);
        ctx.quadraticCurveTo(-f * 18, -18, -f * 26, -10);
        ctx.stroke();
        // Determined Amber Sister Eyes
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 3.5, -2.5, 5.5, 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'nami') {
        // 11. Nami: Coral Horns & Floating Veil
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(-6, -12);
        ctx.lineTo(-14, -26);
        ctx.lineTo(-2, -16);
        ctx.moveTo(6, -12);
        ctx.lineTo(14, -26);
        ctx.lineTo(2, -16);
        ctx.fill();
        // Luminous Turquoise Eyes
        ctx.fillStyle = '#2dd4bf';
        ctx.shadowColor = '#2dd4bf';
        ctx.shadowBlur = 6;
        ctx.fillRect(f * 3.5, -2.5, 5.5, 2);
        ctx.shadowBlur = 0;
      } else if (bId === 'kurogane') {
        // 12. Lord Kurogane: Large Golden Crescent Kabuto
        ctx.fillStyle = fill;
        // Ornate Golden Crescent Crest
        ctx.strokeStyle = '#f6d365';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, -14, 22, Math.PI * 1.15, Math.PI * 1.85);
        ctx.stroke();
        // Menpo War Mask
        ctx.fillRect(-10, 2, 20, 8);
        // Imperious Golden Eyes
        ctx.fillStyle = '#facc15';
        ctx.shadowColor = '#facc15';
        ctx.shadowBlur = 7;
        ctx.fillRect(f * 3.5, -3, 6, 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'hollow_knight') {
        // 13. Hollow Knight: Cracked Void Horn Crown
        ctx.fillStyle = fill;
        for (let k = -12; k <= 12; k += 8) {
          ctx.beginPath();
          ctx.moveTo(k - 3, -12);
          ctx.lineTo(k, -24 - Math.abs(k));
          ctx.lineTo(k + 3, -12);
          ctx.fill();
        }
        // Spectral Violet Eyes
        ctx.fillStyle = '#a855f7';
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 8;
        ctx.fillRect(f * 3.5, -3, 6, 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'hollow_king') {
        // 14. Hollow King: Spired Crown of Shadows & Void Tendrils
        ctx.fillStyle = fill;
        // Spired Obsidian Crown
        for (let sp of [-14, -7, 0, 7, 14]) {
          const hSp = 20 + (14 - Math.abs(sp)) * 1.2;
          ctx.beginPath();
          ctx.moveTo(sp - 3.5, -12);
          ctx.lineTo(sp, -12 - hSp);
          ctx.lineTo(sp + 3.5, -12);
          ctx.fill();
        }
        // Apocalyptic Blood Eyes (flares intensely in Phase 2)
        const isP2 = this.phase2Triggered;
        ctx.fillStyle = isP2 ? '#ff0000' : '#dc2626';
        ctx.shadowColor = '#ff0000';
        ctx.shadowBlur = isP2 ? 14 : 7;
        ctx.fillRect(f * 3, -3.5, isP2 ? 7.5 : 6, isP2 ? 3.2 : 2.2);
        ctx.shadowBlur = 0;
      } else if (bId === 'shadow_kaze') {
        // 15. Shadow Kaze: Cursed Mirror of Kaze with Demonic Crimson Horns
        ctx.fillStyle = fill;
        // Demonic horn flares
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-7, -12);
        ctx.quadraticCurveTo(-18, -24, -12, -32);
        ctx.moveTo(7, -12);
        ctx.quadraticCurveTo(18, -24, 12, -32);
        ctx.stroke();
        // Burning Red Demonic Eyes
        ctx.fillStyle = '#ef4444';
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(f * 3.5, -2.5);
        ctx.lineTo(f * 10, -4.0);
        ctx.lineTo(f * 8, 0);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Level 1 Goro / Default: Wide Conical Battered Kasa Straw Hat
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(-32, -1);
        ctx.lineTo(0, -16);
        ctx.lineTo(32, -1);
        ctx.quadraticCurveTo(0, -4, -32, -1);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = rim;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Goro Amber Eyes
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 5;
        ctx.fillRect(f * 3.5, -2.5, 5, 2);
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    }"""

if OLD_HEAD_SILHOUETTE in code:
    code = code.replace(OLD_HEAD_SILHOUETTE, NEW_HEAD_SILHOUETTE, 1)
    print("Replaced drawHeadSilhouette with complete 15-boss dark theme silhouettes!")
else:
    print("Warning: OLD_HEAD_SILHOUETTE exact block not matched, searching...")

# -----------------------------------------------------------------------------
# 2. ENHANCE WEAPON SHAPE DRAWING (CHAIN BLADE, CLEAVER, QUARTERSTAFF)
# -----------------------------------------------------------------------------
OLD_WEAPON_SHAPE = """    drawWeaponShape(ctx, gx, gy, angle) {
      const w = this.weapon;
      if (w.type === 'unarmed') return;

      ctx.save();
      ctx.translate(gx, gy);
      ctx.rotate(angle);

      const SIL = '#050507';
      const EDGE = 'rgba(255, 240, 200, 0.55)';

      if (w.type === 'dual_sai') {"""

NEW_WEAPON_SHAPE = """    drawWeaponShape(ctx, gx, gy, angle) {
      const w = this.weapon;
      if (w.type === 'unarmed') return;

      ctx.save();
      ctx.translate(gx, gy);
      ctx.rotate(angle);

      const SIL = '#050507';
      const EDGE = 'rgba(255, 240, 200, 0.55)';

      if (w.type === 'chain_blade') {
        // Chain Scythe: handle + curved sickle blade + hanging iron links
        ctx.strokeStyle = SIL;
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.moveTo(-w.handleLen, 0);
        ctx.lineTo(w.length * 0.45, 0);
        ctx.stroke();

        // Curved Scythe Blade
        ctx.fillStyle = SIL;
        ctx.beginPath();
        ctx.moveTo(w.length * 0.4, -4);
        ctx.quadraticCurveTo(w.length * 0.75, -28, w.length, -18);
        ctx.quadraticCurveTo(w.length * 0.82, -4, w.length * 0.4, 4);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = EDGE;
        ctx.lineWidth = 1.3;
        ctx.stroke();

        // Dangling Iron Chain links
        ctx.strokeStyle = '#78716c';
        ctx.lineWidth = 2.2;
        for (let c = 0; c < 4; c++) {
          const cx = -w.handleLen + c * 8;
          ctx.strokeRect(cx - 3, 2 + c * 4, 6, 5);
        }
      } else if (w.type === 'greatsword') {
        // Heavy Cleaver / Greatsword
        ctx.strokeStyle = SIL;
        ctx.lineWidth = 5.2;
        ctx.beginPath();
        ctx.moveTo(-w.handleLen, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();

        // Massive rectangular cleaver blade
        ctx.fillStyle = SIL;
        ctx.beginPath();
        ctx.moveTo(0, -w.width);
        ctx.lineTo(w.length, -w.width * 0.85);
        ctx.lineTo(w.length - 8, w.width * 0.85);
        ctx.lineTo(0, w.width);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = EDGE;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -w.width);
        ctx.lineTo(w.length, -w.width * 0.85);
        ctx.stroke();
      } else if (w.type === 'dual_sai') {"""

if OLD_WEAPON_SHAPE in code:
    code = code.replace(OLD_WEAPON_SHAPE, NEW_WEAPON_SHAPE, 1)
    print("Enhanced drawWeaponShape with Chain Blade and Greatsword support!")

# -----------------------------------------------------------------------------
# 3. ENHANCE ARENA RENDERER FOR DYNAMIC 15-LEVEL CAMPAIGN BACKGROUNDS
# -----------------------------------------------------------------------------
OLD_ARENA_RENDER = """    renderWorld(ctx, worldW, viewH, groundY, time) {
      if (this.mode === 'temple') {
        this.renderAutumnTempleWorld(ctx, worldW, viewH, groundY, time);
      } else {
        this.renderMoonlightBridgeWorld(ctx, worldW, viewH, groundY, time);
      }
    }"""

NEW_ARENA_RENDER = """    renderWorld(ctx, worldW, viewH, groundY, time) {
      if (this.campaignImg && (this.campaignImgLoaded || (this.campaignImg.complete && this.campaignImg.naturalWidth > 0))) {
        this.renderCampaignWorld(ctx, worldW, viewH, groundY, time);
      } else if (this.mode === 'temple') {
        this.renderAutumnTempleWorld(ctx, worldW, viewH, groundY, time);
      } else {
        this.renderMoonlightBridgeWorld(ctx, worldW, viewH, groundY, time);
      }
    }

    loadCampaignEnvironment(bgFile, particleType, fallbackColor) {
      this.campaignImgLoaded = false;
      this.campaignParticleType = particleType || 'ash';
      this.campaignFallbackColor = fallbackColor || '#0a0812';
      this.campaignImg = new Image();
      this.campaignImg.onload = () => { this.campaignImgLoaded = true; };
      this.campaignImg.src = bgFile;
    }

    renderCampaignWorld(ctx, worldW, h, groundY, time) {
      const img = this.campaignImg;
      const nw = img.naturalWidth || 1920;
      const nh = img.naturalHeight || 1080;

      // 16:9 side-view fighting arena scaling anchored at groundY
      const scale = Math.max(worldW / nw, h / nh);
      const drawW = nw * scale;
      const drawH = nh * scale;
      const drawX = (worldW - drawW) * 0.5;
      const floorRatio = 0.82;
      const imgGroundY = drawH * floorRatio;
      const drawY = groundY - imgGroundY;

      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      // Environment particle overlay
      this.renderCampaignParticles(ctx, worldW, groundY, time);
    }

    renderCampaignParticles(ctx, worldW, groundY, time) {
      const pType = this.campaignParticleType || 'ash';
      ctx.save();
      if (pType === 'ash') {
        ctx.fillStyle = 'rgba(210, 215, 225, 0.45)';
        for (let i = 0; i < 45; i++) {
          const px = (i * 47 + time * 24) % worldW;
          const py = (i * 29 + time * 38) % groundY;
          ctx.beginPath();
          ctx.arc(px, py, 1.8 + (i % 3) * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (pType === 'embers') {
        for (let i = 0; i < 55; i++) {
          const px = (i * 37 + Math.sin(time + i) * 20) % worldW;
          const py = groundY - ((i * 23 + time * 65) % groundY);
          ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 107, 0, 0.65)' : 'rgba(239, 68, 68, 0.55)';
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (pType === 'snow') {
        ctx.fillStyle = 'rgba(240, 248, 255, 0.7)';
        for (let i = 0; i < 60; i++) {
          const px = (i * 35 + time * 75) % worldW;
          const py = (i * 22 + time * 55) % groundY;
          ctx.beginPath();
          ctx.arc(px, py, 2.0, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (pType === 'petals') {
        ctx.fillStyle = 'rgba(56, 189, 248, 0.65)';
        for (let i = 0; i < 35; i++) {
          const px = (i * 55 + Math.sin(time * 2 + i) * 35) % worldW;
          const py = (i * 32 + time * 42) % groundY;
          ctx.beginPath();
          ctx.ellipse(px, py, 5, 2.5, time + i, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (pType === 'void') {
        for (let i = 0; i < 40; i++) {
          const px = (i * 52 + Math.sin(time + i) * 30) % worldW;
          const py = groundY - ((i * 31 + time * 48) % groundY);
          ctx.fillStyle = i % 2 === 0 ? 'rgba(168, 85, 247, 0.6)' : 'rgba(225, 29, 72, 0.55)';
          ctx.beginPath();
          ctx.arc(px, py, 3.0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    }"""

if OLD_ARENA_RENDER in code:
    code = code.replace(OLD_ARENA_RENDER, NEW_ARENA_RENDER, 1)
    print("Enhanced ArenaRenderer with 15-environment support and dynamic particles!")

# -----------------------------------------------------------------------------
# 4. ENHANCE AICONTROLLER WITH BOSS BEHAVIORS & HOLLOW KING PHASE 2
# -----------------------------------------------------------------------------
OLD_AI_UPDATE_START = """    update(dt, player) {
      const ai = this.f;
      if (ai.hp <= 0 || player.hp <= 0) return;"""

NEW_AI_UPDATE_START = """    update(dt, player) {
      const ai = this.f;
      if (ai.hp <= 0 || player.hp <= 0) return;

      const bId = ai.bossId || 'goro';

      // ==================== HOLLOW KING PHASE 2 BERSERK TRIGGER ====================
      if (bId === 'hollow_king' && ai.hp <= ai.maxHp * 0.5 && !ai.phase2Triggered) {
        ai.phase2Triggered = true;
        camera.flashAlpha = 0.45;
        camera.punchZoom = 0.22;
        camera.shakeMag = 18;
        camera.shakeTimer = 0.65;
        sfx.play('crit');
        vfx.spawnRing(ai.x, ai.y - 60, '#ef4444', 180, 0.4);
        showBanner('PHASE II', 'VOID BERSERK UNLEASHED!', 2.2);
        // Buff speed and shadow gauge
        ai.weapon.speed = 1.35;
        ai.shadow = 100;
      }"""

if OLD_AI_UPDATE_START in code:
    code = code.replace(OLD_AI_UPDATE_START, NEW_AI_UPDATE_START, 1)
    print("Injected Hollow King Phase 2 Berserk check into AIController")

# -----------------------------------------------------------------------------
# 5. CAMPAIGN MANAGER ENGINE & CONTROLLER
# -----------------------------------------------------------------------------
CAMPAIGN_MANAGER_JS = """
  // ============================================================================
  // 10. CAMPAIGN MANAGER: STORY, MAP, DIALOGUE, REWARDS & ENDINGS
  // ============================================================================
  class CampaignManager {
    constructor() {
      this.state = this.loadState();
      this.selectedChapter = 1;
      this.selectedLevel = this.state.currentLevel || 1;
      this.currentDialogueLine = 0;
      this.activeDialogueLevel = null;
      this.typewriterTimer = null;
    }

    loadState() {
      try {
        const raw = localStorage.getItem('shadow_reborn_campaign_v2');
        if (raw) return JSON.parse(raw);
      } catch (e) {}

      const def = {
        currentLevel: 1,
        highestUnlocked: 1,
        completedLevels: [],
        defeatedBosses: [],
        unlockedWeapons: ['katana', 'iron_katana'],
        selectedEnding: null,
        endingsUnlocked: []
      };
      this.saveState(def);
      return def;
    }

    saveState(s) {
      this.state = s || this.state;
      try {
        localStorage.setItem('shadow_reborn_campaign_v2', JSON.stringify(this.state));
      } catch (e) {}
    }

    init() {
      this.bindUI();
      // Load current campaign level into game engine on boot
      this.loadLevel(this.state.currentLevel || 1, false);
      this.updateHUDProgression();
    }

    bindUI() {
      // Toggle Campaign Map Overlay
      const btnToggle = document.getElementById('btn-campaign-toggle');
      if (btnToggle) {
        btnToggle.addEventListener('click', () => {
          this.openMap();
        });
      }

      const btnClose = document.getElementById('btn-campaign-close-x');
      if (btnClose) {
        btnClose.addEventListener('click', () => {
          this.closeMap();
        });
      }

      // Chapter Tab Switching
      document.querySelectorAll('#chapter-tabs-strip .chapter-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ch = parseInt(btn.getAttribute('data-chapter'), 10);
          this.selectChapter(ch);
        });
      });

      // Commence Duel Button
      const btnCommence = document.getElementById('btn-commence-duel');
      if (btnCommence) {
        btnCommence.addEventListener('click', () => {
          this.closeMap();
          this.loadLevel(this.selectedLevel, true);
        });
      }

      // Dialogue Controls
      const btnDiaNext = document.getElementById('btn-dialogue-next');
      if (btnDiaNext) {
        btnDiaNext.addEventListener('click', () => {
          this.advanceDialogue();
        });
      }

      const btnDiaSkip = document.getElementById('btn-dialogue-skip');
      if (btnDiaSkip) {
        btnDiaSkip.addEventListener('click', () => {
          this.endDialogue();
        });
      }

      // Result overlay buttons
      const btnNextLvl = document.getElementById('btn-next-level');
      if (btnNextLvl) {
        btnNextLvl.addEventListener('click', () => {
          document.getElementById('result-overlay').classList.remove('active');
          const nextLvl = (this.state.currentLevel || 1) + 1;
          if (nextLvl <= 15) {
            this.loadLevel(nextLvl, true);
          } else {
            this.openEndingsModal();
          }
        });
      }

      const btnMapReturn = document.getElementById('btn-campaign-map-return');
      if (btnMapReturn) {
        btnMapReturn.addEventListener('click', () => {
          document.getElementById('result-overlay').classList.remove('active');
          this.openMap();
        });
      }

      // Ending cards selection
      document.querySelectorAll('.ending-choice-card').forEach(card => {
        card.addEventListener('click', () => {
          const endingKey = card.getAttribute('data-ending');
          this.selectEnding(endingKey);
        });
      });

      const btnEpilogueReturn = document.getElementById('btn-epilogue-return');
      if (btnEpilogueReturn) {
        btnEpilogueReturn.addEventListener('click', () => {
          document.getElementById('endings-overlay').classList.remove('active');
          this.openMap();
        });
      }
    }

    openMap() {
      const modal = document.getElementById('campaign-overlay');
      if (modal) {
        modal.classList.add('active');
        match.paused = true;
        this.renderChapterNodes();
        this.renderInspector();
      }
    }

    closeMap() {
      const modal = document.getElementById('campaign-overlay');
      if (modal) {
        modal.classList.remove('active');
        match.paused = false;
        focusGame();
      }
    }

    selectChapter(ch) {
      this.selectedChapter = ch;
      document.querySelectorAll('#chapter-tabs-strip .chapter-tab-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.getAttribute('data-chapter'), 10) === ch);
      });
      // Pick first node of chapter
      const firstLvl = (ch - 1) * 3 + 1;
      this.selectedLevel = Math.min(firstLvl, this.state.highestUnlocked || 1);
      this.renderChapterNodes();
      this.renderInspector();
    }

    renderChapterNodes() {
      const container = document.getElementById('nodes-chain-container');
      if (!container) return;
      container.innerHTML = '';

      const startIdx = (this.selectedChapter - 1) * 3;
      const chapterLevels = CAMPAIGN_LEVELS.slice(startIdx, startIdx + 3);

      chapterLevels.forEach(lvl => {
        const isCompleted = this.state.completedLevels.includes(lvl.level);
        const isUnlocked = lvl.level <= (this.state.highestUnlocked || 1);
        const isSelected = lvl.level === this.selectedLevel;

        const row = document.createElement('div');
        row.className = `node-card-row ${isCompleted ? 'completed' : ''} ${!isUnlocked ? 'locked' : ''} ${isSelected ? 'selected' : ''}`;
        
        let statusBadge = '<span class="node-status-badge locked">🔒 LOCKED</span>';
        if (isCompleted) {
          statusBadge = '<span class="node-status-badge completed">✓ CONQUERED</span>';
        } else if (isUnlocked) {
          statusBadge = '<span class="node-status-badge available">⚔️ DUEL READY</span>';
        }

        row.innerHTML = `
          <div class="node-number-seal">${lvl.level}</div>
          <div class="node-info-text">
            <div class="node-level-title">${lvl.name}</div>
            <div class="node-boss-subtitle">${lvl.bossName} — ${lvl.bossTitle}</div>
          </div>
          ${statusBadge}
        `;

        if (isUnlocked) {
          row.addEventListener('click', () => {
            this.selectedLevel = lvl.level;
            this.renderChapterNodes();
            this.renderInspector();
          });
        }

        container.appendChild(row);
      });
    }

    renderInspector() {
      const lvl = CAMPAIGN_LEVELS.find(l => l.level === this.selectedLevel);
      if (!lvl) return;

      const isUnlocked = lvl.level <= (this.state.highestUnlocked || 1);

      document.getElementById('insp-seal-tag').textContent = `SEAL ${lvl.level} — ${lvl.chapterName.toUpperCase()}`;
      document.getElementById('insp-level-name').textContent = lvl.name;
      document.getElementById('insp-env-img').src = lvl.bgFile;
      document.getElementById('insp-boss-img').src = lvl.bossPortrait;
      document.getElementById('insp-boss-name').textContent = lvl.bossName;
      document.getElementById('insp-boss-title').textContent = lvl.bossTitle;
      document.getElementById('insp-boss-combat').textContent = lvl.bossStyleDesc;
      document.getElementById('insp-story-summary').textContent = lvl.storyIntro;
      document.getElementById('insp-reward-img').src = lvl.rewardFile;
      document.getElementById('insp-reward-type').textContent = lvl.rewardType.toUpperCase();
      document.getElementById('insp-reward-name').textContent = lvl.rewardName;

      const btnCommence = document.getElementById('btn-commence-duel');
      if (btnCommence) {
        btnCommence.disabled = !isUnlocked;
        btnCommence.textContent = isUnlocked
          ? (this.state.completedLevels.includes(lvl.level) ? 'REPLAY DUEL' : 'COMMENCE DUEL')
          : 'SEAL LOCKED';
      }
    }

    loadLevel(lvlNum, showDialogue = true) {
      const lvl = CAMPAIGN_LEVELS.find(l => l.level === lvlNum);
      if (!lvl) return;

      this.state.currentLevel = lvlNum;
      this.saveState();

      // 1. Configure Arena Environment
      arena.loadCampaignEnvironment(lvl.bgFile, lvl.particleType, lvl.fallbackColor);

      // 2. Configure P2 Opponent Boss
      p2.bossId = lvl.bossId;
      p2.role = 'boss';
      p2.maxHp = lvl.bossHp;
      p2.hp = lvl.bossHp;
      p2.delayHp = lvl.bossHp;
      p2.phase2Triggered = false;

      // Assign Boss Weapon
      const wDef = WEAPONS[lvl.bossWeaponKey] || WEAPONS.iron_katana;
      p2.weapon = wDef;
      p2.weaponKey = lvl.bossWeaponKey;

      // Configure AI behavior & difficulty
      ai.difficulty = Math.min(2, Math.max(0, lvl.difficulty - 1));

      // 3. Update HUD Names & Portraits
      const p2Name = document.getElementById('p2-name');
      const p2Style = document.getElementById('p2-weapon-tag');
      const p2Img = document.getElementById('p2-portrait-img');
      if (p2Name) p2Name.textContent = lvl.bossName.toUpperCase();
      if (p2Style) p2Style.textContent = lvl.bossTitle.toUpperCase();
      if (p2Img) {
        p2Img.src = lvl.bossPortrait;
        p2Img.style.display = 'block';
      }

      this.updateHUDProgression();

      if (showDialogue && lvl.dialogue && lvl.dialogue.length > 0) {
        this.startDialogue(lvl);
      } else {
        startNewRound(true);
      }
    }

    startDialogue(lvl) {
      this.activeDialogueLevel = lvl;
      this.currentDialogueLine = 0;
      match.paused = true;

      const overlay = document.getElementById('dialogue-overlay');
      if (!overlay) return;
      overlay.classList.add('active');

      document.getElementById('dialogue-boss-name').textContent = lvl.bossName.toUpperCase();
      document.getElementById('dialogue-boss-title').textContent = lvl.bossTitle;
      document.getElementById('dialogue-boss-img').src = lvl.bossPortrait;

      this.renderDialogueLine();
    }

    renderDialogueLine() {
      const lvl = this.activeDialogueLevel;
      if (!lvl || this.currentDialogueLine >= lvl.dialogue.length) {
        this.endDialogue();
        return;
      }

      const line = lvl.dialogue[this.currentDialogueLine];
      const speakerKaze = document.getElementById('dialogue-speaker-kaze');
      const speakerBoss = document.getElementById('dialogue-speaker-boss');
      const speechBox = document.getElementById('dialogue-speech-text');

      if (line.speaker === 'kaze') {
        speakerKaze.classList.add('active-speaker');
        speakerBoss.classList.remove('active-speaker');
      } else {
        speakerBoss.classList.add('active-speaker');
        speakerKaze.classList.remove('active-speaker');
      }

      // Typewriter Effect
      speechBox.textContent = '';
      if (this.typewriterTimer) clearInterval(this.typewriterTimer);
      let charIdx = 0;
      const fullText = line.text;
      this.typewriterTimer = setInterval(() => {
        if (charIdx < fullText.length) {
          speechBox.textContent += fullText.charAt(charIdx);
          charIdx++;
        } else {
          clearInterval(this.typewriterTimer);
        }
      }, 18);
    }

    advanceDialogue() {
      if (this.typewriterTimer) {
        clearInterval(this.typewriterTimer);
        const line = this.activeDialogueLevel.dialogue[this.currentDialogueLine];
        const speechBox = document.getElementById('dialogue-speech-text');
        if (speechBox.textContent.length < line.text.length) {
          speechBox.textContent = line.text;
          return;
        }
      }
      this.currentDialogueLine++;
      if (this.currentDialogueLine < this.activeDialogueLevel.dialogue.length) {
        this.renderDialogueLine();
      } else {
        this.endDialogue();
      }
    }

    endDialogue() {
      if (this.typewriterTimer) clearInterval(this.typewriterTimer);
      const overlay = document.getElementById('dialogue-overlay');
      if (overlay) overlay.classList.remove('active');
      match.paused = false;
      startNewRound(true);
      focusGame();
    }

    onMatchCompleted(won) {
      if (!won) return;

      const curLvl = this.state.currentLevel || 1;
      const lvl = CAMPAIGN_LEVELS.find(l => l.level === curLvl);
      if (!lvl) return;

      if (!this.state.completedLevels.includes(curLvl)) {
        this.state.completedLevels.push(curLvl);
      }
      if (!this.state.defeatedBosses.includes(lvl.bossId)) {
        this.state.defeatedBosses.push(lvl.bossId);
      }

      // Unlock next level
      if (curLvl < 15 && this.state.highestUnlocked <= curLvl) {
        this.state.highestUnlocked = curLvl + 1;
      }

      // Unlock weapon reward
      if (lvl.rewardKey && !this.state.unlockedWeapons.includes(lvl.rewardKey)) {
        this.state.unlockedWeapons.push(lvl.rewardKey);
      }

      this.saveState();
      this.updateHUDProgression();

      // Show reward in Result overlay
      const rwBanner = document.getElementById('campaign-reward-unlocked-banner');
      const rwImg = document.getElementById('unlocked-reward-img');
      const rwName = document.getElementById('unlocked-reward-name');
      const rwSub = document.getElementById('unlocked-reward-sub');
      const btnNext = document.getElementById('btn-next-level');

      if (rwBanner && rwImg && rwName && rwSub) {
        rwImg.src = lvl.rewardFile;
        rwName.textContent = `${lvl.rewardName} (${lvl.rewardType})`;
        rwSub.textContent = lvl.rewardDesc;
        rwBanner.style.display = 'block';
      }

      if (btnNext) {
        btnNext.style.display = 'inline-block';
        btnNext.textContent = curLvl === 15 ? 'FULFILL DESTINY 👑' : `Seal ${curLvl + 1} ▶`;
      }
    }

    openEndingsModal() {
      const modal = document.getElementById('endings-overlay');
      if (modal) {
        modal.classList.add('active');
        match.paused = true;
      }
    }

    selectEnding(endingKey) {
      const endDef = CAMPAIGN_ENDINGS[endingKey];
      if (!endDef) return;

      this.state.selectedEnding = endingKey;
      if (!this.state.endingsUnlocked.includes(endingKey)) {
        this.state.endingsUnlocked.push(endingKey);
      }
      this.saveState();

      // Display Epilogue narrative scroll
      const grid = document.getElementById('endings-selection-grid');
      const epilogue = document.getElementById('ending-epilogue-box');
      const title = document.getElementById('epilogue-title');
      const text = document.getElementById('epilogue-text');

      if (grid) grid.style.display = 'none';
      if (epilogue && title && text) {
        title.textContent = endDef.title;
        text.textContent = endDef.text;
        epilogue.style.display = 'block';
      }
    }

    updateHUDProgression() {
      const progEl = document.getElementById('campaign-progress-text');
      if (progEl) {
        progEl.textContent = `SEAL ${this.state.currentLevel || 1} / 15`;
      }
    }
  }

  // Initialize Global Campaign Controller
  const campaign = new CampaignManager();
"""

# Inject CAMPAIGN_MANAGER_JS right before loop initialization
if "class CampaignManager {" not in code:
    code = code.replace("startNewRound(true);", CAMPAIGN_MANAGER_JS + "\n    campaign.init();\n    startNewRound(true);", 1)
    print("Injected CampaignManager class and campaign.init()")

# -----------------------------------------------------------------------------
# 6. CONNECT VICTORY TO CAMPAIGN PROGRESSION
# -----------------------------------------------------------------------------
OLD_VICTORY_DISPATCH = """            refreshProgressionUI();
          });

          document.getElementById('result-overlay').classList.add('active');"""

NEW_VICTORY_DISPATCH = """            refreshProgressionUI();
          });

          if (won) {
            campaign.onMatchCompleted(campaign.state.currentLevel || 1);
          }

          document.getElementById('result-overlay').classList.add('active');"""

if OLD_VICTORY_DISPATCH in code:
    code = code.replace(OLD_VICTORY_DISPATCH, NEW_VICTORY_DISPATCH, 1)
    print("Connected match win to campaign.onMatchCompleted")

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(code)

# Synchronize with root copies
for target in TARGET_COPIES:
    with open(target, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Synchronized with {target}")

print("All engine systems and campaign integrations successfully injected!")
