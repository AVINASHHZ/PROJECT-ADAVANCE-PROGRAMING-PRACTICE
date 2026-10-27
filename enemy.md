# MASTER PROMPT: SHADOW REBORN

## ADVANCED ENEMY AI, INTELLIGENT DODGING, UNPREDICTABLE COMBAT & LEG ATTACK SYSTEM

Act as a senior fighting-game AI engineer, combat animation programmer, gameplay systems developer, and enemy behavior designer.

Upgrade the existing enemy AI in my Java-based Shadow Reborn fighting game.

The current enemy behavior is too predictable. Enemies repeatedly perform similar attacks, move in obvious patterns, and do not dodge effectively. Their movement feels robotic, making it easy for the player to anticipate and defeat them.

I want the combat to feel intelligent, responsive, challenging, and cinematic, inspired by the combat depth and fluidity of Shadow Fight 2.

The enemy must be able to:

* Read the player's behavior.
* Select different attacks intelligently.
* Dodge incoming attacks.
* Block and parry.
* Counterattack.
* Move forward and backward strategically.
* Use low attacks and leg attacks.
* Change fighting distance.
* Punish repetitive player behavior.
* Use weapon-specific combat styles.
* Make mistakes occasionally.
* Adapt its difficulty based on the selected enemy and boss.
* Perform smooth, convincing combat animations.

## MOST IMPORTANT REQUIREMENT

Do not simply increase enemy attack speed or damage.

Make enemies smarter through better decisions, movement, timing, positioning, defensive reactions, and attack variety.

Do not replace the existing game or rewrite its combat engine.

First inspect the existing code and identify how enemy AI, player movement, attacks, hitboxes, animations, blocking, dodging, and collision detection work.

Extend the current systems and preserve existing functionality.

---

# 1. ELIMINATE PREDICTABLE ENEMY BEHAVIOR

Inspect the current AI and identify repetitive behavior, including:

* Attacking at fixed intervals.
* Repeating the same combo.
* Always attacking immediately after moving close.
* Dodging only in one direction.
* Always retreating after attacking.
* Remaining stationary when the player approaches.
* Repeating the same jump or movement animation.
* Using the same attack after every dodge.
* Starting attacks from the same distance.
* Reacting to the player with identical timing every time.

Replace rigid attack loops with a decision-making combat AI.

The enemy must not follow a single predictable sequence.

For example, do not implement a fixed sequence such as:

Approach → Attack → Retreat → Attack → Repeat.

Instead, the enemy should evaluate the current combat situation and choose an appropriate action.

Possible decisions include:

* Advance cautiously.
* Rush forward.
* Hold position.
* Retreat.
* Circle or reposition, if the current movement system supports it.
* Block.
* Parry.
* Dodge backward.
* Dodge forward through an opening, if supported.
* Perform a low dodge or crouch.
* Jump over an incoming low attack, if supported.
* Perform a leg attack.
* Perform a weapon attack.
* Start a combo.
* Interrupt an opponent's vulnerable recovery.
* Counterattack.
* Bait an attack.
* Wait for an opening.
* Break away from the opponent.

Use the existing movement and combat capabilities wherever possible.

Do not create AI decisions that require animations or mechanics the game does not support.

---

# 2. IMPLEMENT A COMBAT DECISION SYSTEM

Create or improve a centralized enemy combat decision system.

Use a finite-state machine, behavior tree, utility-based AI, or another approach appropriate to the existing codebase.

If the current AI is simple, a utility-based decision system combined with clear combat states is a good starting point.

Possible states:

* IDLE
* APPROACH
* MAINTAIN_DISTANCE
* RETREAT
* REPOSITION
* WINDUP
* ATTACK
* COMBO
* BLOCK
* PARRY
* DODGE
* HIT_REACTION
* STUNNED
* RECOVERY
* KNOCKDOWN
* GET_UP
* SHADOW_ABILITY
* VICTORY
* DEFEAT

Do not create duplicate states if the existing system already provides equivalent functionality.

## Decision inputs

Evaluate the following information whenever the AI needs to make a new decision:

