Create the complete visual asset library for SHADOW REQUIEM: THE FIFTEEN SEALS.

This is an asset-production task for an actual fighting game, not a request for a presentation or a collection of unrelated concept images.

First inspect the existing game engine and determine which image formats, dimensions, transparency options, sprite structures, and animation formats are compatible with the project.

Create a manifest of every required asset before generating anything.

ASSET GROUP A — ENVIRONMENTS

Generate 15 original, high-quality cinematic environments matching the campaign specification.

Each environment must have:

A unique composition.
A distinctive color palette.
A clear fighting area.
A recognizable location.
Strong foreground, midground, and background depth.
Detailed architecture.
Atmospheric lighting.
Suitable negative space for two fighting characters.
No embedded text.
No logos.
No watermarks.
No user-interface elements.
No unwanted characters occupying the combat area.

Use a consistent camera perspective and lighting philosophy across the campaign.

The image should be composed for a side-view fighting game.

Characters will occupy the lower-middle portion of the screen, so avoid placing the most important architectural features directly behind their heads.

Generate:

The full combat background.
The campaign preview.
Additional background layers if the tool supports them.
Suitable particle or atmospheric effect assets where needed.

Use a widescreen composition and generate at a resolution appropriate for the actual project.

Prefer 16:9 artwork with sufficient detail for desktop displays.

Do not stretch the artwork unnaturally to fit the game viewport.

ASSET GROUP B — UNIQUE BOSS DESIGNS

Generate 15 distinct boss concepts.

For each character, create a detailed reference showing:

Full-body appearance.
Distinctive silhouette.
Face or mask.
Armor construction.
Clothing materials.
Weapon shape.
Main colors.
Secondary colors.
Combat stance.
Character personality.

Do not generate the characters as a lineup of identical warriors.

Enforce strong silhouette differentiation.

Goro must be a broad, weathered samurai.

Kiba must be a lean hunter with twin daggers.

Ren must be an elderly staff master.

Dreadmaw must be a massive chain-wielding jailer.

Soryu must be an elegant flame-forged swordmaster.

Raik must be a tall armored spear commander.

Shinobi must be a mobile dual-blade assassin.

Vex must be a theatrical phantom dealer.

Brutus must be a massive armored gladiator.

Akari must be an agile masked warrior whose design connects her to Kaze and Shinobi.

Nami must be a flowing, supernatural oracle with tidal blades.

Kurogane must be a regal, heavily armored shogun.

The Hollow Knight must be an ancient, partially disintegrated armored guardian.

The Hollow King must be an imposing obsidian ruler containing living shadows.

Shadow Kaze must be a corrupted mirror of the protagonist.

Preserve each character's appearance across all reference images.

Do not change the weapon, armor, body proportions, or primary colors between images of the same character.

ASSET GROUP C — GAME-READY CHARACTER REPRESENTATIONS

After generating the concept art, determine the best method for integrating each character into the existing game.

If the project uses sprites:

Produce consistent side-view sprite references.
Preserve proportions between frames.
Keep the weapon attached to the correct hand.
Maintain consistent lighting and scale.
Use transparent backgrounds for individual character sprites where appropriate.
Avoid generating sprite sheets with inconsistent character positions or accidental duplicate limbs.

If the project uses skeletal 2D animation:

Separate the artwork into suitable body and weapon layers.
Use compatible pivot points.
Ensure the rig can reproduce the required combat poses.

If the project uses 3D models:

Create or integrate compatible models and materials.
Use a suitable rig.
Use compatible animation clips.
Ensure weapons can attach to the correct sockets.

If direct generation of compatible models or animations is unavailable, use existing compatible assets or a practical procedural animation system.

Never claim that a concept image is a fully animated character.

ASSET GROUP D — UI ARTWORK

Create a consistent premium UI visual system.

Generate:

Main menu artwork.
Campaign map artwork.
Level preview artwork.
Boss portraits.
Chapter emblems.
Weapon icons.
Reward icons.
Lock and completion icons.
Chapter transition artwork.
Ending illustrations.
Appropriate decorative textures.

The UI should use a dark, cinematic Japanese-fantasy visual identity.

Use charcoal black, obsidian, crimson, muted silver, and restrained accent colors.

Use different accent colors for different chapters without making the interface visually inconsistent.

Keep UI text separate from generated artwork. Render text through the actual UI so it remains sharp, readable, localized, and responsive.

Do not generate an image containing fake buttons that the user is expected to click.

Actual buttons must be implemented as functional UI components.

ASSET GROUP E — VISUAL EFFECTS

Create or implement effects for:

Sword trails.
Heavy weapon impacts.
Sparks.
Dust.
Smoke.
Ground shockwaves.
Shadow dashes.
Fire attacks.
Lightning attacks.
Water attacks.
Void attacks.
Boss phase transitions.
Victory sequences.
Final-boss corruption effects.

Use transparent textures or procedural effects where appropriate.

Do not use opaque rectangular images as particle effects.

Do not allow effects to hide the player or opponent.

ASSET GROUP F — INTEGRATION

After asset creation:

Place every file in the correct project directory.
Update the asset manifest.
Reference the correct file paths in the code.
Connect each environment to its assigned level.
Connect each boss portrait to its correct character.
Connect each weapon to its actual weapon definition.
Integrate the assets into the existing rendering pipeline.
Test image loading.
Test image scaling.
Test transparency.
Test mobile layouts.
Test missing-asset handling.

Use consistent file names.

Examples:

level01_ashen_forest_bg.webp
level02_abandoned_village_bg.webp
level03_crimson_dojo_bg.webp

boss_goro_concept.png
boss_goro_portrait.webp
boss_kiba_concept.png
boss_kiba_portrait.webp

weapon_iron_katana.webp
weapon_azure_blades.webp
weapon_nightfall_awakened.webp

Do not leave broken image references or placeholder filenames in the final game.

If asset generation is interrupted, preserve the manifest and continue from the first missing asset.

The final result must be a functioning game asset library, not merely a list of prompts or a folder of unrelated illustrations.