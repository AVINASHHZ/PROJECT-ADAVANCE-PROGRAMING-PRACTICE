# MASTER PROMPT: SHADOW REBORN

## CINEMATIC CAMPAIGN ROADMAP, MAIN MENU, SEPARATE PAGES AND GAME UI OVERHAUL

Act as a senior fighting-game UI/UX designer, game interface developer, frontend engineer, interaction designer, and gameplay integration specialist.

Transform the existing SHADOW REBORN game into a visually stunning, immersive fighting-game experience inspired by the presentation quality, progression systems, and cinematic atmosphere of Shadow Fight 2.

The game already contains a working fighting screen, player and enemy characters, weapons, combat mechanics, progression information, an arsenal, upgrades, currencies, and other existing features.

Your task is to build a completely new **Campaign Roadmap and Main Menu experience** around the existing game.

The game must no longer immediately open the fighting screen when launched.

Instead, the player must first enter a beautiful, interactive campaign hub from which they can explore the world, inspect their progression, select levels, access weapons, manage upgrades, adjust settings, and start fights.

IMPORTANT: This is an existing-project modification, NOT a new game development task.

Preserve the current game's working functionality.

Do not rebuild the combat engine.

Do not replace the current game logic with mock data.

Do not change the actual values or behavior of existing game settings.

Do not break any existing weapon, upgrade, currency, progression, enemy AI, or save functionality.

The new interface must integrate with the current game architecture.

---

# 1. FIRST, INSPECT THE ENTIRE EXISTING PROJECT

Before modifying any code, inspect the project structure and identify:

* The main entry point.
* The initial game-loading sequence.
* The current fighting-screen implementation.
* The existing main menu, if any.
* The current player profile and progression system.
* The existing level and campaign data.
* The weapon inventory.
* The weapon upgrade system.
* The existing settings and their actual effects.
* The audio settings and audio controls.
* The current save/load implementation.
* The existing currencies.
* The enemy and boss systems.
* The UI rendering system.
* The navigation architecture.
* The keyboard and touch-control handling.
* The current modal and overlay implementation.

Determine exactly how the current game starts a match.

Find the code that causes the fighting screen to appear immediately.

Change the initial navigation so that the campaign roadmap opens first.

Do not simply cover the fighting screen with a new panel. The roadmap must become the actual starting page.

Reuse existing data, functions, and systems wherever possible.

Before editing, identify which files must change and which files should remain untouched.

Avoid unnecessary refactoring.

Do not rename existing functions, data structures, or settings keys unless absolutely necessary.

Do not delete existing features to simplify the implementation.

---

# 2. NEW APPLICATION NAVIGATION STRUCTURE

Create a dedicated navigation system with separate full-page destinations.

The application should have the following structure:

GAME LAUNCH
|
v
CAMPAIGN ROADMAP
|
|--- Campaign / Levels
|
|--- Player Profile
|
|--- Weapons & Arsenal
|
|--- Upgrades
|
|--- Skills / Shadow Arts
|
|--- Arena & AI
|
|--- Statistics
|
|--- Settings
|
|--- Help / Controls
|
|--- Return to Title Screen, if supported
|
v
LEVEL DETAILS
|
v
FIGHTING SCREEN
|
v
VICTORY / DEFEAT SCREEN
|
v
RETURN TO CAMPAIGN ROADMAP

These must be actual navigable pages, not a collection of popup windows.

The campaign roadmap is the default landing page.

The player should never be forced directly into a match when starting or refreshing the game.

Only begin a fight after the player explicitly selects an available level and presses the Fight button.

Do not start a fight merely because the page reloads or the player returns from another menu.

Preserve the existing fight-start function and call it through the new navigation layer.

If the existing game already has a title screen, retain its functionality where possible and provide a clear route into the campaign hub.

Do not introduce an unnecessary login page.

---

# 3. GLOBAL VISUAL DIRECTION

The new interface should feel like a premium, dark fantasy action game.

Avoid the appearance of a generic dashboard, ordinary website, or collection of flat rectangular cards.

The campaign interface should feel like a living world with a sense of mystery, progression, danger, and achievement.

## Visual identity

Use a cohesive combination of:

* Obsidian black.
* Deep charcoal.
* Dark crimson.
* Antique gold.
* Muted bronze.
* Smoky grey.
* Subtle violet shadow energy.
* Restrained warm highlights.

Use the existing SHADOW REBORN identity.

Do not change the game's title, weapon names, level data, or existing terminology without a clear reason.

## Visual materials

Use carefully layered surfaces that resemble:

* Weathered dark stone.
* Ancient metal.
* Black lacquer.
* Engraved bronze.
* Worn parchment for selected lore elements.
* Subtle glowing runes.
* Embers floating through the environment.
* Shadow mist.
* Ancient carved symbols.