1. Distance between the player and enemy.
2. Player facing direction.
3. Enemy facing direction.
4. Current player action.
5. Current enemy action.
6. Player attack startup, if exposed by the combat system.
7. Whether the player attack can hit the enemy.
8. Enemy recovery time.
9. Player recovery time, if available.
10. Current health.
11. Posture or guard status, if implemented.
12. Current weapon and attack range.
13. Whether either character is airborne.
14. Whether either character is stunned or knocked down.
15. Recent player attack patterns.
16. Recent enemy actions.
17. Time since the last dodge.
18. Time since the last block or parry.
19. Available stamina, energy, or other combat resources.
20. Current boss phase, if applicable.

Only use information that the actual game can access.

Do not make the AI omniscient by allowing it to react instantly to an attack before that attack becomes visually or mechanically detectable.

## Utility-based decisions

Assign scores to possible actions according to the current situation.

For example:

* If the player begins a detectable attack within range, increase the utility of a suitable defensive action.
* If the player is recovering after a missed heavy attack, increase the utility of a fast counterattack.
* If the enemy is too far away, increase the utility of advancing or using a suitable long-range attack.
* If the enemy is cornered, increase the utility of repositioning or escaping.
* If the player repeatedly uses the same predictable attack, increase the utility of counters that are appropriate for that attack.
* If the enemy has just completed a heavy attack, favor recovery or repositioning instead of immediately starting another heavy attack.

Select from the best valid actions using controlled variation rather than always choosing the same highest-scoring action.

Do not select an action that is invalid for the enemy's weapon, position, current state, or available animations.

---

# 3. CREATE INTELLIGENT AND UNPREDICTABLE DODGING

Dodging is a major priority.

The current enemies are too easy to hit because they do not avoid attacks effectively.

Implement several distinct defensive movement behaviors using the animations and movement capabilities supported by the game.

## 3.1 Backward dodge

The enemy quickly moves away from an incoming attack.

Use this when:

* A heavy attack is approaching.
* The enemy needs to create distance.
* The attack has sufficient forward range.
* Retreating will not place the enemy in an unfavorable position.

The movement should have:

* A short anticipation or defensive reaction.
* Fast initial movement.
* Smooth deceleration.
* A clear recovery window.

Do not make the enemy slide backward indefinitely.

## 3.2 Forward evasive movement

Where the existing combat system supports it, allow the enemy to move forward through an attack's unsafe area or reposition past the player.

Use only when the attack's direction, range, timing, and collision geometry make this a plausible choice.

The enemy should not teleport through attacks or become invulnerable for arbitrary periods.

## 3.3 Low dodge and crouch evasion

Allow the enemy to crouch or lower its body to avoid suitable high attacks.

Requirements:

* Use a proper crouching pose.
* Lower the character's collision shape only when the current collision system safely supports it.
* Preserve correct weapon and body positioning.
* Make the action vulnerable to suitable low attacks.
* Prevent crouching from avoiding every attack automatically.

## 3.4 Jump evasion

If jumping already exists, allow enemies to use it strategically against suitable low attacks.

The enemy must consider:

* Whether the attack can hit an airborne character.
* Whether jumping is safe at the current distance.
* Whether landing will expose it to a counterattack.
* Whether the enemy can safely recover after landing.

Do not add invulnerability to the entire jump unless that is an established game mechanic.

## 3.5 Directional evasions

Support different evasive choices where the game allows them:

* Short backward step.
* Fast backward roll.
* Forward roll.
* Low duck.
* Side-step or lateral evasion.
* Jumping evasion.
* Weapon-assisted evasive movement, if supported.

Each movement should have its own timing, distance, animation, and recovery characteristics.

Do not use the same animation for every defensive action.

If the existing game uses a strictly two-dimensional side-view arena, do not fake meaningful depth movement that the combat and collision systems cannot support.

## 3.6 Dodge timing

Enemy dodging must depend on the actual incoming threat.

The AI should consider:

* Attack startup.
* Attack direction.
* Attack reach.
* Time until impact.
* Current recovery state.
* Distance from the player.
* Previous defensive actions.

A dodge should generally occur only when the attack presents a credible threat.

Avoid random dodging when the player is standing far away.

Avoid dodging after an attack has already hit.

Avoid dodging every single player attack.

## 3.7 Dodge limitations

Prevent unlimited defensive movement.

Use the existing stamina, energy, cooldown, or recovery mechanics if available.

If no such system exists, introduce only the minimum necessary AI-side cooldown or decision constraint without altering unrelated player mechanics.

Dodging should have risks.

An enemy that dodges successfully may still be vulnerable during recovery.

