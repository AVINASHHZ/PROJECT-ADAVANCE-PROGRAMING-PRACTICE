"""
Asset Generator for SHADOW REQUIEM: THE FIFTEEN SEALS
Creates high-fidelity dark-theme artwork, portraits, weapons, environments and UI
using Pillow with atmospheric lighting, ink textures, silhouettes, and particle glows.
"""

import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

random.seed(42)

OUT_DIRS = [
    "d:/app game/assets",
    "d:/app game/src/main/resources/static/assets"
]

def ensure_dirs():
    for base in OUT_DIRS:
        for sub in ["environments", "portraits", "weapons", "ui"]:
            os.makedirs(f"{base}/{sub}", exist_ok=True)

def save_dual(img, category, filename_base):
    for base in OUT_DIRS:
        jpg_path = f"{base}/{category}/{filename_base}.jpg"
        webp_path = f"{base}/{category}/{filename_base}.webp"
        # Never overwrite existing AI generated master files (>300KB)
        if os.path.exists(jpg_path) and os.path.getsize(jpg_path) > 300000:
            print(f"[SKIP] Preserving master AI asset: {jpg_path}")
            continue
        img.save(jpg_path, quality=92)
        img.save(webp_path, quality=90, method=6)
        print(f"[SAVED] {webp_path}")

def draw_vignette(draw, w, h, strength=180):
    cx, cy = w / 2, h / 2
    max_d = math.sqrt(cx*cx + cy*cy)
    for i in range(15):
        r = max_d * (0.6 + 0.4 * (i / 15))
        a = int(strength * (i / 15)**1.5)
        # dark corners
        draw.rectangle([0, 0, w, h], outline=None)

def draw_particles(draw, count, x_range, y_range, color_fn):
    for _ in range(count):
        x = random.uniform(*x_range)
        y = random.uniform(*y_range)
        r = random.uniform(1.2, 3.8)
        c = color_fn()
        draw.ellipse([x-r, y-r, x+r, y+r], fill=c)