Use material depth and controlled lighting to make the interface feel premium.

Avoid excessive gold borders around every element.

Avoid bright orange buttons everywhere.

Use gold primarily for progression, rewards, selected states, and important information.

Use crimson for danger, boss encounters, and combat warnings.

Use violet or shadow-purple for supernatural abilities and special progression.

## Typography

Use a cinematic serif typeface for:

* Game title.
* Campaign chapter titles.
* Boss names.
* Major milestones.

Use a clear modern sans-serif typeface for:

* Level descriptions.
* Statistics.
* Navigation.
* Settings.
* Weapon descriptions.
* Button labels.

Use consistent text sizes, line heights, and spacing.

All important information must remain readable.

Avoid decorative fonts for small text.

---

# 4. BUILD A FULL-SCREEN CAMPAIGN ROADMAP AS THE HOME PAGE

This is the most important part of the project.

The campaign roadmap must be the first screen displayed after the game loads.

It should feel like a dedicated campaign-selection experience, not a normal website.

The player must immediately understand:

* Their current level.
* Their campaign progress.
* Which levels are completed.
* Which level is currently available.
* Which level comes next.
* Which bosses await them.
* What rewards they can earn.
* Where they should go next.

The roadmap should visually communicate the entire campaign.

## 4.1 Overall layout

Create a full-screen composition with three main regions.

### LEFT: Persistent navigation sidebar

A narrow, elegant vertical navigation rail.

### CENTER: Interactive campaign world

The main visual area containing the campaign route and level nodes.

### RIGHT: Selected level information

A contextual information panel that changes when the player selects a level or boss.

On smaller screens, convert the layout into a responsive composition without losing its functionality.

Do not allow the sidebar, roadmap, or details panel to overlap important content.

## 4.2 Campaign background

Create a cinematic, atmospheric background.

Use an original dark fantasy environment inspired by the game's campaign.

Possible elements:

* Distant ruined temples.
* Mountain silhouettes.
* Ancient gates.
* A moonlit horizon.
* Dark forests.
* Floating embers.
* Wisps of shadow energy.
* Subtle fog.
* Distant towers.
* Faint golden lights marking unexplored regions.

The background should be visually rich but must not make text difficult to read.

Use multiple depth layers where the rendering system permits.

Create subtle parallax movement based on pointer movement or scrolling.

Animate fog, embers, and light subtly.

Keep all effects lightweight.

Do not create a static image stretched across the entire interface if the existing rendering system supports better layering.

If high-quality background assets are required, use original project assets or create suitable original artwork.

Do not depend on unavailable paid services or external runtime APIs.

If the game uses a 2D canvas, create layered 2D backgrounds and atmospheric effects.

If it uses a DOM-based interface, use suitable CSS layers and lightweight animation.

If it uses a 3D engine, use the engine's existing rendering pipeline.

Do not introduce a new rendering framework unnecessarily.

---

# 5. THE CAMPAIGN ROUTE: LEVELS 1–15

Represent the campaign as an illustrated route through a dangerous world.

Do not display the 15 levels as a plain vertical list of buttons.

Instead, create a visually connected journey.

The route may curve through the environment, travel between islands, cross ruined bridges, or climb toward a distant fortress.

Use the composition best suited to the existing game and screen size.

Each level must have a distinct node, icon, visual identity, and state.

Connect the level nodes with a glowing route or ancient path.

The route should visually guide the player from the beginning toward the final encounter.

## 5.1 Level states

Implement these states using the existing progression data.

### COMPLETED LEVEL

Appearance:

* Gold or bronze border.
* Completed emblem.
* Subtle glow.
* Optional completion stars or achievement marks if supported.

Interaction:

* The player can inspect the level.
* The player can replay it if replaying is supported.
* Previously earned rewards and results are displayed where available.

### CURRENTLY AVAILABLE LEVEL

Appearance:

* Prominent gold outline.
* Animated, restrained shadow-energy ring.
* Clear level number.
* Strong visual focus.
* Optional pulsing indicator.

Interaction:

* Selecting the node displays the level details.
* A prominent Fight button becomes available if the existing progression rules permit it.

### LOCKED LEVEL

Appearance:

* Darkened node.
* Muted symbol.
* Visible lock indicator.
* Less visual emphasis than available content.

Interaction:

* Selecting the node shows its name and a short teaser.
* Display the actual unlock requirement if that information exists.
* If the requirement cannot be met yet, explain what the player must complete.

Never allow a locked level to start a fight.

Do not invent unlock conditions that conflict with the existing campaign.

If the project currently uses linear progression, preserve it.

If the current game already supports branching or replaying, preserve those rules.

