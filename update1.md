Upgrade my existing browser-based fighting game by implementing a complete, story-driven 15-level single-player campaign called SHADOW REQUIEM: THE FIFTEEN SEALS.

The current game contains:

Kaze (Ronin) as the player.
Shinobi (AI) as the opponent.
A functioning or partially functioning fighting system.
Health, posture, and shadow-energy meters.
Weapon combat.
Keyboard and touch controls.
An existing combat arena and HUD.

Preserve the existing project architecture and working gameplay. Inspect the source code before making modifications.

Do not replace the game with a static menu or a nonfunctional prototype.

STORY:

Five years ago, Kaze opened the forbidden Shrine of Echoes while attempting to save his younger sister, Akari. He drew the legendary black blade Nightfall, accidentally breaking the first of fifteen seals imprisoning an ancient entity known as the Hollow King.

The Hollow King consumes the shadows of warriors and uses their stolen memories and combat abilities to build an immortal army.

Kaze must confront fifteen encounters, uncover the corruption of the ancient clans, reunite with Akari, defeat the Hollow King, and finally confront his own corrupted shadow.

Create original dialogue, boss identities, environments, progression, and endings based on this premise.

CAMPAIGN STRUCTURE:

Ashen Forest — Goro, The Exiled Blade.
Abandoned Village — Kiba, The Blood Hound.
Crimson Dojo — Master Ren, The Silent Master.
Sunken Prison — Dreadmaw, The Chain Warden.
Temple of Embers — Lady Soryu, The Flame Widow.
Frozen Pass — General Raik, The Storm General.
Azure Fortress — Shinobi, The Masked Rival.
Black Market — Vex, The Phantom Dealer.
Blood Arena — Brutus, The Iron Colossus.
Shrine of Echoes — Shinobi, revealed as Akari.
Drowned City — Nami, The Drowned Oracle.
Obsidian Citadel — Lord Kurogane, The False Shogun.
Void Gate — The Hollow Knight, The Sealbreaker.
Throne of Shadows — The Hollow King, The Eternal Tyrant.
End of Time — Kaze's Shadow, The Last Ronin.

STORY REQUIREMENTS:

Implement a complete story progression system.

Each level should have:

A level name.
A chapter assignment.
A short narrative introduction.
An environment description.
A boss identity.
A boss combat style.
Boss-specific attack patterns.
Dialogue where appropriate.
A victory sequence.
A story revelation or progression event.
A completion state.
A reward.
A next-level unlock.

Implement story scenes as lightweight, skippable sequences using character poses, dialogue panels, camera movement, background effects, and transitions.

Use original dialogue rather than repeating generic one-line introductions.

LEVEL 10 MUST REVEAL THAT SHINOBI IS AKARI, KAZE'S YOUNGER SISTER.

LEVEL 14 MUST REVEAL THAT NIGHTFALL HAS BEEN RESTORING THE HOLLOW KING'S POWER.

LEVEL 15 MUST PIT KAZE AGAINST HIS OWN CORRUPTED SHADOW.

BOSS SYSTEM:

Create a reusable boss configuration and behavior system.

Each boss should support:

Name and title.
Health and posture values.
Attack range.
Movement speed.
Attack startup, active frames, and recovery.
A defined set of attacks.
Defensive behavior.
Difficulty settings.
Phase transitions.
Boss-specific visual effects.
Boss-specific dialogue.
Introductory and victory sequences.
A unique reward.

Do not implement bosses as identical enemies with different health values.

Implement distinct combat behavior for:

Goro: slow, readable sword attacks.
Kiba: fast daggers and evasions.
Ren: defensive counters.
Dreadmaw: chain attacks and range control.
Soryu: aggressive attacks and fire effects.
Raik: long-range spear attacks.
Shinobi: mobility and dual-blade combinations.
Vex: feints and readable shadow decoys.
Brutus: armored heavy attacks.
Akari: adaptive evasions and advanced combinations.
Nami: delayed attacks and timing variations.
Kurogane: defensive counters and powerful swordsmanship.
Hollow Knight: telegraphed supernatural attacks.
Hollow King: multiple phases and adaptive combat.
Shadow Kaze: imitation of the player's combat style.

All boss attacks must synchronize with their animations and actual hitboxes.

Avoid unavoidable damage, unfair attack timing, or instant kills without clear warnings.

CAMPAIGN MAP:

Create a polished, cinematic level-selection screen.

Display all 15 levels as interconnected nodes organized into five chapters.

Each node should show:

Level number.
Level name.
Boss name where applicable.
Completion state.
Locked, available, or completed status.

Selecting a node should display:

Environment preview.
Story summary.
Boss introduction.
Difficulty.
Available rewards.
A functional Play button.

Lock future levels until the appropriate previous level is completed.

Provide a way to revisit unlocked levels.

WEAPONS AND REWARDS:

Integrate the campaign with the existing weapon system.