# ==============================================================================
# 1. ENVIRONMENTS (1920x1080 Side-View Fighting Arena)
# ==============================================================================
def generate_environment(level, env_id, name, top_color, mid_color, bot_color, floor_color, accent_color, features):
    w, h = 1920, 1080
    im = Image.new("RGBA", (w, h), (0, 0, 0, 255))
    draw = ImageDraw.Draw(im)

    # Sky gradient
    for y in range(h):
        t = y / h
        if t < 0.6:
            st = t / 0.6
            r = int(top_color[0] + (mid_color[0] - top_color[0]) * st)
            g = int(top_color[1] + (mid_color[1] - top_color[1]) * st)
            b = int(top_color[2] + (mid_color[2] - top_color[2]) * st)
        else:
            st = (t - 0.6) / 0.4
            r = int(mid_color[0] + (bot_color[0] - mid_color[0]) * st)
            g = int(mid_color[1] + (bot_color[1] - mid_color[1]) * st)
            b = int(mid_color[2] + (bot_color[2] - mid_color[2]) * st)
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))

    # Celestial Moon / Sun / Portal
    cx, cy = w * 0.5, h * 0.32
    if "moon" in features:
        moon_r = 75
        for mr in range(moon_r + 45, moon_r, -2):
            alpha = int(25 * (1 - (mr - moon_r) / 45))
            draw.ellipse([cx - mr, cy - mr, cx + mr, cy + mr], fill=(*accent_color, alpha))
        draw.ellipse([cx - moon_r, cy - moon_r, cx + moon_r, cy + moon_r], fill=(245, 240, 230, 230))
        # Crescent shadow
        draw.ellipse([cx - moon_r + 28, cy - moon_r - 12, cx + moon_r + 28, cy + moon_r - 12], fill=(mid_color[0], mid_color[1], mid_color[2], 255))

    elif "void_rift" in features:
        for r in range(160, 10, -5):
            alpha = int(45 * (1 - r / 160))
            draw.ellipse([cx - r * 0.6, cy - r, cx + r * 0.6, cy + r], fill=(*accent_color, alpha))
        draw.ellipse([cx - 40, cy - 90, cx + 40, cy + 90], fill=(5, 2, 10, 255))
        # Accents
        for a in range(8):
            ang = a * (math.pi / 4)
            rx = cx + math.cos(ang) * 90
            ry = cy + math.sin(ang) * 110
            draw.line([(cx, cy), (rx, ry)], fill=(*accent_color, 120), width=3)

    elif "sun" in features or "lantern_glow" in features:
        for mr in range(140, 30, -5):
            alpha = int(35 * (1 - mr / 140))
            draw.ellipse([cx - mr, cy - mr, cx + mr, cy + mr], fill=(*accent_color, alpha))

    # Midground Silhouette Architecture / Mountains
    ground_y = int(h * 0.82)
    sil_color = (max(5, bot_color[0] - 12), max(5, bot_color[1] - 12), max(8, bot_color[2] - 12), 255)

    if "mountains" in features:
        # Jagged peaks
        pts = [(0, ground_y)]
        for px in range(0, w + 100, 120):
            py = int(h * 0.45 + (math.sin(px * 0.008) * 90) + (random.random() * 60))
            pts.append((px, py))
        pts.append((w, ground_y))
        draw.polygon(pts, fill=sil_color)

    if "pagoda" in features or "dojo" in features:
        # Silhouette Pagoda
        px, py = int(w * 0.22), int(ground_y - 320)
        for tier in range(3):
            ty = py + tier * 85
            bw = 140 - tier * 25
            draw.polygon([(px - bw, ty), (px + bw, ty), (px + bw * 0.7, ty - 25), (px - bw * 0.7, ty - 25)], fill=(12, 10, 16, 255))
            draw.rectangle([px - bw * 0.5, ty, px + bw * 0.5, ty + 65], fill=(8, 7, 12, 255))

    if "torii" in features:
        tx, ty = int(w * 0.5), int(ground_y - 260)
        # Main crossbeam
        draw.polygon([(tx - 180, ty), (tx + 180, ty), (tx + 195, ty - 22), (tx - 195, ty - 22)], fill=(10, 8, 14, 255))
        draw.rectangle([tx - 150, ty + 24, tx + 150, ty + 38], fill=(10, 8, 14, 255))
        # Pillars
        draw.rectangle([tx - 110, ty + 20, tx - 85, ground_y], fill=(10, 8, 14, 255))
        draw.rectangle([tx + 85, ty + 20, tx + 110, ground_y], fill=(10, 8, 14, 255))

    if "pillars" in features:
        for px in [int(w * 0.15), int(w * 0.35), int(w * 0.65), int(w * 0.85)]:
            pw = 55
            draw.rectangle([px - pw, ground_y - 380, px + pw, ground_y], fill=(8, 7, 12, 255))
            draw.rectangle([px - pw - 15, ground_y - 395, px + pw + 15, ground_y - 375], fill=(*accent_color, 120))

    if "hanging_chains" in features:
        for cx in [int(w * 0.25), int(w * 0.75)]:
            draw.line([(cx, 0), (cx, ground_y - 120)], fill=(25, 28, 35, 255), width=8)
            # Iron cage / gibbet
            draw.rectangle([cx - 45, ground_y - 180, cx + 45, ground_y - 60], outline=(40, 44, 55, 255), width=5)

    # Misty atmospheric band across lower midground
    mist_im = Image.new("RGBA", (w, 240), (0, 0, 0, 0))
    mist_draw = ImageDraw.Draw(mist_im)
    for my in range(240):
        t = my / 240
        alpha = int(math.sin(t * math.pi) * 85)
        mist_draw.line([(0, my), (w, my)], fill=(accent_color[0], accent_color[1], accent_color[2], alpha))
    im.paste(mist_im, (0, ground_y - 200), mist_im)

    # FOREGROUND COMBAT PLATFORM (Flat stone / wood tiles aligned to ground_y)
    draw.rectangle([0, ground_y, w, h], fill=floor_color)
    # Flagstones line & edge
    draw.line([(0, ground_y), (w, ground_y)], fill=(255, 240, 200, 110), width=3)
    draw.line([(0, ground_y + 4), (w, ground_y + 4)], fill=(15, 12, 18, 255), width=3)
    for fx in range(0, w, 140):
        draw.line([(fx, ground_y), (fx, ground_y + 45)], fill=(18, 15, 22, 200), width=2)
        draw.line([(fx + 70, ground_y + 45), (fx + 70, ground_y + 90)], fill=(18, 15, 22, 200), width=2)

    # Atmospheric particles
    draw_particles(draw, 120, (0, w), (h * 0.2, ground_y + 50),
                   lambda: (*accent_color, random.randint(35, 140)))

    # Dark cinematic vignette
    vig = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    vdraw = ImageDraw.Draw(vig)
    vdraw.rectangle([0, 0, w, h], fill=(0, 0, 0, 0))
    # Border shadows
    for s in range(70):
        a = int(180 * (1 - s / 70))
        vdraw.line([(s, 0), (s, h)], fill=(4, 3, 6, a))
        vdraw.line([(w - s, 0), (w - s, h)], fill=(4, 3, 6, a))
        vdraw.line([(0, s), (w, s)], fill=(4, 3, 6, a))
        vdraw.line([(0, h - s), (w, h - s)], fill=(4, 3, 6, a))
    im = Image.alpha_composite(im, vig).convert("RGB")
    return im

