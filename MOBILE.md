# SHADOW REBORN — COMPLETE MOBILE OPTIMIZATION MASTER PROMPT

## Responsive UI • Mobile Combat Controls • Touch Input • Performance • Desktop Preservation

Act as a senior mobile game developer, Java game-engine specialist, responsive UI engineer, touch-input specialist, and gameplay optimization expert.

I have an existing Java-based fighting game called **Shadow Reborn**, inspired by the cinematic fighting experience of Shadow Fight 2.

The game already contains:

* A main menu and campaign roadmap.
* Fifteen campaign levels and bosses.
* A player profile and progression system.
* Multiple weapons and weapon upgrades.
* Combat animations and visual effects.
* Enemy AI and boss combat.
* Health bars, posture bars, and shadow energy.
* Combat statistics.
* Arena backgrounds.
* Game settings.
* Controls and a tutorial page.
* A fighting interface designed primarily for desktop.

Your task is to optimize the ENTIRE EXISTING GAME for mobile phones and tablets.

The mobile version must look professionally designed, visually impressive, responsive, properly aligned, and comfortable to play using touch controls.

This is not simply a request to shrink the desktop interface.

Create a dedicated mobile presentation and touch-control experience while preserving the existing desktop design and gameplay.

# 1. ABSOLUTE RULE: PRESERVE THE EXISTING GAME

Before making changes, inspect the complete existing project.

Identify:

* The game engine and rendering framework.
* The UI framework.
* The main application entry point.
* The menu and campaign navigation.
* The combat scene and rendering loop.
* The current input-handling system.
* The player movement and attack systems.
* The enemy AI.
* The animation system.
* The weapon and upgrade systems.
* The game settings and persistence logic.
* The current desktop layout and styling.

Modify the existing implementation rather than creating a disconnected prototype.

DO NOT:

* Rewrite the entire game.
* Replace the existing game engine.
* Remove existing features.
* Change the campaign storyline or level progression.
* Delete existing weapons.
* Change weapon damage or combat balance unnecessarily.
* Break enemy AI.
* Remove existing animations or effects.
* Change desktop controls.
* Replace working UI pages with placeholders.
* Duplicate the entire game to create a separate mobile version.
* introduce unnecessary dependencies.
* remove existing save data.

Preserve the existing desktop experience as closely as possible.

All existing features must continue to function after the mobile optimization.

# 2. RESPONSIVE LAYOUT SYSTEM

Implement a consistent responsive layout system for the entire game.

Support:

* Small mobile phones.
* Standard mobile phones.
* Large mobile phones.
* Foldable devices where practical.
* Portrait and landscape orientations.
* Tablets.
* Desktop and laptop screens.
* High-resolution and high-density displays.

Use the existing framework's native responsive layout capabilities wherever possible.

If the game is rendered through a browser-based UI, use appropriate CSS media queries, flexible layouts, and responsive sizing.

If the game uses a Java desktop UI or custom rendering engine, implement equivalent responsive layout calculations using the existing framework.

Do not assume the game uses HTML or CSS without first inspecting the codebase.

## Responsive behavior

Every page must adapt its layout to the available screen dimensions.

Do not use fixed desktop dimensions that cause mobile overflow.

Avoid:

* Horizontal scrolling on ordinary mobile screens.
* Clipped text.
* Overlapping buttons.
* Tiny clickable elements.
* Off-screen navigation.
* Unreadable text.
* Distorted images.
* Cropped character artwork.
* UI elements covering important content.
* Excessive empty spaces.
* Inconsistent alignment.
* Elements extending beyond screen boundaries.

Use flexible containers, sensible minimum and maximum sizes, consistent spacing, and appropriate scaling.

Keep content readable without requiring the user to zoom in.

The interface should feel intentionally designed for every screen size.

# 3. DEVICE DETECTION AND SEPARATE CONTROL INTERFACES

This is one of the most important requirements.

Create separate desktop and mobile control interfaces.

The mobile interface must NEVER appear on desktop.

The desktop interface must remain unchanged as far as possible.

Do not simply hide mobile controls after rendering them visibly.

Implement a reliable responsive input-mode system.

Consider:

