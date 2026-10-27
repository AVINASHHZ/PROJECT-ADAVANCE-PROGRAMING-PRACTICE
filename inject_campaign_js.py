"""
Injects the complete 15-level single-player campaign, boss silhouettes,
unique weapon systems, AI behaviors, and story dialogue into the JavaScript engine.
"""

INDEX_PATH = "d:/app game/src/main/resources/static/index.html"

with open(INDEX_PATH, "r", encoding="utf-8") as f:
    code = f.read()

# -----------------------------------------------------------------------------
# 1. CAMPAIGN REGISTRY & DATA
# -----------------------------------------------------------------------------
CAMPAIGN_DATA_JS = """
  // ============================================================================
  // 1B. SHADOW REQUIEM: THE FIFTEEN SEALS — COMPLETE CAMPAIGN REGISTRY
  // ============================================================================
  const CAMPAIGN_LEVELS = [
    {
      level: 1, chapter: 1, chapterName: "The Broken Oath",
      id: "ashen_forest", name: "Ashen Forest",
      bgFile: "assets/environments/level01_ashen_forest_bg.webp",
      fallbackColor: "#13161c", particleType: "ash",
      bossId: "goro", bossName: "Goro", bossTitle: "The Exiled Blade",
      bossPortrait: "assets/portraits/boss_goro_portrait.webp",
      bossHp: 880, bossSpeed: 0.95, bossWeaponKey: "iron_katana",
      difficulty: 1,
      bossStyleDesc: "Slow, heavy two-handed Katana slashes with punishing guard crush.",
      storyIntro: "Five years ago, Kaze broke the first seal while trying to save his sister Akari. In the drifting volcanic ash of the sacred forest, clan brother Goro intercepts his path.",
      dialogue: [
        { speaker: "boss", text: "Turn back, Kaze. The seal you shattered has poisoned the realm. Nightfall hungers for your mortal soul." },
        { speaker: "kaze", text: "I bear whatever curse is necessary, Goro. Where is my sister Akari?" },
        { speaker: "boss", text: "A shadow cannot save anyone. Draw your blade, clan brother. Let steel test if the man still lives within!" }
      ],
      rewardKey: "iron_katana", rewardName: "Iron Katana", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_iron_katana.webp",
      rewardDesc: "+10% Weapon Range & Guard Breaker"
    },
    {
      level: 2, chapter: 1, chapterName: "The Broken Oath",
      id: "abandoned_village", name: "Abandoned Village",
      bgFile: "assets/environments/level02_abandoned_village_bg.webp",
      fallbackColor: "#2a1209", particleType: "embers",
      bossId: "kiba", bossName: "Kiba", bossTitle: "The Blood Hound",
      bossPortrait: "assets/portraits/boss_kiba_portrait.webp",
      bossHp: 920, bossSpeed: 1.25, bossWeaponKey: "twin_daggers",
      difficulty: 1,
      bossStyleDesc: "Lean predatory assassin with swift forward rolls and rapid multi-stab flurries.",
      storyIntro: "The village burns beneath a blood-orange twilight. Kiba descends from smoking thatched roofs, seeking the price placed upon Kaze's shadow.",
      dialogue: [
        { speaker: "boss", text: "Fresh meat wandering through the embers! The Hollow King pays a royal bounty for the broken seal's heir!" },
        { speaker: "kaze", text: "A hound who barks at shadows without knowing whose scent he follows." },
        { speaker: "boss", text: "I smell fear on you, ronin! Let's see how fast you bleed!" }
      ],
      rewardKey: "twin_daggers", rewardName: "Twin Daggers", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_twin_daggers.webp",
      rewardDesc: "+30% Attack Speed & Rapid Bleed Flurries"
    },
    {
      level: 3, chapter: 1, chapterName: "The Broken Oath",
      id: "crimson_dojo", name: "Crimson Dojo",
      bgFile: "assets/environments/level03_crimson_dojo_bg.webp",
      fallbackColor: "#320b0b", particleType: "leaves",
      bossId: "ren", bossName: "Master Ren", bossTitle: "The Silent Master",
      bossPortrait: "assets/portraits/boss_ren_portrait.webp",
      bossHp: 980, bossSpeed: 1.0, bossWeaponKey: "quarterstaff",
      difficulty: 2,
      bossStyleDesc: "Elderly blind martial grandmaster utilizing patient stance, counter-attacks, and defensive parries.",
      storyIntro: "Red lacquered pillars and golden lanterns frame the quiet sacred dojo. Blind Grandmaster Ren listens to the weeping spirits trapped within Nightfall.",
      dialogue: [
        { speaker: "boss", text: "I hear the weeping of a thousand souls within your black iron. You opened the forbidden Shrine, boy." },
        { speaker: "kaze", text: "Master Ren... forgive me. I seek the truth of what was stolen." },
        { speaker: "boss", text: "Truth is forged through discipline, not dark pacts. Steady your heart, Kaze. Show me your discipline." }
      ],
      rewardKey: "crimson_guard", rewardName: "Crimson Guard", rewardType: "Accessory",
      rewardFile: "assets/weapons/weapon_crimson_guard.webp",
      rewardDesc: "+25% Extended Parry Window & Posture Recovery"
    },
    {
      level: 4, chapter: 2, chapterName: "The Iron Chain",
      id: "sunken_prison", name: "Sunken Prison",
      bgFile: "assets/environments/level04_sunken_prison_bg.webp",
      fallbackColor: "#0b171c", particleType: "wisps",
      bossId: "dreadmaw", bossName: "Dreadmaw", bossTitle: "The Chain Warden",
      bossPortrait: "assets/portraits/boss_dreadmaw_portrait.webp",
      bossHp: 1050, bossSpeed: 0.88, bossWeaponKey: "chain_blade",
      difficulty: 2,
      bossStyleDesc: "Towering iron jailer swinging heavy chain scythes for devastating screen-wide control.",
      storyIntro: "In flooded catacombs beneath mossy stone vaults, Dreadmaw drags massive rusted chains across cold puddles.",
      dialogue: [
        { speaker: "boss", text: "None leave the sunken vaults alive! Your flesh will rot in my iron, ronin!" },
        { speaker: "kaze", text: "These rusted chains will not bind what is already broken." },
        { speaker: "boss", text: "Hear them sing, boy! Every link is a warrior I crushed!" }
      ],
      rewardKey: "chain_blade", rewardName: "Chain Blade", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_chain_blade.webp",
      rewardDesc: "+45% Extended Reach & Destructive Chain Sweeps"
    },
    {
      level: 5, chapter: 2, chapterName: "The Iron Chain",
      id: "temple_of_embers", name: "Temple of Embers",
      bgFile: "assets/environments/level05_temple_of_embers_bg.webp",
      fallbackColor: "#3b1104", particleType: "embers",
      bossId: "soryu", bossName: "Lady Soryu", bossTitle: "The Flame Widow",
      bossPortrait: "assets/portraits/boss_soryu_portrait.webp",
      bossHp: 1100, bossSpeed: 1.12, bossWeaponKey: "ember_katana",
      difficulty: 3,
      bossStyleDesc: "Relentless aggression with blazing flame-infused thrusts and explosive blade sweeps.",
      storyIntro: "Atop a magma fissure monastery, Lady Soryu mourns her fallen samurai, igniting her katana with sacred flame.",
      dialogue: [
        { speaker: "boss", text: "Because you broke the seal, the volcanic blight consumed my clan! Pay your debt in ashes!" },
        { speaker: "kaze", text: "I did not desire this tragedy, Lady Soryu. But I will not fall before finding Akari." },
        { speaker: "boss", text: "Then let the fire burn your sorrow away forever!" }
      ],
      rewardKey: "ember_katana", rewardName: "Ember Katana", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_ember_katana.webp",
      rewardDesc: "+15% Fire Damage & Lingering Burn Effect"
    },
    {
      level: 6, chapter: 2, chapterName: "The Iron Chain",
      id: "frozen_pass", name: "Frozen Pass",
      bgFile: "assets/environments/level06_frozen_pass_bg.webp",
      fallbackColor: "#0a1926", particleType: "snow",
      bossId: "raik", bossName: "General Raik", bossTitle: "The Storm General",
      bossPortrait: "assets/portraits/boss_raik_portrait.webp",
      bossHp: 1150, bossSpeed: 1.05, bossWeaponKey: "storm_spear",
      difficulty: 3,
      bossStyleDesc: "Disciplined military spear techniques, long piercing lunges, and sweeping anti-air vaults.",
      storyIntro: "Blizzard winds batter the northern mountain crags where General Raik holds the imperial pass with crackling lightning.",
      dialogue: [
        { speaker: "boss", text: "Halt, exile! By imperial decree, no corrupted soul shall cross this mountain divide." },
        { speaker: "kaze", text: "Stand aside, General. The seals must be cleansed at the source." },
        { speaker: "boss", text: "Madness! I strike with the thunder of an imperial army!" }
      ],
      rewardKey: "storm_spear", rewardName: "Storm Spear", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_storm_spear.webp",
      rewardDesc: "+35% Piercing Lunge Range & Anti-Air Stun"
    },
    {
      level: 7, chapter: 3, chapterName: "Shadows of Betrayal",
      id: "azure_fortress", name: "Azure Fortress",
      bgFile: "assets/environments/level07_azure_fortress_bg.webp",
      fallbackColor: "#071c29", particleType: "petals",
      bossId: "shinobi", bossName: "Shinobi", bossTitle: "The Masked Rival",
      bossPortrait: "assets/portraits/boss_shinobi_portrait.webp",
      bossHp: 1200, bossSpeed: 1.30, bossWeaponKey: "azure_blades",
      difficulty: 3,
      bossStyleDesc: "High acrobatics, wall rebounds, and fluid dual-blade combinations that mirror Kaze's cadence.",
      storyIntro: "Moonlit paper lanterns and swirling cherry blossoms illuminate the masked assassin waiting on fortress tiles.",
      dialogue: [
        { speaker: "boss", text: "...You should never have followed me into the dark, Kaze." },
        { speaker: "kaze", text: "You know my name? That stance... only our clan teaches the twin-blade circle!" },
        { speaker: "boss", text: "Turn back... while you still have a mortal soul to save!" }
      ],
      rewardKey: "azure_blades", rewardName: "Azure Blades", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_azure_blades.webp",
      rewardDesc: "+25% Combo Agility & Low-Recovery Dashes"
    },
    {
      level: 8, chapter: 3, chapterName: "Shadows of Betrayal",
      id: "black_market", name: "Black Market",
      bgFile: "assets/environments/level08_black_market_bg.webp",
      fallbackColor: "#190e24", particleType: "fumes",
      bossId: "vex", bossName: "Vex", bossTitle: "The Phantom Dealer",
      bossPortrait: "assets/portraits/boss_vex_portrait.webp",
      bossHp: 1220, bossSpeed: 1.28, bossWeaponKey: "phantom_daggers",
      difficulty: 3,
      bossStyleDesc: "Tricky feints, deceptive smoke decoys, and unexpected low sweeping kicks.",
      storyIntro: "In illicit subterranean alleys shrouded in violet incense, Vex trades stolen clan relics and soul fragments.",
      dialogue: [
        { speaker: "boss", text: "A ronin carrying the fabled black blade Nightfall! A priceless relic for my collection!" },
        { speaker: "kaze", text: "You trade in stolen memories, Vex. Who is buying the shadows of my people?" },
        { speaker: "boss", text: "A customer who never dies, my friend! Now hold still while I carve out your heart!" }
      ],
      rewardKey: "phantom_daggers", rewardName: "Phantom Daggers", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_phantom_daggers.webp",
      rewardDesc: "+20% Critical Strike Chance & Shadow Feint Roll"
    },
    {
      level: 9, chapter: 3, chapterName: "Shadows of Betrayal",
      id: "blood_arena", name: "Blood Arena",
      bgFile: "assets/environments/level09_blood_arena_bg.webp",
      fallbackColor: "#290c0c", particleType: "sand",
      bossId: "brutus", bossName: "Brutus", bossTitle: "The Iron Colossus",
      bossPortrait: "assets/portraits/boss_brutus_portrait.webp",
      bossHp: 1350, bossSpeed: 0.82, bossWeaponKey: "heavy_cleaver",
      difficulty: 4,
      bossStyleDesc: "Armored juggernaut resisting flinch with heavy overhead cleaves and ground shockwaves.",
      storyIntro: "Crimson sands stained with centuries of slaughter form the pit where Brutus wields an executioner cleaver.",
      dialogue: [
        { speaker: "boss", text: "More flesh for the butcher! Smash, break, crush! No one leaves the sand alive!" },
        { speaker: "kaze", text: "Your armor cannot protect you from what cannot be cut." },
        { speaker: "boss", text: "Words don't stop iron, rat! Taste the cleaver!" }
      ],
      rewardKey: "heavy_cleaver", rewardName: "Heavy Cleaver", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_heavy_cleaver.webp",
      rewardDesc: "+40% Raw Impact Power & Unstoppable Ground Slam"
    },
    {
      level: 10, chapter: 4, chapterName: "The Veiled Truth",
      id: "shrine_of_echoes", name: "Shrine of Echoes",
      bgFile: "assets/environments/level10_shrine_of_echoes_bg.webp",
      fallbackColor: "#1c1228", particleType: "wisps",
      bossId: "akari", bossName: "Akari (Shinobi)", bossTitle: "The Lost Sister",
      bossPortrait: "assets/portraits/boss_akari_portrait.webp",
      bossHp: 1300, bossSpeed: 1.35, bossWeaponKey: "eclipse_blades",
      difficulty: 4,
      bossStyleDesc: "Unmasked younger sister combining agile family martial arts with adaptive shadow evasions.",
      storyIntro: "At the fractured shrine where the nightmare began, the masked Shinobi stands beneath floating torii stones. THE VEIL IS LIFTED.",
      dialogue: [
        { speaker: "kaze", text: "Why protect the ground where our family fell? Remove your mask!" },
        { speaker: "boss", text: "...If I do, brother, you cannot turn back from the abyss." },
        { speaker: "boss", text: "[The porcelain mask shatters, revealing Akari's scarred, determined face]" },
        { speaker: "kaze", text: "Akari...?! It was you... all this time?!" },
        { speaker: "boss", text: "The Hollow King spared my life only to forge me into his blade. Strike me down, Kaze... or fall to me!" }
      ],
      rewardKey: "eclipse_technique", rewardName: "Eclipse Technique", rewardType: "Technique",
      rewardFile: "assets/weapons/weapon_eclipse_technique.webp",
      rewardDesc: "+30% Shadow Gauge Siphon & Eclipse Dash"
    },
    {
      level: 11, chapter: 4, chapterName: "The Veiled Truth",
      id: "drowned_city", name: "Drowned City",
      bgFile: "assets/environments/level11_drowned_city_bg.webp",
      fallbackColor: "#061f22", particleType: "rain",
      bossId: "nami", bossName: "Nami", bossTitle: "The Drowned Oracle",
      bossPortrait: "assets/portraits/boss_nami_portrait.webp",
      bossHp: 1350, bossSpeed: 1.15, bossWeaponKey: "tidal_blades",
      difficulty: 4,
      bossStyleDesc: "Flowing delayed strikes with deceptive rhythm, wave-like recovery cancels, and water bursts.",
      storyIntro: "Submerged dynasty palace ruins reflect neon-turquoise waters beneath gentle rainfall as Oracle Nami rises.",
      dialogue: [
        { speaker: "boss", text: "The tides have spoken, ronin. The fifteen seals were never a prison... they were anchor pins." },
        { speaker: "kaze", text: "Anchor pins for what?" },
        { speaker: "boss", text: "For an ancient devourer beneath reality. Let the waters wash your pride away." }
      ],
      rewardKey: "tidal_blades", rewardName: "Tidal Blades", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_tidal_blades.webp",
      rewardDesc: "+20% Fluid Recovery Cancel & Water Slash Waves"
    },
    {
      level: 12, chapter: 4, chapterName: "The Veiled Truth",
      id: "obsidian_citadel", name: "Obsidian Citadel",
      bgFile: "assets/environments/level12_obsidian_citadel_bg.webp",
      fallbackColor: "#170a1a", particleType: "lightning",
      bossId: "kurogane", bossName: "Lord Kurogane", bossTitle: "The False Shogun",
      bossPortrait: "assets/portraits/boss_kurogane_portrait.webp",
      bossHp: 1450, bossSpeed: 1.18, bossWeaponKey: "obsidian_katana",
      difficulty: 4,
      bossStyleDesc: "Imperious samurai lord with high-speed iaijutsu draws, impenetrable guard, and heavy counter-slashes.",
      storyIntro: "Imperial volcanic glass fortress of the False Shogun, forged from black obsidian under rolling thunderclouds.",
      dialogue: [
        { speaker: "boss", text: "Bow before your true Shogun, exile! Under my rule, shadow and mortal realm shall become one!" },
        { speaker: "kaze", text: "You are a puppet dancing on strings woven by a demon." },
        { speaker: "boss", text: "Then witness the perfection of imperial swordsmanship!" }
      ],
      rewardKey: "obsidian_armor", rewardName: "Obsidian Armor", rewardType: "Accessory",
      rewardFile: "assets/weapons/weapon_obsidian_armor.webp",
      rewardDesc: "-20% Incoming Damage & Stagger Immunity"
    },
    {
      level: 13, chapter: 5, chapterName: "The Eternal Void",
      id: "void_gate", name: "Void Gate",
      bgFile: "assets/environments/level13_void_gate_bg.webp",
      fallbackColor: "#150621", particleType: "void",
      bossId: "hollow_knight", bossName: "The Hollow Knight", bossTitle: "The Sealbreaker",
      bossPortrait: "assets/portraits/boss_hollow_knight_portrait.webp",
      bossHp: 1520, bossSpeed: 1.10, bossWeaponKey: "void_counter",
      difficulty: 5,
      bossStyleDesc: "Supernatural spectral entity unleashing telegraphed void shockwaves and telekinetic blade strikes.",
      storyIntro: "The fabric of reality is torn asunder. An ancient guardian forged of cosmic void and cracked armor stands sentinel.",
      dialogue: [
        { speaker: "boss", text: "THE GATEWAY MUST OPEN. THE REIGN OF MORTALS IS AT AN END." },
        { speaker: "kaze", text: "I shattered the first seal. Today, I seal the abyss forever." },
        { speaker: "boss", text: "DUST CANNOT STEM THE TIDE OF ETERNITY." }
      ],
      rewardKey: "void_counter", rewardName: "Void Counter", rewardType: "Technique",
      rewardFile: "assets/weapons/weapon_void_counter.webp",
      rewardDesc: "Automatic Spectral Void Burst On Parry"
    },
    {
      level: 14, chapter: 5, chapterName: "The Eternal Void",
      id: "throne_of_shadows", name: "Throne of Shadows",
      bgFile: "assets/environments/level14_throne_of_shadows_bg.webp",
      fallbackColor: "#08040d", particleType: "void",
      bossId: "hollow_king", bossName: "The Hollow King", bossTitle: "The Eternal Tyrant",
      bossPortrait: "assets/portraits/boss_hollow_king_portrait.webp",
      bossHp: 1650, bossSpeed: 1.20, bossWeaponKey: "nightfall_awakened",
      difficulty: 5,
      bossStyleDesc: "Two-phase apocalyptic sovereign: royal dominance in Phase 1, berserk shadow tendrils in Phase 2.",
      storyIntro: "Monolith sanctum where living shadows crawl across obsidian pillars. THE TERRIBLE TRUTH OF NIGHTFALL IS REVEALED.",
      dialogue: [
        { speaker: "boss", text: "Welcome home, Kaze. Look closely upon the blade in your hand." },
        { speaker: "kaze", text: "Nightfall... was forged to slay you." },
        { speaker: "boss", text: "FOOL! Nightfall IS my vessel! Every seal you shattered, every soul you cut... fed my resurrection!" },
        { speaker: "kaze", text: "Then it ends here. I will cut down its master!" }
      ],
      rewardKey: "nightfall_awakened", rewardName: "Awakened Nightfall", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_nightfall_awakened.webp",
      rewardDesc: "+50% True Shadow Damage & Abyssal Criticals"
    },
    {
      level: 15, chapter: 5, chapterName: "The Eternal Void",
      id: "end_of_time", name: "End of Time",
      bgFile: "assets/environments/level15_end_of_time_bg.webp",
      fallbackColor: "#0a0714", particleType: "mirror",
      bossId: "shadow_kaze", bossName: "Kaze's Shadow", bossTitle: "The Last Ronin",
      bossPortrait: "assets/portraits/boss_shadow_kaze_portrait.webp",
      bossHp: 1750, bossSpeed: 1.25, bossWeaponKey: "true_shadow",
      difficulty: 5,
      bossStyleDesc: "Flawless dark mirror of the player that counters Kaze's chosen weapon with corrupted shadow arts.",
      storyIntro: "A shattered cosmic plane beyond time. In infinite memory mirrors stands Kaze's own corrupted reflection.",
      dialogue: [
        { speaker: "boss", text: "You killed the Hollow King... but you cannot kill what you have become." },
        { speaker: "kaze", text: "You are every fear, every drop of blood I spilled to reach this threshold." },
        { speaker: "boss", text: "I am the True Ronin born of your choices. Let us see which of us claims eternity!" }
      ],
      rewardKey: "true_shadow", rewardName: "True Shadow Form", rewardType: "Technique",
      rewardFile: "assets/weapons/weapon_true_shadow.webp",
      rewardDesc: "Transcendent Shadow Mastery & Unlocks The Three Endings"
    }
  ];

  const CAMPAIGN_ENDINGS = {
    TRUE_RONIN: {
      id: "TRUE_RONIN",
      title: "TRUE RONIN: THE BROKEN BLADE",
      file: "assets/ui/ending_true_ronin.webp",
      text: "With both hands, Kaze drives Nightfall deep into the obsidian stone, shattering the cursed iron into a thousand dying embers. The dark seals collapse in blinding radiance, releasing every stolen shadow and warrior spirit back to the wandering winds. Reunited with Akari as mortals, Kaze casts aside his battle-worn armor and walks toward the golden dawn as a masterless, peaceful ronin."
    },
    ETERNAL_SHADOW: {
      id: "ETERNAL_SHADOW",
      title: "ETERNAL SHADOW: SOVEREIGN OF THE VOID",
      file: "assets/ui/ending_eternal_shadow.webp",
      text: "Drawing the dark essence of all fifteen shattered seals directly into his chest, Kaze claims the throne of the Hollow King. His mortal flesh dissolves into living, primordial shadow. Crowned as the immortal Sovereign of Shadows, Kaze commands the abyss forever, ensuring no demon shall ever threaten the mortal realm again."
    },
    BROKEN_SEAL: {
      id: "BROKEN_SEAL",
      title: "BROKEN SEAL: THE FINAL SACRIFICE",
      file: "assets/ui/ending_broken_seal.webp",
      text: "Understanding that as long as a single seal bearer lives the rift can never be closed, Kaze bids a quiet, tearful farewell to Akari. He leaps into the center of the dimensional tear, binding his own immortal soul to the celestial gateway. The rift snaps shut with absolute silence. The world is saved, etched forever in the memory of the Last Ronin."
    }
  };
"""