## 5.2 Level-node interaction

Every level node should respond to interaction.

On hover or focus:

* Slightly increase its brightness.
* Show a soft shadow or glow.
* Scale it subtly.
* Display its level name.
* Show a brief description or boss teaser.

On selection:

* Highlight the node.
* Emphasize the connecting route.
* Update the right-side information panel.
* Show the boss portrait or artwork if available.
* Display the level's reward information.
* Show the appropriate action buttons.

On mobile:

* Use tap interactions.
* Do not rely on hover.
* Keep nodes large enough to select comfortably.

Avoid extreme scaling, flickering, or excessive particle effects.

---

# 6. CAMPAIGN CONTENT FOR THE 15 LEVELS

Use the campaign data already present in the project.

If the established campaign contains the following bosses, use their existing identities and descriptions.

Do not overwrite existing campaign names or story details if they differ.

The following visual direction is a reference for the roadmap.

LEVEL 01 — GORO
Region: The Ashen Courtyard.
Visual theme: Ruined Japanese-inspired courtyard, red leaves, stone lanterns.
Node symbol: Broken katana.
Atmosphere: Introduction to the world and its combat.

LEVEL 02 — KIBA
Region: The Crimson Passage.
Visual theme: Narrow red-lit corridors, torn banners, dark rooftops.
Node symbol: Twin knives.
Atmosphere: A dangerous assassin waits ahead.

LEVEL 03 — REN
Region: The Silent Monastery.
Visual theme: Ancient temple, wooden walkways, mist-covered mountains.
Node symbol: Crossed staff ends.
Atmosphere: A master of discipline challenges the player.

LEVEL 04 — DREADMAW
Region: The Chainbound Pit.
Visual theme: Industrial dungeon, heavy chains, broken iron gates.
Node symbol: Iron flail.
Atmosphere: A powerful enemy controls the battlefield.

LEVEL 05 — SORYU
Region: The Scarlet Dojo.
Visual theme: Red moon, lacquered wood, falling blossoms.
Node symbol: Elegant straight sword.
Atmosphere: Precision and discipline.

LEVEL 06 — RAIK
Region: The Storm Citadel.
Visual theme: Storm clouds, dark fortifications, distant lightning.
Node symbol: Glaive.
Atmosphere: A battlefield commander guards the route.

LEVEL 07 — SHINOBI
Region: The Veiled Forest.
Visual theme: Deep teal shadows, towering trees, moonlit fog.
Node symbol: Twin crescent blades.
Atmosphere: A dangerous mirror rival.

LEVEL 08 — VEX
Region: The Broken Theatre.
Visual theme: Abandoned stage, marionette silhouettes, suspended strings.
Node symbol: Split mechanical blade.
Atmosphere: Deception and unpredictable movement.

LEVEL 09 — BRUTUS
Region: The Colossus Arena.
Visual theme: Massive stone arena, cracked ground, monumental pillars.
Node symbol: Heavy maul.
Atmosphere: A test of endurance.

LEVEL 10 — AKARI
Region: The Sunken Shrine.
Visual theme: Gold-lit temple, ancient carvings, floating dust.
Node symbol: War fan.
Atmosphere: Elegant attacks conceal dangerous counters.

LEVEL 11 — NAMI
Region: The Drowned Sanctuary.
Visual theme: Dark water, broken bridges, turquoise reflections.
Node symbol: Twin tide blades.
Atmosphere: Flowing attacks and supernatural pressure.

LEVEL 12 — KUROGANE
Region: The Black Iron Fortress.
Visual theme: Heavy iron architecture, giant gates, red banners.
Node symbol: Studded kanabo.
Atmosphere: An armored tyrant blocks the way.

LEVEL 13 — THE HOLLOW KNIGHT
Region: The Graveglass Wastes.
Visual theme: Broken obsidian structures, pale mist, ancient ruins.
Node symbol: Fractured greatsword.
Atmosphere: An ancient guardian protects forbidden knowledge.

LEVEL 14 — THE HOLLOW KING
Region: The Throne of Ash.
Visual theme: Vast dark throne room, floating stone fragments, violet shadow energy.
Node symbol: Crowned scepter.
Atmosphere: The final ruler before the last confrontation.

LEVEL 15 — SHADOW KAZE
Region: The Eclipse Sanctuary.
Visual theme: A monumental temple beneath an eclipse, fractured architecture, crimson-black energy.
Node symbol: Mirrored blade.
Atmosphere: The ultimate confrontation with a corrupted reflection.

Give each region its own atmosphere and color identity.

Do not use one identical background for all 15 levels.

The campaign must feel as though the player is physically progressing through different environments.

---

# 7. THE SELECTED LEVEL INFORMATION PANEL

When the player selects a level node, update the right-side information panel.