* Available viewport width.
* Available viewport height.
* Touch capability.
* Pointer type.
* Device orientation.
* Whether a physical keyboard or controller is being used.

Do not rely exclusively on user-agent detection.

A touchscreen laptop should not automatically receive the full mobile HUD merely because it supports touch.

Provide a reliable way to determine whether the current layout should use the touch-control interface.

If the existing game has a settings option for input mode, preserve it and integrate it sensibly with the responsive behavior.

## Desktop mode

On desktop:

* Keep the existing keyboard controls.
* Preserve the existing combat HUD.
* Keep existing desktop menus and navigation.
* Keep existing mouse interactions.
* Preserve the current desktop fighting layout.
* Do not show mobile movement buttons.
* Do not show mobile attack buttons.
* Do not show mobile jump, crouch, block, dodge, or special-ability buttons.
* Do not reserve empty screen space for mobile controls.

The game must not look like a mobile game running inside a desktop browser.

## Mobile mode

On supported touch devices:

* Enable the mobile combat HUD.
* Enable touch-based movement and combat.
* Show mobile-specific control instructions where appropriate.
* Use touch-friendly buttons.
* Support the appropriate orientation.
* Keep controls positioned inside safe screen boundaries.
* Adapt controls to the available viewport.

Use a single authoritative input system so that keyboard and touch input cannot accidentally trigger duplicate actions.

# 4. MOBILE ORIENTATION AND PLAY AREA

The fighting game is a side-view combat experience.

Optimize the fighting interface primarily for landscape orientation because it provides more horizontal room for movement and combat.

When a player opens a fight on a narrow portrait screen, display a polished orientation prompt explaining that landscape mode is recommended.

Do not display a blocking orientation prompt on desktop.

If the platform allows orientation locking, use it only when supported and appropriate.

Never make the game unusable if orientation locking is unavailable.

If the player rotates the device during gameplay:

* Recalculate the viewport.
* Reposition the HUD.
* Resize the combat arena.
* Reposition the controls.
* Preserve the current fight.
* Avoid restarting the level.
* Avoid resetting health or progression.
* Avoid leaving the interface in an incorrect layout.

Account for notches, rounded corners, gesture areas, and system UI insets where applicable.

Keep important buttons away from the screen edges.

# 5. MOBILE FIGHTING HUD

Create a dedicated mobile combat HUD.

The existing desktop fighting HUD must remain desktop-only.

The mobile HUD must be compact, clear, visually attractive, and readable during fast combat.

## Top combat information

Arrange the following information in a compact layout:

* Player name or character identity.
* Player health.
* Player posture or guard status, if available.
* Player shadow energy.
* Enemy name.
* Enemy health.
* Enemy posture or guard status.
* Enemy shadow energy, if available.
* Round information.
* Pause button.

Preserve the existing combat data and update it from the real game state.

Do not invent new statistics.

Use compact labels, icons, and visual indicators rather than oversized text.

Health and energy indicators must remain visible without covering the fighters.

The HUD should not occupy excessive vertical space.

## Mobile HUD visual style

Maintain the established Shadow Reborn identity:

* Dark cinematic surfaces.
* Gold accents for progression and important information.
* Red accents for player danger and critical combat states.
* Violet accents for shadow abilities.
* Weapon-inspired decorative elements.
* Subtle lighting and carefully controlled glow.
* Clear visual hierarchy.

Do not add excessive glowing borders, animations, or decorative effects that reduce readability.

The interface must remain visually coherent with the existing campaign and arsenal pages.

# 6. CREATE A COMPLETE MOBILE TOUCH-CONTROL SYSTEM

Implement actual touch controls connected to the existing combat system.

Do not create decorative buttons that do nothing.

Do not replace the keyboard controls.

Do not introduce a new combat engine.

Reuse the existing movement, attack, jump, crouch, block, dodge, and shadow-ability logic.

The mobile controls should be available ONLY in mobile touch mode.

## 6.1 Movement controls

Create a virtual directional control area on the lower-left side of the screen.

It should support the movement actions already implemented in the game, including:

* Move left.
* Move right.
* Jump.
* Crouch.
* Roll or dodge, if supported.