# Inject CAMPAIGN_DATA_JS right after SoundEngine definition
if "const CAMPAIGN_LEVELS = [" not in code:
    code = code.replace("// 1. PROCEDURAL WEB AUDIO SYNTHESIZER", CAMPAIGN_DATA_JS + "\n  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER", 1)
    print("Injected CAMPAIGN_DATA_JS")

# -----------------------------------------------------------------------------
# 2. EXPAND WEAPONS REGISTRY WITH ALL 15 WEAPONS
# -----------------------------------------------------------------------------
NEW_WEAPONS_JS = """    iron_katana: {
      name: 'IRON KATANA',
      type: 'sword',
      length: 98,
      handleLen: 27,
      width: 5.6,
      curve: 11,
      speed: 1.04,
      dmgMult: 1.10,
      stance: 'high_jodan',
      trailColor: 'rgba(240, 240, 245, 0.85)',
      trailCore: '#ffffff'
    },
    twin_daggers: {
      name: 'TWIN DAGGERS',
      type: 'dual_sai',
      length: 50,
      handleLen: 14,
      width: 4.8,
      curve: 4,
      speed: 1.34,
      dmgMult: 0.85,
      stance: 'dual_guard',
      trailColor: 'rgba(239, 68, 68, 0.85)',
      trailCore: '#fca5a5'
    },
    crimson_guard: {
      name: 'CRIMSON GUARD',
      type: 'sword',
      length: 96,
      handleLen: 26,
      width: 5.8,
      curve: 12,
      speed: 1.10,
      dmgMult: 1.05,
      stance: 'high_jodan',
      trailColor: 'rgba(239, 68, 68, 0.80)',
      trailCore: '#ffffff'
    },
    chain_blade: {
      name: 'CHAIN BLADE',
      type: 'chain_blade',
      length: 135,
      handleLen: 38,
      width: 6.2,
      curve: 22,
      speed: 0.88,
      dmgMult: 1.18,
      stance: 'polearm_guard',
      trailColor: 'rgba(245, 158, 11, 0.85)',
      trailCore: '#fef08a'
    },
    ember_katana: {
      name: 'EMBER KATANA',
      type: 'sword',
      length: 96,
      handleLen: 26,
      width: 5.8,
      curve: 12,
      speed: 1.08,
      dmgMult: 1.15,
      stance: 'high_jodan',
      trailColor: 'rgba(255, 107, 0, 0.90)',
      trailCore: '#ffedd5'
    },
    storm_spear: {
      name: 'STORM SPEAR',
      type: 'polearm',
      length: 132,
      handleLen: 68,
      width: 6.8,
      curve: 14,
      speed: 0.96,
      dmgMult: 1.20,
      stance: 'polearm_guard',
      trailColor: 'rgba(56, 189, 248, 0.90)',
      trailCore: '#e0f2fe'
    },
    azure_blades: {
      name: 'AZURE BLADES',
      type: 'dual_sai',
      length: 56,
      handleLen: 15,
      width: 4.8,
      curve: 6,
      speed: 1.28,
      dmgMult: 0.96,
      stance: 'dual_guard',
      trailColor: 'rgba(56, 189, 248, 0.88)',
      trailCore: '#ffffff'
    },
    phantom_daggers: {
      name: 'PHANTOM DAGGERS',
      type: 'dual_sai',
      length: 54,
      handleLen: 15,
      width: 4.6,
      curve: 8,
      speed: 1.35,
      dmgMult: 0.92,
      stance: 'dual_guard',
      trailColor: 'rgba(168, 85, 247, 0.88)',
      trailCore: '#f3e8ff'
    },
    heavy_cleaver: {
      name: 'HEAVY CLEAVER',
      type: 'greatsword',
      length: 116,
      handleLen: 32,
      width: 10.5,
      curve: 8,
      speed: 0.80,
      dmgMult: 1.42,
      stance: 'low_trail',
      trailColor: 'rgba(239, 68, 68, 0.90)',
      trailCore: '#fee2e2'
    },
    eclipse_technique: {
      name: 'ECLIPSE BLADES',
      type: 'dual_sai',
      length: 58,
      handleLen: 16,
      width: 5.0,
      curve: 8,
      speed: 1.30,
      dmgMult: 1.05,
      stance: 'dual_guard',
      trailColor: 'rgba(246, 211, 101, 0.90)',
      trailCore: '#ffffff'
    },
    eclipse_blades: {
      name: 'ECLIPSE BLADES',
      type: 'dual_sai',
      length: 58,
      handleLen: 16,
      width: 5.0,
      curve: 8,
      speed: 1.30,
      dmgMult: 1.05,
      stance: 'dual_guard',
      trailColor: 'rgba(246, 211, 101, 0.90)',
      trailCore: '#ffffff'
    },
    tidal_blades: {
      name: 'TIDAL BLADES',
      type: 'dual_sai',
      length: 60,
      handleLen: 16,
      width: 5.2,
      curve: 10,
      speed: 1.22,
      dmgMult: 1.04,
      stance: 'dual_guard',
      trailColor: 'rgba(45, 212, 191, 0.88)',
      trailCore: '#ccfbf1'
    },
    obsidian_armor: {
      name: 'OBSIDIAN KATANA',
      type: 'sword',
      length: 98,
      handleLen: 27,
      width: 6.0,
      curve: 12,
      speed: 1.06,
      dmgMult: 1.20,
      stance: 'high_jodan',
      trailColor: 'rgba(217, 70, 239, 0.85)',
      trailCore: '#fae8ff'
    },
    obsidian_katana: {
      name: 'OBSIDIAN KATANA',
      type: 'sword',
      length: 98,
      handleLen: 27,
      width: 6.0,
      curve: 12,
      speed: 1.06,
      dmgMult: 1.20,
      stance: 'high_jodan',
      trailColor: 'rgba(217, 70, 239, 0.85)',
      trailCore: '#fae8ff'
    },
    void_counter: {
      name: 'VOID BLADE',
      type: 'sword',
      length: 102,
      handleLen: 28,
      width: 6.4,
      curve: 14,
      speed: 1.10,
      dmgMult: 1.25,
      stance: 'high_jodan',
      trailColor: 'rgba(168, 85, 247, 0.92)',
      trailCore: '#ffffff'
    },
    void_blade: {
      name: 'VOID BLADE',
      type: 'sword',
      length: 102,
      handleLen: 28,
      width: 6.4,
      curve: 14,
      speed: 1.10,
      dmgMult: 1.25,
      stance: 'high_jodan',
      trailColor: 'rgba(168, 85, 247, 0.92)',
      trailCore: '#ffffff'
    },
    nightfall_awakened: {
      name: 'AWAKENED NIGHTFALL',
      type: 'sword',
      length: 104,
      handleLen: 28,
      width: 6.8,
      curve: 15,
      speed: 1.15,
      dmgMult: 1.38,
      stance: 'high_jodan',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6'
    },
    nightfall_essence: {
      name: 'NIGHTFALL ESSENCE',
      type: 'sword',
      length: 104,
      handleLen: 28,
      width: 6.8,
      curve: 15,
      speed: 1.15,
      dmgMult: 1.38,
      stance: 'high_jodan',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6'
    },
    true_shadow: {
      name: 'TRUE SHADOW BLADE',
      type: 'sword',
      length: 108,
      handleLen: 29,
      width: 7.0,
      curve: 16,
      speed: 1.25,
      dmgMult: 1.50,
      stance: 'high_jodan',
      trailColor: 'rgba(255, 255, 255, 0.95)',
      trailCore: '#f6d365'
    },
    quarterstaff: {
      name: 'QUARTERSTAFF',
      type: 'polearm',
      length: 120,
      handleLen: 60,
      width: 5.5,
      curve: 0,
      speed: 1.12,
      dmgMult: 0.98,
      stance: 'polearm_guard',
      trailColor: 'rgba(245, 158, 11, 0.80)',
      trailCore: '#ffffff'
    },"""

if "iron_katana:" not in code:
    code = code.replace("const WEAPONS = {", "const WEAPONS = {\n" + NEW_WEAPONS_JS, 1)
    print("Injected all 15 campaign weapons into WEAPONS dictionary")

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(code)

print("Campaign registry & weapons injection complete.")