This must happen without opening a modal window.

The panel should be part of the roadmap layout.

Include:

* Level number.
* Level name.
* Region name.
* Short narrative description.
* Boss name.
* Boss portrait or character illustration.
* Boss difficulty, if supported.
* Recommended weapon or weapon category, if supported.
* Available reward information.
* Completion status.
* Unlock requirement for locked levels.
* Best result, if saved.
* Fight or Replay button, depending on progression rules.

For an available boss level, show the boss artwork prominently.

Use layered artwork, dramatic lighting, and subtle animated effects.

Avoid tiny portraits.

Use a large cinematic portrait or character silhouette.

If a boss image is not available, use an original silhouette or suitable placeholder that fits the game's visual style.

Do not create a fake gameplay character and present it as an actual rendered in-game model.

## Action buttons

Available level:

* FIGHT.

Completed level:

* REPLAY, only if replaying is supported.
* VIEW RESULTS, if supported.

Locked level:

* SHOW REQUIREMENT.
* Do not show an active Fight button.

When the player presses Fight:

1. Validate the level's availability using the existing progression rules.
2. Save or preserve the current selection as required.
3. Initialize the existing encounter.
4. Navigate to the existing fighting screen.
5. Preserve the selected level and opponent.
6. Start combat through the existing game-start mechanism.

Never implement a second, conflicting combat initialization system.

---

# 8. PERSISTENT SIDEBAR NAVIGATION

Create a premium vertical sidebar that remains visible throughout the non-combat menu experience.

The sidebar must use icons, labels, selected states, and subtle animation.

Suggested layout:

TOP:

* SHADOW REBORN emblem.
* Small game logo.
* Optional campaign identifier.

NAVIGATION:

1. Campaign.
2. Player Profile.
3. Weapons.
4. Upgrades.
5. Skills / Shadow Arts.
6. Arena & AI.
7. Statistics.
8. Settings.
9. Controls / Help.

BOTTOM:

* Player level.
* Compact player rank.
* Currency indicators.
* Back or exit navigation if supported.

The sidebar should have:

* A dark translucent surface.
* Thin antique-gold separators.
* A subtle illuminated active item.
* Smooth selected-state transitions.
* Readable icon labels.
* Consistent spacing.

The active page must be clearly identifiable.

On desktop, the sidebar can remain expanded.

On smaller screens, it can collapse to an icon rail or use a compact drawer navigation, provided navigation remains clear and usable.

Do not allow the sidebar to cover the main content.

## Critical navigation rule

Every sidebar destination must open its own dedicated page.

Do not implement Weapons, Settings, Profile, or Statistics as popup windows.

Do not render the existing Arsenal window inside another modal.

Use proper page navigation or a dedicated view-routing system.

The sidebar must remain available when navigating between non-combat pages.

When entering combat, hide the campaign navigation if necessary so the fighting screen remains unobstructed.

After combat, return to the campaign hub and update the level status using the actual game result.

---

# 9. CREATE A FULL PLAYER PROFILE PAGE

Build a dedicated Player Profile page.

This page must not be a modal.

Use the existing player data.

Include:

* Player name.
* Player level.
* Current XP.
* XP required for the next level.
* Progress bar.
* Rank or title.
* Current currencies.
* Wins and losses.
* Win rate.
* Highest combo.
* Parries landed.
* Shadow Arts usage.
* Completed campaign levels.
* Bosses defeated.
* Current equipped weapon.
* Available achievements, if implemented.

Use the existing values and calculations.

Do not hardcode the values visible in the current screenshot.

The screenshot is an example of the current interface, not a permanent data source.

Create a visually rich layout using:

* A large player emblem.
* An XP progress display.
* Stat cards.
* Campaign completion indicators.
* Achievement badges where available.
* A compact combat history if the game already stores it.

Avoid excessive empty space.

Make the profile look like a fighting-game character dossier.

---

# 10. CREATE A FULL WEAPONS PAGE

Create a dedicated Weapons & Arsenal page.

This replaces the need to access weapons only through the current popup window.

Do not delete or disable the existing Arsenal system.

Reuse its weapon data, categories, upgrades, and equip functions.

## 10.1 Layout

Create a three-part layout.

LEFT:
Weapon categories and filters.

CENTER:
Weapon display and inventory.

RIGHT:
Selected weapon details and actions.

The page should feel like a dark fantasy armory.

Use a subtle stone or metal background, dramatic weapon lighting, and carefully restrained gold highlights.

## 10.2 Categories

Use the weapon categories supported by the existing game.

Possible categories:

* All.
* Single-Handed.
* Two-Handed.
* Dual Wielding.
* Transforming.

Do not display categories that have no meaningful data unless the game already supports them.