The player should be able to punish predictable or poorly timed evasions.

---

# 4. MAKE ENEMIES LEARN THE PLAYER'S HABITS

Add lightweight combat-pattern tracking.

The AI should observe the player's recent actions during the current fight.

Track information such as:

* Frequently used attack categories.
* Repeated heavy attacks.
* Repeated light attacks.
* Repeated leg attacks.
* Jump attacks.
* Long-range weapon attacks.
* Repeated combos.
* Repeated attempts to approach.
* Attacks used immediately after the player moves forward.

Use a rolling history of recent actions rather than storing an unlimited history.

Do not require machine learning or an external AI service.

This should work locally within the existing Java game.

## Adaptive responses

If the player repeatedly uses fast attacks:

* Improve the enemy's use of spacing and suitable blocks.
* Occasionally use a defensive response followed by a counter.
* Avoid automatically blocking every attack.

If the player repeatedly uses heavy attacks:

* Create distance when appropriate.
* Punish missed heavy attacks.
* Use evasive movement when the attack is telegraphed.

If the player repeatedly jumps:

* Use suitable anti-air attacks if implemented.
* Move out of the landing zone when appropriate.
* Punish predictable jump landings.

If the player repeatedly attacks the legs:

* Use suitable low-defense behavior.
* Adjust spacing.
* Occasionally respond with a counterattack.

If the player repeatedly retreats:

* Use appropriate forward pressure.
* Close the distance carefully.
* Avoid blindly charging into attacks.

If the player repeats the same combo:

* Recognize its common sequence.
* Defend against it when the timing allows.
* Counter only when the current combat state provides a legitimate opening.

## Fairness rule

The enemy must not instantly know the player's next action.

Adaptation must be based on observed behavior and visible or mechanically available information.

The AI should become better at recognizing patterns without becoming impossible to defeat.

---

# 5. ADD A COMPLETE ENEMY LEG-ATTACK SYSTEM

This is mandatory.

Enemies must be able to attack the player's lower body using distinct leg-based attacks.

Do not merely rename existing weapon attacks as leg attacks.

Create actual leg attacks with appropriate body poses, movement, hit detection, and recovery.

First inspect the current animation and collision systems.

Use existing attack animations if they are suitable, and add new animation states or procedural movement only where necessary.

## 5.1 Low kick

Animation:

* The enemy shifts its weight onto the supporting leg.
* The attacking knee bends.
* The lower leg extends toward the player's lower body.
* The foot or shin follows a clear strike arc.
* The leg retracts naturally.
* The enemy returns to a balanced fighting stance.

Gameplay:

* Short range.
* Fast startup.
* Moderate or low damage.
* Short recovery.
* Useful for interrupting careless approaches when the timing permits.

The animation must not resemble a normal standing punch.

## 5.2 Front kick

Animation:

* The enemy raises the knee.
* The hip rotates slightly.
* The foot thrusts forward.
* The leg extends visibly.
* The enemy retracts the leg and restores balance.

Gameplay:

* Moderate reach.
* Moderate startup.
* Useful for controlling distance.
* Can push the player backward if the existing combat system supports pushback.

## 5.3 Sweeping kick

Animation:

* The enemy lowers its center of gravity.
* The supporting leg bends.
* The attacking leg sweeps in a horizontal arc close to the ground.
* The torso rotates to support the movement.
* The leg follows through and returns to stance.

Gameplay:

* Suitable against grounded opponents.
* Potentially knocks the player down if the current combat system supports knockdowns.
* Can be evaded by jumping when the timing and mechanics permit it.
* Has meaningful recovery if it misses.

Do not make this attack hit airborne opponents automatically.

## 5.4 Rising kick

Animation:

* The enemy lowers its stance.
* The attacking leg travels upward.
* The torso extends or rotates appropriately.
* The leg retracts after the strike.

Gameplay:

* Suitable for catching certain jumping or rising opponents if the hit geometry supports it.
* Slower than a basic low kick.
* More punishable when it misses.

## 5.5 Running kick

Animation:

* The enemy builds forward momentum.
* The body leans into the movement.
* The knee rises.
* The leg extends into a forward strike.
* The enemy decelerates and returns to a stable stance.

Gameplay:

* Used at suitable distances.
* Useful against a retreating player when the enemy can safely close the gap.
* Punishable if blocked or avoided.
* Must not cause unlimited sliding across the arena.

