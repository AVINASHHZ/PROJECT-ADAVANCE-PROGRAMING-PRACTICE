MASTER DEVELOPMENT PROMPT
SHADOW REQUIEM: THE FIFTEEN SEALS
WEAPON ANIMATION, COMBAT PHYSICS, ENEMY AI, BOSS MOVEMENT & CINEMATIC FIGHTING SYSTEM

Act as a senior fighting-game combat designer, gameplay programmer, technical animator, character-rigging specialist, AI combat engineer, VFX artist, and cinematic game developer.

Your task is to transform the existing combat system in SHADOW REQUIEM: THE FIFTEEN SEALS into a polished, responsive, visually impressive fighting game inspired by the fluid combat, weapon variety, dramatic silhouettes, and satisfying impact of Shadow Fight 2.

Do not copy Shadow Fight 2's proprietary characters, weapon designs, animations, artwork, or other distinctive assets. Create original characters, weapon designs, movements, combat mechanics, and effects.

The objective is to achieve a similarly polished combat experience while maintaining the unique identity of SHADOW REQUIEM.

CRITICAL REQUIREMENT: MODIFY THE EXISTING GAME

First inspect the entire existing project.

Identify:

The game engine and rendering system.
The player character implementation.
The enemy character implementation.
The existing movement controller.
The combat and damage system.
The current weapon representation.
The animation system.
The hitbox and hurtbox implementation.
The enemy AI.
The existing campaign and boss data.
The existing UI and asset-loading pipeline.
The current save and progression systems.

Understand how the game currently works before modifying it.

Do not create a separate fighting demo.

Do not replace working systems without a technical reason.

Do not destroy the current campaign, weapon inventory, UI, or player progression.

Preserve existing functionality and improve it incrementally.

The current game has a side-view fighting format featuring Kaze (Ronin) and Shinobi (AI). Retain the existing identity and controls unless the project explicitly requires a compatible adjustment.

All new combat systems must integrate with the current architecture.

PART 1 — BUILD A REAL WEAPON ANIMATION SYSTEM
1.1 Stop treating weapons as decorative objects

Weapons must be attached to the character's hand and follow the actual attack animation.

Never render a weapon at a fixed screen coordinate while the character moves independently.

Never animate the weapon separately from the hand without a defined attachment system.

Never allow a weapon to float, detach, rotate incorrectly, or pass through the character's body unintentionally.

Create a weapon attachment system appropriate to the existing engine.

For a skeletal or 3D character:

Attach the weapon to a hand socket or suitable hand bone.
Configure the grip orientation.
Configure the weapon's local position and rotation.
Support different grips for different weapon categories.
Maintain correct attachment throughout movement and attack animations.

For a 2D skeletal character:

Attach the weapon to the hand bone.
Use appropriate weapon pivots.
Animate the arm and weapon together.
Preserve consistent weapon proportions and perspective.

For a procedurally drawn stick-figure or 2D character:

Calculate shoulder, elbow, wrist, and hand positions.
Draw the arm through connected joints.
Calculate the weapon grip from the hand position.
Rotate the weapon around the grip point.
Animate the blade through a coherent attack arc.
Ensure the weapon follows the hand during the entire attack.

Use the existing animation system wherever possible.

1.2 Weapon grip configurations

Implement different grip configurations.

SINGLE-HANDED WEAPONS:

One-handed sword.
Daggers.
Short blades.
Compact axes.

TWO-HANDED WEAPONS:

Greatswords.
Great hammers.
Long polearms.
Heavy executioner weapons.

DUAL WIELDING:

One weapon attached to each hand.
Independent weapon transforms.
Coordinated attack combinations.
Correct left-hand and right-hand attack timing.

CHAIN WEAPONS:

Handle attached to the hand.
Chain represented by a connected chain simulation or appropriate segmented animation.
Weighted blade follows the chain trajectory.
Controlled lag and momentum.
No disconnected chain segments.

TRANSFORMING WEAPONS:

Consistent base attachment.
Controlled transformation animation.
Correct transition between weapon configurations.
No sudden unrelated model replacement.

A weapon's grip must match its shape and category.

PART 2 — WEAPON MOVEMENT AND ANIMATION PHYSICS

Create a convincing weapon-motion system.

Weapon movement should communicate weight, acceleration, momentum, and recovery.

Do not make every weapon rotate at the same speed.

2.1 Attack animation phases

Every attack must contain these phases:

Anticipation.
Wind-up.
Active attack.
Impact.
Follow-through.
Recovery.
Return to combat stance.

These phases must affect gameplay, not just appearance.

ANTICIPATION:
The character prepares for the attack.

WIND-UP:
The weapon accelerates into the attack.

ACTIVE ATTACK:
The weapon's damaging hitbox becomes active during the appropriate frames.

IMPACT:
The target reacts if the attack connects.

FOLLOW-THROUGH:
The weapon continues naturally through the strike.

RECOVERY:
The character regains balance and becomes ready for the next action.