## 10.3 Weapon cards

Each weapon card should display:

* Weapon icon or illustration.
* Weapon name.
* Weapon category.
* Current level.
* Damage or other actual statistics.
* Upgrade state.
* Equipped status.
* Unlock state, if supported.

Provide filters and sorting where appropriate.

Clicking a weapon must update the selected weapon details.

## 10.4 Selected weapon details

Display:

* Large weapon artwork.
* Weapon name.
* Weapon description.
* Weapon category.
* Current upgrade level.
* Actual damage.
* Actual speed.
* Any other supported attributes.
* Upgrade cost.
* Special ability, if implemented.
* Equip button.
* Upgrade button.

Use the existing upgrade logic and currency values.

Do not allow a weapon to be equipped if the current game rules prohibit it.

Do not grant free weapons or currency.

Do not make upgrades cosmetic only.

If the existing game uses upgrade levels, preserve the upgrade progression.

If the existing weapon system supports previews or attack demonstrations, provide a preview feature using that system.

Do not add a fake live 3D weapon viewer if the project cannot support it.

## 10.5 Weapon upgrades

Create a clear upgrade interface within the Weapons page or on a dedicated Upgrades page.

Show:

* Current level.
* Next level.
* Current stats.
* Expected new stats, calculated using existing rules.
* Upgrade cost.
* Available currency.
* Upgrade confirmation.

Use the actual upgrade function.

Prevent duplicate upgrades caused by rapid repeated clicks.

Refresh the displayed values immediately after a successful upgrade.

Do not alter the underlying weapon balancing values merely to make the interface look more impressive.

---

# 11. CREATE A FULL UPGRADES PAGE

Build a separate Upgrades page.

This page should show the player's available progression upgrades.

Use only upgrade systems that already exist or are explicitly implemented in the current project.

Possible sections:

* Weapon upgrades.
* Player attributes.
* Armor or equipment upgrades.
* Shadow Arts upgrades.
* Special abilities.

For each upgrade, display:

* Current level.
* Upgrade description.
* Current effect.
* Next effect.
* Cost.
* Required level or prerequisite.
* Upgrade action.

Do not display imaginary upgrade systems as if they already work.

If a feature is not implemented, do not create a fake purchase button.

If an upgrade requires a particular weapon or level, enforce the existing requirements.

Keep the UI consistent with the Arsenal page.

---

# 12. CREATE A FULL SHADOW ARTS PAGE

Create a dedicated page for the existing Shadow Arts or special ability system.

Use the current game's actual ability data.

Display:

* Ability name.
* Artwork or icon.
* Description.
* Current unlock state.
* Resource requirements.
* Cooldown or cost, if applicable.
* Upgrade level, if supported.
* Equip or selection action, if supported.

Use an elegant shadow-energy visual theme.

Possible visuals:

* Violet energy.
* Dark particle trails.
* Engraved ability symbols.
* Subtle animated runes.

Do not change the behavior, cost, or damage of the actual abilities.

Do not invent abilities that are not implemented and present them as functional.

---

# 13. CREATE A DEDICATED ARENA & AI PAGE

Create a full-page Arena & AI configuration interface using the existing systems.

The current Arsenal screen already contains an Arena Background & AI section.

Move that functionality into a dedicated page if it is currently accessible only through the Arsenal window.

Preserve all existing options.

Display:

* Available arena backgrounds.
* Selected background.
* Available AI opponents or difficulty options, if supported.
* Current selection.
* Any relevant configuration information.
* Preview of the selected arena.
* Apply or Select button where required.

If the current game supports multiple arena backgrounds, give each one a distinct preview.

Use a large preview area and an organized selection gallery.

Do not invent additional game settings or AI options that are not supported by the existing system.

If an option already works, ensure the new interface calls the same underlying function.

---

# 14. CREATE A DEDICATED SETTINGS PAGE

This is a separate full page, not a popup.

The Settings page must include ALL existing game settings.

Before building the page, inspect the entire project and inventory every setting currently available.

Do not assume the screenshot contains every setting.

Search the code for:

* Settings objects.
* Configuration files.
* Audio controls.
* Volume sliders.
* Graphics settings.
* Quality presets.
* Frame-rate options.
* Display options.
* Fullscreen controls.
* Screen resolution settings.
* Input bindings.
* Keyboard controls.
* Touch-control options.
* Gameplay preferences.
* Accessibility settings.
* Camera settings.
* Combat assistance options.
* Effects toggles.
* Performance options.
* Any other existing preferences.

Preserve every existing setting.

## Absolute rule: do not change the settings themselves

Do not change:

* Default values.
* Actual numerical ranges.
* Configuration keys.
* Existing effect implementations.
* Existing gameplay behavior.
* Existing key bindings.
* Existing volume logic.
* Existing save mechanisms.