# ==============================================================================
# 2. PORTRAITS (1024x1024 Dark Carved Character Bust)
# ==============================================================================
def generate_boss_portrait(boss_id, name, title, role, primary_col, glow_col, features):
    w, h = 1024, 1024
    im = Image.new("RGBA", (w, h), (12, 10, 16, 255))
    draw = ImageDraw.Draw(im)

    # Dark moody background texture
    for y in range(h):
        t = y / h
        r = int(14 + (primary_col[0] * 0.08) * (1 - t * 0.5))
        g = int(12 + (primary_col[1] * 0.08) * (1 - t * 0.5))
        b = int(18 + (primary_col[2] * 0.08) * (1 - t * 0.5))
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))

    # Background spiritual aura / halo
    cx, cy = w * 0.5, h * 0.44
    for r in range(320, 60, -8):
        alpha = int(32 * (1 - r / 320))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*glow_col, alpha))

    # Torso & Shoulders Silhouette
    sh_w, sh_y = 310, 710
    draw.polygon([
        (cx - sh_w, h),
        (cx - sh_w + 35, sh_y),
        (cx - 110, 560),
        (cx + 110, 560),
        (cx + sh_w - 35, sh_y),
        (cx + sh_w, h)
    ], fill=(8, 7, 10, 255))

    # Pauldrons / Armor spikes
    if "spikes" in features:
        draw.polygon([(cx - sh_w + 20, sh_y), (cx - sh_w - 40, sh_y - 65), (cx - sh_w + 70, sh_y - 20)], fill=(18, 15, 22, 255))
        draw.polygon([(cx + sh_w - 20, sh_y), (cx + sh_w + 40, sh_y - 65), (cx + sh_w - 70, sh_y - 20)], fill=(18, 15, 22, 255))

    # Neck
    draw.rectangle([cx - 45, 470, cx + 45, 570], fill=(8, 7, 10, 255))

    # Head Silhouette
    head_r = 135
    head_cy = 410
    draw.ellipse([cx - head_r, head_cy - head_r, cx + head_r, head_cy + head_r], fill=(8, 7, 10, 255))
    # Jaw
    draw.polygon([(cx - 90, head_cy + 40), (cx + 90, head_cy + 40), (cx + 45, head_cy + 175), (cx - 45, head_cy + 175)], fill=(8, 7, 10, 255))

    # Headgear / Features
    if "cowl" in features or "hood" in features:
        draw.polygon([
            (cx - 175, head_cy - 70),
            (cx, head_cy - 210),
            (cx + 175, head_cy - 70),
            (cx + 150, head_cy + 160),
            (cx - 150, head_cy + 160)
        ], fill=(12, 10, 16, 255))

    elif "kabuto" in features:
        # Shogun Crescent Horn
        draw.arc([cx - 180, head_cy - 280, cx + 180, head_cy + 20], start=200, end=340, fill=(246, 211, 101, 255), width=28)
        # Helmet dome
        draw.ellipse([cx - 155, head_cy - 190, cx + 155, head_cy], fill=(10, 9, 14, 255))
        # Shikoro neck guards
        draw.polygon([(cx - 165, head_cy - 20), (cx - 200, head_cy + 120), (cx - 130, head_cy + 100)], fill=(15, 12, 20, 255))
        draw.polygon([(cx + 165, head_cy - 20), (cx + 200, head_cy + 120), (cx + 130, head_cy + 100)], fill=(15, 12, 20, 255))

    elif "crown_shadows" in features:
        # Jagged Obsidian Spikes
        for sx, sy in [(-120, -140), (-60, -210), (0, -260), (60, -210), (120, -140)]:
            draw.polygon([(cx + sx - 30, head_cy - 50), (cx + sx, head_cy + sy), (cx + sx + 30, head_cy - 50)], fill=(12, 8, 18, 255))
            draw.line([(cx + sx, head_cy + sy), (cx + sx, head_cy)], fill=(*glow_col, 160), width=3)

    elif "coral_horns" in features:
        # Nami Oracle ribbon / coral horns
        draw.polygon([(cx - 70, head_cy - 80), (cx - 140, head_cy - 220), (cx - 40, head_cy - 120)], fill=(10, 18, 24, 255))
        draw.polygon([(cx + 70, head_cy - 80), (cx + 140, head_cy - 220), (cx + 40, head_cy - 120)], fill=(10, 18, 24, 255))

    elif "demonic_kaze" in features:
        # Shadow Kaze - Cursed horns & torn kasa
        draw.polygon([(cx - 220, head_cy - 30), (cx, head_cy - 140), (cx + 220, head_cy - 30), (cx, head_cy - 5)], fill=(6, 5, 8, 255))
        # Scarlet demonic horn flares
        draw.line([(cx - 95, head_cy - 80), (cx - 145, head_cy - 200)], fill=(*glow_col, 220), width=6)
        draw.line([(cx + 95, head_cy - 80), (cx + 145, head_cy - 200)], fill=(*glow_col, 220), width=6)

    # GLOWING EYES (The signature dark warrior highlight)
    eye_y = head_cy + 25
    eye_sep = 52
    for eye_x in [cx - eye_sep, cx + eye_sep]:
        # Eye glow halo
        for er in range(24, 4, -2):
            draw.ellipse([eye_x - er, eye_y - er * 0.5, eye_x + er, eye_y + er * 0.5], fill=(*glow_col, int(45 * (1 - er / 24))))
        # Eye slit
        draw.polygon([
            (eye_x - 18, eye_y - 2),
            (eye_x + 18, eye_y - 7),
            (eye_x + 8, eye_y + 4),
            (eye_x - 12, eye_y + 3)
        ], fill=(255, 255, 255, 255))

    # Rim Lighting Edge along left and right silhouette
    draw.arc([cx - head_r, head_cy - head_r, cx + head_r, head_cy + head_r], start=110, end=250, fill=(*glow_col, 160), width=3)
    draw.arc([cx - head_r, head_cy - head_r, cx + head_r, head_cy + head_r], start=290, end=430, fill=(*glow_col, 160), width=3)

    # Ornate Border Frame
    frame_w = 42
    draw.rectangle([0, 0, w, frame_w], fill=(16, 14, 20, 255))
    draw.rectangle([0, h - frame_w, w, h], fill=(16, 14, 20, 255))
    draw.rectangle([0, 0, frame_w, h], fill=(16, 14, 20, 255))
    draw.rectangle([w - frame_w, 0, w, h], fill=(16, 14, 20, 255))
    draw.rectangle([frame_w, frame_w, w - frame_w, h - frame_w], outline=(*glow_col, 90), width=3)

    # Subtle ambient particles
    draw_particles(draw, 45, (frame_w, w - frame_w), (frame_w, h - frame_w), lambda: (*glow_col, random.randint(40, 180)))

    return im.convert("RGB")