RETURN TO STANCE:
The character returns to the correct weapon-specific ready pose.

A heavy hammer should have a noticeably different wind-up and recovery from a dagger.

A spear thrust should not use the same trajectory as a curved sword slash.

A chain weapon must not move like a rigid blade.

2.2 Weapon weight and momentum

Implement weapon-specific movement parameters.

Every weapon should define:

Mass class.
Swing acceleration.
Angular speed.
Attack duration.
Recovery duration.
Movement commitment.
Follow-through.
Recoil.
Weapon trail duration.
Hit reaction strength.
Posture damage.

Use these parameters to create distinct motion.

LIGHT WEAPONS:

Fast acceleration.
Short wind-up.
Rapid recovery.
Small movement commitment.
Quick directional changes.

MEDIUM WEAPONS:

Balanced acceleration.
Moderate wind-up.
Controlled follow-through.
Balanced recovery.

HEAVY WEAPONS:

Slower acceleration.
Longer wind-up.
Strong follow-through.
More committed movement.
Longer recovery.
Stronger impact response.

POLEARMS:

Extended reach.
Larger movement arcs.
Two-handed grip where appropriate.
Distinct thrust and sweep animations.

CHAIN WEAPONS:

Delayed weighted movement.
Controlled swinging arcs.
Appropriate momentum.
Clear telegraphs before dangerous attacks.

Do not simulate weight by merely reducing the animation playback speed. Design the complete attack motion around the weapon category.

PART 3 — THE 15 WEAPONS AND THEIR DEDICATED ANIMATIONS

Implement the following 15 original weapons.

Each weapon must have its own animation configuration, combat parameters, and visual identity.

Where practical, provide at least:

Idle or ready stance.
Light attack.
Heavy attack.
Second attack or combo follow-up.
Special ability.
Block or defensive response.
Hit reaction while equipped.
Recovery animation.
Victory pose.

Use additional attacks where the weapon's design calls for them.

Do not simply recolor the same animation for every weapon.

WEAPON 01 — NIGHTFALL

Type: Katana.
Combat identity: Balanced precision.

Required animations:

Calm two-handed or appropriate one-handed ready stance, consistent with the character's design.
Quick diagonal slash.
Reverse horizontal cut.
Forward thrust.
Overhead heavy strike.
Shadow Cut special.

Movement:
Controlled footwork, moderate attack commitment, balanced recovery.

Blade motion:
The sword should follow a clean cutting arc.

Effects:
Subtle crimson blade trail, realistic steel impact sparks, restrained shadow particles during the special attack.

The weapon must feel precise rather than excessively heavy.

WEAPON 02 — WRAITH FANGS

Type: Twin daggers.
Combat identity: Fast close-range pressure.

Required animations:

Low, forward-leaning dual-dagger stance.
Alternating left-right attacks.
Rapid cross-slash.
Short forward lunge.
Low attack.
Phantom Flurry special.

Movement:
Short steps, quick direction changes, fast recovery, and aggressive close-range footwork.

Both daggers must move independently.

Do not make the daggers rotate as one combined rigid object.

The left and right arms must follow coordinated but distinct trajectories.

WEAPON 03 — SKYBREAKER

Type: Long spear.
Combat identity: Reach and precision.

Required animations:

Extended spear-ready stance.
Long forward thrust.
Retreating thrust.
Low sweep.
Two-stage spear combination.
Piercing Horizon special.

Movement:
Maintain distance, advance during thrusts, and recover without snapping back to the starting position.

The spear must remain aligned with the attack direction.

The active hitbox must follow the spearhead.

WEAPON 04 — IRON MAW

Type: Heavy war axe.
Combat identity: Crushing attacks.

Required animations:

Heavy axe-ready stance.
Overhead chop.
Wide horizontal swing.
Delayed heavy attack.
Recovery with visible follow-through.
Breaker's Fall special.

Movement:
Strong attack commitment and deliberate recovery.

The character should shift body weight during heavy swings.

The axe must not move through the torso.

The special attack should produce a localized ground-impact effect when it connects with the intended surface or target.

WEAPON 05 — EMBER TWINBLADES

Type: Paired short swords.
Combat identity: Continuous aggression.

Required animations:

Dual-blade ready stance.
Alternating cuts.
Cross-body combination.
Advancing multi-hit sequence.
Short spinning combination.
Cinder Storm special.

Movement:
Forward pressure, flowing combinations, and controlled rotational movement.

The blades should be longer and heavier in motion than the Wraith Fangs daggers.

Use restrained ember trails rather than constant fire around the weapons.

WEAPON 06 — STORMPIERCER

Type: Reinforced spear.
Combat identity: Charged reach attacks.

Required animations:

Firm two-handed spear stance.
Long thrust.
Charged thrust.
Sweeping counter.
Retreating counter-thrust.
Thunder Lance special.

Movement:
Controlled stance and deliberate charged attacks.

During a charged attack, clearly telegraph the attack before releasing it.