Choose a control design that suits the existing movement mechanics.

A virtual joystick or directional pad is acceptable, provided it feels responsive and does not obstruct the fighting arena.

Requirements:

* Comfortable thumb positioning.
* Clear directional feedback.
* Smooth movement.
* No accidental page scrolling.
* No unwanted browser gestures during active gameplay.
* Correct handling when the player lifts a finger.
* Correct handling when touch input is cancelled.
* Correct handling when the application loses focus.

Do not require the player to hold a movement button indefinitely to stop the character.

Ensure the character stops or transitions appropriately when the movement input is released.

## 6.2 Attack controls

Place the primary attack controls on the lower-right side.

Provide distinct buttons for the existing combat actions, such as:

* Light attack.
* Heavy attack.
* Leg attack, if implemented.
* Jump.
* Block or timed parry.
* Shadow ability.

Only display actions that are supported by the existing combat system.

If there are more actions than can comfortably fit, use a carefully arranged button cluster or a compact secondary action area.

Do not make the buttons so small that players repeatedly tap the wrong action.

Use distinct icons, labels, or subtle visual cues so that players can identify actions quickly.

Preserve the current keyboard mappings.

## 6.3 Dodge and special actions

Make dodge or roll actions easy to reach.

If the game supports a dedicated dodge action, expose it through the mobile controls.

If dodge is triggered by a directional double-tap, ensure the mobile implementation recognizes the gesture reliably without interfering with normal movement.

Provide clear visual feedback when a dodge, block, parry, or special action is activated.

Prevent repeated accidental activation caused by touch events firing more than once.

## 6.4 Button states

Every control must have:

* Idle state.
* Pressed state.
* Active or toggled state where appropriate.
* Disabled state when the action is unavailable.
* Cooldown feedback where applicable.

Use subtle pressed animations and feedback.

Buttons should respond immediately to touch.

Avoid long artificial delays between touch input and character actions.

# 7. MULTI-TOUCH SUPPORT

Multi-touch support is essential.

The player must be able to move and attack simultaneously.

Examples:

* Hold right and press light attack.
* Hold left and perform a heavy attack.
* Move while blocking, if the existing combat rules permit it.
* Move and jump.
* Move and activate an available special ability, if supported.

Do not let one finger's release cancel another finger's active control.

Track touch pointers or pointer identities independently.

Handle pointer cancellation and lost focus safely.

Ensure that:

* Releasing the attack finger does not stop movement from another finger.
* Releasing movement does not cancel an ongoing attack animation.
* A completed tap does not become a permanent held input.
* Stuck touch states cannot leave the character moving or blocking indefinitely.

Do not allow impossible simultaneous actions merely because multi-touch is supported.

The existing combat-state rules must remain authoritative.

# 8. TOUCH TARGET SIZE AND CONTROL PLACEMENT

Design the controls for comfortable thumb use.

Use touch targets that are approximately 48 CSS pixels or larger where appropriate for browser-based interfaces, with larger targets for the most important combat actions when space permits.

For native rendering, use equivalent practical touch-target dimensions that account for the device's actual screen density.

Do not confuse physical pixels with logical or CSS pixels.

Ensure sufficient spacing between adjacent buttons.

Avoid placing important controls directly against the screen edges.

Keep movement controls on the left and primary combat controls on the right for a conventional landscape fighting layout.

Allow players to see the characters, their weapons, and important attack animations.

Controls should not hide the opponent's legs, weapon impacts, or important combat effects.

# 9. MOBILE CAMERA AND ARENA SCALING

Optimize the fighting arena for different aspect ratios.

The player and enemy must remain visible.

Preserve the original game coordinates and combat physics wherever possible.

Separate the logical combat coordinate system from the visual viewport when the existing architecture permits it.

When the screen becomes narrower:

* Adjust camera framing.
* Scale or reposition the arena presentation.
* Preserve valid character positions.
* Keep the combat floor visible.
* Prevent fighters from disappearing off-screen.
* Keep attack effects within the visible area where possible.

Do not stretch character sprites to fill the screen.

Do not distort character proportions.

Do not change attack ranges simply to make a mobile layout appear to fit.

Do not alter the underlying physics or hit detection merely because the viewport changes.

