import os
import shutil

brain = "C:/Users/avi10/.gemini/antigravity-ide/brain/4cf27abd-369d-450f-a3f2-e2407118e3c5"
targets = ["d:/app game/assets", "d:/app game/src/main/resources/static/assets"]

mapping = {
    "portraits/boss_kiba_portrait": "boss_kiba_portrait_1792946972519.jpg",
    "portraits/boss_ren_portrait": "boss_ren_portrait_1792947083144.jpg",
    "portraits/boss_dreadmaw_portrait": "boss_dreadmaw_portrait_1792947094452.jpg",
    "portraits/boss_soryu_portrait": "boss_soryu_portrait_1792947105606.jpg",
    "portraits/boss_raik_portrait": "boss_raik_portrait_1792947162475.jpg",
    "portraits/boss_shinobi_portrait": "boss_shinobi_portrait_1792947172506.jpg",
    "portraits/boss_akari_portrait": "boss_akari_portrait_1792946551395.jpg",
    "portraits/boss_goro_portrait": "boss_goro_portrait_1792946495120.jpg",
    "portraits/boss_hollow_king_portrait": "boss_hollow_king_1792946580310.jpg",
    "environments/level02_abandoned_village_bg": "level02_village_bg_1792946998828.jpg",
    "weapons/weapon_twin_daggers": "weapon_twin_daggers_1792947022763.jpg"
}

for rel_path, brain_file in mapping.items():
    src = os.path.join(brain, brain_file)
    if os.path.exists(src):
        for base in targets:
            dest_jpg = os.path.join(base, rel_path + ".jpg")
            dest_webp = os.path.join(base, rel_path + ".webp")
            shutil.copyfile(src, dest_jpg)
            shutil.copyfile(src, dest_webp)
            print(f"[SYNCED] {rel_path} -> {dest_webp}")
    else:
        print(f"[MISSING] {src}")

print("Sync completed!")