The electrical effect should follow the spear's actual attack direction.

Do not allow the lightning effect to damage an enemy outside the attack's valid range.

WEAPON 07 — AZURE REAPERS

Type: Paired crescent blades.
Combat identity: Mobility and evasive attacks.

Required animations:

Low, agile ready stance.
Alternating crescent slashes.
Rotational sweep.
Backward evasive step followed by a counter.
Low-to-high combination.
Eclipse Step special.

Movement:
Use short evasive steps and carefully controlled rotations.

Do not make every attack a full-body spin.

The curved blades must maintain their correct orientation throughout the animation.

WEAPON 08 — CHAIN OF RUIN

Type: Chain weapon with weighted blade.
Combat identity: Variable range.

Required animations:

Chain-ready stance.
Short-range chain strike.
Overhead swing.
Wide horizontal chain attack.
Recovery with visible chain deceleration.
Grave Snare special.

Movement:
The handle moves with the character's hand.

The chain and weighted blade follow the handle with controlled delay.

If using a physical chain simulation, use stable constraints and sensible limits.

If using procedural animation, use a controlled sequence of connected segments or a curved chain representation.

Prevent chain jitter, excessive stretching, and unexpected clipping.

The weighted end must not teleport between attack positions.

WEAPON 09 — TITAN'S GRUDGE

Type: Great hammer.
Combat identity: High impact and posture damage.

Required animations:

Wide, heavy hammer stance.
Two-handed overhead slam.
Horizontal hammer swing.
Charged ground attack.
Long recovery.
Worldcracker special.

Movement:
The character should show a noticeable wind-up and transfer of body weight.

Use a large but controlled impact reaction.

Ground effects must originate from the actual impact point.

The hammer must remain attached to the hands during the entire animation.

WEAPON 10 — ECLIPSE NAGINATA

Type: Naginata.
Combat identity: Long-range sweeping control.

Required animations:

Long polearm ready stance.
Wide horizontal sweep.
Diagonal cut.
Low sweep.
Retreating counter.
Moon Veil special.

Movement:
Use large, controlled polearm arcs and appropriate two-handed grips.

The weapon should control space through its reach.

Do not animate it like a short sword.

The blade should travel along the intended sweep path.

WEAPON 11 — TIDEBREAKER

Type: Paired curved blades.
Combat identity: Flowing attack combinations.

Required animations:

Flowing dual-blade stance.
Alternating curved cuts.
Low sweep.
Rising slash.
Timed follow-up combination.
Rising Tide special.

Movement:
Attacks should transition smoothly without the character snapping between poses.

Use controlled motion and directional changes.

The blades must remain visually separate from the Azure Reapers.

Their movement should emphasize flowing combinations rather than evasive spinning.

WEAPON 12 — OBSIDIAN FISTS

Type: Heavy gauntlets.
Combat identity: Close-range pressure.

Required animations:

Compact defensive boxing stance.
Left punch.
Right punch.
Heavy straight punch.
Body combination.
Rising strike.
Iron Tempest special.

Movement:
Use body rotation, shoulder movement, and appropriate footwork.

The fists must remain aligned with the forearms.

Do not render detached gauntlets floating in front of the hands.

Use short-range hitboxes that activate only during the appropriate portions of the punches.

WEAPON 13 — VOIDCLEAVER

Type: Greatsword.
Combat identity: Heavy supernatural slashes.

Required animations:

Wide two-handed ready stance.
Heavy diagonal slash.
Wide horizontal sweep.
Charged overhead attack.
Committed advancing attack.
Rift Execution special.

Movement:
The character should use broad, weighty motions with clear recovery.

Use a restrained distortion effect at valid impact points.

Do not use constant screen distortion.

The sword's size, grip, and attack trajectory must remain consistent.

WEAPON 14 — KINGSLAYER

Type: Long executioner's sword.
Combat identity: Precision and reach.

Required animations:

Long-sword ready stance.
Long diagonal cut.
Overhead attack.
Two-stage advancing combination.
Precision counter.
Sovereign's Judgment special.

Movement:
The attacks should be controlled, deliberate, and highly damaging when timed correctly.

Distinguish Kingslayer from Nightfall through its length, two-handed grip, attack arcs, recovery, and movement commitment.

The special attack must be telegraphed and avoidable.

WEAPON 15 — ETERNAL NIGHT

Type: Transforming shadow blade.
Combat identity: Adaptive endgame weapon.

Required animations:

Compact blade ready stance.
Extended blade configuration.
Visible transformation.
Fast compact-blade attack.
Extended shadow slash.
Transformation attack.
Final Eclipse special.
Transformation recovery.

Movement:
The weapon must maintain consistent hand attachment throughout its transformation.

The transformation must be animated rather than represented by an instantaneous model swap.

The extended form must have a distinct reach and attack configuration.

Do not allow the weapon to become visually unreadable because of excessive particles.

The special ability must have clear activation, duration, resource cost, and recovery.

PART 4 — WEAPON HIT DETECTION AND COMBAT FEEDBACK