If camera adjustments are necessary, preserve the actual combat geometry.

# 10. OPTIMIZE EVERY MENU AND GAME PAGE FOR MOBILE

Do not optimize only the fighting scene.

Every existing page must be reviewed and adapted.

## 10.1 Main menu

* Create a clean mobile layout.
* Keep the Shadow Reborn title prominent.
* Arrange primary navigation vertically or in a compact mobile navigation pattern.
* Keep the campaign entry point easy to find.
* Avoid oversized decorative areas.
* Preserve existing buttons and functionality.

## 10.2 Campaign roadmap

The campaign roadmap must remain visually impressive on mobile.

Preserve:

* All fifteen campaign levels.
* Existing progression.
* Boss identities.
* Level completion states.
* Locked and unlocked levels.
* Rewards.
* Campaign regions.
* Current progress.

Adapt the roadmap to narrow screens without compressing the entire desktop layout.

Use a mobile-friendly map presentation:

* A vertically scrollable campaign path where appropriate.
* Clear numbered level markers.
* Distinct locked, available, completed, and current-level states.
* Touch-friendly level selection.
* Readable region labels.
* Smooth transitions between selected levels.
* A dedicated mobile details area for the selected level.

The selected-level details should not permanently occupy a wide desktop-style right sidebar on a small phone.

Instead, show the details in a mobile-appropriate panel or dedicated content section.

The user must be able to inspect a level, view its boss and rewards, and start a fight without accidental navigation.

Preserve the desktop roadmap layout.

## 10.3 Player profile

Make the profile readable and compact.

Adapt:

* Player level.
* XP progress.
* Coins.
* Orbs or other existing currencies.
* Combat statistics.
* Win/loss record.
* Achievements.
* Unlocked content.

Use responsive cards and appropriately sized charts or progress indicators.

Do not force wide desktop statistic rows onto small screens.

## 10.4 Weapons and arsenal

Optimize the complete weapon collection for mobile.

Requirements:

* Responsive weapon cards.
* Properly scaled weapon artwork.
* Readable weapon names and descriptions.
* Clear rarity and ownership indicators where available.
* Weapon selection.
* Weapon details.
* Weapon upgrades.
* Upgrade costs.
* Upgrade confirmation.
* Weapon categories and filters.
* Current equipped weapon.
* Existing weapon-specific statistics.

Use a single-column or two-column grid depending on available width.

Never allow weapon cards to overflow the screen.

Weapon previews must preserve their aspect ratios.

Do not remove weapons simply to make the mobile layout simpler.

## 10.5 Progression upgrades

Make all existing upgrade options accessible.

Ensure:

* Costs are readable.
* Upgrade buttons are large enough to tap.
* Current levels and resulting values are clear.
* Currency updates correctly.
* Upgrade requirements are visible.
* Confirmation or feedback appears when appropriate.

Do not change the actual upgrade economy or formulas.

## 10.6 Shadow Arts

Adapt the Shadow Arts page into a touch-friendly layout.

Preserve:

* Existing abilities.
* Unlock requirements.
* Energy costs.
* Cooldowns.
* Upgrade levels.
* Ability descriptions.
* Existing functionality.

Use readable ability cards and appropriately sized icons.

## 10.7 Arena and AI

Ensure that arena selection and AI-related settings remain usable on phones.

Adapt:

* Arena cards.
* Background previews.
* Difficulty settings.
* Enemy options.
* Existing combat modifiers.
* Available configuration options.

Do not change the underlying AI behavior or combat settings.

## 10.8 Statistics

Make statistics responsive.

Use:

* Compact statistic cards.
* Responsive charts.
* Readable labels.
* Touch-friendly filters.
* Scrollable tables only when necessary.

Charts must resize correctly and maintain readable labels.

## 10.9 Settings

The settings page must be completely usable on mobile.

Preserve every existing setting.

Do not remove options just because the screen is small.

Use grouped sections, expandable categories where appropriate, and clearly labeled controls.

Ensure sliders, toggles, dropdowns, and confirmation buttons are touch-friendly.

## 10.10 Controls and guide

Create a mobile-specific controls guide that displays the actual mobile controls.