The new Settings page is a presentation and navigation improvement.

It must use the existing settings data and functions.

If a setting does not currently exist, do not invent it and silently change game behavior.

New optional UI-only preferences may be added only when they do not interfere with the existing game and are explicitly appropriate.

## 14.1 Suggested Settings page layout

Use a full-page layout with a clear heading, category navigation, and organized setting cards.

Categories may include the following when corresponding settings exist.

### Audio

* Master volume.
* Music volume.
* Sound-effects volume.
* Ambient audio volume, if supported.
* Mute controls, if supported.

### Graphics

* Graphics quality.
* Particle quality.
* Shadow quality.
* Effects quality.
* Frame-rate limit.
* VSync, if supported.

### Display

* Fullscreen.
* Resolution.
* Screen scaling.
* Display mode.

### Controls

* Existing keyboard bindings.
* Existing movement controls.
* Existing attack controls.
* Existing block and special controls.
* Touch controls, if supported.

### Gameplay

* Existing gameplay preferences.
* Existing combat assistance.
* Existing difficulty preferences, if configurable.

### Accessibility

* Existing accessibility options.
* Existing screen-shake control, if supported.
* Existing reduced-effects settings, if supported.

### Performance

* Existing performance options.
* Existing rendering-quality controls.

Only display settings that are genuinely supported by the game.

If the game has a setting that does not fit these categories, place it in an appropriate additional category rather than omitting it.

## 14.2 Setting controls

Use suitable controls for each setting.

Examples:

* Sliders for continuous values.
* Toggles for Boolean settings.
* Dropdowns for supported presets.
* Buttons for actions.
* Key-binding controls for remappable inputs, if supported.

Every control must reflect the current actual value.

When the player changes a setting:

1. Validate the value.
2. Call the existing setting update function.
3. Apply the change using the existing implementation.
4. Save it using the existing persistence mechanism.
5. Update the displayed value.

If the current game saves settings only when the player presses Apply, preserve that behavior.

If settings are applied immediately in the existing game, preserve that behavior.

Do not create a second settings store that becomes inconsistent with the actual game.

Do not display a successful save message unless the save operation succeeds.

Provide Reset to Defaults only if the game already supports resetting settings or if it can be implemented safely using the actual established defaults.

If a reset function exists, preserve it.

## 14.3 Settings page appearance

Create a premium configuration interface.

Use:

* Dark charcoal background.
* Thin bronze separators.
* Gold highlights for active controls.
* Clear section headings.
* Readable values.
* Subtle animations.
* Consistent spacing.
* Clear focus states.

Avoid placing every setting inside a large, heavily bordered card.

Group related controls together.

Make the page usable on desktop, tablet, and mobile.

---

# 15. CREATE A DEDICATED STATISTICS PAGE

Build a full Statistics page using actual recorded data.

Possible information:

* Total fights.
* Wins.
* Losses.
* Win rate.
* Highest combo.
* Parries.
* Shadow Arts usage.
* Boss victories.
* Campaign completion.
* Weapon usage.
* Recent match outcomes, if recorded.

Use existing statistics calculations.

Do not hardcode the values from the screenshot.

Do not generate random historical records to make the page look populated.

If historical data is unavailable, show an appropriate empty state.

Use visual charts only where actual data supports them.

Make the page visually consistent with the Player Profile.

---

# 16. THE ROADMAP MUST FEEL INTERACTIVE AND ALIVE

The campaign hub must be visually impressive, not merely functional.

Implement restrained, purposeful animation.

## Background animation

* Slowly moving atmospheric fog.
* Subtle embers.
* Distant light pulses.
* Gentle parallax where supported.

## Level nodes

* Soft idle glow for the currently available level.
* Smooth hover and focus states.
* A short animation when selecting a node.
* A clear completed-state animation where appropriate.
* A restrained lock animation for locked levels, if suitable.

## Campaign route

* A subtle glow that follows the completed route.
* A clear transition toward the next available level.
* Optional short animation when returning from a successful fight.

Do not animate the entire interface constantly.

Do not use large numbers of expensive particles.

## Page transitions

When moving between Campaign, Weapons, Settings, Profile, and other menu pages:

* Use smooth transitions.
* Preserve page layout stability.
* Avoid sudden white flashes.
* Avoid full-screen flickering.
* Avoid long transitions that delay navigation.

When returning from combat:

* Update campaign state.
* Highlight the relevant level.
* Display the actual result.
* Show new unlocks only when the game confirms them.

Do not award campaign progress merely because the player opens a page.

---

# 17. FIGHTING SCREEN INTEGRATION

The existing fighting screen must remain a separate gameplay destination.