Proposed rewards:

Level 1: Iron Katana.
Level 2: Twin Daggers.
Level 3: Crimson Guard accessory.
Level 4: Chain Blade.
Level 5: Ember Katana.
Level 6: Storm Spear.
Level 7: Azure Blades.
Level 8: Phantom Daggers.
Level 9: Heavy Cleaver.
Level 10: Eclipse Technique.
Level 11: Tidal Blades.
Level 12: Obsidian Armor.
Level 13: Void Counter.
Level 14: Awakened Nightfall.
Level 15: True Shadow Form, depending on the ending.

Only grant rewards that have real functionality. Do not represent unavailable weapons or abilities as unlocked and usable.

Provide a reward screen after each completed encounter.

Allow equipment changes between levels if supported by the current architecture.

CHARACTER PROGRESSION:

Create a persistent campaign state containing:

Current chapter.
Highest unlocked level.
Completed levels.
Defeated bosses.
Unlocked weapons.
Unlocked abilities.
Selected equipment.
Story choices.
Ending conditions.

Use the project's existing persistence system if available.

If there is no backend, use a carefully validated local save system as a fallback.

Provide a new-game option and an appropriate confirmation before resetting progress.

Do not allow ordinary page refreshes to reset the entire campaign.

ENDINGS:

Implement three possible endings:

TRUE RONIN: Kaze destroys Nightfall and releases the stolen shadows.
ETERNAL SHADOW: Kaze absorbs the remaining power and becomes immortal.
BROKEN SEAL: Kaze sacrifices his power to permanently seal the gate.

Ending choices must affect the actual narrative and ending sequence.

Do not display all three endings as simultaneously completed.

VISUAL PRESENTATION:

Match the cinematic shadow-warrior art direction.

Each environment should have a distinct visual identity:

Moonlit forest.
Burning village.
Ancient dojo.
Underground prison.
Ember temple.
Frozen fortress.
Azure ninja compound.
Underground market.
Blood arena.
Fractured shrine.
Drowned city.
Obsidian castle.
Void dimension.
Shadow throne.
Collapsing final arena.

Use reusable environment-rendering systems with configurable backgrounds, parallax, lighting, particle effects, and color palettes.

Add boss introductions, health-bar transitions, attack effects, victory poses, and level-completion animations.

Preserve visual clarity during combat.

Do not use copyrighted game assets or extracted Shadow Fight 2 resources.

Use original or appropriately licensed artwork.

GAME FLOW:

Implement:

Main menu.
Campaign selection.
Story introduction.
Level loading.
Boss introduction.
Combat.
Victory or defeat.
Reward screen.
Level unlock.
Next-level progression.
Pause and resume.
Replay.
Ending sequence.

Every visible control must work.

Ensure that restarting a level resets the combat state correctly without destroying campaign progress.

Ensure that the current boss, health bars, weapons, and animations update correctly when changing levels.

TESTING:

Test all 15 level configurations.

Verify:

Correct level loading.
Correct boss selection.
Correct weapons and rewards.
Correct story progression.
Level unlocking.
Campaign persistence.
Boss phase transitions.
Victory and defeat.
Pause and resume.
Restart behavior.
The Level 10 identity reveal.
The Level 14 revelation.
The Level 15 final fight.
Ending selection and completion.

Do not claim that every level has been tested if only a subset has been executed.

Do not stop after creating the level-selection screen.

The campaign must connect to the actual combat engine.

IMPLEMENTATION PRIORITY:

First, build the campaign-state architecture and one complete playable level.

Then connect boss configurations, story transitions, and rewards.

Next, implement the remaining encounters and chapter progression.

Finally, add cinematic polish, visual transitions, save functionality, and testing.

Reuse existing systems wherever possible.

Fix errors caused by the implementation.

Do not remove the existing keyboard or touch controls.

Do not break the player's current combat functionality.

FINAL GOAL:

Deliver a playable, story-driven, 15-level shadow-fighting campaign with original lore, distinct bosses, meaningful progression, cinematic introductions, weapon rewards, a major mid-game revelation, a powerful final confrontation, and three possible endings.

Start by inspecting the existing codebase and then implement the campaign directly.

This separation is essential for making the game genuinely playable rather than simply beautiful in screenshots.

What I would prioritize first
Fix the existing character anatomy, movement, and weapon animations.
Generate and integrate the Level 1 background and Goro.
Complete one polished boss encounter from beginning to end.
Establish the reusable character, environment, and boss systems.
Generate and integrate the remaining 14 environments and bosses.
Implement the complete campaign, story, and progression UI.
Add the cinematic effects, rewards, endings, and final polish.

This approach gives you a working quality standard to reproduce across the entire campaign instead of generating 15 beautiful environments that do not connect properly to the game.

The goal is not just to make your game look like a premium fighting game in a screenshot. It is to make the characters, weapons, backgrounds, UI, and animations work together as one complete experience.