Make weapon attacks physically and mechanically consistent.

Use the existing hitbox system where possible.

If the current system has unreliable hit detection, improve it.

Hit detection

Implement weapon-specific hit detection.

For a sword:
Use a suitable blade segment, capsule, swept volume, or sampled trajectory.

For a spear:
Use the spearhead trajectory and appropriate thrust volume.

For a hammer:
Use a broad head-shaped or swept impact volume.

For daggers:
Use short-range hitboxes that follow each dagger independently.

For gauntlets:
Use fist-based hitboxes active during the punch.

For chain weapons:
Use appropriate chain or weighted-end hit detection.

Do not use a single oversized rectangle for every attack.

Do not let weapons damage enemies merely because the weapon sprite overlaps their body outside the active attack frames.

Avoid tunneling through targets during fast attacks by using swept hit detection or an equivalent approach suitable for the engine.

Attack timing

Every attack must define:

Startup duration.
Active duration.
Recovery duration.
Damage.
Reach.
Attack direction.
Hitbox geometry.
Block interaction.
Interruptibility.
Resource cost where applicable.

Damage must be applied once per intended hit, not every frame that the weapon overlaps the target.

Multi-hit attacks must use explicit hit tracking.

Impact feedback

Implement appropriate responses:

Brief hit pause.
Controlled recoil.
Character hit reaction.
Weapon impact sound.
Sparks for metallic impacts.
Dust for ground impacts.
Directional knockback.
Optional camera shake for powerful attacks.
Boss-specific impact responses.

Use hit pause sparingly and tune it by attack weight.

Do not freeze the entire game for every minor hit.

Ensure impact effects do not obscure gameplay.

PART 5 — REALISTIC CHARACTER MOVEMENT

Upgrade the movement system so the characters look like combatants rather than rigid figures sliding across the floor.

Implement or improve:

Idle breathing.
Ready-stance movement.
Forward movement.
Backward movement.
Acceleration and deceleration.
Controlled crouching.
Jumping and landing.
Rolling or evasive movement where supported.
Blocking.
Hit reactions.
Knockback.
Recovery.
Victory and defeat animations.
Locomotion

Use separate movement behavior for different weapon categories.

Daggers:
Fast footwork and quick directional changes.

Katana:
Balanced movement and controlled steps.

Spear:
Measured movement with distance management.

Heavy axe:
Deliberate movement and greater attack commitment.

Great hammer:
Slow, grounded movement and powerful committed attacks.

Greatsword:
Controlled steps, heavy turns, and broad attack transitions.

Gauntlets:
Compact footwork, close-range positioning, and fast punch recovery.

Chain weapon:
Careful positioning to preserve usable attack range.

Do not exaggerate movement until the character looks weightless.

Movement transitions

Prevent:

Instant teleportation between positions.
Sudden character scale changes.
Arms snapping into unrelated poses.
Weapons passing through the ground.
Legs sliding excessively.
Characters remaining in attack poses indefinitely.
Characters attacking while playing an unrelated movement animation.

Blend compatible movement and attack states.

Use animation priority or an equivalent state-control system.

An attack should not be interrupted by a normal idle animation unless the combat rules permit it.

PART 6 — UNIQUE ENEMY WEAPONS AND COMBAT IDENTITIES

IMPORTANT:

The enemies must not simply use the player's weapons with different colors.

Each major enemy should have a distinctive weapon design, grip, attack timing, movement pattern, and AI strategy.

Bosses should be recognizable from their silhouette and fighting style before the player reads their name.

Create enemy weapons that are visually different from the 15 player weapons.

Some enemy weapons may belong to similar broad categories, but their shapes, proportions, and movesets must be distinctive.

Do not create 15 identical enemies with different health values.

Every enemy needs an actual combat behavior profile.

For each boss, implement:

Unique weapon design.
Unique ready stance.
Unique locomotion style.
Unique attack animations.
At least one signature attack.
Distinct attack timing.
Unique defensive behavior.
A punish window or exploitable weakness.
Appropriate hit reactions.
A victory or defeat presentation.
A boss-specific phase transition where appropriate.

The player must be able to learn each boss's patterns and counter them.

Avoid attacks that are impossible to react to or unavoidable without explanation.

PART 7 — THE 15 BOSS WEAPONS AND THEIR ANIMATIONS

Use the existing campaign's established boss names and story.

If a boss already has a defined appearance, preserve it.

Do not overwrite established character designs with unrelated concepts.

BOSS 01 — GORO

Weapon: Ashen Oathblade.

Design:
A broad, weathered samurai sword with a battered iron guard and a dark, chipped blade.

Combat identity:
Disciplined introductory swordmaster.

Animations:

Controlled ready stance.
Horizontal cut.
Diagonal cut.
Slow overhead attack.
Defensive counter.
Ashen Crescent signature attack.

Movement:
Measured footwork, stable positioning, and clear attack telegraphs.