Do not redesign or rewrite the combat engine as part of this task.

Preserve:

* Character movement.
* Attack logic.
* Weapon behavior.
* Enemy AI.
* Hitboxes.
* Damage calculations.
* Health and posture systems.
* Combat controls.
* Existing visual effects.
* Existing victory and defeat logic.

When the player presses Fight from the roadmap:

* Navigate to the existing fighting screen.
* Initialize the selected encounter through the existing mechanism.
* Keep the current selected level and enemy consistent.
* Preserve existing controls.
* Avoid reinitializing the game twice.

When combat ends:

* Preserve the actual result.
* Update progression using the current game logic.
* Return to the roadmap through the existing or newly integrated result flow.
* Keep the player on the completed level or newly unlocked level.
* Update displayed currencies and statistics from the actual saved state.

Do not open a new match automatically after a victory.

The player should decide whether to replay or continue.

---

# 18. LOADING AND GAME START BEHAVIOR

Change the initial application flow carefully.

The desired sequence is:

1. Load existing game assets.
2. Load existing player progression.
3. Load the existing settings.
4. Initialize the current game systems.
5. Open the Campaign Roadmap.
6. Allow the player to navigate freely.
7. Start combat only after explicit player action.

If the game uses asynchronous loading, wait until required data is available before displaying progression values.

Do not reset player progress when the application launches.

Do not overwrite existing save files.

Do not start the fighting simulation behind the roadmap if the game architecture can avoid it.

If some shared game systems must remain initialized, ensure they do not cause unintended combat or consume unnecessary resources while the player is browsing menus.

---

# 19. RESPONSIVE DESIGN

The interface must work properly on different screen sizes.

## Desktop

* Full sidebar.
* Large campaign roadmap.
* Selected-level details on the right.
* Rich atmospheric background.

## Tablet

* Narrower sidebar.
* Reduced roadmap spacing.
* Responsive level details.
* Readable text.

## Mobile

* Compact navigation.
* Scrollable or appropriately adapted campaign route.
* Large touch-friendly level nodes.
* Clear selected-level details.
* Responsive weapon grids.
* Settings controls sized for touch.
* No horizontal overflow.
* No overlapping text.
* No buttons hidden outside the screen.

Do not simply shrink the desktop layout.

Reorganize the interface intelligently.

The campaign route must remain usable on touch screens.

All important buttons must remain accessible.

---

# 20. ACCESSIBILITY AND USABILITY

Ensure:

* Text remains readable against backgrounds.
* Selected states are clearly visible.
* Locked states are understandable.
* Keyboard focus is visible.
* Navigation works with supported keyboard controls.
* Buttons have accessible names where the UI technology permits.
* Important information is not communicated by color alone.
* Animations do not interfere with interaction.
* The interface respects existing accessibility settings.

Avoid excessive flashing and rapid visual effects.

---

# 21. TECHNICAL IMPLEMENTATION RULES

This is an existing-project integration task.

Follow the existing engine, framework, and architecture.

Do not migrate the project to another framework just to create the new interface.

Do not replace the combat engine.

Do not introduce an unrelated component library without a technical need.

Reuse the current game state and data models.

Create new UI components and navigation code where necessary.

Separate:

* Page rendering.
* Navigation.
* Campaign presentation.
* Player data display.
* Weapon presentation.
* Settings presentation.
* Existing gameplay actions.

Avoid duplicating business logic.

Use existing functions for:

* Starting a fight.
* Equipping a weapon.
* Upgrading a weapon.
* Changing arena backgrounds.
* Updating AI options.
* Updating settings.
* Saving settings.
* Loading progression.
* Completing levels.
* Updating currencies.
* Recording match results.

If the current game has no central navigation controller, introduce a small, compatible one.

Do not allow UI navigation to mutate combat data unexpectedly.

Do not store campaign progression only in the UI.

The actual game state must remain the source of truth.

---

# 22. PROTECT EXISTING CODE AND SETTINGS

This requirement is mandatory.

Before making modifications:

* Identify all existing combat-related files.
* Identify all existing settings-related files.
* Identify all save and progression files.
* Identify the current Arsenal implementation.
* Identify the existing game-start sequence.

Keep a record of the existing functions and data structures.

Make the smallest reasonable set of changes.

Do not:

* Delete existing functionality.
* Replace real data with sample data.
* Reset currencies.
* Change upgrade costs.
* Change weapon statistics.
* Change enemy difficulty.
* Change the game's default settings.
* Change control bindings.
* Replace the current AI.
* Change combat balance.
* Modify save formats unnecessarily.
* Remove current keyboard or touch support.

If the current UI combines several features in one large component, you may separate the presentation into pages while preserving the underlying functions.

Do not create a duplicate implementation of a feature that already works.