On desktop, continue showing the keyboard and mouse controls.

The guide must reflect the real implemented input mappings.

Do not show desktop keyboard instructions as the primary controls on mobile.

## 10.11 Pause menu

Create a mobile-friendly pause interface.

Ensure that:

* The game pauses correctly.
* The interface fits within the viewport.
* Buttons are touch-friendly.
* The player can resume, restart if supported, or exit the fight.
* The existing pause behavior remains correct.

Prevent taps on the pause menu from triggering attacks underneath it.

## 10.12 Victory and defeat screens

Adapt victory and defeat screens to mobile.

Preserve:

* Rewards.
* Level completion.
* Progression updates.
* Retry options.
* Campaign navigation.
* Existing victory and defeat logic.

Make the next action obvious without hiding the result information.

# 11. RESPONSIVE SIDEBAR AND NAVIGATION

The desktop sidebar must remain desktop-only in its existing layout.

Do not force the entire desktop sidebar onto a narrow phone.

Create an appropriate mobile navigation pattern.

Possible options:

* A compact top navigation.
* A bottom navigation bar for the most important destinations.
* A collapsible navigation drawer for secondary pages.

Choose the design that fits the existing UI and framework.

Keep navigation labels readable.

Use consistent icons.

Make the current page obvious.

Ensure every existing destination remains accessible.

Do not display two conflicting navigation systems simultaneously.

Do not introduce a new navigation layout that breaks the campaign roadmap.

The mobile navigation must never overlap the fighting controls.

# 12. VISUAL QUALITY AND CONSISTENCY

Maintain a premium cinematic dark-fantasy fighting-game aesthetic.

Use the existing Shadow Reborn visual identity:

* Near-black backgrounds.
* Gold and amber highlights.
* Red combat accents.
* Violet shadow-energy accents.
* Carefully layered backgrounds.
* Consistent typography.
* Subtle borders.
* Controlled lighting.
* Clean spacing.
* High-quality weapon and character artwork.

Mobile UI must not look like a simplified, unfinished version of the desktop interface.

Use deliberate responsive rearrangement rather than simply scaling everything down.

Preserve the visual importance of:

* Campaign regions.
* Boss artwork.
* Weapons.
* Character identities.
* Rewards.
* Progress indicators.
* Combat information.

Avoid:

* Excessive gradients.
* Unnecessary animations.
* Overcrowded cards.
* Inconsistent corner radii.
* Randomly sized icons.
* Tiny text.
* Excessive empty space.
* Heavy blur effects that reduce readability.

Respect the established typography and color system.

# 13. MOBILE PERFORMANCE OPTIMIZATION

Make the game run smoothly on mid-range mobile devices as well as higher-end devices.

Inspect the current rendering and update architecture before optimizing it.

Focus on:

* Reducing unnecessary per-frame work.
* Reusing objects where practical.
* Avoiding repeated resource loading.
* Efficient sprite and texture handling.
* Reducing excessive draw calls where the framework allows.
* Avoiding expensive full-screen visual effects on weaker devices.
* Limiting unnecessary particle effects.
* Avoiding repeated layout recalculation.
* Preventing memory leaks.
* Correctly disposing of resources.
* Avoiding expensive image filters where unnecessary.
* Preventing duplicate animation loops.
* Avoiding excessive background processing.

Preserve the visual quality of the desktop version.

If quality settings already exist, use them to adapt visual effects to device capability.

If a new mobile performance setting is necessary, integrate it without removing existing options.

Do not reduce every texture or effect indiscriminately.

Use graceful quality adjustments rather than making the game visually poor.

Do not block the main gameplay thread with unnecessary work.

Aim for stable, responsive gameplay on supported devices.

Do not claim a particular frame rate has been achieved unless it has actually been measured.

# 14. MOBILE INPUT AND ACCESSIBILITY

Make touch interactions reliable and accessible.

Ensure:

* No accidental text selection during combat.
* No unwanted browser zoom from repeated combat taps where appropriate.
* No accidental page scrolling while using movement controls.
* No stuck movement inputs.
* No duplicated attack triggers.
* No controls activating through an open menu.
* No gameplay input leaking through a pause screen.
* No hover-only interactions that are unavailable to touch users.
* Clear focus and pressed states where appropriate.
* Adequate text contrast.
* Readable labels.
* Suitable button spacing.