# ==============================================================================
# 3. WEAPONS / REWARDS (1024x1024 Carved Stone Tile Icon)
# ==============================================================================
def generate_weapon_icon(weapon_id, name, weapon_type, accent_col, glow_col, style):
    w, h = 1024, 1024
    im = Image.new("RGBA", (w, h), (10, 8, 14, 255))
    draw = ImageDraw.Draw(im)

    # Stone background
    for y in range(h):
        t = y / h
        r = int(14 + accent_col[0] * 0.05 * (1 - t * 0.3))
        g = int(13 + accent_col[1] * 0.05 * (1 - t * 0.3))
        b = int(18 + accent_col[2] * 0.05 * (1 - t * 0.3))
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))

    # Outer ornate stone frame
    border = 65
    draw.rectangle([border, border, w - border, h - border], outline=(40, 36, 48, 255), width=8)
    draw.rectangle([border + 12, border + 12, w - border - 12, h - border - 12], outline=(*glow_col, 75), width=3)

    # Radial background glow
    cx, cy = w * 0.5, h * 0.5
    for r in range(280, 40, -10):
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*glow_col, int(28 * (1 - r / 280))))

    # Draw Weapon Shape
    if style == "spear":
        # Diagonal Polearm
        draw.line([(180, 840), (840, 180)], fill=(45, 38, 52, 255), width=24)
        draw.line([(180, 840), (840, 180)], fill=(*glow_col, 160), width=4)
        # Spearhead
        draw.polygon([(780, 240), (875, 145), (890, 195), (820, 290)], fill=(18, 16, 24, 255))
        draw.polygon([(820, 200), (910, 110), (880, 140)], fill=(240, 245, 255, 240))
        # Cross-guard jumonji
        draw.line([(730, 210), (830, 310)], fill=(210, 175, 95, 255), width=16)

    elif style == "cleaver":
        # Heavy Cleaver / Greatsword
        draw.polygon([(360, 680), (680, 360), (760, 440), (440, 760)], fill=(18, 16, 24, 255))
        # Blade Edge
        draw.line([(680, 360), (760, 440)], fill=(*glow_col, 255), width=8)
        # Handle
        draw.line([(320, 720), (220, 820)], fill=(55, 45, 35, 255), width=28)
        draw.ellipse([200, 800, 240, 840], fill=(210, 175, 95, 255))

    elif style == "dual_blades":
        # Two crossed curved blades
        for d in [-1, 1]:
            pts = [(cx - d * 260, cy + 240), (cx, cy), (cx + d * 220, cy - 260), (cx + d * 240, cy - 230), (cx, cy + 40)]
            draw.polygon(pts, fill=(18, 16, 24, 255))
            draw.line([(cx - d * 260, cy + 240), (cx + d * 220, cy - 260)], fill=(*glow_col, 220), width=5)

    elif style == "chain_blade":
        # Barbed Chain Scythe
        draw.line([(240, 780), (520, 500)], fill=(45, 40, 55, 255), width=20)
        # Curved scythe blade
        draw.polygon([(520, 500), (740, 380), (710, 470), (540, 530)], fill=(18, 16, 24, 255))
        draw.line([(520, 500), (740, 380)], fill=(*glow_col, 240), width=6)
        # Hanging chain links
        for ci in range(8):
            lx = 240 + ci * 45
            ly = 780 - ci * 25 + int(math.sin(ci) * 35)
            draw.ellipse([lx - 18, ly - 10, lx + 18, ly + 10], outline=(180, 150, 90, 255), width=4)

    elif style == "scroll_technique":
        # Sacred martial arts scroll / medallion
        draw.rectangle([cx - 160, cy - 220, cx + 160, cy + 220], fill=(22, 18, 28, 255))
        draw.rectangle([cx - 160, cy - 220, cx + 160, cy + 220], outline=(*glow_col, 220), width=6)
        # Yin-yang / eclipse circle
        draw.ellipse([cx - 90, cy - 90, cx + 90, cy + 90], fill=(8, 7, 10, 255))
        draw.arc([cx - 90, cy - 90, cx + 90, cy + 90], start=45, end=225, fill=(*glow_col, 255), width=8)

    elif style == "armor":
        # Obsidian Cuirass
        draw.polygon([
            (cx - 160, cy + 180),
            (cx - 210, cy - 110),
            (cx - 90, cy - 190),
            (cx + 90, cy - 190),
            (cx + 210, cy - 110),
            (cx + 160, cy + 180)
        ], fill=(16, 14, 22, 255))
        draw.polygon([
            (cx - 160, cy + 180),
            (cx - 210, cy - 110),
            (cx - 90, cy - 190),
            (cx + 90, cy - 190),
            (cx + 210, cy - 110),
            (cx + 160, cy + 180)
        ], outline=(*glow_col, 200), width=5)

    else:
        # Katana blade default
        draw.polygon([(260, 780), (740, 260), (765, 290), (285, 810)], fill=(18, 16, 24, 255))
        draw.line([(260, 780), (740, 260)], fill=(*glow_col, 255), width=7)
        # Tsuba guard
        draw.ellipse([340, 680, 400, 740], fill=(210, 175, 95, 255))

    # Floating sparks
    draw_particles(draw, 35, (border, w - border), (border, h - border), lambda: (*glow_col, random.randint(50, 200)))

    return im.convert("RGB")