AI:
Teaches the player to recognize sword range, block, and punish recovery.

Weakness:
Slow overhead attacks leave a punish window when avoided.

BOSS 02 — KIBA

Weapon: Twin Ripper Knives.

Design:
Two long, asymmetrical hunting knives with hooked profiles and wrapped grips.

Combat identity:
Aggressive assassin.

Animations:

Low crouched stance.
Rapid alternating cuts.
Forward lunge.
Backward evasive step.
Twin Fang Rush.

Movement:
Fast bursts, short retreats, and unpredictable but readable spacing.

AI:
Attempts to exploit distance and punish slow player attacks.

Weakness:
Has limited defensive stability after a missed lunge.

BOSS 03 — REN

Weapon: Ironwood Resonance Staff.

Design:
A reinforced dark wooden staff with metal collars and a distinctive central grip.

Combat identity:
Counterattacking martial arts master.

Animations:

Relaxed staff stance.
Quick staff jab.
Circular sweep.
Defensive redirection.
Double-ended combination.
Resonance Break.

Movement:
Small, precise steps and efficient repositioning.

AI:
Uses defense and counters rather than continuously attacking.

Weakness:
Can be pressured after a failed counter.

BOSS 04 — DREADMAW

Weapon: Execution Chain and Caged Flail.

Design:
A heavy iron chain connected to a brutal, cage-shaped metal weight.

Combat identity:
Heavy control and space denial.

Animations:

Chain dragging.
Overhead flail swing.
Wide chain sweep.
Heavy downward slam.
Chain Snare.

Movement:
Slow advance, strong area control, and deliberate recovery.

AI:
Attempts to control the player's distance.

Weakness:
Long recovery after the largest swings.

Technical requirement:
Keep the chain connected to the handle or attachment point and prevent it from stretching or jittering.

BOSS 05 — SORYU

Weapon: Crimson Dragon Jian.

Design:
A slender, straight double-edged sword with an ornate guard and restrained crimson detailing.

Combat identity:
Elegant precision.

Animations:

Upright duelist stance.
Rapid thrust.
Precise diagonal cut.
Parry followed by counterattack.
Crimson Dragon Sequence.

Movement:
Minimal wasted movement and sharp directional changes.

AI:
Punishes predictable attacks and rewards careful timing.

Weakness:
Longer recovery after the completed multi-hit sequence.

BOSS 06 — RAIK

Weapon: Thunder Standard Glaive.

Design:
A heavy military glaive with a reinforced pole, broad asymmetric blade, and metal fittings.

Combat identity:
Armored battlefield commander.

Animations:

Grounded two-handed stance.
Long thrust.
Broad glaive sweep.
Advancing attack.
Thunder Standard.

Movement:
Strong forward pressure and disciplined distance control.

AI:
Attempts to keep the player inside its polearm range.

Weakness:
Vulnerable when the player closes distance during a missed long attack.

BOSS 07 — SHINOBI

Weapon: Twin Crescent Kodachi.

Design:
Two compact, asymmetrical curved swords with dark fittings and cyan highlights.

Combat identity:
Fast, technical mirror rival.

Animations:

Low assassin stance.
Alternating blade strikes.
Evasive dash.
Delayed cross-slash.
Phantom Crossing.

Movement:
Fast repositioning and deliberate baiting.

AI:
Studies the player's attack rhythm and occasionally punishes repeated behavior.

Weakness:
After a failed evasive maneuver, Shinobi becomes vulnerable briefly.

IMPORTANT:
Shinobi is a major rival, not a simple recolored version of the player's dual-blade character.

Give Shinobi distinct proportions, weapon design, stance, timing, and AI.

BOSS 08 — VEX

Weapon: Marionette Blades.

Design:
Two narrow blades connected to a dark mechanical hilt with visible articulated metal fittings.

Combat identity:
Unpredictable trickster.

Animations:

Off-balance idle pose.
Deceptive wind-up.
Rapid short-range attack.
Sudden retreat.
False Opening.
Marionette Reversal.

Movement:
Feints, hesitation, and unusual but readable attack timing.

AI:
Attempts to bait the player into attacking too early.

Weakness:
Feints cannot deal damage by themselves, and committed attacks have real recovery.

BOSS 09 — BRUTUS

Weapon: Colossus Maul.

Design:
A massive rectangular metal maul with reinforced side plates and a thick handle.

Combat identity:
Armored powerhouse.

Animations:

Heavy grounded stance.
Overhead smash.
Horizontal maul strike.
Charged ground slam.
Colossus Impact.

Movement:
Slow but forceful advances.

AI:
Uses high posture damage and area pressure.

Weakness:
Slow attacks and substantial recovery.

Do not give Brutus instantaneous turning or weightless movement.

BOSS 10 — AKARI

Weapon: Sunpiercer Fans.

Design:
A pair of reinforced metal war fans with sharp outer ribs and a distinct folding mechanism.

Combat identity:
Agile counterattacker.

Animations:

Closed-fan ready stance.
Fan opening.
Alternating fan strikes.
Short evasive step.
Deflecting counter.
Solar Crosswind.

Movement:
Light footwork, controlled retreats, and quick counterattacks.

AI:
Attempts to bait the player into overcommitting.

Weakness:
Less effective against patient players who wait for her attacks.

The fans must visibly open and close during appropriate animations.

Do not represent them as ordinary swords.

BOSS 11 — NAMI

Weapon: Twin Tide Crescents.

Design:
Two elongated crescent-shaped blades with flowing metal details and turquoise accents.

Combat identity:
Flowing supernatural duelist.

Animations:

Smooth dual-blade stance.
Low sweep.
Rising cut.
Rotational combination.
Tidal Veil.

Movement:
Smooth attack transitions and controlled spacing.

AI:
Uses linked attack patterns and punishes poor defensive timing.

Weakness:
Longer recovery after her complete tidal sequence.

Water effects must remain attached to the attack trajectory and must not become opaque walls that hide the action.

BOSS 12 — KUROGANE

Weapon: Shogun's Breaker.

Design:
A massive armored kanabo with metal studs, a reinforced shaft, and ornate blackened-steel fittings.

Combat identity:
Armored tyrant.

Animations:

Heavy guarded stance.
Overhead crushing strike.
Short-range body check if supported by the existing combat system.
Defensive brace.
Armor Breaker.

Movement:
Deliberate movement and strong guard pressure.

AI:
Blocks frequently, forces the player to vary attack height, and retaliates after blocked heavy attacks.

Weakness:
Slow attack recovery and limited agility.

BOSS 13 — THE HOLLOW KNIGHT

Weapon: Graveglass Greatsword.

Design:
A long, ancient greatsword with chipped translucent mineral inclusions and partially corroded metal.

Combat identity:
Ancient guardian.

Animations:

Heavy guarded stance.
Slow diagonal cut.
Advancing slash.
Delayed overhead strike.
Graveglass Rupture.

Movement:
Slow, deliberate, and unnervingly controlled.

AI:
Uses deceptive pauses and attacks with carefully varied timing.

Weakness:
Its largest attacks are powerful but punishable.

Visual effects:
Subtle fractures and spectral particles, not constant full-screen distortion.

BOSS 14 — THE HOLLOW KING

Weapon: Thronebreaker Scepter.

Design:
An enormous ceremonial scepter combining a dark-metal shaft, a jagged crown-shaped head, and suspended shadow fragments.

Combat identity:
Supernatural ruler.

Animations:

Regal ready stance.
Scepter sweep.
Heavy downward strike.
Shadow-assisted repositioning.
Crownfall.

Movement:
Slow, deliberate positioning punctuated by clearly telegraphed supernatural movement.

AI:
Combines weapon attacks with limited, readable shadow abilities.

Weakness:
Shadow movement has a defined recovery window.

The weapon must remain physically readable even during supernatural effects.

BOSS 15 — SHADOW KAZE

Weapon: Ruinbound Echo.

Design:
A corrupted mirror of Kaze's signature weapon, featuring fractured dark metal and restrained crimson-black energy.

Combat identity:
Final mirror duel.

Animations:

Mirrored opening stance.
Counter-slash.
Reversed attack sequence.
Shadow dash.
Signature heavy strike.
Echo of Ruin.
Final Eclipse phase transition.

Movement:
Uses recognizable elements of Kaze's combat style but changes timing and direction.

AI:
Responds to the player's habits, punishes repetitive attack sequences, and uses limited adaptations.

Do not make Shadow Kaze perfectly copy every player input.

The boss must operate through fair AI decision-making.

Weakness:
Its powerful mirror attacks create defined recovery windows.

The fight should test the player's understanding of movement, timing, blocking, and weapon range.

PART 8 — UNIQUE REGULAR ENEMY WEAPON CLASSES

Bosses alone are not enough.

Create a reusable library of regular enemies with distinctive weapons and movement patterns.

Implement at least these enemy archetypes:

Sword Guard
Straight sword.
Balanced attacks.
Basic blocks and counters.
Dual Knife Assassin
Paired short blades.
Fast lunges and evasive steps.
Spear Sentinel
Long spear.
Distance control and thrusts.
Axe Raider
Single heavy axe.
Slow, high-impact attacks.
Chain Warden
Weighted chain.
Sweeps and variable-range attacks.
Staff Adept
Long staff.
Defensive redirection and quick jabs.
Hammer Brute
Heavy hammer.
High posture damage and slow recovery.
Blade Dancer
Paired curved swords.
Flowing combinations and directional changes.
Armored Knight
Heavy sword and shield, if shields are supported.
Blocking, guarded advances, and counterattacks.
Shadow Stalker
Original short shadow blade.
Evasive movement and controlled shadow abilities.

Each archetype needs:

A unique silhouette.
A distinctive weapon.
Its own ready stance.
Weapon-appropriate movement.
At least two regular attacks.
One distinctive attack combination.
A defensive or evasive behavior.
A readable weakness.
Appropriate hit reactions.