---

# 23. IMPLEMENTATION ORDER

Complete the work in this order.

STEP 1 — PROJECT AUDIT
Inspect the existing application and document its architecture.

STEP 2 — SAFE NAVIGATION
Implement page routing and the new campaign-first entry flow.

STEP 3 — CAMPAIGN ROADMAP
Create the full-screen roadmap, level nodes, progression states, and selected-level panel.

STEP 4 — LEVEL DETAILS
Connect the roadmap to the actual level and boss data.

STEP 5 — SIDEBAR
Implement persistent navigation between dedicated pages.

STEP 6 — PROFILE
Create the player profile page using existing data.

STEP 7 — WEAPONS
Transform the existing Arsenal functionality into a dedicated page.

STEP 8 — UPGRADES
Create a separate upgrades page using existing upgrade logic.

STEP 9 — SHADOW ARTS
Create a dedicated ability page using existing ability data.

STEP 10 — ARENA & AI
Move the existing configuration controls into a dedicated page.

STEP 11 — SETTINGS
Inventory and preserve every existing setting, then implement the new Settings page.

STEP 12 — STATISTICS
Create a statistics page using actual recorded values.

STEP 13 — COMBAT INTEGRATION
Connect the Fight button to the existing encounter initialization and preserve the result flow.

STEP 14 — VISUAL POLISH
Add atmospheric backgrounds, lighting, animations, transitions, and interaction feedback.

STEP 15 — RESPONSIVE DESIGN
Test the interface on desktop, tablet, and mobile layouts.

STEP 16 — REGRESSION TESTING
Verify that the existing game remains fully functional.

Do not skip the audit and navigation stages.

Do not spend time polishing animations before the navigation and underlying data integration work correctly.

---

# 24. FINAL TESTING CHECKLIST

Before declaring the task complete, verify all of the following.

### Startup

* The game opens on the Campaign Roadmap.
* The game does not automatically enter combat.
* Existing progression loads correctly.
* Existing settings load correctly.

### Roadmap

* All 15 levels appear in the intended order.
* Completed levels display the correct state.
* The next available level is correct.
* Locked levels cannot start fights.
* Selecting a level updates the information panel.
* The Fight button starts the selected encounter.
* Replaying completed levels follows the existing game rules.

### Sidebar

* Every navigation item opens a dedicated page.
* No page unexpectedly opens as a modal.
* The active page is indicated correctly.
* Returning to Campaign restores the roadmap.
* The sidebar does not obstruct the fighting screen.

### Weapons

* The existing weapon inventory is preserved.
* Weapon categories work.
* Equipped weapons remain consistent with combat.
* Upgrades use the existing logic.
* Currency deductions remain correct.
* No weapon data is lost.

### Settings

* Every existing setting is available.
* All values match the actual saved settings.
* Changing a setting applies the expected existing behavior.
* Persistence works.
* Existing defaults remain unchanged.
* No setting is silently omitted.

### Progression

* Winning a fight updates progression correctly.
* Losing a fight follows existing rules.
* Currencies remain correct.
* Statistics reflect actual results.
* The next level unlocks only when the game permits it.
* Returning to the roadmap does not reset the current selection unnecessarily.

### Visual quality

* The roadmap is visually rich and readable.
* The 15 level nodes have distinct identities.
* Background animation is restrained.
* Text does not overlap.
* The selected-level panel remains readable.
* The UI works at different screen sizes.
* No critical UI element is cut off.
* Navigation transitions do not cause flickering.

### Regression

* The original fighting screen still works.
* Keyboard controls still work.
* Touch controls still work if supported.
* Enemy AI still works.
* Weapons still work.
* Existing combat effects still work.
* The save system still works.
* No new critical errors appear.

---

# FINAL DELIVERABLE

Implement the complete Campaign Roadmap and Main Menu system directly in the existing project.

The final experience must open with an immersive campaign world rather than immediately starting a fight.

The player should be able to explore the campaign, understand their progression, select levels, inspect bosses, manage weapons, upgrade equipment, configure the arena, view statistics, and adjust all existing game settings through dedicated pages.

The interface must look like a premium fighting-game campaign hub, not an ordinary dashboard.

The 15-level roadmap should be visually connected, atmospheric, interactive, and easy to navigate.

Most importantly, preserve the existing game logic, settings, combat functionality, and saved progress.

Do not merely generate a design proposal or static mockup.

Inspect the code, implement the changes, run the game, test the navigation, verify the existing systems, and fix any regressions.

At the end, report:

1. Which pages were created.
2. How the initial game flow changed.
3. Which existing systems were reused.
4. Which settings and game mechanics were verified.
5. Which tests were performed.
6. Any remaining limitations or missing assets.