Use appropriate platform-specific touch-event handling.

Do not disable ordinary scrolling throughout the entire application if only the active combat scene needs gesture suppression.

Keep scrolling available on content pages such as the campaign roadmap, arsenal, statistics, and settings.

# 15. SAFE AREA, VIEWPORT AND RESIZE HANDLING

Handle viewport changes properly.

If the game uses browser-based rendering:

* Use an appropriate viewport configuration.
* Account for device safe areas.
* Use responsive viewport units carefully.
* Handle virtual keyboard and browser chrome changes where relevant.
* Prevent the game from becoming clipped when the visible viewport changes.
* Recalculate layouts on resize and orientation change.
* Avoid relying entirely on fixed pixel heights.

If the game uses a native Java window or rendering surface:

* Use the existing platform's resize and input APIs.
* Respect logical screen dimensions and display scaling.
* Handle orientation and viewport changes according to platform support.

Do not apply web-specific techniques to a native rendering framework unless they are actually applicable.

# 16. TEST THE ENTIRE GAME ON MULTIPLE SCREEN SIZES

Do not finish after changing a few CSS rules or repositioning buttons.

Test the entire game.

At minimum, validate the layouts against representative viewports such as:

* 320 × 568.
* 360 × 640.
* 375 × 667.
* 390 × 844.
* 430 × 932.
* 568 × 320 landscape.
* 667 × 375 landscape.
* 844 × 390 landscape.
* 932 × 430 landscape.
* 768 × 1024 tablet.
* 1024 × 768 tablet landscape.
* 1366 × 768 desktop.
* 1920 × 1080 desktop.

These are test viewport sizes, not a claim that every physical device has those dimensions.

For browser-based games, use the existing browser testing tools and responsive emulation where available.

For native games, use the supported emulator, simulator, or actual-device testing workflow.

Check:

* Layout alignment.
* Text readability.
* Button sizing.
* Navigation.
* Scrolling.
* Character visibility.
* Combat HUD.
* Touch movement.
* Multi-touch.
* Attack registration.
* Pause behavior.
* Orientation changes.
* Settings persistence.
* Campaign progression.
* Weapon selection and upgrades.
* Victory and defeat.
* Desktop keyboard controls.
* Desktop HUD visibility.
* Performance.

Test both touch mode and desktop mode.

Specifically verify that mobile controls never appear in the desktop layout.

# 17. FINAL ACCEPTANCE CRITERIA

The work is complete only when all of the following conditions are satisfied:

1. The complete game adapts to mobile screens.
2. Every existing page is responsive.
3. The campaign roadmap is usable on phones.
4. Weapons and upgrades are fully usable on phones.
5. Settings remain complete and functional.
6. The combat arena scales without distorting characters.
7. The mobile HUD is displayed only in mobile touch mode.
8. Mobile movement controls are hidden on desktop.
9. Mobile attack controls are hidden on desktop.
10. Desktop keyboard controls continue working.
11. Desktop menus retain their existing functionality.
12. Multi-touch movement and attacks work correctly.
13. Touch cancellation cannot leave movement stuck.
14. Controls do not overlap important combat information.
15. No essential content is clipped.
16. Orientation changes do not reset a fight.
17. The game remains responsive on supported mobile devices.
18. Existing weapons, enemies, combat mechanics, and progression remain intact.
19. Existing save data and settings remain intact.
20. The implementation is tested rather than merely generated.

# FINAL INSTRUCTION

Inspect the complete existing codebase, implement the responsive mobile experience directly in the current project, and verify the result.

Do not return only a plan or a design mockup.

Do not create a separate nonfunctional mobile prototype.

Do not stop after optimizing the home page.

Complete the mobile optimization across the entire game, including every menu, campaign screen, settings page, arsenal page, and combat scene.

Keep the existing desktop experience intact.

The final result should feel like a professionally developed fighting game that works naturally on mobile phones, tablets, and desktop computers, with dedicated touch controls on mobile and the original keyboard-based combat interface on desktop.