Reuse technical infrastructure, but do not make every archetype look or fight identically.

PART 9 — ENEMY AI AND COMBAT DECISIONS

Implement weapon-aware enemy AI.

Enemies must consider:

Distance to the player.
Current attack range.
Player attack state.
Player recovery state.
Current health.
Their own recovery state.
Whether their attack can reach the player.
Whether the player is blocking.
Whether the player is vulnerable.
Boss phase.
Available special ability.
Cooldowns.

Use a clear state machine or equivalent architecture.

Suggested states:

Idle.
Approach.
Maintain Distance.
Circle or Reposition.
Prepare Attack.
Attack.
Recover.
Block.
Evade.
Stagger.
Knockback.
Special Attack.
Phase Transition.
Defeated.

Do not allow contradictory actions to run simultaneously.

For example, an enemy should not:

Start a new attack during an incompatible heavy recovery.
Teleport to the player without a defined ability.
Change weapons during a strike.
Move through the floor.
Continue attacking after defeat.
Deal damage when its weapon is nowhere near the player.
Enemy personalities

Give every enemy a distinct combat profile.

AGGRESSIVE:
Pressures the player and uses short recovery windows.

DEFENSIVE:
Blocks and looks for counters.

ASSASSIN:
Uses fast entries, short attacks, and retreats.

HEAVY:
Uses slow, high-impact attacks and strong posture pressure.

TACTICAL:
Maintains range and chooses attacks based on player positioning.

TRICKSTER:
Uses feints and irregular but readable timing.

BOSS:
Uses a carefully designed move set, phase logic, and signature attacks.

AI must not rely on cheating by secretly changing damage or health.

Difficulty should come from attack choices, timing, movement, and defensive behavior.

PART 10 — BOSS PHASES AND SIGNATURE ATTACKS

Major bosses should feel like distinct encounters.

Where appropriate, give bosses two phases.

For example:

Phase 1: Controlled conventional combat.
Phase 2: A new attack combination or modified weapon behavior.

Phase transitions must include:

A readable visual cue.
A brief transition animation.
A controlled change in combat behavior.
Appropriate audio.
A clear return to gameplay.

Do not make bosses invulnerable indefinitely during transitions.

Do not spawn unavoidable attacks directly on the player.

Do not use full-screen effects that obscure incoming attacks.

Boss signature attacks must have:

A recognizable wind-up.
A defined attack area.
A valid hit detection window.
An appropriate damage value.
A clear recovery period.
A counterplay opportunity.
PART 11 — WEAPON TRAILS AND CINEMATIC EFFECTS

Create weapon-specific visual effects.

KATANA:
A thin, fast blade trail.

DAGGERS:
Short, sharp trails with rapid direction changes.

SPEARS:
Narrow thrust streaks.

AXES:
Broad but brief swing trails.

DUAL BLADES:
Two separate trails following the actual blades.

CHAIN WEAPONS:
A controlled trail following the weighted end.

HAMMERS:
A short, heavy impact burst.

NAGINATA:
A broad crescent following the polearm blade.

GAUNTLETS:
Compact impact flashes.

GREATSWORDS:
A broad, restrained cutting trail.

TRANSFORMING WEAPONS:
A visible transformation effect followed by the appropriate attack trail.

Elemental effects must reflect weapon identity.

Fire:
Controlled embers and short-lived heat effects.

Lightning:
Brief directional arcs.

Water:
Flowing but readable trails.

Void:
Localized distortion and restrained particles.

Shadow:
Dark trails with controlled crimson or violet highlights.

Do not add constant glowing outlines to every weapon.

Do not make effects so bright that the weapon and character become difficult to read.

Use particles sparingly during normal attacks and reserve more dramatic effects for special abilities and boss moments.

PART 12 — CAMERA, HIT PAUSE, AND IMPACT FEEL

Preserve the existing side-view camera.

Improve it with restrained combat feedback.

Implement:

Small impact shake for heavy attacks.
Minimal or no shake for ordinary attacks.
Brief hit pause for strong confirmed hits.
More substantial feedback for major boss attacks.
Controlled camera easing.
Appropriate framing when characters move toward the edge of the arena.

Do not zoom or shake excessively.

Do not let the camera hide the combatants.

Keep the player and enemy visible during important attacks.

Use the existing rendering engine's capabilities rather than forcing incompatible post-processing.

PART 13 — CHARACTER ANIMATION QUALITY

Every character must maintain consistent proportions and visual quality.

Avoid:

Flat-looking weapon sprites without depth.
Disconnected limbs.
Arms passing through the torso.
Incorrect hand grips.
Weapons clipping through legs.
Sudden pose changes.
Sliding feet during grounded attacks.
Identical attack animations across all enemies.
Unnatural body rotation.
Repeated weapon trails disconnected from the blade.
Characters facing the wrong direction.
Broken attack recovery.
Missing hit reactions.
Animation loops that never end.