## 5.6 Leg-attack combos

Where supported by the current combat architecture, add combinations such as:

* Low kick → quick punch.
* Front kick → weapon follow-up.
* Low kick → second low kick.
* Sweep → recovery → defensive reposition.
* Jumping attack → landing kick, if jumping attacks exist.

The AI should not always select the same combination.

Combo transitions must respect attack recovery and animation timing.

Never allow multiple incompatible attack animations to play simultaneously.

## 5.7 Hit detection for leg attacks

Use the existing hitbox and collision framework.

If the current system uses simple collision shapes, create appropriate attack hitboxes for the new leg attacks.

Requirements:

* Correct attack range.
* Correct attack direction.
* Correct timing.
* No hits when the leg is nowhere near the player.
* No hits through unrelated geometry.
* No repeated damage every frame from a single strike.
* Correct hit reactions.
* Correct blocking interactions where supported.
* Correct knockback and posture effects where supported.

Do not simply apply damage when an animation starts.

Damage should occur when the attack reaches its actual active hit phase.

Do not make every leg attack cause a knockdown.

Balance damage and recovery according to the existing combat system.

---

# 6. ADD BETTER DEFENSE AND COUNTERATTACKS

The enemy should be able to defend intelligently without constantly blocking.

Use the existing block and parry systems.

Possible defensive responses:

* Standard block.
* Timed parry.
* Backward evasive movement.
* Low evasion.
* Jump evasion.
* Repositioning.
* Interrupting an attack before it becomes active, when the game mechanics allow it.

## Blocking behavior

The enemy should evaluate whether blocking is appropriate based on:

* Incoming attack type.
* Time until impact.
* Current facing.
* Current recovery.
* Available defensive animations.

Do not let the enemy block attacks from behind unless the existing game explicitly supports that mechanic.

Do not allow blocking during every attack animation.

## Parry behavior

Parrying must be timing-sensitive.

The enemy should occasionally attempt a parry against recognizable attacks.

It should not automatically parry every attack.

A failed parry should expose the enemy to punishment if consistent with the existing combat rules.

## Counterattack behavior

After a successful dodge or block, the enemy may:

* Use a fast light attack.
* Use a leg attack.
* Start a weapon-specific combo.
* Reposition.
* Return to a defensive stance.

Choose the response according to the situation.

Do not always counterattack with the same move.

Preserve existing counter and parry mechanics if already implemented.

---

# 7. IMPROVE ENEMY MOVEMENT AND POSITIONING

The enemy must feel like a trained fighter rather than a character that simply moves toward the player.

Implement context-aware spacing.

## Too far away

Possible behavior:

* Advance cautiously.
* Run forward if the opponent is vulnerable and the distance is appropriate.
* Use a suitable long-range attack if the weapon supports it.
* Pause to bait the player's approach.

## Effective attack range

Possible behavior:

* Use different attacks according to distance.
* Alternate between quick attacks and slower, stronger attacks.
* Defend against incoming threats.
* Reposition after certain attacks.
* Use a leg attack to control spacing.

## Too close

Possible behavior:

* Use short-range attacks.
* Retreat when appropriate.
* Block or counter.
* Use a suitable escape movement if the existing system supports it.

Prevent characters from overlapping excessively.

Prevent continuous forward movement from pushing the enemy through the player.

Respect arena boundaries.

Do not allow the enemy to move outside the fighting area.

Use smooth acceleration and deceleration.

Avoid abrupt direction changes unless the animation and combat state support them.

---

# 8. GIVE EACH ENEMY A DISTINCT COMBAT PERSONALITY

Different enemies must not behave like the same AI with different health values.

Preserve the identities, weapons, and level progression already established in the project.

Create configurable AI profiles for the existing enemies.

Examples:

GORO — Disciplined swordsman

* Balanced movement.
* Careful spacing.
* Precise sword attacks.
* Occasional low kicks.
* Moderate defensive reactions.
* Punishes obvious mistakes.

KIBA — Aggressive assassin

* Fast approaches.
* Quick low kicks.
* Rapid short-range attacks.
* Frequent repositioning.
* Less predictable attack sequences.
* Vulnerable when overcommitting.

MASTER REN — Patient martial artist

* Strong defensive discipline.
* Well-timed blocks.
* Occasional parries.
* Sweeps and front kicks.
* Punishes repeated attack patterns.
* Avoids unnecessary heavy attacks.