# ==============================================================================
# 4. ENDINGS & UI
# ==============================================================================
def generate_ending_screen(ending_id, title, color_theme, desc_elements):
    w, h = 1920, 1080
    im = Image.new("RGBA", (w, h), (8, 6, 12, 255))
    draw = ImageDraw.Draw(im)

    for y in range(h):
        t = y / h
        r = int(color_theme[0] * 0.12 * (1 - t * 0.6))
        g = int(color_theme[1] * 0.12 * (1 - t * 0.6))
        b = int(color_theme[2] * 0.12 * (1 - t * 0.6))
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))

    cx, cy = w * 0.5, h * 0.45
    # Central radiant seal
    for r in range(360, 60, -10):
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*color_theme, int(25 * (1 - r / 360))))

    # Silhouette of Kaze in the ending
    draw.polygon([(cx - 70, cy + 240), (cx + 70, cy + 240), (cx + 35, cy + 80), (cx - 35, cy + 80)], fill=(4, 3, 6, 255))
    draw.ellipse([cx - 28, cy + 25, cx + 28, cy + 80], fill=(4, 3, 6, 255))
    # Wide Kasa Hat
    draw.polygon([(cx - 110, cy + 45), (cx, cy + 15), (cx + 110, cy + 45)], fill=(4, 3, 6, 255))
    draw.line([(cx - 110, cy + 45), (cx + 110, cy + 45)], fill=(*color_theme, 180), width=2)

    # Floating memory reflections / particles
    draw_particles(draw, 140, (0, w), (0, h), lambda: (*color_theme, random.randint(40, 190)))

    return im.convert("RGB")