If using skeletal animation, check bone transforms and blend transitions.

If using procedural 2D animation, calculate joints and weapon transforms coherently.

If using sprite animation, maintain consistent character scale and alignment across frames.

If the current character representation cannot support the desired animation quality, identify the limitation and improve the rig or representation without destroying existing functionality.

PART 14 — INPUT, COMBOS, AND PLAYER CONTROL

Preserve existing controls unless a change is necessary.

The weapon system must work with keyboard and supported touch controls.

Keep the combat responsive.

The player should be able to:

Move.
Jump.
Crouch.
Block.
Attack.
Perform heavy attacks.
Execute weapon specials.
Recover from attacks.
Switch weapons outside active combat where appropriate.

Prevent invalid combinations.

For example:

A heavy attack should not trigger repeatedly because a key is held unless charged attacks are explicitly designed that way.
A special attack should not activate without sufficient energy.
A weapon switch should not unexpectedly occur in the middle of an attack.
Input buffering should allow intended combinations without making the controls unresponsive.

If combos exist, make their transitions weapon-specific.

PART 15 — PERFORMANCE AND TECHNICAL QUALITY

Optimize the combat system for the existing project.

Avoid unnecessary object creation during every animation frame.

Reuse animation objects, particle systems, and temporary calculations where appropriate.

Ensure:

Stable frame timing.
Reliable collision checks.
Predictable animation transitions.
Efficient rendering.
Correct cleanup after combat.
No persistent effects accumulating indefinitely.
No unbounded AI timers.
No duplicate event listeners.
No memory leaks from repeated level changes.

Use the current engine's animation and physics features where available.

Do not introduce a large physics framework when a lightweight solution is sufficient.

PART 16 — TESTING AND VALIDATION

Do not consider the task complete merely because the code compiles.

Run the game and test actual combat.

Test every player weapon against at least one enemy.

Test every boss weapon in its assigned encounter.

Verify:

Weapon attachment.
Grip orientation.
Animation timing.
Attack range.
Hit detection.
Damage application.
Recovery.
Blocking.
Hit reactions.
Special ability activation.
Enemy movement.
Enemy attack telegraphs.
Boss phase transitions.
Weapon effects.
Audio playback.
Player input.
Save persistence.
Performance.
Mobile controls if supported.
Existing campaign functionality.

Specifically test fast attacks and long weapons for tunneling and incorrect collision.

Test heavy attacks for correct recovery and interruptibility.

Test dual weapons independently.

Test chain weapons for visual and physical stability.

Test boss specials for fair telegraphs and counterplay.

Fix errors before adding unnecessary new effects.

PART 17 — IMPLEMENTATION ORDER

Implement the complete system in this order.

STEP 1:
Audit the existing engine, character representation, animation system, and combat code.

STEP 2:
Fix weapon attachment and character joint or skeletal transforms.

STEP 3:
Build a reusable weapon animation controller.

STEP 4:
Implement accurate weapon hit detection and attack timing.

STEP 5:
Fully implement Nightfall, Wraith Fangs, and Titan's Grudge as representatives of sword, dual-weapon, and heavy-weapon combat.

STEP 6:
Test and refine their movement, attack transitions, recovery, and hit detection.

STEP 7:
Extend the system to all 15 player weapons.

STEP 8:
Implement the 10 regular enemy archetypes.

STEP 9:
Implement all 15 boss-specific weapons and combat profiles.

STEP 10:
Implement enemy AI states, signature attacks, and boss phases.

STEP 11:
Add weapon-specific visual effects and audio.

STEP 12:
Integrate all systems with the Arsenal, upgrades, campaign, and save system.

STEP 13:
Run systematic combat tests and correct all detected issues.

STEP 14:
Perform a final visual and gameplay quality pass.

Do not skip directly to generating visual effects before fixing the underlying animation and attachment system.

PART 18 — FINAL ACCEPTANCE CRITERIA

The final implementation must have:

Fifteen distinct player weapons.
Fifteen weapon-specific player animation configurations.
Fifteen boss-specific weapon designs.
Fifteen distinct boss combat identities.
Ten reusable but distinctive regular enemy archetypes.
Weapon attachment that follows the character's actual hand.
Weapon-appropriate grip and movement.
Functional weapon hit detection.
Weapon-specific damage and range.
Distinct attack timing and recovery.
Weapon-specific trails and impact effects.
Enemy AI that considers weapon range and combat state.
Boss signature attacks with fair counterplay.
Distinct character movement and attack transitions.
Functional special abilities.
No critical weapon clipping or floating.
No incorrect damage caused by oversized hitboxes.
No broken attack states.
No unresponsive controls.
No unnecessary replacement of existing working systems.

The completed game must feel like a coherent fighting game with readable, weighty, responsive combat.

Do not deliver only a plan, concept art, or a list of animations.

Implement the systems directly in the existing project, test them, fix the problems you discover, and report exactly what works, what remains incomplete, and which assets or tools are still required.