DREADMAW — Heavy bruiser

* Slower movement.
* Powerful attacks.
* Heavy forward pressure.
* Limited but meaningful evasions.
* Strong punishment against careless approaches.
* Slow recovery after missed heavy attacks.

LADY SORYU — Technical duelist

* Precise spacing.
* Elegant movement.
* Controlled weapon combinations.
* Fast defensive responses.
* Occasional leg attacks to interrupt the player.

GENERAL RAIK — Military spear specialist

* Maintains spear range.
* Uses thrusts and sweeping attacks.
* Retreats when the player gets too close.
* Uses front kicks to create space.
* Punishes reckless approaches.

SHINOBI — Evasive rival

* Frequent but controlled repositioning.
* Quick attacks.
* Occasional forward evasions.
* Punishes missed attacks.
* Uses feints and sudden changes of pace.

For the remaining bosses, use their existing identities and weapons to create distinct behavior profiles.

Do not replace the existing boss names or story.

Do not make every enemy equally aggressive or equally defensive.

Use per-enemy parameters for:

* Aggression.
* Defensive tendency.
* Preferred distance.
* Dodge frequency.
* Reaction delay.
* Attack variety.
* Combo tendency.
* Leg-attack frequency.
* Parry tendency.
* Recovery vulnerability.

These parameters must influence decisions rather than simply changing cosmetic labels.

---

# 9. MAKE BOSSES ADAPT DURING THE FIGHT

Where the existing boss architecture permits it, create multiple combat phases.

Example:

PHASE 1 — OBSERVATION
The boss uses a measured attack style and observes the player's common actions.

PHASE 2 — PRESSURE
The boss increases attack variety, uses more active movement, and responds more effectively to repeated player tactics.

PHASE 3 — DESPERATION
When low on health, the boss may use more aggressive movement, riskier attacks, and distinctive special moves.

Do not make bosses invulnerable merely because they enter a new phase.

Do not reset the boss's health during a phase transition unless the existing boss design explicitly requires it.

Use the existing health, posture, energy, and special-attack systems.

Make transitions readable through animation, sound, and visual effects.

Do not make every boss use the same phase sequence.

If the game already has boss phases, improve them instead of replacing them.

---

# 10. MAKE ATTACK ANIMATIONS LESS ROBOTIC

The combat must not look like a series of rigid sprite changes.

Inspect the current animation system and improve transitions between movement and attack states.

For every new or existing attack, ensure the animation contains appropriate phases.

### Anticipation

The body prepares for the action.

### Active movement

The strike visibly travels toward the target.

### Impact

The attack reaches the appropriate hit timing.

### Follow-through

The body and weapon complete the movement.

### Recovery

The fighter regains balance and becomes ready for the next action.

Use smooth transitions between:

* Idle.
* Walking.
* Running.
* Crouching.
* Jumping.
* Dodging.
* Attacking.
* Blocking.
* Parrying.
* Hit reactions.
* Knockdowns.
* Getting up.

Use procedural body motion only where it fits the existing character representation.

If the game uses sprite-based characters, preserve the correct sprite orientation and avoid stretching limbs unnaturally.

If it uses skeletal animation, preserve bone hierarchy and animation blending.

Do not attempt to solve every animation problem with random rotation or arbitrary limb offsets.

Prevent:

* Feet sliding across the ground.
* Arms passing through the torso.
* Weapons detaching from the hands.
* Legs rotating unnaturally.
* Character teleportation.
* Overlapping attacks.
* Idle animation interrupting attack animations.
* Attack animations interrupting hit reactions incorrectly.

The character must remain visually coherent throughout the entire action.

---

# 11. CONTROLLED RANDOMNESS, NOT CHAOTIC RANDOMNESS

Use variation to make combat less predictable.

Do not choose attacks randomly without considering the combat situation.

Use a weighted decision system with constraints.

For example, the enemy may have several valid attacks at a given distance, but each attack must satisfy its range, recovery, and state requirements.

Vary:

* Attack selection.
* Defensive response.
* Time between decisions.
* Combo choice.
* Movement direction.
* Retreat timing.
* Leg-attack selection.
* Counterattack selection.

Avoid repeatedly selecting the same action.

Maintain a short history of recently used moves.

Apply a modest selection penalty to recently repeated actions when alternatives are valid.