# ==============================================================================
# MAIN BATCH EXECUTION
# ==============================================================================
def main():
    ensure_dirs();
    print("Generating complete dark asset library...")

    # ENVIRONMENTS 3..15
    env_configs = [
        (3, "crimson_dojo", "Crimson Dojo", (32, 10, 14), (64, 16, 22), (18, 8, 10), (14, 10, 12), (235, 75, 60), ["dojo", "lantern_glow"]),
        (4, "sunken_prison", "Sunken Prison", (10, 18, 22), (18, 32, 38), (8, 14, 18), (10, 12, 16), (46, 204, 113), ["hanging_chains", "pillars"]),
        (5, "temple_of_embers", "Temple of Embers", (48, 14, 8), (88, 28, 12), (24, 8, 6), (18, 10, 8), (255, 107, 0), ["mountains", "lantern_glow"]),
        (6, "frozen_pass", "Frozen Pass", (12, 24, 38), (28, 54, 82), (14, 22, 34), (18, 26, 36), (144, 224, 239), ["mountains", "moon"]),
        (7, "azure_fortress", "Azure Fortress", (8, 22, 36), (16, 44, 68), (10, 18, 28), (12, 16, 24), (56, 189, 248), ["pagoda", "moon"]),
        (8, "black_market", "Black Market", (24, 12, 36), (42, 22, 62), (16, 8, 24), (14, 10, 18), (168, 85, 247), ["lantern_glow", "pillars"]),
        (9, "blood_arena", "Blood Arena", (38, 12, 14), (72, 22, 26), (22, 8, 10), (28, 12, 12), (239, 68, 68), ["pillars", "lantern_glow"]),
        (10, "shrine_of_echoes", "Shrine of Echoes", (22, 14, 34), (48, 28, 68), (14, 10, 22), (16, 12, 20), (192, 132, 252), ["torii", "moon"]),
        (11, "drowned_city", "Drowned City", (8, 28, 32), (16, 52, 58), (10, 22, 26), (12, 20, 24), (45, 212, 191), ["pagoda", "pillars"]),
        (12, "obsidian_citadel", "Obsidian Citadel", (20, 10, 24), (40, 18, 48), (12, 6, 16), (14, 8, 16), (217, 70, 239), ["pagoda", "mountains"]),
        (13, "void_gate", "Void Gate", (22, 8, 32), (54, 16, 76), (14, 6, 20), (12, 6, 16), (168, 85, 247), ["void_rift", "pillars"]),
        (14, "throne_of_shadows", "Throne of Shadows", (12, 6, 18), (28, 12, 42), (8, 4, 12), (10, 5, 14), (225, 29, 72), ["pillars", "void_rift"]),
        (15, "end_of_time", "End of Time", (14, 8, 24), (36, 18, 56), (10, 5, 16), (12, 8, 18), (246, 211, 101), ["void_rift", "moon"])
    ]
    for lvl, env_id, name, tc, mc, bc, fc, ac, feats in env_configs:
        im = generate_environment(lvl, env_id, name, tc, mc, bc, fc, ac, feats)
        save_dual(im, "environments", f"level{lvl:02d}_{env_id}_bg")

    # BOSS PORTRAITS (Vex, Brutus, Nami, Kurogane, Hollow Knight, Shadow Kaze)
    boss_configs = [
        ("vex", "Vex", "The Phantom Dealer", "dealer", (140, 50, 220), (192, 132, 252), ["hood"]),
        ("brutus", "Brutus", "The Iron Colossus", "gladiator", (220, 60, 40), (255, 107, 0), ["spikes"]),
        ("nami", "Nami", "The Drowned Oracle", "oracle", (40, 180, 210), (45, 212, 191), ["coral_horns"]),
        ("kurogane", "Lord Kurogane", "The False Shogun", "shogun", (200, 160, 40), (246, 211, 101), ["kabuto"]),
        ("hollow_knight", "The Hollow Knight", "The Sealbreaker", "knight", (120, 60, 210), (168, 85, 247), ["crown_shadows", "spikes"]),
        ("shadow_kaze", "Kaze's Shadow", "The Last Ronin", "shadow", (230, 20, 40), (239, 68, 68), ["demonic_kaze"])
    ]
    for b_id, name, title, role, pc, gc, feats in boss_configs:
        im = generate_boss_portrait(b_id, name, title, role, pc, gc, feats)
        save_dual(im, "portraits", f"boss_{b_id}_portrait")

    # WEAPONS / REWARDS 3..15
    weapon_configs = [
        ("crimson_guard", "Crimson Guard", "accessory", (220, 40, 40), (239, 68, 68), "armor"),
        ("chain_blade", "Chain Blade", "weapon", (180, 120, 60), (245, 158, 11), "chain_blade"),
        ("ember_katana", "Ember Katana", "weapon", (240, 80, 20), (255, 107, 0), "katana"),
        ("storm_spear", "Storm Spear", "weapon", (60, 160, 240), (56, 189, 248), "spear"),
        ("azure_blades", "Azure Blades", "weapon", (40, 120, 220), (56, 189, 248), "dual_blades"),
        ("phantom_daggers", "Phantom Daggers", "weapon", (160, 60, 240), (168, 85, 247), "dual_blades"),
        ("heavy_cleaver", "Heavy Cleaver", "weapon", (220, 50, 50), (239, 68, 68), "cleaver"),
        ("eclipse_technique", "Eclipse Technique", "technique", (200, 160, 80), (246, 211, 101), "scroll_technique"),
        ("tidal_blades", "Tidal Blades", "weapon", (40, 200, 200), (45, 212, 191), "dual_blades"),
        ("obsidian_armor", "Obsidian Armor", "accessory", (140, 40, 180), (217, 70, 239), "armor"),
        ("void_counter", "Void Counter", "technique", (160, 40, 220), (168, 85, 247), "scroll_technique"),
        ("nightfall_awakened", "Awakened Nightfall", "weapon", (240, 20, 40), (225, 29, 72), "katana"),
        ("true_shadow", "True Shadow Form", "technique", (246, 211, 101), (255, 255, 255), "scroll_technique")
    ]
    for w_id, name, w_type, ac, gc, style in weapon_configs:
        im = generate_weapon_icon(w_id, name, w_type, ac, gc, style)
        save_dual(im, "weapons", f"weapon_{w_id}")

    # UI ENDINGS & MAP
    endings = [
        ("ending_true_ronin", "True Ronin", (246, 211, 101), ["shattered_blade", "cherry_blossoms"]),
        ("ending_eternal_shadow", "Eternal Shadow", (225, 29, 72), ["dark_crown", "living_shadows"]),
        ("ending_broken_seal", "Broken Seal", (56, 189, 248), ["ancient_gate", "soul_sacrifice"]),
        ("campaign_map_bg", "Campaign Map", (168, 85, 247), ["parchment_map", "five_chapters"])
    ]
    for e_id, title, col, elems in endings:
        im = generate_ending_screen(e_id, title, col, elems)
        save_dual(im, "ui", e_id)

    print("ALL DARK THEME ASSETS GENERATED AND SAVED SUCCESSFULLY!")

if __name__ == "__main__":
    main()