Do not permanently prevent the enemy from using a move simply because it used it recently.

Do not allow random variation to bypass cooldowns or combat-state restrictions.

Use deterministic seeds during debugging if the existing architecture supports them.

---

# 12. FAIRNESS AND COUNTERPLAY

The enemy must be challenging but fair.

Every strong attack should provide a reasonable opportunity for the player to recognize and respond to it.

The player must be able to punish:

* Missed heavy attacks.
* Failed sweeps.
* Failed running kicks.
* Poorly timed dodges.
* Failed parries.
* Overextended combos.
* Predictable forward movement.

Avoid:

* Instant unavoidable attacks.
* Arbitrary invulnerability.
* Infinite blocking.
* Infinite dodging.
* Instant reactions without detectable cues.
* Attacks with impossible hitboxes.
* Damage applied before the attack connects.
* Excessively long combos without escape opportunities.

Use the existing combat balance and hit-reaction framework.

The goal is better enemy intelligence, not artificial difficulty.

---

# 13. PERFORMANCE REQUIREMENTS

The game must remain responsive.

Avoid creating large numbers of objects every frame.

Do not allocate unnecessary temporary objects in frequently executed AI update methods.

Do not use blocking operations or network requests in the combat update loop.

Avoid excessive animation calculations.

Keep decision-making lightweight.

Use the existing update loop and timing system.

Do not run several conflicting AI decision loops for the same enemy.

Ensure all attack timers, cooldowns, and animation timers use the game's established time-step conventions.

If the game uses variable frame timing, make movement and cooldown behavior consistent with elapsed time.

---

# 14. TESTING REQUIREMENTS

Test every important behavior.

### Test A: Basic movement

The enemy approaches, retreats, and maintains appropriate spacing.

### Test B: Repeated light attacks

The enemy varies its defensive response and does not repeat the same dodge every time.

### Test C: Repeated heavy attacks

The enemy sometimes evades or creates distance and can punish missed attacks.

### Test D: Player jumps

The enemy responds using appropriate anti-air behavior if supported.

### Test E: Player retreats

The enemy closes distance intelligently without blindly rushing into attacks.

### Test F: Player corners the enemy

The enemy uses available escape or defensive actions without moving through the arena boundaries.

### Test G: Leg attacks

The enemy performs distinct low kicks, front kicks, sweeps, and other implemented leg attacks.

### Test H: Hit detection

Each attack deals damage only during its valid active frames and only when the hitbox connects.

### Test I: Blocking and parrying

Defensive actions work with the existing combat rules.

### Test J: Recovery

Missed attacks and poorly timed evasions can be punished.

### Test K: Boss behavior

Different bosses have clearly distinct movement and attack patterns.

### Test L: Regression

The player's controls, weapons, hitboxes, health, posture, victory conditions, defeat conditions, and progression continue to work.

### Test M: Long fight

No animation locks, infinite dodges, repeated attacks without recovery, or broken states occur during an extended match.

Fix any discovered bugs before considering the task complete.

---

# 15. FINAL IMPLEMENTATION RULES

Do not merely describe the AI.

Modify the existing code and implement the behavior.

Do not rewrite the entire game.

Do not remove current enemy weapons or attacks.

Do not change the existing UI, campaign roadmap, player progression, or settings as part of this task unless a small integration change is necessary.

Do not replace actual combat logic with visual-only animations.

Every new attack must connect correctly to the real combat system.

Every dodge must have actual movement and correct collision behavior.

Every defensive response must obey the combat state.

Every enemy personality must produce meaningful differences in behavior.

Every animation must transition correctly.

After implementation, run the game and test the new behavior.

At the end, report:

1. Which AI behaviors were improved.
2. Which dodge types were implemented.
3. Which leg attacks were implemented.
4. Which enemy personalities were added or improved.
5. How hit detection and recovery were handled.
6. Which tests were performed.
7. Any animations or mechanics that still require assets or additional implementation.

FINAL GOAL:

Make Shadow Reborn feel like a genuine skill-based fighting game in which enemies move intelligently, defend themselves, dodge attacks, punish mistakes, use powerful leg attacks, and exhibit distinct combat personalities.

The player should no longer be able to defeat every enemy by repeating the same predictable attack pattern.

The combat must remain fair, responsive, visually coherent, and fully integrated with the existing game.
