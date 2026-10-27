
(() => {
  'use strict';

  // ============================================================================
  
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
      bossHp: 1050, bossSpeed: 0.88, bossWeaponKey: "blood_reaper",
      difficulty: 2,
      bossStyleDesc: "Towering iron warden swinging a colossal blood reaper scythe for devastating screen-wide cleaves.",
      storyIntro: "In flooded catacombs beneath mossy stone vaults, Dreadmaw heaves a massive bloodstained scythe across cold puddles.",
      dialogue: [
        { speaker: "boss", text: "None leave the sunken vaults alive! Your flesh will bleed upon my scythe, ronin!" },
        { speaker: "kaze", text: "That colossal blade will not reap what cannot be broken." },
        { speaker: "boss", text: "Hear it sing, boy! With every swing a warrior falls!" }
      ],
      rewardKey: "blood_reaper", rewardName: "Blood Reaper Scythe", rewardType: "Weapon",
      rewardFile: "assets/weapons/weapon_chain_blade.webp",
      rewardDesc: "+45% Extended Reach & Devastating Scythe Cleaves"
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

  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER
  // ============================================================================
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }
    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }
    play(type) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      if (type === 'whoosh' || type === 'heavy_whoosh') {
        const dur = type === 'heavy_whoosh' ? 0.22 : 0.12;
        const len = Math.floor(this.ctx.sampleRate * dur);
        const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < len; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.sin((i / len) * Math.PI);
        }
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(type === 'heavy_whoosh' ? 380 : 650, now);
        filter.frequency.exponentialRampToValueAtTime(160, now + dur);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
        src.connect(filter).connect(gain).connect(this.ctx.destination);
        src.start(now);
      } else if (type === 'hit' || type === 'crit') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(type === 'crit' ? 140 : 195, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.18);
        gain.gain.setValueAtTime(type === 'crit' ? 0.38 : 0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain).connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'clang' || type === 'parry') {
        const freqs = type === 'parry' ? [1240, 1880, 2620] : [680, 1020];
        const dur = type === 'parry' ? 0.32 : 0.14;
        freqs.forEach((f, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now);
          osc.frequency.exponentialRampToValueAtTime(f * 0.86, now + dur);
          gain.gain.setValueAtTime(0.12 / (idx + 1), now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
          osc.connect(gain).connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + dur);
        });
      }
    }
  }
  const sfx = new SoundEngine();

  // ============================================================================
  // BACKEND CLIENT & PROGRESSION CONTROLLER (REST + WEBSOCKET + OFFLINE FALLBACK)
  // ============================================================================
  class BackendClient {
    constructor() {
      const isHttp = window.location.protocol.startsWith('http');
      this.baseUrl = isHttp ? window.location.origin : 'http://localhost:8080';
      this.wsUrl = (window.location.protocol === 'https:' ? 'wss://' : 'ws://') +
        (isHttp ? window.location.host : 'localhost:8085') + '/ws/combat';

      this.isOnline = false;
      this.profile = this.loadLocalProfile();
      this.currentMatchId = null;

      this.telemetry = {
        startTime: Date.now(),
        maxCombo: 0,
        parriesLanded: 0,
        shadowArtsUsed: 0
      };

      // WebSocket Multiplayer
      this.ws = null;
      this.isMultiplayer = false;
      this.mpRole = null; // 'P1' (Shadow) or 'P2' (Kid)
      this.mpRoomId = null;
      this.lastInputSendTime = 0;
    }

    loadLocalProfile() {
      try {
        const raw = localStorage.getItem('shadow_reborn_save');
        if (raw) return JSON.parse(raw);
      } catch (e) {}

      const def = {
        playerId: 'shadow_master_001',
        playerName: 'SHADOW',
        level: 1,
        xp: 0,
        coins: 1250,
        shadowOrbs: 75,
        equippedWeapon: 'katana',
        preferredArena: 'temple',
        aiDifficulty: 1,
        weaponLevels: {
          katana: 1,
          sai: 1,
          naginata: 1,
          odachi: 1,
          fists: 1
        },
        stats: {
          totalMatches: 0,
          wins: 0,
          losses: 0,
          perfectRounds: 0,
          maxCombo: 0,
          totalParries: 0,
          shadowArtsLanded: 0
        }
      };
      this.saveLocalProfile(def);
      return def;
    }

    saveLocalProfile(p) {
      this.profile = p;
      try {
        localStorage.setItem('shadow_reborn_save', JSON.stringify(p));
      } catch (e) {}
    }

    async init() {
      try {
        const c = new AbortController();
        const timeout = setTimeout(() => c.abort(), 1200);
        const res = await fetch(`${this.baseUrl}/api/profile`, { signal: c.signal });
        clearTimeout(timeout);
        if (res.ok) {
          const remoteProfile = await res.json();
          this.isOnline = true;
          this.saveLocalProfile(remoteProfile);
          console.log('[BackendClient] Connected to Java Server at', this.baseUrl);
          this.updateServerBadge(true);
          return this.profile;
        }
      } catch (e) {
        // Fallback to offline silently
      }
      this.isOnline = false;
      console.log('[BackendClient] Java server not reachable. Running in Offline Mode (localStorage).');
      this.updateServerBadge(false);
      return this.profile;
    }

    updateServerBadge(online) {
      const btn = document.getElementById('btn-server-status');
      if (!btn) return;
      btn.textContent = online ? '🟢 ONLINE (SERVER)' : '🟠 OFFLINE (LOCAL)';
      btn.className = `q-pill server-pill ${online ? 'online' : 'offline'}`;
      btn.title = online
        ? `Connected to ${this.baseUrl} - Real-time REST & WebSocket active`
        : 'Java server offline. Data safely saved to localStorage.';
    }

    async equip(weaponKey, arena, aiDifficulty) {
      if (this.profile) {
        if (weaponKey) this.profile.equippedWeapon = weaponKey;
        if (arena) this.profile.preferredArena = arena;
        if (aiDifficulty !== undefined && aiDifficulty !== null) this.profile.aiDifficulty = aiDifficulty;
        this.saveLocalProfile(this.profile);
      }

      if (!this.isOnline) return this.profile;

      try {
        const res = await fetch(`${this.baseUrl}/api/profile/equip`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ weaponKey, arena, aiDifficulty })
        });
        if (res.ok) {
          this.profile = await res.json();
          this.saveLocalProfile(this.profile);
        }
      } catch (e) {
        this.isOnline = false;
        this.updateServerBadge(false);
      }
      return this.profile;
    }

    async upgradeWeapon(weaponKey) {
      if (this.isOnline) {
        try {
          const res = await fetch(`${this.baseUrl}/api/profile/upgrade-weapon`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ weaponKey })
          });
          if (res.ok) {
            this.profile = await res.json();
            this.saveLocalProfile(this.profile);
            return { success: true, profile: this.profile };
          } else {
            const err = await res.json();
            return { success: false, error: err.error || 'Upgrade failed' };
          }
        } catch (e) {
          this.isOnline = false;
          this.updateServerBadge(false);
        }
      }

      // Offline Upgrade Validation
      const curLvl = (this.profile.weaponLevels && this.profile.weaponLevels[weaponKey]) || 1;
      if (curLvl >= 5) return { success: false, error: 'Max level reached (Level 5).' };

      const coinCost = [250, 500, 1000, 2000][curLvl - 1] || 999999;
      const orbCost = [0, 10, 25, 50][curLvl - 1] || 999999;

      if (this.profile.coins < coinCost) {
        return { success: false, error: `Need ${coinCost} coins! Current: ${this.profile.coins}` };
      }
      if (this.profile.shadowOrbs < orbCost) {
        return { success: false, error: `Need ${orbCost} orbs! Current: ${this.profile.shadowOrbs}` };
      }

      this.profile.coins -= coinCost;
      this.profile.shadowOrbs -= orbCost;
      this.profile.weaponLevels[weaponKey] = curLvl + 1;
      this.saveLocalProfile(this.profile);
      return { success: true, profile: this.profile };
    }

    async startMatch(weaponKey, aiDifficulty, arena) {
      this.telemetry = {
        startTime: Date.now(),
        maxCombo: 0,
        parriesLanded: 0,
        shadowArtsUsed: 0
      };
      this.currentMatchId = 'match_' + Date.now();

      if (!this.isOnline) return this.currentMatchId;

      try {
        const res = await fetch(`${this.baseUrl}/api/match/start`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            playerWeapon: weaponKey,
            aiDifficulty: aiDifficulty,
            arena: arena
          })
        });
        if (res.ok) {
          const data = await res.json();
          this.currentMatchId = data.matchId;
        }
      } catch (e) {
        this.isOnline = false;
        this.updateServerBadge(false);
      }
      return this.currentMatchId;
    }

    async completeMatch(matchResult) {
      const durationSeconds = Math.max(1, Math.round((Date.now() - this.telemetry.startTime) / 1000));
      const payload = {
        matchId: this.currentMatchId,
        winner: matchResult.winner,
        playerRoundsWon: matchResult.playerRoundsWon,
        opponentRoundsWon: matchResult.opponentRoundsWon,
        weaponUsed: matchResult.weaponUsed,
        aiDifficulty: matchResult.aiDifficulty,
        arena: matchResult.arena,
        maxCombo: this.telemetry.maxCombo,
        parriesLanded: this.telemetry.parriesLanded,
        shadowArtsUsed: this.telemetry.shadowArtsUsed,
        remainingHp: matchResult.remainingHp,
        durationSeconds: durationSeconds
      };

      if (this.isOnline) {
        try {
          const res = await fetch(`${this.baseUrl}/api/match/complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            const resp = await res.json();
            this.profile.level = resp.newLevel;
            this.profile.xp = resp.currentXp;
            this.profile.coins = resp.totalCoins;
            this.profile.shadowOrbs = resp.totalShadowOrbs;
            this.profile.stats = resp.stats;
            this.saveLocalProfile(this.profile);
            return { ...resp, telemetry: payload };
          }
        } catch (e) {
          this.isOnline = false;
          this.updateServerBadge(false);
        }
      }

      // Offline Complete Calculation
      const won = payload.winner === 'SHADOW';
      const mult = payload.aiDifficulty === 2 ? 2.5 : (payload.aiDifficulty === 1 ? 1.5 : 1.0);
      const earnedCoins = Math.round(((won ? 300 : 80) + payload.maxCombo * 20 + payload.parriesLanded * 35 + payload.shadowArtsUsed * 25 + Math.floor(payload.remainingHp / 5)) * mult);
      const earnedXp = Math.round(((won ? 220 : 60) + payload.maxCombo * 12 + payload.parriesLanded * 18) * mult);
      const earnedOrbs = Math.round(((won ? 18 : 3) + payload.shadowArtsUsed * 4) * (mult >= 2.0 ? 1.5 : 1.0));

      let leveledUp = false;
      this.profile.xp += earnedXp;
      while (this.profile.xp >= this.profile.level * 300) {
        this.profile.xp -= this.profile.level * 300;
        this.profile.level++;
        this.profile.coins += this.profile.level * 250;
        this.profile.shadowOrbs += this.profile.level * 15;
        leveledUp = true;
      }
      this.profile.coins += earnedCoins;
      this.profile.shadowOrbs += earnedOrbs;

      const st = this.profile.stats;
      st.totalMatches++;
      if (won) st.wins++; else st.losses++;
      st.maxCombo = Math.max(st.maxCombo, payload.maxCombo);
      st.totalParries += payload.parriesLanded;
      st.shadowArtsLanded += payload.shadowArtsUsed;

      this.saveLocalProfile(this.profile);

      const baseScore = won ? 1200 : 250;
      const score = Math.max(100, Math.round((baseScore + payload.remainingHp + payload.maxCombo * 65 + payload.parriesLanded * 45 + payload.shadowArtsUsed * 35 - durationSeconds * 2) * (payload.aiDifficulty + 1)));

      return {
        matchId: payload.matchId,
        winner: payload.winner,
        xpEarned: earnedXp,
        coinsEarned: earnedCoins,
        shadowOrbsEarned: earnedOrbs,
        leveledUp: leveledUp,
        newLevel: this.profile.level,
        currentXp: this.profile.xp,
        xpForNextLevel: this.profile.level * 300,
        totalCoins: this.profile.coins,
        totalShadowOrbs: this.profile.shadowOrbs,
        score: score,
        stats: st,
        telemetry: payload
      };
    }

    // Real-Time LAN Versus over WebSocket
    connectMultiplayer(roomId, weaponKey, callbacks) {
      if (this.ws) {
        try { this.ws.close(); } catch (e) {}
      }

      this.mpRoomId = roomId || 'dojo-1';
      const isHttp = window.location.protocol.startsWith('http');
      const wsUrl = (window.location.protocol === 'https:' ? 'wss://' : 'ws://') +
        (isHttp ? window.location.host : 'localhost:8085') + '/ws/combat';

      console.log('[Multiplayer] Connecting to', wsUrl, 'Room:', this.mpRoomId);

      try {
        this.ws = new WebSocket(wsUrl);
      } catch (err) {
        callbacks.onStatusChange && callbacks.onStatusChange(false, 'WebSocket connection error: ' + err.message);
        return;
      }

      this.ws.onopen = () => {
        this.isMultiplayer = true;
        this.ws.send(JSON.stringify({
          type: 'JOIN_ROOM',
          roomId: this.mpRoomId,
          weaponKey: weaponKey || 'katana',
          playerName: 'SHADOW'
        }));
        callbacks.onStatusChange && callbacks.onStatusChange(true, `Connected to Room "${this.mpRoomId}". Waiting for opponent...`);
      };

      this.ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type === 'ROOM_JOINED') {
            this.mpRole = msg.role;
            callbacks.onStatusChange && callbacks.onStatusChange(true, `Joined as ${msg.role}. Waiting for 2nd fighter...`);
          } else if (msg.type === 'MATCH_READY') {
            callbacks.onMatchReady && callbacks.onMatchReady(msg);
          } else if (msg.type === 'PLAYER_INPUT') {
            callbacks.onRemoteInput && callbacks.onRemoteInput(msg);
          } else if (msg.type === 'HIT_EVENT') {
            callbacks.onRemoteHit && callbacks.onRemoteHit(msg);
          } else if (msg.type === 'OPPONENT_LEFT') {
            callbacks.onStatusChange && callbacks.onStatusChange(false, 'Opponent disconnected.');
          }
        } catch (e) {}
      };

      this.ws.onerror = () => {
        this.isMultiplayer = false;
        callbacks.onStatusChange && callbacks.onStatusChange(false, 'Multiplayer connection failed. Playing vs AI.');
      };

      this.ws.onclose = () => {
        this.isMultiplayer = false;
        this.mpRole = null;
        callbacks.onStatusChange && callbacks.onStatusChange(false, 'Disconnected. Playing vs AI.');
      };
    }

    disconnectMultiplayer() {
      if (this.ws) {
        try { this.ws.close(); } catch (e) {}
        this.ws = null;
      }
      this.isMultiplayer = false;
      this.mpRole = null;
    }

    sendInput(data) {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
      const now = performance.now();
      if (now - this.lastInputSendTime < 28) return; // Cap at ~35Hz
      this.lastInputSendTime = now;
      this.ws.send(JSON.stringify({
        type: 'PLAYER_INPUT',
        roomId: this.mpRoomId,
        sender: this.mpRole || 'P1',
        ...data
      }));
    }

    sendHit(hitData) {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
      this.ws.send(JSON.stringify({
        type: 'HIT_EVENT',
        roomId: this.mpRoomId,
        attackerId: this.mpRole || 'P1',
        ...hitData
      }));
    }
  }

  const backend = new BackendClient();


  // ============================================================================
  // 2. WEAPONS, STANCES & MOVE SETS
  // ============================================================================
    // ============================================================================
  // 2. AUTHENTIC 3D COMBAT WEAPONS REGISTRY — ALL 15 WEAPONS & BOSS ARSENAL
  // ============================================================================
  const WEAPONS = {
    // --- Canonical Player Weapons (WEAPONS AND MOVEMENTS.md) ---
    nightfall: {
      name: 'NIGHTFALL',
      gripType: 'single_handed', type: 'sword',
      model: 'nightfall',
      massClass: 'medium',
      length: 98,
      handleLen: 27,
      width: 5.8,
      curve: 12,
      speed: 1.05,
      dmgMult: 1.0,
      reach: 120,
      stance: 'chudan',
      trailColor: 'rgba(240, 240, 245, 0.88)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#e2e8f0',
      glowColor: 'rgba(239, 68, 68, 0.45)'
    },
    wraith_fangs: {
      name: 'WRAITH FANGS',
      gripType: 'dual_wield', type: 'dual_daggers',
      model: 'wraith_fangs',
      massClass: 'light',
      isDual: true,
      length: 48,
      handleLen: 14,
      width: 4.8,
      curve: 6,
      speed: 1.34,
      dmgMult: 0.85,
      reach: 75,
      stance: 'dual_guard',
      trailColor: 'rgba(239, 68, 68, 0.85)',
      trailCore: '#fca5a5',
      edgeColor: 'rgba(254, 202, 202, 0.95)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(185, 28, 28, 0.5)'
    },
    skybreaker: {
      name: 'SKYBREAKER',
      gripType: 'two_handed', type: 'spear',
      model: 'skybreaker',
      massClass: 'medium',
      length: 135,
      handleLen: 70,
      width: 6.2,
      curve: 4,
      speed: 0.96,
      dmgMult: 1.18,
      reach: 165,
      stance: 'polearm_guard',
      trailColor: 'rgba(56, 189, 248, 0.85)',
      trailCore: '#e0f2fe',
      edgeColor: 'rgba(224, 242, 254, 0.95)',
      shimmerColor: '#38bdf8',
      glowColor: 'rgba(14, 165, 233, 0.4)'
    },
    leviathan_axe: {
      name: 'LEVIATHAN GREATAXE',
      gripType: 'two_handed', type: 'greataxe',
      model: 'leviathan_axe',
      massClass: 'colossal',
      length: 120,
      handleLen: 68,
      width: 38,
      curve: 14,
      speed: 0.78,
      dmgMult: 1.58,
      reach: 140,
      stance: 'hammer_guard',
      trailColor: 'rgba(249, 115, 22, 0.92)',
      trailCore: '#ffedd5',
      edgeColor: 'rgba(255, 237, 213, 0.95)',
      shimmerColor: '#f97316',
      glowColor: 'rgba(194, 65, 12, 0.55)'
    },
    ember_twinblades: {
      name: 'EMBER TWINBLADES',
      gripType: 'dual_wield', type: 'dual_swords',
      model: 'ember_twinblades',
      massClass: 'light',
      isDual: true,
      length: 68,
      handleLen: 18,
      width: 5.2,
      curve: 10,
      speed: 1.25,
      dmgMult: 0.96,
      reach: 95,
      stance: 'dual_guard',
      trailColor: 'rgba(255, 107, 0, 0.88)',
      trailCore: '#ffedd5',
      edgeColor: 'rgba(254, 215, 170, 0.95)',
      shimmerColor: '#ff6b00',
      glowColor: 'rgba(234, 88, 12, 0.5)'
    },
    stormpiercer: {
      name: 'STORMPIERCER',
      gripType: 'two_handed', type: 'spear',
      model: 'stormpiercer',
      massClass: 'heavy',
      length: 138,
      handleLen: 72,
      width: 7.0,
      curve: 6,
      speed: 0.94,
      dmgMult: 1.24,
      reach: 170,
      stance: 'polearm_guard',
      trailColor: 'rgba(14, 165, 233, 0.92)',
      trailCore: '#f0f9ff',
      edgeColor: 'rgba(240, 249, 255, 0.98)',
      shimmerColor: '#0ea5e9',
      glowColor: 'rgba(2, 132, 199, 0.6)'
    },
    azure_reapers: {
      name: 'AZURE REAPERS',
      gripType: 'dual_wield', type: 'crescent_blades',
      model: 'azure_reapers',
      massClass: 'light',
      isDual: true,
      length: 56,
      handleLen: 15,
      width: 5.6,
      curve: 16,
      speed: 1.28,
      dmgMult: 0.95,
      reach: 85,
      stance: 'dual_guard',
      trailColor: 'rgba(6, 182, 212, 0.88)',
      trailCore: '#cffafe',
      edgeColor: 'rgba(207, 250, 254, 0.95)',
      shimmerColor: '#06b6d4',
      glowColor: 'rgba(8, 145, 178, 0.5)'
    },
    blood_reaper: {
      name: 'BLOOD REAPER SCYTHE',
      gripType: 'two_handed', type: 'scythe',
      model: 'blood_reaper',
      massClass: 'colossal',
      length: 142,
      handleLen: 72,
      width: 26,
      curve: 32,
      speed: 0.88,
      dmgMult: 1.52,
      reach: 180,
      stance: 'polearm_guard',
      trailColor: 'rgba(220, 38, 38, 0.92)',
      trailCore: '#fee2e2',
      edgeColor: 'rgba(254, 226, 226, 0.98)',
      shimmerColor: '#dc2626',
      glowColor: 'rgba(185, 28, 28, 0.65)'
    },
    titans_grudge: {
      name: "TITAN'S GRUDGE",
      gripType: 'two_handed', type: 'hammer',
      model: 'titans_grudge',
      massClass: 'colossal',
      length: 104,
      handleLen: 68,
      width: 28,
      curve: 0,
      speed: 0.76,
      dmgMult: 1.55,
      reach: 125,
      stance: 'hammer_guard',
      trailColor: 'rgba(220, 38, 38, 0.90)',
      trailCore: '#fee2e2',
      edgeColor: 'rgba(254, 226, 226, 0.95)',
      shimmerColor: '#dc2626',
      glowColor: 'rgba(185, 28, 28, 0.6)'
    },
    eclipse_naginata: {
      name: 'ECLIPSE NAGINATA',
      gripType: 'two_handed', gripType: 'two_handed', type: 'naginata',
      model: 'eclipse_naginata',
      massClass: 'medium',
      length: 132,
      handleLen: 66,
      width: 6.8,
      curve: 16,
      speed: 0.94,
      dmgMult: 1.20,
      reach: 160,
      stance: 'polearm_guard',
      trailColor: 'rgba(246, 211, 101, 0.90)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#f6d365',
      glowColor: 'rgba(217, 119, 6, 0.45)'
    },
    tidebreaker: {
      name: 'TIDEBREAKER',
      gripType: 'dual_wield', type: 'dual_swords',
      model: 'tidebreaker',
      massClass: 'medium',
      isDual: true,
      length: 64,
      handleLen: 16,
      width: 5.6,
      curve: 14,
      speed: 1.20,
      dmgMult: 1.05,
      reach: 92,
      stance: 'dual_guard',
      trailColor: 'rgba(45, 212, 191, 0.88)',
      trailCore: '#ccfbf1',
      edgeColor: 'rgba(204, 251, 241, 0.95)',
      shimmerColor: '#2dd4bf',
      glowColor: 'rgba(13, 148, 136, 0.5)'
    },
    obsidian_fists: {
      name: 'OBSIDIAN FISTS',
      gripType: 'dual_wield', gripType: 'unarmed', type: 'gauntlets',
      model: 'obsidian_fists',
      massClass: 'light',
      isDual: true,
      length: 32,
      handleLen: 0,
      width: 14,
      curve: 0,
      speed: 1.35,
      dmgMult: 0.92,
      reach: 55,
      stance: 'fist_guard',
      trailColor: 'rgba(217, 70, 239, 0.85)',
      trailCore: '#fae8ff',
      edgeColor: 'rgba(250, 232, 255, 0.95)',
      shimmerColor: '#d946ef',
      glowColor: 'rgba(162, 28, 175, 0.5)'
    },
    voidcleaver: {
      name: 'VOIDCLEAVER',
      gripType: 'two_handed', type: 'greatsword',
      model: 'voidcleaver',
      massClass: 'colossal',
      length: 118,
      handleLen: 32,
      width: 13,
      curve: 8,
      speed: 0.78,
      dmgMult: 1.48,
      reach: 145,
      stance: 'low_trail',
      trailColor: 'rgba(168, 85, 247, 0.92)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(243, 232, 255, 0.98)',
      shimmerColor: '#a855f7',
      glowColor: 'rgba(126, 34, 206, 0.6)'
    },
    kingslayer: {
      name: 'KINGSLAYER',
      gripType: 'two_handed', type: 'executioner',
      model: 'kingslayer',
      massClass: 'heavy',
      length: 122,
      handleLen: 34,
      width: 11,
      curve: 4,
      speed: 0.85,
      dmgMult: 1.42,
      reach: 150,
      stance: 'low_trail',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6',
      edgeColor: 'rgba(255, 228, 230, 0.98)',
      shimmerColor: '#e11d48',
      glowColor: 'rgba(190, 18, 60, 0.6)'
    },
    eternal_night: {
      name: 'ETERNAL NIGHT',
      gripType: 'transforming', type: 'transforming',
      model: 'eternal_night',
      massClass: 'medium',
      length: 112,
      handleLen: 30,
      width: 7.2,
      curve: 15,
      speed: 1.18,
      dmgMult: 1.55,
      reach: 140,
      stance: 'chudan',
      trailColor: 'rgba(255, 255, 255, 0.95)',
      trailCore: '#f6d365',
      edgeColor: 'rgba(255, 255, 255, 1.0)',
      shimmerColor: '#fbbf24',
      glowColor: 'rgba(245, 158, 11, 0.6)'
    },

    // --- Boss Weapons (Matching Campaign Levels 1-15) ---
    ashen_oathblade: {
      name: 'ASHEN OATHBLADE',
      gripType: 'single_handed', type: 'sword',
      model: 'ashen_oathblade',
      massClass: 'medium',
      length: 98,
      handleLen: 27,
      width: 6.4,
      curve: 11,
      speed: 0.98,
      dmgMult: 1.15,
      reach: 122,
      stance: 'chudan',
      trailColor: 'rgba(148, 163, 184, 0.85)',
      trailCore: '#f1f5f9',
      edgeColor: 'rgba(241, 245, 249, 0.95)',
      shimmerColor: '#94a3b8',
      glowColor: 'rgba(71, 85, 105, 0.5)'
    },
    twin_rippers: {
      name: 'TWIN RIPPERS',
      gripType: 'dual_wield', type: 'dual_daggers',
      model: 'twin_rippers',
      massClass: 'light',
      isDual: true,
      length: 52,
      handleLen: 14,
      width: 5.2,
      curve: 8,
      speed: 1.35,
      dmgMult: 0.90,
      reach: 80,
      stance: 'dual_guard',
      trailColor: 'rgba(220, 38, 38, 0.90)',
      trailCore: '#fca5a5',
      edgeColor: 'rgba(254, 202, 202, 0.95)',
      shimmerColor: '#dc2626',
      glowColor: 'rgba(185, 28, 28, 0.5)'
    },
    ironwood_staff: {
      name: 'IRONWOOD STAFF',
      gripType: 'two_handed', type: 'staff',
      model: 'ironwood_staff',
      massClass: 'medium',
      length: 124,
      handleLen: 62,
      width: 5.8,
      curve: 0,
      speed: 1.12,
      dmgMult: 1.02,
      reach: 150,
      stance: 'polearm_guard',
      trailColor: 'rgba(217, 119, 6, 0.82)',
      trailCore: '#fef08a',
      edgeColor: 'rgba(254, 240, 138, 0.90)',
      shimmerColor: '#d97706',
      glowColor: 'rgba(180, 83, 9, 0.4)'
    },
    caged_flail: {
      name: 'BLOOD REAPER SCYTHE',
      gripType: 'two_handed', type: 'scythe',
      model: 'blood_reaper',
      massClass: 'colossal',
      length: 142,
      handleLen: 72,
      width: 26,
      curve: 32,
      speed: 0.88,
      dmgMult: 1.52,
      reach: 180,
      stance: 'polearm_guard',
      trailColor: 'rgba(220, 38, 38, 0.92)',
      trailCore: '#fee2e2',
      edgeColor: 'rgba(254, 226, 226, 0.98)',
      shimmerColor: '#dc2626',
      glowColor: 'rgba(185, 28, 28, 0.65)'
    },
    crimson_jian: {
      name: 'CRIMSON DRAGON JIAN',
      gripType: 'single_handed', type: 'sword',
      model: 'crimson_jian',
      massClass: 'medium',
      length: 96,
      handleLen: 26,
      width: 5.6,
      curve: 0,
      speed: 1.10,
      dmgMult: 1.12,
      reach: 118,
      stance: 'chudan',
      trailColor: 'rgba(239, 68, 68, 0.92)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.98)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(220, 38, 38, 0.5)'
    },
    thunder_glaive: {
      name: 'THUNDER GLAIVE',
      gripType: 'two_handed', type: 'polearm',
      model: 'thunder_glaive',
      massClass: 'heavy',
      length: 136,
      handleLen: 70,
      width: 7.5,
      curve: 12,
      speed: 0.95,
      dmgMult: 1.22,
      reach: 168,
      stance: 'polearm_guard',
      trailColor: 'rgba(14, 165, 233, 0.92)',
      trailCore: '#e0f2fe',
      edgeColor: 'rgba(224, 242, 254, 0.95)',
      shimmerColor: '#0ea5e9',
      glowColor: 'rgba(3, 105, 161, 0.5)'
    },
    crescent_kodachi: {
      name: 'CRESCENT KODACHI',
      gripType: 'dual_wield', gripType: 'two_handed', type: 'dual_swords',
      model: 'crescent_kodachi',
      massClass: 'light',
      isDual: true,
      length: 58,
      handleLen: 16,
      width: 5.0,
      curve: 9,
      speed: 1.30,
      dmgMult: 0.98,
      reach: 88,
      stance: 'dual_guard',
      trailColor: 'rgba(6, 182, 212, 0.90)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#06b6d4',
      glowColor: 'rgba(8, 145, 178, 0.5)'
    },
    marionette_blades: {
      name: 'MARIONETTE BLADES',
      gripType: 'dual_wield', type: 'dual_daggers',
      model: 'marionette_blades',
      massClass: 'light',
      isDual: true,
      length: 54,
      handleLen: 15,
      width: 4.6,
      curve: 8,
      speed: 1.35,
      dmgMult: 0.94,
      reach: 82,
      stance: 'dual_guard',
      trailColor: 'rgba(168, 85, 247, 0.88)',
      trailCore: '#f3e8ff',
      edgeColor: 'rgba(243, 232, 255, 0.95)',
      shimmerColor: '#a855f7',
      glowColor: 'rgba(126, 34, 206, 0.5)'
    },
    colossus_maul: {
      name: 'COLOSSUS MAUL',
      gripType: 'two_handed', type: 'hammer',
      model: 'colossus_maul',
      massClass: 'colossal',
      length: 112,
      handleLen: 70,
      width: 32,
      curve: 0,
      speed: 0.76,
      dmgMult: 1.50,
      reach: 130,
      stance: 'hammer_guard',
      trailColor: 'rgba(239, 68, 68, 0.92)',
      trailCore: '#fee2e2',
      edgeColor: 'rgba(254, 226, 226, 0.95)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(185, 28, 28, 0.6)'
    },
    sunpiercer_fans: {
      name: 'SUNPIERCER FANS',
      gripType: 'dual_wield', type: 'war_fans',
      model: 'sunpiercer_fans',
      massClass: 'light',
      isDual: true,
      length: 46,
      handleLen: 12,
      width: 24,
      curve: 0,
      speed: 1.32,
      dmgMult: 1.02,
      reach: 78,
      stance: 'dual_guard',
      trailColor: 'rgba(245, 158, 11, 0.92)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#f59e0b',
      glowColor: 'rgba(217, 119, 6, 0.5)'
    },
    tide_crescents: {
      name: 'TIDE CRESCENTS',
      gripType: 'dual_wield', type: 'crescent_blades',
      model: 'tide_crescents',
      massClass: 'medium',
      isDual: true,
      length: 62,
      handleLen: 16,
      width: 5.6,
      curve: 12,
      speed: 1.22,
      dmgMult: 1.06,
      reach: 94,
      stance: 'dual_guard',
      trailColor: 'rgba(45, 212, 191, 0.90)',
      trailCore: '#ccfbf1',
      edgeColor: 'rgba(204, 251, 241, 0.95)',
      shimmerColor: '#2dd4bf',
      glowColor: 'rgba(13, 148, 136, 0.5)'
    },
    shoguns_breaker: {
      name: "SHOGUN'S BREAKER",
      gripType: 'two_handed', type: 'kanabo',
      model: 'shoguns_breaker',
      massClass: 'colossal',
      length: 110,
      handleLen: 32,
      width: 14,
      curve: 0,
      speed: 0.78,
      dmgMult: 1.48,
      reach: 135,
      stance: 'hammer_guard',
      trailColor: 'rgba(217, 70, 239, 0.88)',
      trailCore: '#fae8ff',
      edgeColor: 'rgba(250, 232, 255, 0.95)',
      shimmerColor: '#d946ef',
      glowColor: 'rgba(162, 28, 175, 0.6)'
    },
    graveglass: {
      name: 'GRAVEGLASS GREATSWORD',
      gripType: 'two_handed', type: 'greatsword',
      model: 'graveglass',
      massClass: 'heavy',
      length: 120,
      handleLen: 32,
      width: 15,
      curve: 6,
      speed: 0.82,
      dmgMult: 1.42,
      reach: 148,
      stance: 'low_trail',
      trailColor: 'rgba(103, 232, 249, 0.90)',
      trailCore: '#ecfeff',
      edgeColor: 'rgba(236, 254, 255, 0.98)',
      shimmerColor: '#67e8f9',
      glowColor: 'rgba(8, 145, 178, 0.6)'
    },
    thronebreaker_scepter: {
      name: 'THRONEBREAKER SCEPTER',
      gripType: 'two_handed', type: 'scepter',
      model: 'thronebreaker_scepter',
      massClass: 'colossal',
      length: 108,
      handleLen: 54,
      width: 22,
      curve: 0,
      speed: 0.85,
      dmgMult: 1.50,
      reach: 138,
      stance: 'polearm_guard',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6',
      edgeColor: 'rgba(255, 228, 230, 0.98)',
      shimmerColor: '#e11d48',
      glowColor: 'rgba(190, 18, 60, 0.6)'
    },
    ruinbound_echo: {
      name: 'RUINBOUND ECHO',
      gripType: 'single_handed', type: 'sword',
      model: 'ruinbound_echo',
      massClass: 'medium',
      length: 106,
      handleLen: 28,
      width: 6.8,
      curve: 15,
      speed: 1.20,
      dmgMult: 1.52,
      reach: 132,
      stance: 'chudan',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6',
      edgeColor: 'rgba(255, 255, 255, 0.98)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(220, 38, 38, 0.6)'
    },

    // --- Campaign Key Aliases & Unlocks (Fully mapped to high-res 3D models) ---
    iron_katana: {
      name: 'IRON KATANA',
      gripType: 'single_handed', gripType: 'single_handed', type: 'sword',
      model: 'ashen_oathblade',
      massClass: 'medium',
      length: 98,
      handleLen: 27,
      width: 6.2,
      curve: 11,
      speed: 1.04,
      dmgMult: 1.10,
      reach: 120,
      stance: 'chudan',
      trailColor: 'rgba(240, 240, 245, 0.85)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#94a3b8',
      glowColor: 'rgba(71, 85, 105, 0.45)'
    },
    twin_daggers: {
      name: 'TWIN DAGGERS',
      gripType: 'dual_wield', type: 'dual_daggers',
      model: 'twin_rippers',
      massClass: 'light',
      isDual: true,
      length: 50,
      handleLen: 14,
      width: 5.0,
      curve: 6,
      speed: 1.34,
      dmgMult: 0.88,
      reach: 78,
      stance: 'dual_guard',
      trailColor: 'rgba(239, 68, 68, 0.85)',
      trailCore: '#fca5a5',
      edgeColor: 'rgba(254, 202, 202, 0.95)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(185, 28, 28, 0.5)'
    },
    quarterstaff: {
      name: 'QUARTERSTAFF',
      gripType: 'two_handed', type: 'staff',
      model: 'ironwood_staff',
      massClass: 'medium',
      length: 122,
      handleLen: 60,
      width: 5.6,
      curve: 0,
      speed: 1.12,
      dmgMult: 1.0,
      reach: 150,
      stance: 'polearm_guard',
      trailColor: 'rgba(245, 158, 11, 0.82)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(254, 240, 138, 0.90)',
      shimmerColor: '#d97706',
      glowColor: 'rgba(180, 83, 9, 0.4)'
    },
    crimson_guard: {
      name: 'CRIMSON GUARD',
      gripType: 'single_handed', type: 'sword',
      model: 'crimson_jian',
      massClass: 'medium',
      length: 96,
      handleLen: 26,
      width: 5.8,
      curve: 0,
      speed: 1.10,
      dmgMult: 1.05,
      reach: 118,
      stance: 'chudan',
      trailColor: 'rgba(239, 68, 68, 0.85)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(220, 38, 38, 0.5)'
    },
    chain_blade: {
      name: 'BLOOD REAPER SCYTHE',
      gripType: 'two_handed', type: 'scythe',
      model: 'blood_reaper',
      massClass: 'colossal',
      length: 142,
      handleLen: 72,
      width: 26,
      curve: 32,
      speed: 0.88,
      dmgMult: 1.52,
      reach: 180,
      stance: 'polearm_guard',
      trailColor: 'rgba(220, 38, 38, 0.92)',
      trailCore: '#fee2e2',
      edgeColor: 'rgba(254, 226, 226, 0.98)',
      shimmerColor: '#dc2626',
      glowColor: 'rgba(185, 28, 28, 0.65)'
    },
    ember_katana: {
      name: 'EMBER KATANA',
      gripType: 'single_handed', type: 'sword',
      model: 'crimson_jian',
      massClass: 'medium',
      length: 96,
      handleLen: 26,
      width: 5.8,
      curve: 0,
      speed: 1.08,
      dmgMult: 1.15,
      reach: 118,
      stance: 'chudan',
      trailColor: 'rgba(255, 107, 0, 0.90)',
      trailCore: '#ffedd5',
      edgeColor: 'rgba(255, 237, 213, 0.95)',
      shimmerColor: '#ff6b00',
      glowColor: 'rgba(234, 88, 12, 0.5)'
    },
    storm_spear: {
      name: 'STORM SPEAR',
      gripType: 'two_handed', type: 'polearm',
      model: 'thunder_glaive',
      massClass: 'heavy',
      length: 135,
      handleLen: 68,
      width: 7.2,
      curve: 12,
      speed: 0.96,
      dmgMult: 1.20,
      reach: 168,
      stance: 'polearm_guard',
      trailColor: 'rgba(56, 189, 248, 0.90)',
      trailCore: '#e0f2fe',
      edgeColor: 'rgba(224, 242, 254, 0.95)',
      shimmerColor: '#38bdf8',
      glowColor: 'rgba(14, 165, 233, 0.5)'
    },
    azure_blades: {
      name: 'AZURE BLADES',
      gripType: 'dual_wield', type: 'dual_swords',
      model: 'crescent_kodachi',
      massClass: 'light',
      isDual: true,
      length: 56,
      handleLen: 15,
      width: 5.0,
      curve: 8,
      speed: 1.28,
      dmgMult: 0.96,
      reach: 86,
      stance: 'dual_guard',
      trailColor: 'rgba(56, 189, 248, 0.88)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#38bdf8',
      glowColor: 'rgba(14, 165, 233, 0.5)'
    },
    phantom_daggers: {
      name: 'PHANTOM DAGGERS',
      gripType: 'dual_wield', type: 'dual_daggers',
      model: 'marionette_blades',
      massClass: 'light',
      isDual: true,
      length: 54,
      handleLen: 15,
      width: 4.6,
      curve: 8,
      speed: 1.35,
      dmgMult: 0.92,
      reach: 82,
      stance: 'dual_guard',
      trailColor: 'rgba(168, 85, 247, 0.88)',
      trailCore: '#f3e8ff',
      edgeColor: 'rgba(243, 232, 255, 0.95)',
      shimmerColor: '#a855f7',
      glowColor: 'rgba(126, 34, 206, 0.5)'
    },
    heavy_cleaver: {
      name: 'HEAVY CLEAVER',
      gripType: 'two_handed', type: 'hammer',
      model: 'colossus_maul',
      massClass: 'colossal',
      length: 114,
      handleLen: 68,
      width: 30,
      curve: 0,
      speed: 0.78,
      dmgMult: 1.45,
      reach: 128,
      stance: 'hammer_guard',
      trailColor: 'rgba(239, 68, 68, 0.90)',
      trailCore: '#fee2e2',
      edgeColor: 'rgba(254, 226, 226, 0.95)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(185, 28, 28, 0.6)'
    },
    eclipse_technique: {
      name: 'ECLIPSE FANS',
      gripType: 'dual_wield', type: 'war_fans',
      model: 'sunpiercer_fans',
      massClass: 'light',
      isDual: true,
      length: 46,
      handleLen: 12,
      width: 24,
      curve: 0,
      speed: 1.30,
      dmgMult: 1.05,
      reach: 78,
      stance: 'dual_guard',
      trailColor: 'rgba(246, 211, 101, 0.90)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#f6d365',
      glowColor: 'rgba(217, 119, 6, 0.5)'
    },
    eclipse_blades: {
      name: 'ECLIPSE FANS',
      gripType: 'dual_wield', type: 'war_fans',
      model: 'sunpiercer_fans',
      massClass: 'light',
      isDual: true,
      length: 46,
      handleLen: 12,
      width: 24,
      curve: 0,
      speed: 1.30,
      dmgMult: 1.05,
      reach: 78,
      stance: 'dual_guard',
      trailColor: 'rgba(246, 211, 101, 0.90)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#f6d365',
      glowColor: 'rgba(217, 119, 6, 0.5)'
    },
    tidal_blades: {
      name: 'TIDAL BLADES',
      gripType: 'dual_wield', type: 'crescent_blades',
      model: 'tide_crescents',
      massClass: 'medium',
      isDual: true,
      length: 62,
      handleLen: 16,
      width: 5.6,
      curve: 12,
      speed: 1.22,
      dmgMult: 1.04,
      reach: 94,
      stance: 'dual_guard',
      trailColor: 'rgba(45, 212, 191, 0.88)',
      trailCore: '#ccfbf1',
      edgeColor: 'rgba(204, 251, 241, 0.95)',
      shimmerColor: '#2dd4bf',
      glowColor: 'rgba(13, 148, 136, 0.5)'
    },
    obsidian_armor: {
      name: 'SHOGUN KANABO',
      gripType: 'two_handed', type: 'kanabo',
      model: 'shoguns_breaker',
      massClass: 'colossal',
      length: 108,
      handleLen: 30,
      width: 14,
      curve: 0,
      speed: 0.80,
      dmgMult: 1.45,
      reach: 135,
      stance: 'hammer_guard',
      trailColor: 'rgba(217, 70, 239, 0.85)',
      trailCore: '#fae8ff',
      edgeColor: 'rgba(250, 232, 255, 0.95)',
      shimmerColor: '#d946ef',
      glowColor: 'rgba(162, 28, 175, 0.6)'
    },
    obsidian_katana: {
      name: 'SHOGUN KANABO',
      gripType: 'two_handed', type: 'kanabo',
      model: 'shoguns_breaker',
      massClass: 'colossal',
      length: 108,
      handleLen: 30,
      width: 14,
      curve: 0,
      speed: 0.80,
      dmgMult: 1.45,
      reach: 135,
      stance: 'hammer_guard',
      trailColor: 'rgba(217, 70, 239, 0.85)',
      trailCore: '#fae8ff',
      edgeColor: 'rgba(250, 232, 255, 0.95)',
      shimmerColor: '#d946ef',
      glowColor: 'rgba(162, 28, 175, 0.6)'
    },
    void_counter: {
      name: 'GRAVEGLASS GREATSWORD',
      gripType: 'two_handed', type: 'greatsword',
      model: 'graveglass',
      massClass: 'heavy',
      length: 118,
      handleLen: 32,
      width: 15,
      curve: 6,
      speed: 0.84,
      dmgMult: 1.40,
      reach: 146,
      stance: 'low_trail',
      trailColor: 'rgba(103, 232, 249, 0.92)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(236, 254, 255, 0.98)',
      shimmerColor: '#67e8f9',
      glowColor: 'rgba(8, 145, 178, 0.6)'
    },
    void_blade: {
      name: 'VOID CLEAVER',
      gripType: 'two_handed', type: 'greatsword',
      model: 'voidcleaver',
      massClass: 'colossal',
      length: 116,
      handleLen: 32,
      width: 13,
      curve: 8,
      speed: 0.82,
      dmgMult: 1.42,
      reach: 144,
      stance: 'low_trail',
      trailColor: 'rgba(168, 85, 247, 0.92)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(243, 232, 255, 0.98)',
      shimmerColor: '#a855f7',
      glowColor: 'rgba(126, 34, 206, 0.6)'
    },
    nightfall_awakened: {
      name: 'THRONEBREAKER SCEPTER',
      gripType: 'two_handed', type: 'scepter',
      model: 'thronebreaker_scepter',
      massClass: 'colossal',
      length: 108,
      handleLen: 54,
      width: 22,
      curve: 0,
      speed: 0.85,
      dmgMult: 1.50,
      reach: 138,
      stance: 'polearm_guard',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6',
      edgeColor: 'rgba(255, 228, 230, 0.98)',
      shimmerColor: '#e11d48',
      glowColor: 'rgba(190, 18, 60, 0.6)'
    },
    nightfall_essence: {
      name: 'KINGSLAYER',
      gripType: 'two_handed', type: 'executioner',
      model: 'kingslayer',
      massClass: 'heavy',
      length: 120,
      handleLen: 32,
      width: 11,
      curve: 4,
      speed: 0.86,
      dmgMult: 1.40,
      reach: 148,
      stance: 'low_trail',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6',
      edgeColor: 'rgba(255, 228, 230, 0.98)',
      shimmerColor: '#e11d48',
      glowColor: 'rgba(190, 18, 60, 0.6)'
    },
    true_shadow: {
      name: 'RUINBOUND ECHO',
      gripType: 'single_handed', type: 'sword',
      model: 'ruinbound_echo',
      massClass: 'medium',
      length: 106,
      handleLen: 28,
      width: 6.8,
      curve: 15,
      speed: 1.20,
      dmgMult: 1.52,
      reach: 132,
      stance: 'chudan',
      trailColor: 'rgba(225, 29, 72, 0.95)',
      trailCore: '#ffe4e6',
      edgeColor: 'rgba(255, 255, 255, 0.98)',
      shimmerColor: '#ef4444',
      glowColor: 'rgba(220, 38, 38, 0.6)'
    },

    // --- Quick-Switcher Hotkeys (1-5) ---
    katana: {
      name: 'NIGHTFALL KATANA',
      type: 'sword',
      model: 'nightfall',
      massClass: 'medium',
      length: 98,
      handleLen: 27,
      width: 5.8,
      curve: 12,
      speed: 1.05,
      dmgMult: 1.0,
      reach: 120,
      stance: 'chudan',
      trailColor: 'rgba(240, 240, 245, 0.88)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#e2e8f0',
      glowColor: 'rgba(239, 68, 68, 0.45)'
    },
    sai: {
      name: 'TWIN WRAITH SAI',
      gripType: 'dual_wield', type: 'dual_sai',
      model: 'wraith_fangs',
      massClass: 'light',
      isDual: true,
      length: 50,
      handleLen: 14,
      width: 4.8,
      curve: 4,
      speed: 1.34,
      dmgMult: 0.88,
      reach: 78,
      stance: 'dual_guard',
      trailColor: 'rgba(144, 224, 239, 0.85)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(224, 242, 254, 0.95)',
      shimmerColor: '#38bdf8',
      glowColor: 'rgba(14, 165, 233, 0.4)'
    },
    naginata: {
      name: 'ECLIPSE NAGINATA',
      type: 'polearm',
      model: 'eclipse_naginata',
      massClass: 'medium',
      length: 130,
      handleLen: 66,
      width: 6.8,
      curve: 15,
      speed: 0.95,
      dmgMult: 1.18,
      reach: 160,
      stance: 'polearm_guard',
      trailColor: 'rgba(255, 209, 102, 0.85)',
      trailCore: '#ffffff',
      edgeColor: 'rgba(255, 255, 255, 0.95)',
      shimmerColor: '#f6d365',
      glowColor: 'rgba(217, 119, 6, 0.45)'
    },
    odachi: {
      name: 'VOID HEAVY ODACHI',
      type: 'greatsword',
      model: 'voidcleaver',
      massClass: 'colossal',
      length: 122,
      handleLen: 34,
      width: 10.5,
      curve: 14,
      speed: 0.80,
      dmgMult: 1.45,
      reach: 148,
      stance: 'low_trail',
      trailColor: 'rgba(255, 107, 0, 0.88)',
      trailCore: '#fff3c4',
      edgeColor: 'rgba(255, 243, 196, 0.95)',
      shimmerColor: '#ff6b00',
      glowColor: 'rgba(234, 88, 12, 0.5)'
    },
    fists: {
      name: 'OBSIDIAN FISTS',
      type: 'gauntlets',
      model: 'obsidian_fists',
      massClass: 'light',
      isDual: true,
      length: 32,
      handleLen: 0,
      width: 14,
      curve: 0,
      speed: 1.35,
      dmgMult: 0.92,
      reach: 55,
      stance: 'fist_guard',
      trailColor: 'rgba(217, 70, 239, 0.85)',
      trailCore: '#fae8ff',
      edgeColor: 'rgba(250, 232, 255, 0.95)',
      shimmerColor: '#d946ef',
      glowColor: 'rgba(162, 28, 175, 0.5)'
    }
  };

  // Backward-compatibility aliases for legacy saves & progression
  WEAPONS.iron_maw = WEAPONS.leviathan_axe;
  WEAPONS.chain_of_ruin = WEAPONS.blood_reaper;

  const MOVES = {
    SLASH_1: { startup: 0.08, active: 0.11, recovery: 0.14, dmg: 65, push: 115, lunge: 160, shake: 4, limb: 'weapon' },
    SLASH_2: { startup: 0.07, active: 0.11, recovery: 0.15, dmg: 78, push: 135, lunge: 185, shake: 5, limb: 'weapon' },
    SLASH_3: { startup: 0.11, active: 0.13, recovery: 0.21, dmg: 112, push: 260, lunge: 230, shake: 9, knockdown: true, limb: 'weapon' },
    HEAVY:   { startup: 0.17, active: 0.14, recovery: 0.24, dmg: 142, push: 290, lunge: 225, shake: 11, knockdown: true, limb: 'weapon' },
    THRUST:  { startup: 0.10, active: 0.12, recovery: 0.18, dmg: 96, push: 220, lunge: 310, shake: 7, limb: 'weapon' },
    KICK_HIGH: { startup: 0.07, active: 0.11, recovery: 0.15, dmg: 68, push: 210, lunge: 150, shake: 6, limb: 'foot' },
    SWEEP_LOW: { startup: 0.10, active: 0.13, recovery: 0.20, dmg: 74, push: 150, lunge: 185, shake: 7, knockdown: true, low: true, limb: 'foot' },
    SHADOW_ART: { startup: 0.14, active: 0.22, recovery: 0.22, dmg: 220, push: 350, lunge: 420, shake: 15, knockdown: true, unblockable: true, limb: 'weapon' }
  };

  // ============================================================================
  // 3. MATH & 2-BONE INVERSE KINEMATICS SOLVER
  // ============================================================================
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (t) => t * t * (3 - 2 * t);

  function solveTwoBoneIK(rootX, rootY, targetX, targetY, len1, len2, bendDir) {
    let dx = targetX - rootX;
    let dy = targetY - rootY;
    const maxReach = (len1 + len2) * 0.992;
    const minReach = Math.abs(len1 - len2) + 2;
    let dist = Math.hypot(dx, dy);

    if (dist > maxReach) {
      const s = maxReach / dist;
      dx *= s; dy *= s; dist = maxReach;
    } else if (dist < minReach) {
      const s = minReach / (dist || 1);
      dx *= s; dy *= s; dist = minReach;
    }

    const cosA = clamp((len1 * len1 + dist * dist - len2 * len2) / (2 * len1 * dist), -1, 1);
    const ang = Math.acos(cosA);
    const baseAng = Math.atan2(dy, dx);
    const jointAng = baseAng + bendDir * ang;

    return {
      midX: rootX + Math.cos(jointAng) * len1,
      midY: rootY + Math.sin(jointAng) * len1,
      endX: rootX + dx,
      endY: rootY + dy
    };
  }

  function distToSegmentSq(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    if (l2 === 0) return (px - x1) ** 2 + (py - y1) ** 2;
    const t = clamp(((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2, 0, 1);
    return (px - (x1 + t * (x2 - x1))) ** 2 + (py - (y1 + t * (y2 - y1))) ** 2;
  }

  // ============================================================================
  // 4. OBJECT-POOLED VFX & AUTUMN LEAF / SPARK SYSTEM
  // ============================================================================
  class VFXSystem {
    constructor() {
      this.particles = Array.from({ length: 200 }, () => ({ active: false }));
      this.rings = Array.from({ length: 20 }, () => ({ active: false }));
      this.leaves = Array.from({ length: 56 }, () => ({
        x: Math.random() * 2000,
        y: Math.random() * 720,
        vx: -22 - Math.random() * 30,
        vy: 16 + Math.random() * 24,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 3,
        size: 4 + Math.random() * 5.5,
        color: ['#b91c1c', '#dc2626', '#ea580c', '#f59e0b', '#fbbf24'][Math.floor(Math.random() * 5)]
      }));
    }

    spawnSpark(x, y, dir, color, count = 16, speed = 310) {
      for (let n = 0; n < count; n++) {
        const p = this.particles.find(pt => !pt.active);
        if (!p) break;
        const ang = Math.atan2(-0.3 + (Math.random() - 0.5) * 1.4, dir * (0.4 + Math.random() * 0.9));
        const spd = speed * (0.4 + Math.random() * 0.8);
        p.active = true;
        p.x = x; p.y = y;
        p.vx = Math.cos(ang) * spd;
        p.vy = Math.sin(ang) * spd;
        p.color = n % 3 === 0 ? '#ffffff' : color;
        p.size = 2.2 + Math.random() * 2.6;
        p.life = 0.16 + Math.random() * 0.2;
        p.maxLife = p.life;
        p.gravity = 700;
        p.isSpark = true;
      }
    }

    spawnDust(x, y, dir, count = 5) {
      for (let n = 0; n < count; n++) {
        const p = this.particles.find(pt => !pt.active);
        if (!p) break;
        p.active = true;
        p.x = x + (Math.random() - 0.5) * 18;
        p.y = y - 3;
        p.vx = dir * (20 + Math.random() * 65);
        p.vy = -12 - Math.random() * 35;
        p.color = 'rgba(220, 195, 165, 0.38)';
        p.size = 6 + Math.random() * 8;
        p.life = 0.28 + Math.random() * 0.18;
        p.maxLife = p.life;
        p.gravity = -20;
        p.isSpark = false;
      }
    }

    spawnRing(x, y, color, maxR = 85, dur = 0.24) {
      const r = this.rings.find(rg => !rg.active);
      if (!r) return;
      r.active = true;
      r.x = x; r.y = y;
      r.color = color;
      r.maxR = maxR;
      r.life = dur;
      r.maxLife = dur;
    }

    update(dt, time, worldWidth) {
      for (const p of this.particles) {
        if (!p.active) continue;
        p.life -= dt;
        if (p.life <= 0) { p.active = false; continue; }
        p.vy += p.gravity * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }
      for (const r of this.rings) {
        if (!r.active) continue;
        r.life -= dt;
        if (r.life <= 0) r.active = false;
      }
      for (let i = 0; i < this.leaves.length; i++) {
        const lf = this.leaves[i];
        lf.x += (lf.vx + Math.sin(time * 1.6 + i) * 14) * dt;
        lf.y += lf.vy * dt;
        lf.rot += lf.vRot * dt;
        if (lf.y > 700 || lf.x < -100) {
          lf.y = -20 - Math.random() * 60;
          lf.x = Math.random() * (worldWidth + 300);
        }
      }
    }

    renderLeaves(ctx) {
      ctx.save();
      for (const lf of this.leaves) {
        ctx.save();
        ctx.translate(lf.x, lf.y);
        ctx.rotate(lf.rot);
        ctx.fillStyle = lf.color;
        ctx.globalAlpha = 0.78;
        ctx.beginPath();
        ctx.moveTo(-lf.size, 0);
        ctx.quadraticCurveTo(0, -lf.size * 0.7, lf.size, 0);
        ctx.quadraticCurveTo(0, lf.size * 0.7, -lf.size, 0);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }

    renderCombatEffects(ctx) {
      ctx.save();
      for (const r of this.rings) {
        if (!r.active) continue;
        const prog = 1 - r.life / r.maxLife;
        const rad = lerp(8, r.maxR, smoothstep(prog));
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = (1 - prog) * 0.85;
        ctx.lineWidth = (1 - prog) * 5 + 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, rad, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (const p of this.particles) {
        if (!p.active) continue;
        const alpha = clamp(p.life / p.maxLife, 0, 1);
        ctx.globalAlpha = alpha;
        if (p.isSpark) {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 0.028, p.y - p.vy * 0.028);
          ctx.stroke();
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1.2 - alpha * 0.35), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    }
  }

  // ============================================================================
  // 5. PURE-BLACK SHADOW FIGHT 2 SILHOUETTE FIGHTER & WEAPON SYSTEM
  // ============================================================================
  const CHAR_SCALE = 1.65;

  class ShadowFighter {
    constructor(cfg) {
      this.id = cfg.id;
      this.name = cfg.name;
      this.role = cfg.role; // 'shadow' | 'ronin_kid'
      this.weaponKey = cfg.weaponKey;
      this.spawnX = cfg.spawnX;
      this.reset(true);
    }

    get weapon() {
      const base = WEAPONS[this.weaponKey];
      const p = (typeof backend !== 'undefined' && backend.profile) ? backend.profile : null;
      const lvl = (p && p.weaponLevels && p.weaponLevels[this.weaponKey]) ? p.weaponLevels[this.weaponKey] : 1;
      const dmgBoost = 1.0 + (lvl - 1) * 0.10;
      const spdBoost = 1.0 + (lvl - 1) * 0.05;
      return {
        ...base,
        dmgMult: base.dmgMult * dmgBoost,
        speed: base.speed * spdBoost,
        upgradeLevel: lvl
      };
    }

    set weapon(val) {
      if (typeof val === 'string') {
        this.weaponKey = val;
      } else if (val && val.id) {
        this.weaponKey = val.id;
      }
    }

    reset(full = false) {
      this.x = this.spawnX;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.facing = this.id === 1 ? 1 : -1;

      this.maxHp = 1000;
      this.hp = 1000;
      this.delayHp = 1000;
      this.posture = 100;

      if (full) {
        this.shadow = 35;
        this.roundsWon = 0;
      }

      this.state = 'IDLE';
      this.stateTime = 0;
      this.moveKey = null;
      this.hasHit = false;
      this.comboStep = 0;
      this.comboWindow = 0;
      this.comboCount = 0;
      this.comboTimer = 0;
      this.parryWindow = 0;
      this.invulnTimer = 0;

      // Flowing headband ribbons
      this.ribbon1 = Array.from({ length: 6 }, (_, i) => ({ x: this.x - i * 8, y: -115 + i * 2 }));
      this.ribbon2 = Array.from({ length: 5 }, (_, i) => ({ x: this.x - i * 7, y: -110 + i * 3 }));

      this.trail = [];
      this.chainSegments = Array.from({ length: 7 }, () => ({ x: this.x, y: 0, vx: 0, vy: 0 }));
      this.transformProgress = 0;
      this.pose = this.getTargetPose('IDLE', 0);
      this.joints = {};
    }

    startState(st, moveKey = null) {
      this.state = st;
      this.stateTime = 0;
      this.moveKey = moveKey;
      this.hasHit = false;
    }

    canAct() {
      return (
        this.state === 'IDLE' ||
        this.state === 'WALK_F' ||
        this.state === 'WALK_B' ||
        this.state === 'RUN' ||
        this.state === 'CROUCH' ||
        this.state === 'BLOCK'
      );
    }

    triggerMove(moveKey) {
      const mv = MOVES[moveKey];
      if (!mv) return;
      this.startState('ATTACK', moveKey);
      sfx.play(mv.knockdown ? 'heavy_whoosh' : 'whoosh');
      if (moveKey === 'SHADOW_ART') {
        this.shadow = 0;
      }
    }

    triggerRoll(dir) {
      const d = dir !== 0 ? dir : this.facing;
      this.facing = d;
      this.startState('ROLL');
      this.vx = d * 460;
      this.invulnTimer = 0.28;
      sfx.play('whoosh');
    }

    isAttackActive() {
      if (this.state !== 'ATTACK' || !this.moveKey) return false;
      const mv = MOVES[this.moveKey];
      const spd = this.weapon.speed;
      const s = mv.startup / spd;
      const e = (mv.startup + mv.active) / spd;
      return this.stateTime >= s && this.stateTime <= e;
    }

    update(dt, groundY, leftWall, rightWall, opponent, vfx) {
      this.stateTime += dt;

      if (this.delayHp > this.hp) {
        this.delayHp = Math.max(this.hp, this.delayHp - 250 * dt);
      } else {
        this.delayHp = this.hp;
      }

      this.shadow = clamp(this.shadow + 2.6 * dt, 0, 100);
      if (this.comboWindow > 0) this.comboWindow -= dt;
      if (this.parryWindow > 0) this.parryWindow -= dt;
      if (this.invulnTimer > 0) this.invulnTimer -= dt;
      if (this.comboTimer > 0) {
        this.comboTimer -= dt;
        if (this.comboTimer <= 0) this.comboCount = 0;
      }

      if (this.canAct() && this.y === 0 && opponent) {
        this.facing = opponent.x >= this.x ? 1 : -1;
      }

      if (this.state === 'ATTACK') {
        const mv = MOVES[this.moveKey];
        const spd = this.weapon.speed;
        const s = mv.startup / spd;
        const a = mv.active / spd;
        const tot = (mv.startup + mv.active + mv.recovery) / spd;

        const mass = this.weapon.massClass || 'medium';
        const lungeMult = mass === 'colossal' ? 1.25 : mass === 'heavy' ? 1.12 : mass === 'light' ? 0.92 : 1.0;

        if (this.stateTime >= s * 0.45 && this.stateTime <= s + a * 0.65) {
          this.vx = this.facing * (mv.lunge * lungeMult);
        } else {
          this.vx *= Math.pow(0.001, dt);
        }

        // Heavy weapon swing impact dust
        if ((mass === 'colossal' || mass === 'heavy') && !this.spawnedSwingDust && this.stateTime >= s && this.stateTime <= s + a) {
          this.spawnedSwingDust = true;
          vfx.spawnDust(this.x + this.facing * 35, groundY, this.facing, mass === 'colossal' ? 8 : 4);
        }

        if (this.stateTime >= tot) {
          this.comboWindow = mass === 'light' ? 0.38 : mass === 'colossal' ? 0.22 : 0.30;
          this.spawnedSwingDust = false;
          this.startState('IDLE');
        }
      } else if (this.state === 'ROLL') {
        if (this.stateTime > 0.35) {
          this.vx = 0;
          this.startState('IDLE');
        }
      } else if (this.state === 'PARRY' || this.state === 'HITSTUN') {
        this.vx *= Math.pow(0.005, dt);
        if (this.stateTime > 0.28) this.startState('IDLE');
      } else if (this.state === 'KNOCKDOWN') {
        this.vx *= Math.pow(0.01, dt);
        if (this.stateTime > 0.65 && this.y === 0) {
          this.startState('GETUP');
          this.invulnTimer = 0.32;
        }
      } else if (this.state === 'GETUP') {
        if (this.stateTime > 0.32) this.startState('IDLE');
      }

      this.x += this.vx * dt;
      if (this.y < 0 || this.vy !== 0) {
        this.vy += 1750 * dt;
        this.y += this.vy * dt;
        if (this.y >= 0) {
          this.y = 0;
          this.vy = 0;
          vfx.spawnDust(this.x, groundY, -1, 4);
          vfx.spawnDust(this.x, groundY, 1, 4);
          if (this.state === 'JUMP') this.startState('IDLE');
        }
      }

      // Clamp to full stage bounds (55 to worldWidth - 55) so fighter can walk all the way to the left & right corners
      this.x = clamp(this.x, leftWall, rightWall);

      const target = this.getTargetPose(this.state, this.stateTime);
      const rate = Math.min(1, dt * 24);
      for (const k in target) {
        this.pose[k] = lerp(this.pose[k] ?? target[k], target[k], rate);
      }

      // Transforming weapon morph animation
      const isTransforming = (this.weapon.gripType === 'transforming' || this.weapon.type === 'transforming');
      if (isTransforming) {
        const isAttacking = (this.state === 'ATTACK');
        const targetMorph = isAttacking ? 1.0 : 0.0;
        const morphSpd = isAttacking ? 7.0 : 3.5;
        this.transformProgress = lerp(this.transformProgress || 0, targetMorph, Math.min(1, dt * morphSpd));
      } else {
        this.transformProgress = 0;
      }

      // Chain weapon segmented simulation
      const isChain = (this.weapon.gripType === 'chain_weapon' || this.weapon.type === 'chain_weapon');
      if (isChain) {
        this.updateChainSimulation(dt, groundY);
      }

      this.computeSkeleton(groundY);
      this.updateRibbons(dt);
      this.updateTrail(dt);
    }

    updateChainSimulation(dt, groundY) {
      const j = this.joints;
      if (!j || !j.gripX) return;
      const f = this.facing;
      const hLen = (this.weapon.handleLen || 34) * 0.45;
      const handleTipX = j.gripX + Math.cos(j.worldAngle) * hLen;
      const handleTipY = j.gripY + Math.sin(j.worldAngle) * hLen;

      if (!this.chainSegments || this.chainSegments.length < 7) {
        this.chainSegments = Array.from({ length: 7 }, () => ({ x: handleTipX, y: handleTipY, vx: 0, vy: 0 }));
      }

      this.chainSegments[0].x = handleTipX;
      this.chainSegments[0].y = handleTipY;
      this.chainSegments[0].vx = 0;
      this.chainSegments[0].vy = 0;

      const linkLen = ((this.weapon.length || 135) * 0.55) / (this.chainSegments.length - 1);
      const isAttacking = (this.state === 'ATTACK');

      let impulseX = 0;
      let impulseY = 0;
      if (isAttacking) {
        impulseX = Math.cos(j.worldAngle) * 980;
        impulseY = Math.sin(j.worldAngle) * 980;
      }

      for (let i = 1; i < this.chainSegments.length; i++) {
        const cur = this.chainSegments[i];
        const prev = this.chainSegments[i - 1];

        cur.vy += (isAttacking ? 350 : 1200) * dt;
        cur.vx += impulseX * dt * (i / this.chainSegments.length);
        cur.vy += impulseY * dt * (i / this.chainSegments.length);

        cur.vx *= Math.pow(0.82, dt * 60);
        cur.vy *= Math.pow(0.82, dt * 60);

        cur.x += cur.vx * dt;
        cur.y += cur.vy * dt;

        const dx = cur.x - prev.x;
        const dy = cur.y - prev.y;
        const dist = Math.hypot(dx, dy) || 1;
        const diff = (dist - linkLen) / dist;
        cur.x -= dx * diff * 0.85;
        cur.y -= dy * diff * 0.85;

        if (cur.y > groundY - 4) {
          cur.y = groundY - 4;
          cur.vy = -cur.vy * 0.2;
        }
      }
    }

    getTargetPose(state, t) {
      const st = this.weapon.stance;
      const p = {
        hipX: 0, hipY: -64,
        torsoLean: 0.12,
        headNod: 0.04,
        frontFootX: 22, frontFootY: 0,
        backFootX: -22, backFootY: 0,
        frontHandX: 24, frontHandY: -82,
        backHandX: 12, backHandY: -78,
        weaponAngle: -0.6,
        offWeaponAngle: 0.4,
        rollAngle: 0
      };

      if (state === 'IDLE') {
        const b = Math.sin(t * 3.5);
        if (this.role === 'ronin_kid') {
          p.hipY = -54 + b * 2;
          p.torsoLean = 0.38;
          p.frontFootX = 30; p.backFootX = -26;
          p.frontHandX = 28; p.frontHandY = -52 + b * 2;
          p.backHandX = 10; p.backHandY = -58 + b * 2;
          p.weaponAngle = 0.65 + b * 0.03;
        } else if (st === 'high_jodan') {
          // Authentic Jodan-no-Kamae (High Overhead Guard pointing forward/upward toward opponent)
          p.hipY = -62 + b * 2;
          p.torsoLean = 0.12;
          p.frontFootX = 24; p.backFootX = -22;
          p.frontHandX = 18; p.frontHandY = -116 + b * 2.2;
          p.backHandX = 6; p.backHandY = -110 + b * 2.2;
          p.weaponAngle = -0.72 + b * 0.03;
        } else if (st === 'chudan' || st === 'katana_guard') {
          // Authentic Chudan-no-Kamae (Shadow Fight 2 Classic Forward Katana Stance)
          p.hipY = -60 + b * 2;
          p.torsoLean = 0.18;
          p.frontFootX = 26; p.backFootX = -22;
          p.frontHandX = 32; p.frontHandY = -86 + b * 2;
          p.backHandX = 16; p.backHandY = -78 - b * 2;
          p.weaponAngle = -0.45;
        } else if (st === 'dual_guard') {
          p.hipY = -58 + b * 2;
          p.torsoLean = 0.22;
          p.frontFootX = 26; p.backFootX = -22;
          p.frontHandX = 32; p.frontHandY = -82 + b * 2;
          p.backHandX = 12; p.backHandY = -72 - b * 2;
          p.weaponAngle = -0.35;
          p.offWeaponAngle = 0.25;
        } else if (st === 'polearm_guard') {
          p.hipY = -60 + b * 2;
          p.torsoLean = 0.16;
          p.frontFootX = 26; p.backFootX = -24;
          p.frontHandX = 26; p.frontHandY = -76 + b * 2;
          p.backHandX = -8; p.backHandY = -68 + b * 2;
          p.weaponAngle = -0.32;
        } else if (st === 'low_trail') {
          p.hipY = -58 + b * 2;
          p.torsoLean = 0.26;
          p.frontFootX = 28; p.backFootX = -26;
          p.frontHandX = 18; p.frontHandY = -58 + b * 2;
          p.backHandX = 8; p.backHandY = -54 + b * 2;
          p.weaponAngle = 0.55;
        } else {
          p.hipY = -60 + b * 2;
          p.torsoLean = 0.18;
          p.frontFootX = 24; p.backFootX = -22;
          p.frontHandX = 32; p.frontHandY = -88 + b * 2;
          p.backHandX = 14; p.backHandY = -78 - b * 2;
          p.weaponAngle = -0.5;
        }
      } else if (state === 'WALK_F' || state === 'WALK_B') {
        const dir = state === 'WALK_F' ? 1 : -1;
        const cyc = t * 9.2 * dir;
        const s = Math.sin(cyc);
        const c = Math.cos(cyc);
        p.hipY = -60 + Math.abs(c) * 3.5;
        p.torsoLean = dir > 0 ? 0.22 : 0.06;
        p.frontFootX = 4 + s * 25;
        p.frontFootY = Math.min(0, c * 14);
        p.backFootX = -4 - s * 25;
        p.backFootY = Math.min(0, -c * 14);
        p.frontHandX = 28 - s * 5;
        p.frontHandY = -78;
        p.backHandX = 16 - s * 5;
        p.backHandY = -72;
        p.weaponAngle = -0.38;
      } else if (state === 'RUN') {
        const cyc = t * 14;
        const s = Math.sin(cyc);
        const c = Math.cos(cyc);
        p.hipY = -54 + Math.abs(c) * 5;
        p.torsoLean = 0.44;
        p.frontFootX = s * 35;
        p.frontFootY = Math.min(0, c * 22);
        p.backFootX = -s * 35;
        p.backFootY = Math.min(0, -c * 22);
        p.frontHandX = 34; p.frontHandY = -70;
        p.backHandX = 18; p.backHandY = -66;
        p.weaponAngle = -0.22;
      } else if (state === 'JUMP') {
        p.hipY = -68;
        p.torsoLean = 0.24;
        p.frontFootX = 18; p.frontFootY = -20;
        p.backFootX = -16; p.backFootY = -12;
        p.frontHandX = 20; p.frontHandY = -102;
        p.backHandX = 8; p.backHandY = -96;
        p.weaponAngle = -0.9;
      } else if (state === 'CROUCH') {
        p.hipY = -40;
        p.torsoLean = 0.34;
        p.frontFootX = 28; p.backFootX = -22;
        p.frontHandX = 26; p.frontHandY = -54;
        p.backHandX = 14; p.backHandY = -50;
        p.weaponAngle = 0.35;
      } else if (state === 'ROLL') {
        const prog = clamp(t / 0.35, 0, 1);
        p.hipY = -36;
        p.torsoLean = 0.65;
        p.frontFootX = 10; p.frontFootY = -12;
        p.backFootX = -12; p.backFootY = -12;
        p.frontHandX = 14; p.frontHandY = -50;
        p.backHandX = 4; p.backHandY = -48;
        p.weaponAngle = 1.6;
        p.rollAngle = prog * Math.PI * 2;
      } else if (state === 'BLOCK' || state === 'PARRY') {
        p.hipY = -58;
        p.torsoLean = -0.05;
        p.frontFootX = 24; p.backFootX = -24;
        p.frontHandX = 32; p.frontHandY = -92;
        p.backHandX = 24; p.backHandY = -76;
        p.weaponAngle = -1.45;
      } else if (state === 'HITSTUN') {
        p.hipY = -58;
        p.torsoLean = -0.35;
        p.headNod = -0.25;
        p.frontFootX = 14; p.backFootX = -26;
        p.frontHandX = 6; p.frontHandY = -82;
        p.backHandX = -14; p.backHandY = -76;
        p.weaponAngle = -2.0;
      } else if (state === 'KNOCKDOWN') {
        p.hipY = -16;
        p.torsoLean = -1.38;
        p.frontFootX = 28; p.frontFootY = -4;
        p.backFootX = 8; p.backFootY = 0;
        p.frontHandX = -16; p.frontHandY = -18;
        p.backHandX = -28; p.backHandY = -12;
        p.weaponAngle = -2.7;
      } else if (state === 'GETUP') {
        const u = smoothstep(clamp(t / 0.32, 0, 1));
        p.hipY = lerp(-20, -60, u);
        p.torsoLean = lerp(-0.9, 0.15, u);
      } else if (state === 'VICTORY') {
        p.hipY = -64;
        p.torsoLean = -0.05;
        p.frontHandX = 20; p.frontHandY = -108;
        p.backHandX = 10; p.backHandY = -98;
        p.weaponAngle = -1.55;
      } else if (state === 'ATTACK' && this.moveKey) {
        const mv = MOVES[this.moveKey];
        const spd = this.weapon.speed;
        const s = mv.startup / spd;
        const a = mv.active / spd;
        const r = mv.recovery / spd;

        let phase = 'startup';
        let u = 0;
        if (t < s) {
          phase = 'startup';
          u = smoothstep(clamp(t / s, 0, 1));
        } else if (t < s + a) {
          phase = 'active';
          u = smoothstep(clamp((t - s) / a, 0, 1));
        } else {
          phase = 'recovery';
          u = smoothstep(clamp((t - s - a) / r, 0, 1));
        }

        p.frontFootX = 34; p.backFootX = -26;

        const grip = this.weapon.gripType || 'single_handed';
        const isDual = (grip === 'dual_wield');
        const isSingle = (grip === 'single_handed');

        if (this.moveKey === 'SLASH_1') {
          if (phase === 'startup') {
            p.torsoLean = lerp(0.1, -0.15, u);
            p.frontHandX = lerp(0, -10, u);
            p.frontHandY = lerp(-108, -116, u);
            p.weaponAngle = lerp(2.4, -2.35, u);
            if (isDual) { p.offWeaponAngle = 0.35; p.backHandX = 12; p.backHandY = -72; }
          } else if (phase === 'active') {
            p.torsoLean = lerp(-0.15, 0.36, u);
            p.frontHandX = lerp(-10, 50, u);
            p.frontHandY = lerp(-116, -64, u);
            p.weaponAngle = lerp(-2.35, 0.45, u);
            if (isDual) { p.offWeaponAngle = 0.45; p.backHandX = 10; p.backHandY = -76; }
          } else {
            p.torsoLean = lerp(0.36, 0.12, u);
            p.frontHandX = lerp(50, 22, u);
            p.frontHandY = lerp(-64, -84, u);
            p.weaponAngle = lerp(0.45, -0.5, u);
            if (isDual) { p.offWeaponAngle = 0.35; p.backHandX = 12; p.backHandY = -74; }
          }
          if (isSingle) { p.backHandX = -6; p.backHandY = -78; }
          else if (!isDual) { p.backHandX = p.frontHandX - 9; p.backHandY = p.frontHandY + 4; }
        } else if (this.moveKey === 'SLASH_2') {
          // Off-hand counter strike for dual wielding, reverse cut for others
          if (phase === 'startup') {
            p.torsoLean = 0.28;
            p.frontHandX = lerp(30, 4, u);
            p.frontHandY = lerp(-66, -50, u);
            p.weaponAngle = lerp(0.4, 1.4, u);
            if (isDual) { p.backHandX = lerp(12, 4, u); p.backHandY = -72; p.offWeaponAngle = 0.6; }
          } else if (phase === 'active') {
            p.torsoLean = lerp(0.28, -0.06, u);
            p.frontHandX = lerp(4, 48, u);
            p.frontHandY = lerp(-50, -100, u);
            p.weaponAngle = lerp(1.4, -1.2, u);
            if (isDual) {
              // Off-hand strikes forward across opponent!
              p.backHandX = lerp(4, 46, u);
              p.backHandY = lerp(-72, -88, u);
              p.offWeaponAngle = lerp(0.6, -0.92, u);
            }
          } else {
            p.frontHandX = lerp(48, 24, u);
            p.frontHandY = lerp(-100, -82, u);
            p.weaponAngle = lerp(-1.2, -0.5, u);
            if (isDual) { p.backHandX = lerp(46, 12, u); p.backHandY = -74; p.offWeaponAngle = 0.35; }
          }
          if (isSingle) { p.backHandX = -6; p.backHandY = -78; }
          else if (!isDual) { p.backHandX = p.frontHandX - 8; p.backHandY = p.frontHandY + 5; }
        } else if (this.moveKey === 'SLASH_3' || this.moveKey === 'HEAVY') {
          if (phase === 'startup') {
            p.hipY = -68;
            p.torsoLean = lerp(0.1, -0.28, u);
            p.frontHandX = lerp(10, -14, u);
            p.frontHandY = lerp(-96, -122, u);
            p.weaponAngle = lerp(-0.8, -2.6, u);
            if (isDual) {
              // Dual Blades prepare X-Scissor overhead
              p.backHandX = lerp(6, -18, u);
              p.backHandY = lerp(-92, -118, u);
              p.offWeaponAngle = lerp(-0.6, -2.4, u);
            }
          } else if (phase === 'active') {
            p.hipY = lerp(-68, -48, u);
            p.torsoLean = lerp(-0.28, 0.50, u);
            p.frontHandX = lerp(-14, 54, u);
            p.frontHandY = lerp(-122, -44, u);
            p.weaponAngle = lerp(-2.6, 0.72, u);
            if (isDual) {
              // Simultaneous Dual X-Scissor slice across opposite diagonals!
              p.backHandX = lerp(-18, 48, u);
              p.backHandY = lerp(-118, -48, u);
              p.offWeaponAngle = lerp(-2.4, -0.72, u);
            }
          } else {
            p.hipY = lerp(-48, -60, u);
            p.torsoLean = lerp(0.50, 0.12, u);
            p.frontHandX = lerp(54, 24, u);
            p.frontHandY = lerp(-44, -82, u);
            p.weaponAngle = lerp(0.72, -0.5, u);
            if (isDual) {
              p.backHandX = lerp(48, 12, u);
              p.backHandY = -74;
              p.offWeaponAngle = 0.35;
            }
          }
          if (isSingle) { p.backHandX = -6; p.backHandY = -78; }
          else if (!isDual) { p.backHandX = p.frontHandX - 9; p.backHandY = p.frontHandY + 4; }
        } else if (this.moveKey === 'THRUST' || this.moveKey === 'SHADOW_ART') {
          if (phase === 'startup') {
            p.hipY = -52;
            p.torsoLean = 0.22;
            p.frontHandX = lerp(24, -12, u);
            p.frontHandY = -76;
            p.weaponAngle = 0.0;
            if (isDual) { p.backHandX = 14; p.backHandY = -72; p.offWeaponAngle = 0.3; }
          } else if (phase === 'active') {
            p.hipY = -50;
            p.torsoLean = 0.46;
            p.frontHandX = lerp(-12, 58, u);
            p.frontHandY = -76;
            p.weaponAngle = -0.02;
            if (isDual) {
              // Dual 1-2 rapid alternating thrust!
              p.backHandX = lerp(14, 52, u * 0.9);
              p.backHandY = -74;
              p.offWeaponAngle = 0.0;
            }
          } else {
            p.hipY = lerp(-50, -60, u);
            p.frontHandX = lerp(58, 24, u);
            p.frontHandY = -80;
            if (isDual) { p.backHandX = lerp(52, 12, u); p.backHandY = -74; p.offWeaponAngle = 0.35; }
          }
          if (isSingle) { p.backHandX = -10; p.backHandY = -80; }
          else if (!isDual) { p.backHandX = p.frontHandX - 12; p.backHandY = p.frontHandY + 2; }
        } else if (this.moveKey === 'KICK_HIGH') {
          p.frontFootX = -8; p.frontFootY = 0;
          p.frontHandX = 18; p.frontHandY = -84;
          p.backHandX = 6; p.backHandY = -80;
          p.weaponAngle = -1.2;
          if (phase === 'startup') {
            p.torsoLean = -0.16;
            p.backFootX = lerp(-20, 14, u);
            p.backFootY = lerp(0, -45, u);
          } else if (phase === 'active') {
            p.torsoLean = -0.32;
            p.backFootX = lerp(14, 64, u);
            p.backFootY = lerp(-45, -74, u);
          } else {
            p.torsoLean = lerp(-0.32, 0.1, u);
            p.backFootX = lerp(64, -20, u);
            p.backFootY = lerp(-74, 0, u);
          }
        } else if (this.moveKey === 'SWEEP_LOW') {
          p.hipY = -34;
          p.torsoLean = 0.38;
          p.frontHandX = 12; p.frontHandY = -46;
          p.backHandX = 2; p.backHandY = -42;
          p.weaponAngle = 2.1;
          if (phase === 'startup') {
            p.frontFootX = -14;
            p.backFootX = lerp(-20, -4, u);
          } else if (phase === 'active') {
            p.frontFootX = -14;
            p.backFootX = lerp(-4, 68, u);
            p.backFootY = -5;
          } else {
            p.hipY = lerp(-34, -60, u);
            p.backFootX = lerp(68, -20, u);
          }
        }
      }

      return p;
    }

    computeSkeleton(groundY) {
      const f = this.facing;
      const baseX = this.x;
      const baseY = groundY + this.y;
      const p = this.pose;

      const hipX = baseX + f * p.hipX;
      const hipY = baseY + p.hipY;

      const torsoLen = 42;
      const shoulderX = hipX + f * Math.sin(p.torsoLean) * torsoLen;
      const shoulderY = hipY - Math.cos(p.torsoLean) * torsoLen;

      // Anatomical neck column seamlessly bridging torso to skull base
      const neckAngle = p.torsoLean + p.headNod * 0.4;
      const neckLen = 14;
      const neckX = shoulderX + f * Math.sin(neckAngle) * (neckLen * 0.5);
      const neckY = shoulderY - Math.cos(neckAngle) * (neckLen * 0.5);

      const headX = shoulderX + f * Math.sin(neckAngle) * neckLen;
      const headY = shoulderY - Math.cos(neckAngle) * neckLen;

      const frontLeg = solveTwoBoneIK(hipX + f * 4, hipY, baseX + f * p.frontFootX, baseY + p.frontFootY, 34, 34, -f);
      const backLeg  = solveTwoBoneIK(hipX - f * 4, hipY, baseX + f * p.backFootX,  baseY + p.backFootY,  34, 34, -f);

      // 1. Solve primary front arm holding the weapon grip
      const frontArm = solveTwoBoneIK(shoulderX + f * 4, shoulderY + 3, baseX + f * p.frontHandX, baseY + p.frontHandY, 26, 25, f);
      const gripX = frontArm.endX;
      const gripY = frontArm.endY;
      const worldAngle = f === 1 ? p.weaponAngle : Math.PI - p.weaponAngle;

      const w = this.weapon;
      const grip = w.gripType || (
        w.isDual || w.type.startsWith('dual') || w.type === 'crescent_blades' || w.type === 'war_fans' || w.type === 'gauntlets' ? 'dual_wield' :
        ['greatsword', 'hammer', 'polearm', 'naginata', 'executioner', 'kanabo', 'staff'].includes(w.type) || w.stance === 'hammer_guard' ? 'two_handed' :
        w.type === 'chain_weapon' ? 'chain_weapon' :
        w.type === 'transforming' ? 'transforming' :
        'single_handed'
      );

      // 2. Solve back arm based on the 5 distinct grip configurations from WEAPONS AND MOVEMENTS.md
      let backArm;
      if (grip === 'two_handed') {
        // TWO-HANDED WEAPONS: Both hands firmly locked onto the weapon shaft/handle!
        const handleAngle = worldAngle + Math.PI;
        const hOffset = Math.min(16, Math.max(9, (w.handleLen || 28) * 0.48));
        const backGripX = gripX + Math.cos(handleAngle) * hOffset;
        const backGripY = gripY + Math.sin(handleAngle) * hOffset;
        backArm = solveTwoBoneIK(shoulderX - f * 4, shoulderY + 3, backGripX, backGripY, 26, 25, f);
      } else if (grip === 'dual_wield') {
        // DUAL WIELDING: One weapon attached to each hand with independent transforms
        backArm = solveTwoBoneIK(shoulderX - f * 4, shoulderY + 3, baseX + f * p.backHandX, baseY + p.backHandY, 26, 25, f);
      } else {
        // SINGLE-HANDED / CHAIN / TRANSFORMING: Front hand holds weapon, back hand in poised martial balance guard
        backArm = solveTwoBoneIK(shoulderX - f * 4, shoulderY + 3, baseX + f * p.backHandX, baseY + p.backHandY, 26, 25, f);
      }

      // Calculate effective weapon reach (accounting for transforming blade)
      const curMorph = this.transformProgress || 0;
      const wLen = (w.type === 'transforming' || w.model === 'eternal_night') ? lerp(w.length * 0.65, w.length * 1.25, curMorph) : w.length;
      const tipX = gripX + Math.cos(worldAngle) * wLen;
      const tipY = gripY + Math.sin(worldAngle) * wLen;

      this.joints = {
        baseX, baseY, hipX, hipY, shoulderX, shoulderY, neckX, neckY, headX, headY,
        frontLeg, backLeg, frontArm, backArm, gripX, gripY, tipX, tipY, worldAngle
      };
    }

    updateRibbons(dt) {
      const j = this.joints;
      if (!j.headX) return;
      const anchorX = j.headX - this.facing * 8;
      const anchorY = j.headY - 4;
      this.ribbon1[0].x = anchorX;
      this.ribbon1[0].y = anchorY;
      this.ribbon2[0].x = anchorX;
      this.ribbon2[0].y = anchorY + 4;

      const wind = -this.facing * 65 - this.vx * 0.3;
      const t = performance.now() * 0.01;

      for (let i = 1; i < this.ribbon1.length; i++) {
        const prev = this.ribbon1[i - 1];
        const cur = this.ribbon1[i];
        cur.x += wind * dt;
        cur.y += Math.sin(t + i * 0.9) * 35 * dt;
        const dx = cur.x - prev.x, dy = cur.y - prev.y;
        const d = Math.hypot(dx, dy) || 1;
        cur.x = prev.x + (dx / d) * 7.5;
        cur.y = prev.y + (dy / d) * 7.5;
      }

      for (let i = 1; i < this.ribbon2.length; i++) {
        const prev = this.ribbon2[i - 1];
        const cur = this.ribbon2[i];
        cur.x += wind * 0.9 * dt;
        cur.y += (18 + Math.cos(t + i) * 30) * dt;
        const dx = cur.x - prev.x, dy = cur.y - prev.y;
        const d = Math.hypot(dx, dy) || 1;
        cur.x = prev.x + (dx / d) * 6.5;
        cur.y = prev.y + (dy / d) * 6.5;
      }
    }

    updateTrail(dt) {
      const j = this.joints;
      if (this.state === 'ATTACK' && this.moveKey) {
        const mv = MOVES[this.moveKey];
        if (mv.limb === 'foot') {
          this.trail.unshift({
            gx: j.backLeg.midX, gy: j.backLeg.midY,
            tx: j.backLeg.endX, ty: j.backLeg.endY,
            age: 0, maxAge: 0.14
          });
        } else {
          this.trail.unshift({
            gx: j.gripX, gy: j.gripY,
            tx: j.tipX, ty: j.tipY,
            age: 0, maxAge: 0.15
          });
        }
      }
      for (let i = this.trail.length - 1; i >= 0; i--) {
        this.trail[i].age += dt;
        if (this.trail[i].age >= this.trail[i].maxAge) this.trail.splice(i, 1);
      }
    }

    getHurtbox() {
      const j = this.joints;
      const low = this.state === 'CROUCH' || this.state === 'ROLL' || this.state === 'KNOCKDOWN';
      const topY = low ? (j.baseY - 76 * CHAR_SCALE) : (j.baseY - 124 * CHAR_SCALE);
      const w = 48 * CHAR_SCALE;
      return { x: this.x - w * 0.5, y: topY, w: w, h: j.baseY - topY };
    }

    getAttackSegment() {
      if (!this.isAttackActive()) return null;
      const mv = MOVES[this.moveKey];
      const j = this.joints;
      const scalePt = (px, py) => ({
        x: this.x + (px - this.x) * CHAR_SCALE,
        y: j.baseY + (py - j.baseY) * CHAR_SCALE
      });
      if (mv.limb === 'foot') {
        const p1 = scalePt(j.hipX, j.hipY);
        const p2 = scalePt(j.backLeg.endX, j.backLeg.endY);
        return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, r: 24 * CHAR_SCALE };
      }
      const p1 = scalePt(j.gripX, j.gripY);
      const p2 = scalePt(j.tipX, j.tipY);
      return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, r: 22 * CHAR_SCALE };
    }

    render(ctx, groundY, debug) {
      const j = this.joints;
      const f = this.facing;
      const SIL = '#050507';
      const RIM = 'rgba(255, 232, 185, 0.24)';

      ctx.save();

      // Contact Shadow on Stone Floor
      const airScale = clamp(1 + (this.y * CHAR_SCALE) / 220, 0.35, 1);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.62)';
      ctx.beginPath();
      ctx.ellipse(this.x, groundY + 2, 42 * CHAR_SCALE * airScale, 9 * CHAR_SCALE * airScale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Heroic character scaling anchored at ground contact point (this.x, groundY)
      ctx.translate(this.x, groundY);
      ctx.scale(CHAR_SCALE, CHAR_SCALE);
      ctx.translate(-this.x, -groundY);

      if (this.state === 'ROLL') {
        ctx.translate(this.x, j.baseY - 40);
        ctx.rotate(this.facing * this.pose.rollAngle);
        ctx.translate(-this.x, -(j.baseY - 40));
      }

      // 1. Headband Ribbons for SHADOW
      if (this.role === 'shadow') {
        ctx.strokeStyle = SIL;
        ctx.lineCap = 'round';
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.moveTo(this.ribbon1[0].x, this.ribbon1[0].y);
        for (let i = 1; i < this.ribbon1.length; i++) ctx.lineTo(this.ribbon1[i].x, this.ribbon1[i].y);
        ctx.stroke();

        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(this.ribbon2[0].x, this.ribbon2[0].y);
        for (let i = 1; i < this.ribbon2.length; i++) ctx.lineTo(this.ribbon2[i].x, this.ribbon2[i].y);
        ctx.stroke();
      }

      // 2. Back Arm & Back Leg
      this.drawSculptedLimb(ctx, j.shoulderX - f * 4, j.shoulderY + 3, j.backArm.midX, j.backArm.midY, 7.5, 6, SIL, null);
      this.drawSculptedLimb(ctx, j.backArm.midX, j.backArm.midY, j.backArm.endX, j.backArm.endY, 6, 4.2, SIL, null);
      this.drawSculptedLeg(ctx, j.hipX - f * 4, j.hipY, j.backLeg, SIL, null);

      // Off-hand weapon if dual wielding (Twin Daggers, Kodachi, Fans, Crescents, Sai)
      const isDualWield = this.weapon.isDual ||
                          this.weapon.type.startsWith('dual') ||
                          this.weapon.type === 'crescent_blades' ||
                          this.weapon.type === 'war_fans' ||
                          ['kiba', 'shinobi', 'vex', 'akari', 'nami'].includes(this.bossId);
      if (isDualWield) {
        const offAng = f === 1 ? (this.pose.offWeaponAngle ?? 0.35) : Math.PI - (this.pose.offWeaponAngle ?? 0.35);
        this.drawWeaponShape(ctx, j.backArm.endX, j.backArm.endY, offAng, true);
      }

      // 3. Waist Saya / Sash for KID Ronin
      if (this.role === 'ronin_kid') {
        ctx.strokeStyle = SIL;
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.moveTo(j.hipX - f * 3, j.hipY + 8);
        ctx.lineTo(j.hipX - f * 7, j.hipY + 34);
        ctx.stroke();
      }

      // 4. Muscular / Tunic Torso Silhouette
      this.drawTorsoSilhouette(ctx, j, f, SIL, RIM);

      // 4b. Muscular Neck Silhouette connecting Head and Torso
      this.drawNeckSilhouette(ctx, j, f, SIL, RIM);

      // 5. Head & Kasa Straw Hat / Shadow Headband
      this.drawHeadSilhouette(ctx, j, f, SIL, RIM);

      // 6. Front Leg
      this.drawSculptedLeg(ctx, j.hipX + f * 4, j.hipY, j.frontLeg, SIL, RIM);

      // 7. Primary Weapon
      this.drawWeaponShape(ctx, j.gripX, j.gripY, j.worldAngle, false);

      // 8. Front Arm
      this.drawSculptedLimb(ctx, j.shoulderX + f * 4, j.shoulderY + 3, j.frontArm.midX, j.frontArm.midY, 8, 6.2, SIL, RIM);
      this.drawSculptedLimb(ctx, j.frontArm.midX, j.frontArm.midY, j.frontArm.endX, j.frontArm.endY, 6.2, 4.5, SIL, RIM);

      // 9. Tapered Blade / Kick Motion Trail (inside scaled character space)
      this.renderMotionTrail(ctx);

      ctx.restore();

      if (debug) {
        const hb = this.getHurtbox();
        ctx.save();
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(hb.x, hb.y, hb.w, hb.h);
        const seg = this.getAttackSegment();
        if (seg) {
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = seg.r * 2;
          ctx.lineCap = 'round';
          ctx.globalAlpha = 0.35;
          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    drawSculptedLimb(ctx, x1, y1, x2, y2, r1, r2, fill, rim) {
      const ang = Math.atan2(y2 - y1, x2 - x1);
      const nx = -Math.sin(ang), ny = Math.cos(ang);
      const midX = (x1 + x2) * 0.5, midY = (y1 + y2) * 0.5;
      const rMid = (r1 + r2) * 0.56;

      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.moveTo(x1 + nx * r1, y1 + ny * r1);
      ctx.quadraticCurveTo(midX + nx * rMid, midY + ny * rMid, x2 + nx * r2, y2 + ny * r2);
      ctx.lineTo(x2 - nx * r2, y2 - ny * r2);
      ctx.quadraticCurveTo(midX - nx * rMid, midY - ny * rMid, x1 - nx * r1, y1 - ny * r1);
      ctx.closePath();
      ctx.fill();

      if (rim) {
        ctx.strokeStyle = rim;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(x1 + nx * r1, y1 + ny * r1);
        ctx.quadraticCurveTo(midX + nx * rMid, midY + ny * rMid, x2 + nx * r2, y2 + ny * r2);
        ctx.stroke();
      }
    }

    drawSculptedLeg(ctx, hipX, hipY, leg, fill, rim) {
      const thighW = this.role === 'ronin_kid' ? 13 : 11.5;
      const kneeW  = this.role === 'ronin_kid' ? 10.5 : 8.5;
      this.drawSculptedLimb(ctx, hipX, hipY, leg.midX, leg.midY, thighW, kneeW, fill, rim);
      this.drawSculptedLimb(ctx, leg.midX, leg.midY, leg.endX, leg.endY, 7.5, 4.2, fill, rim);

      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.moveTo(leg.endX - this.facing * 4, leg.endY - 4);
      ctx.lineTo(leg.endX + this.facing * 13, leg.endY - 1);
      ctx.lineTo(leg.endX + this.facing * 11, leg.endY + 3);
      ctx.lineTo(leg.endX - this.facing * 5, leg.endY + 3);
      ctx.closePath();
      ctx.fill();
    }

    drawTorsoSilhouette(ctx, j, f, fill, rim) {
      const ang = Math.atan2(j.shoulderY - j.hipY, j.shoulderX - j.hipX);
      const nx = -Math.sin(ang), ny = Math.cos(ang);
      const shW = 14.5, waistW = 10.5;

      ctx.fillStyle = fill;
      ctx.beginPath();
      ctx.moveTo(j.shoulderX + nx * shW, j.shoulderY + ny * shW);
      ctx.lineTo(j.shoulderX - nx * shW, j.shoulderY - ny * shW);
      ctx.lineTo(j.hipX - nx * waistW, j.hipY - ny * waistW);
      ctx.lineTo(j.hipX + nx * waistW, j.hipY + ny * waistW);
      ctx.closePath();
      ctx.fill();

      // Lower tunic skirt / uwagi flare
      ctx.beginPath();
      ctx.moveTo(j.hipX - 12, j.hipY - 3);
      ctx.lineTo(j.hipX + 12, j.hipY - 3);
      ctx.lineTo(j.hipX + 15, j.hipY + 13);
      ctx.lineTo(j.hipX - 15, j.hipY + 13);
      ctx.closePath();
      ctx.fill();

      if (rim) {
        ctx.strokeStyle = rim;
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(j.shoulderX + f * shW * 0.8, j.shoulderY);
        ctx.lineTo(j.hipX + f * waistW * 0.8, j.hipY);
        ctx.stroke();
      }
    }

    drawNeckSilhouette(ctx, j, f, fill, rim) {
      // Anatomical muscular neck connecting skull base to torso & trapezius
      const hX = j.headX;
      const hY = j.headY;
      const sX = j.shoulderX;
      const sY = j.shoulderY;

      const ang = Math.atan2(hY - sY, hX - sX);
      const nx = -Math.sin(ang);
      const ny = Math.cos(ang);

      const topW = 7.5;
      const botW = 11.2;
      const midW = 9.2;
      const midX = (sX + hX) * 0.5;
      const midY = (sY + hY) * 0.5;

      ctx.fillStyle = fill;
      ctx.beginPath();
      // Reach into the skull base for a seamless anatomical connection
      ctx.moveTo(hX + nx * topW, hY + ny * topW);
      ctx.quadraticCurveTo(midX + nx * midW, midY + ny * midW, sX + nx * botW, sY + ny * botW);
      ctx.lineTo(sX - nx * botW, sY - ny * botW);
      ctx.quadraticCurveTo(midX - nx * midW, midY - ny * midW, hX - nx * topW, hY - ny * topW);
      ctx.closePath();
      ctx.fill();

      // Trapezius muscle slope connecting neck base to shoulder ends
      const shW = 15.0;
      const torsoAng = Math.atan2(sY - j.hipY, sX - j.hipX);
      const tnx = -Math.sin(torsoAng), tny = Math.cos(torsoAng);

      ctx.beginPath();
      ctx.moveTo(sX + nx * botW, sY + ny * botW);
      ctx.lineTo(sX + tnx * shW, sY + tny * shW);
      ctx.lineTo(sX - tnx * shW, sY - tny * shW);
      ctx.lineTo(sX - nx * botW, sY - ny * botW);
      ctx.closePath();
      ctx.fill();

      // For KID (Ronin), add the high samurai tunic / haori collar framing the neck
      if (this.role === 'ronin_kid') {
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.moveTo(sX - f * 8, sY - 2);
        ctx.lineTo(sX + f * 10, sY - 5);
        ctx.lineTo(hX + f * 6, hY + 6);
        ctx.lineTo(hX - f * 4, hY + 8);
        ctx.closePath();
        ctx.fill();
      }

      if (rim) {
        ctx.strokeStyle = rim;
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(hX + f * nx * topW, hY + f * ny * topW);
        ctx.quadraticCurveTo(midX + f * nx * midW, midY + f * ny * midW, sX + f * nx * botW, sY + f * ny * botW);
        ctx.stroke();
      }
    }


    drawHeadSilhouette(ctx, j, f, fill, rim) {
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
    }

        // ============================================================================
    // 3D PROCEDURAL WEAPON RENDERING ENGINE — METALLIC DEPTH, HABAKI & SHINOGI
    // ============================================================================
    // ============================================================================
    // SHADOW FIGHT 2 AUTHENTIC PITCH-DARK WEAPON RENDERING ENGINE
    // Pure Ink-Black Silhouettes (#020204), Crisp Razor Contours, Authentic Grips
    // ============================================================================
    drawWeaponShape(ctx, gx, gy, angle, isOffhand = false) {
      const w = this.weapon;
      if (!w || w.type === 'unarmed') return;

      ctx.save();
      ctx.translate(gx, gy);
      ctx.rotate(angle);

      // Resolve weapon model
      const bId = this.bossId || (this.role === 'shadow' ? 'kaze' : 'goro');
      let m = w.model || w.type || 'nightfall';
      if (this.role !== 'shadow' && bId) {
        const bossModelMap = {
          goro: 'ashen_oathblade',
          kiba: 'twin_rippers',
          ren: 'ironwood_staff',
          dreadmaw: 'blood_reaper',
          soryu: 'crimson_jian',
          raik: 'thunder_glaive',
          shinobi: 'crescent_kodachi',
          vex: 'marionette_blades',
          brutus: 'colossus_maul',
          akari: 'sunpiercer_fans',
          nami: 'tide_crescents',
          kurogane: 'shoguns_breaker',
          hollow_knight: 'graveglass',
          hollow_king: 'thronebreaker_scepter',
          shadow_kaze: 'ruinbound_echo'
        };
        if (bossModelMap[bId]) m = bossModelMap[bId];
      }

      // AUTHENTIC SHADOW FIGHT 2 PURE PITCH-DARK SILHOUETTE (NO WHITE LINES, NO GLINTS)
      const SIL_BODY = isOffhand ? '#010103' : '#020204';

      // Tsuka Hilt in solid pitch dark
      const drawDarkTsuka = (hLen, hWidth) => {
        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-hLen, -hWidth * 0.5, hLen, hWidth);
        // Kashira pommel cap
        ctx.beginPath();
        ctx.arc(-hLen - 1, 0, hWidth * 0.55, 0, Math.PI * 2);
        ctx.fill();
      };

      // Tsuba Guard in solid pitch dark
      const drawDarkTsuba = (tHeight, tWidth = 4.2) => {
        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-tWidth * 0.5, -tHeight * 0.5, tWidth, tHeight);
      };

      // Habaki Collar in solid pitch dark
      const drawDarkHabaki = (bWidth, bLen = 8.0) => {
        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(0, -bWidth * 0.55);
        ctx.lineTo(bLen, -bWidth * 0.48);
        ctx.lineTo(bLen, bWidth * 0.48);
        ctx.lineTo(0, bWidth * 0.55);
        ctx.closePath();
        ctx.fill();
      };

      // ======================================================================
      // RENDER ALL 15 WEAPONS IN PURE SHADOW FIGHT 2 PITCH-DARK SILHOUETTES
      // ======================================================================

      if (m === 'nightfall' || m === 'ashen_oathblade' || m === 'ruinbound_echo') {
        // KATANA: Pitch-Dark Silhouette, Curved Sori, Chiseled Kissaki Tanto Tip
        const bLen = w.length || 98;
        const bWidth = w.width || 5.8;
        const hLen = w.handleLen || 27;
        const curve = w.curve || 12;

        drawDarkTsuka(hLen, bWidth);
        drawDarkTsuba(bWidth * 2.8);
        drawDarkHabaki(bWidth, 8.0);

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(8, -bWidth * 0.5);
        ctx.quadraticCurveTo(bLen * 0.6, -curve - bWidth * 0.4, bLen, -curve * 0.45);
        ctx.lineTo(bLen - 6, bWidth * 0.48 - curve * 0.25);
        ctx.quadraticCurveTo(bLen * 0.55, bWidth * 0.5 - curve * 0.55, 8, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'crimson_jian') {
        // CHINESE JIAN: Double-Edged Straight Pitch-Dark Sword
        const bLen = w.length || 96;
        const bWidth = w.width || 5.6;
        const hLen = w.handleLen || 26;

        drawDarkTsuka(hLen, bWidth);

        // Winged Guard
        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(-3, -bWidth * 2.0);
        ctx.lineTo(3, -bWidth * 1.3);
        ctx.lineTo(1, 0);
        ctx.lineTo(3, bWidth * 1.3);
        ctx.lineTo(-3, bWidth * 2.0);
        ctx.closePath();
        ctx.fill();

        // Double-Edged Blade
        ctx.beginPath();
        ctx.moveTo(2, -bWidth * 0.5);
        ctx.lineTo(bLen - 8, -bWidth * 0.4);
        ctx.lineTo(bLen, 0);
        ctx.lineTo(bLen - 8, bWidth * 0.4);
        ctx.lineTo(2, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'wraith_fangs' || m === 'twin_rippers' || m === 'marionette_blades') {
        // TWIN DAGGERS: Recurve Hunting Profiles with Serrated Spines
        const bLen = w.length || 50;
        const bWidth = w.width || 5.0;
        const hLen = w.handleLen || 14;

        drawDarkTsuka(hLen, bWidth * 0.9);

        // Bolster Guard
        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-1.5, -bWidth * 1.05, 3.0, bWidth * 2.1);

        // Recurve Blade
        ctx.beginPath();
        ctx.moveTo(1.5, -bWidth * 0.5);
        if (m === 'twin_rippers') {
          ctx.lineTo(12, -bWidth * 0.85);
          ctx.lineTo(14, -bWidth * 0.55);
          ctx.lineTo(16, -bWidth * 0.85);
        }
        ctx.quadraticCurveTo(bLen * 0.6, -bWidth * 0.75, bLen, 0);
        ctx.quadraticCurveTo(bLen * 0.65, bWidth * 1.1, 1.5, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'ironwood_staff') {
        // TWO-HANDED STAFF: Pitch-Dark Solid Quarterstaff
        const bLen = w.length || 124;
        const bWidth = w.width || 5.8;
        const hMid = bLen * 0.45;

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.roundRect(-hMid, -bWidth * 0.5, bLen, bWidth, 2);
        ctx.fill();
      } else if (m === 'skybreaker' || m === 'stormpiercer' || m === 'thunder_glaive' || m === 'eclipse_naginata') {
        // TWO-HANDED SPEAR / POLEARM / NAGINATA
        const bLen = w.length || 135;
        const bWidth = w.width || 6.8;
        const hLen = w.handleLen || 70;
        const isGlaive = (m === 'thunder_glaive');
        const isNaginata = (m === 'eclipse_naginata');

        // Shaft
        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-hLen, -bWidth * 0.35, bLen * 0.65 + hLen, bWidth * 0.7);

        // Blade Head
        const socketX = bLen * 0.65;
        const bladeStart = socketX + 6;

        ctx.beginPath();
        if (isGlaive) {
          ctx.moveTo(bladeStart, -bWidth * 0.4);
          ctx.lineTo(bladeStart + 12, -bWidth * 1.2);
          ctx.lineTo(bladeStart + 16, -bWidth * 0.6);
          ctx.quadraticCurveTo(bLen * 0.88, -w.curve - bWidth * 0.4, bLen, -4);
          ctx.quadraticCurveTo(bLen * 0.85, bWidth * 0.8, bladeStart, bWidth * 0.4);
        } else if (isNaginata) {
          ctx.moveTo(bladeStart, -bWidth * 0.4);
          ctx.quadraticCurveTo(bLen * 0.85, -w.curve - bWidth * 0.3, bLen, -w.curve * 0.6);
          ctx.quadraticCurveTo(bLen * 0.88, bWidth * 0.6 - w.curve * 0.3, bladeStart, bWidth * 0.4);
        } else {
          ctx.moveTo(bladeStart, -2);
          ctx.quadraticCurveTo(bLen * 0.82, -bWidth * 0.8, bLen, 0);
          ctx.quadraticCurveTo(bLen * 0.82, bWidth * 0.8, bladeStart, 2);
        }
        ctx.closePath();
        ctx.fill();
      } else if (m === 'leviathan_axe' || m === 'iron_maw') {
        // COLOSSAL LEVIATHAN GREATAXE: Pitch-Dark Double-Bearded Executioner Battleaxe
        const bLen = w.length || 120;
        const hLen = w.handleLen || 68;
        const bWidth = w.width || 38;

        ctx.fillStyle = SIL_BODY;
        // Heavy Haft
        ctx.fillRect(-hLen, -3.8, hLen + 24, 7.6);

        // Pommel Counterweight Ring
        ctx.beginPath();
        ctx.arc(-hLen - 2, 0, 7.5, 0, Math.PI * 2);
        ctx.fill();

        // Top Armor-Cracking War Spike
        ctx.beginPath();
        ctx.moveTo(24, -4.5);
        ctx.lineTo(46, 0);
        ctx.lineTo(24, 4.5);
        ctx.closePath();
        ctx.fill();

        // Front Massive Bearded Crescent Blade
        ctx.beginPath();
        ctx.moveTo(12, -6);
        ctx.quadraticCurveTo(28, -bWidth * 0.8, 52, -bWidth * 0.62);
        ctx.quadraticCurveTo(42, 0, 48, bWidth * 0.78);
        ctx.quadraticCurveTo(24, bWidth * 0.52, 12, 6);
        ctx.closePath();
        ctx.fill();

        // Rear Heavy Bearded Counter-Blade
        ctx.beginPath();
        ctx.moveTo(4, -5);
        ctx.quadraticCurveTo(-14, -bWidth * 0.68, -32, -bWidth * 0.48);
        ctx.quadraticCurveTo(-22, 0, -28, bWidth * 0.58);
        ctx.quadraticCurveTo(-12, bWidth * 0.38, 4, 5);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'colossus_maul' || m === 'titans_grudge') {
        // TWO-HANDED MAUL: Pitch-Dark Octagonal Crushing Block
        const bLen = w.length || 112;
        const hLen = w.handleLen || 70;
        const bWidth = w.width || 32;

        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-hLen, -3.8, hLen + 20, 7.6);

        const hX = 14, hY = -bWidth * 0.5, hW = 34, hH = bWidth;
        ctx.beginPath();
        ctx.moveTo(hX + 4, hY);
        ctx.lineTo(hX + hW - 4, hY);
        ctx.lineTo(hX + hW, hY + 4);
        ctx.lineTo(hX + hW, hY + hH - 4);
        ctx.lineTo(hX + hW - 4, hY + hH);
        ctx.lineTo(hX + 4, hY + hH);
        ctx.lineTo(hX, hY + hH - 4);
        ctx.lineTo(hX, hY + 4);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'shoguns_breaker') {
        // ARMORED KANABO: Pitch-Dark Studded Club Silhouette
        const bLen = w.length || 110;
        const hLen = w.handleLen || 32;
        const bWidth = w.width || 14;

        drawDarkTsuka(hLen, 5.2);

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(2, -4);
        ctx.lineTo(bLen, -bWidth * 0.5);
        ctx.lineTo(bLen + 4, 0);
        ctx.lineTo(bLen, bWidth * 0.5);
        ctx.lineTo(2, 4);
        ctx.closePath();
        ctx.fill();

        // Stud horns in silhouette along edges
        for (let r = 16; r < bLen - 6; r += 12) {
          const tW = 4 + (r / bLen) * (bWidth * 0.5 - 4);
          ctx.beginPath();
          ctx.moveTo(r - 2, -tW);
          ctx.lineTo(r, -tW - 3.5);
          ctx.lineTo(r + 2, -tW);
          ctx.closePath();
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(r - 2, tW);
          ctx.lineTo(r, tW + 3.5);
          ctx.lineTo(r + 2, tW);
          ctx.closePath();
          ctx.fill();
        }
      } else if (m === 'sunpiercer_fans') {
        // DUAL WAR FANS: Pitch-Dark Articulated Fan Silhouette
        const fLen = w.length || 46;
        const ribCount = 7;
        const startAng = -0.75, endAng = 0.75;

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (let r = 0; r <= ribCount; r++) {
          const a = startAng + (r / ribCount) * (endAng - startAng);
          ctx.lineTo(Math.cos(a) * (fLen * 0.9), Math.sin(a) * (fLen * 0.9));
        }
        ctx.closePath();
        ctx.fill();
      } else if (m === 'azure_reapers' || m === 'crescent_kodachi' || m === 'tidebreaker' || m === 'tide_crescents') {
        // DUAL CRESCENT SCIMITARS: Pitch-Dark Razor Crescents
        const bLen = w.length || 58;
        const bWidth = w.width || 5.2;
        const hLen = w.handleLen || 16;
        const curve = w.curve || 12;

        drawDarkTsuka(hLen, bWidth * 0.9);

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(2, -bWidth * 0.5);
        ctx.quadraticCurveTo(bLen * 0.5, -curve - bWidth * 0.4, bLen, -curve * 0.3);
        ctx.quadraticCurveTo(bLen * 0.65, bWidth * 0.6 - curve * 0.5, 2, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'blood_reaper' || m === 'chain_of_ruin' || m === 'caged_flail' || m === 'chain_blade') {
        // COLOSSAL BLOOD REAPER SCYTHE: Pitch-Dark Grim Warscythe Silhouette
        const bLen = w.length || 142;
        const hLen = w.handleLen || 72;
        const bWidth = w.width || 26;

        ctx.fillStyle = SIL_BODY;

        // Long Two-Handed Curved Shaft
        ctx.beginPath();
        ctx.moveTo(-hLen, -3.5);
        ctx.quadraticCurveTo(bLen * 0.25, -5.5, bLen * 0.72, 3);
        ctx.lineTo(bLen * 0.72, -3);
        ctx.quadraticCurveTo(bLen * 0.25, -11.5, -hLen, -9.5);
        ctx.closePath();
        ctx.fill();

        // Counterweight Pommel Talon
        ctx.beginPath();
        ctx.arc(-hLen - 2, -6.5, 6.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-hLen - 2, -13);
        ctx.lineTo(-hLen - 12, -6.5);
        ctx.lineTo(-hLen - 2, 0);
        ctx.closePath();
        ctx.fill();

        // Reinforced Scythe Collar
        const neckX = bLen * 0.72;
        ctx.fillRect(neckX - 2, -14, 14, 22);

        // Colossal Sweeping Crescent Razor Scythe Blade
        ctx.beginPath();
        ctx.moveTo(neckX, -6);
        ctx.quadraticCurveTo(neckX + 35, -18, neckX + 68, -6);
        ctx.lineTo(neckX + 76, 12);
        // Razor Inward Crescent Curve
        ctx.quadraticCurveTo(neckX + 32, 46, neckX - 22, 58);
        // Lethal Scythe Hook Tip
        ctx.lineTo(neckX - 28, 56);
        // Outer Body Arc
        ctx.quadraticCurveTo(neckX + 26, 38, neckX + 58, 8);
        // Serrated Spine Crest
        ctx.lineTo(neckX + 40, -8);
        ctx.quadraticCurveTo(neckX + 18, -12, neckX, -6);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'graveglass' || m === 'voidcleaver' || m === 'kingslayer') {
        // TWO-HANDED GREATSWORDS: Colossal Pitch-Dark Broad Blades
        const bLen = w.length || 120;
        const bWidth = w.width || 15;
        const hLen = w.handleLen || 32;

        drawDarkTsuka(hLen, 5.8);

        // Crossguard
        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-3, -bWidth * 1.4, 6, bWidth * 2.8);

        // Massive Broad Blade
        ctx.beginPath();
        ctx.moveTo(3, -bWidth * 0.5);
        ctx.lineTo(bLen - 12, -bWidth * 0.45);
        ctx.lineTo(bLen, 0);
        ctx.lineTo(bLen - 12, bWidth * 0.45);
        ctx.lineTo(3, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'thronebreaker_scepter') {
        // TWO-HANDED SCEPTER: Pitch-Dark Gothic Spired Crown
        const bLen = w.length || 108;
        const hLen = w.handleLen || 54;
        const bWidth = w.width || 22;

        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-hLen, -3.2, bLen, 6.4);

        const crownX = bLen - 18;
        ctx.beginPath();
        ctx.moveTo(crownX, -bWidth * 0.6);
        ctx.lineTo(crownX + 22, -bWidth * 0.75);
        ctx.lineTo(crownX + 14, -bWidth * 0.3);
        ctx.lineTo(crownX + 26, 0);
        ctx.lineTo(crownX + 14, bWidth * 0.3);
        ctx.lineTo(crownX + 22, bWidth * 0.75);
        ctx.lineTo(crownX, bWidth * 0.6);
        ctx.closePath();
        ctx.fill();
      } else if (m === 'eternal_night') {
        // TRANSFORMING WEAPON: Compact Katana morphs into Colossal Scythe
        const morph = this.transformProgress || 0;
        const bLen = lerp(72, 128, morph);
        const bWidth = lerp(5.5, 14, morph);
        const hLen = 28;
        const curve = lerp(10, 26, morph);

        drawDarkTsuka(hLen, 5.5);
        drawDarkTsuba(bWidth * 2.6);

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(4, -bWidth * 0.5);
        ctx.quadraticCurveTo(bLen * 0.6, -curve - bWidth * 0.5 - morph * 8, bLen, -curve * 0.5);
        ctx.lineTo(bLen - 8, bWidth * 0.5 - curve * 0.2);
        ctx.quadraticCurveTo(bLen * 0.55, bWidth * 0.5 - curve * 0.5, 4, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();

        // Jagged morphing spines in silhouette
        if (morph > 0.1) {
          for (let sp = 1; sp <= 3; sp++) {
            const sx = bLen * (0.3 + sp * 0.2);
            ctx.beginPath();
            ctx.moveTo(sx, -curve * 0.5);
            ctx.lineTo(sx - 4, -curve * 0.5 - morph * 12);
            ctx.lineTo(sx + 2, -curve * 0.5);
            ctx.closePath();
            ctx.fill();
          }
        }
      } else if (m === 'obsidian_fists') {
        // DUAL GAUNTLETS: Armored Knuckle Plates in Solid Pitch-Dark Silhouette
        const gLen = w.length || 32;
        const gWidth = w.width || 14;

        ctx.fillStyle = SIL_BODY;
        ctx.fillRect(-gLen * 0.6, -gWidth * 0.5, gLen * 0.7, gWidth);

        // Triangular spiked knuckles in solid silhouette
        ctx.beginPath();
        ctx.moveTo(gLen * 0.1, -gWidth * 0.4);
        ctx.lineTo(gLen * 0.35, -gWidth * 0.4);
        ctx.lineTo(gLen * 0.1, -gWidth * 0.2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(gLen * 0.1, -gWidth * 0.1);
        ctx.lineTo(gLen * 0.42, 0);
        ctx.lineTo(gLen * 0.1, gWidth * 0.1);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(gLen * 0.1, gWidth * 0.2);
        ctx.lineTo(gLen * 0.35, gWidth * 0.4);
        ctx.lineTo(gLen * 0.1, gWidth * 0.4);
        ctx.closePath();
        ctx.fill();
      } else {
        // Default Pitch-Dark Single-Handed Blade Silhouette
        const bLen = w.length || 95;
        const bWidth = w.width || 5.5;
        const hLen = w.handleLen || 26;
        const curve = w.curve || 10;

        drawDarkTsuka(hLen, bWidth);
        drawDarkTsuba(bWidth * 2.8);

        ctx.fillStyle = SIL_BODY;
        ctx.beginPath();
        ctx.moveTo(6, -bWidth * 0.5);
        ctx.quadraticCurveTo(bLen * 0.6, -curve, bLen, -curve * 0.42);
        ctx.lineTo(bLen - 6, bWidth * 0.5 - curve * 0.2);
        ctx.quadraticCurveTo(bLen * 0.55, bWidth * 0.45 - curve * 0.6, 6, bWidth * 0.5);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }

    renderMotionTrail(ctx) {
      if (this.trail.length < 2) return;
      ctx.save();
      for (let i = 0; i < this.trail.length - 1; i++) {
        const a = this.trail[i], b = this.trail[i + 1];
        const alpha = (1 - a.age / a.maxAge) * 0.55;
        ctx.fillStyle = this.weapon.trailColor;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(a.tx, a.ty);
        ctx.lineTo(b.tx, b.ty);
        ctx.lineTo(lerp(b.gx, b.tx, 0.45), lerp(b.gy, b.ty, 0.45));
        ctx.lineTo(lerp(a.gx, a.tx, 0.45), lerp(a.gy, a.ty, 0.45));
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = this.weapon.trailCore;
        ctx.globalAlpha = alpha * 0.85;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(a.tx, a.ty);
        ctx.lineTo(b.tx, b.ty);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  // ============================================================================
  // 6. EXACT REFERENCE ARENA RENDERER (GOLDEN AUTUMN TEMPLE COURTYARD & BRIDGE)
  // ============================================================================
  class ArenaRenderer {
    constructor() {
      this.mode = 'temple'; // 'temple' | 'bridge'
      this.foliageClusters = this.buildAutumnClusters();
      this.templeImg = new Image();
      this.templeImgLoaded = false;
      this.templeImg.onload = () => {
        this.templeImgLoaded = true;
      };
      this.templeImg.src = 'autumn_temple_bg.jpg';
    }

    buildAutumnClusters() {
      const clusters = [];
      // Left dense crimson maple canopy
      for (let i = 0; i < 42; i++) {
        clusters.push({
          side: 'left',
          x: 60 + Math.random() * 520,
          y: -20 + Math.random() * 270,
          rx: 28 + Math.random() * 44,
          ry: 16 + Math.random() * 24,
          rot: (Math.random() - 0.5) * 0.6,
          color: ['#450a0a', '#7f1d1d', '#991b1b', '#b91c1c', '#dc2626', '#ea580c'][Math.floor(Math.random() * 6)]
        });
      }
      // Right golden-orange & crimson maple canopy
      for (let i = 0; i < 42; i++) {
        clusters.push({
          side: 'right',
          x: 1220 + Math.random() * 620,
          y: -20 + Math.random() * 260,
          rx: 28 + Math.random() * 42,
          ry: 16 + Math.random() * 24,
          rot: (Math.random() - 0.5) * 0.6,
          color: ['#7c2d12', '#9a3412', '#c2410c', '#ea580c', '#d97706', '#f59e0b', '#facc15'][Math.floor(Math.random() * 7)]
        });
      }
      return clusters;
    }

    renderWorld(ctx, worldW, viewH, groundY, time) {
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
    }

    // Exact match to provided Golden Autumn Temple Courtyard image (Shadow Fight 2)
    renderAutumnTempleWorld(ctx, worldW, h, groundY, time) {
      if (this.templeImg && (this.templeImgLoaded || (this.templeImg.complete && this.templeImg.naturalWidth > 0))) {
        const img = this.templeImg;
        const nw = img.naturalWidth || 1024;
        const nh = img.naturalHeight || 530;

        // In the reference artwork (1024x530), the stone courtyard tiles where characters stand are at y ≈ 478 (90.2% of height).
        // The koi pond is at y ≈ 380..440.
        // Scale image to fill world width (1920) while aligning the stone courtyard floor with groundY
        const scale = Math.max(worldW / nw, h / nh);
        const drawW = nw * scale;
        const drawH = nh * scale;
        const drawX = (worldW - drawW) * 0.5;
        const imgFloorRatio = 478.0 / 530.0;
        const imgGroundY = drawH * imgFloorRatio;
        const drawY = groundY - imgGroundY;

        ctx.drawImage(img, drawX, drawY, drawW, drawH);

        // Warm atmospheric sunlight beam overlay matching reference artwork
        const sunBeam = ctx.createLinearGradient(worldW * 0.44, 0, worldW * 0.64, groundY);
        sunBeam.addColorStop(0, 'rgba(255, 238, 180, 0.16)');
        sunBeam.addColorStop(0.35, 'rgba(255, 195, 90, 0.08)');
        sunBeam.addColorStop(0.75, 'rgba(255, 140, 25, 0.03)');
        sunBeam.addColorStop(1, 'rgba(255, 100, 10, 0)');
        ctx.fillStyle = sunBeam;
        ctx.fillRect(0, 0, worldW, groundY);

        // Water ripple shimmer in the central koi pond (positioned behind fighters above stone floor)
        const pondX = worldW * 0.5 - drawW * 0.16;
        const pondW = drawW * 0.32;
        const pondY = groundY - drawH * (82 / 530);
        const pondH = drawH * (52 / 530);
        ctx.save();
        ctx.beginPath();
        ctx.rect(pondX, pondY, pondW, pondH);
        ctx.clip();
        ctx.strokeStyle = 'rgba(255, 245, 210, 0.12)';
        ctx.lineWidth = 1.2;
        for (let r = 0; r < 4; r++) {
          const rx = pondX + 60 + ((r * 137 + time * 16) % (pondW - 120));
          const ry = pondY + 15 + ((r * 43 + time * 5) % (pondH - 25));
          const rSize = 8 + (Math.sin(time * 2 + r) * 0.5 + 0.5) * 14;
          ctx.beginPath();
          ctx.ellipse(rx, ry, rSize * 1.8, rSize * 0.45, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();

        // Hanging lanterns warm flicker on the right courtyard
        const flicker = Math.sin(time * 3.5) * 0.05 + Math.cos(time * 5.2) * 0.03;
        const l1X = worldW * 0.5 + drawW * 0.245;
        const l1Y = groundY - drawH * (218 / 530);
        const lanternGlow1 = ctx.createRadialGradient(l1X, l1Y, 4, l1X, l1Y, 70);
        lanternGlow1.addColorStop(0, `rgba(255, 190, 80, ${0.22 + flicker})`);
        lanternGlow1.addColorStop(1, 'rgba(255, 140, 20, 0)');
        ctx.fillStyle = lanternGlow1;
        ctx.fillRect(l1X - 70, l1Y - 70, 140, 140);

        const l2X = worldW * 0.5 + drawW * 0.295;
        const l2Y = groundY - drawH * (188 / 530);
        const lanternGlow2 = ctx.createRadialGradient(l2X, l2Y, 4, l2X, l2Y, 70);
        lanternGlow2.addColorStop(0, `rgba(255, 190, 80, ${0.20 + flicker})`);
        lanternGlow2.addColorStop(1, 'rgba(255, 140, 20, 0)');
        ctx.fillStyle = lanternGlow2;
        ctx.fillRect(l2X - 70, l2Y - 70, 140, 140);

        return;
      }

      const cx = worldW * 0.5;
      const pondTop = groundY - 96;

      // 1. Rich Golden-Amber Sunlight Sky with warm canopy glow backdrop
      const skyGrad = ctx.createLinearGradient(0, 0, 0, pondTop);
      skyGrad.addColorStop(0, '#fff7e0');
      skyGrad.addColorStop(0.12, '#ffe4a0');
      skyGrad.addColorStop(0.32, '#f5a623');
      skyGrad.addColorStop(0.55, '#d4710a');
      skyGrad.addColorStop(0.78, '#8b3a0f');
      skyGrad.addColorStop(1, '#3a1505');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, worldW, pondTop);

      // Intense Sunburst Core above Central Temple Roof (white-hot center)
      const sunGlow = ctx.createRadialGradient(cx - 20, 40, 12, cx - 20, 50, 480);
      sunGlow.addColorStop(0, 'rgba(255, 255, 245, 0.98)');
      sunGlow.addColorStop(0.12, 'rgba(255, 248, 200, 0.85)');
      sunGlow.addColorStop(0.35, 'rgba(253, 210, 60, 0.52)');
      sunGlow.addColorStop(0.58, 'rgba(234, 120, 20, 0.22)');
      sunGlow.addColorStop(1, 'rgba(67, 20, 7, 0)');
      ctx.fillStyle = sunGlow;
      ctx.fillRect(0, 0, worldW, pondTop);

      // Secondary warm haze glow across entire backdrop
      const hazeGlow = ctx.createRadialGradient(cx, 80, 40, cx, 120, 650);
      hazeGlow.addColorStop(0, 'rgba(255, 240, 180, 0.45)');
      hazeGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.15)');
      hazeGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = hazeGlow;
      ctx.fillRect(0, 0, worldW, pondTop);

      // Distant deep golden-orange tree foliage behind temple roof (multi-layer)
      ctx.fillStyle = '#b45309';
      for (let x = cx - 520; x <= cx + 520; x += 48) {
        ctx.beginPath();
        ctx.arc(x, 140 + Math.sin(x * 0.02) * 22, 72, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#d97706';
      for (let x = cx - 450; x <= cx + 450; x += 50) {
        ctx.beginPath();
        ctx.arc(x, 118 + Math.sin(x * 0.025) * 18, 62, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#f59e0b';
      for (let x = cx - 380; x <= cx + 380; x += 55) {
        ctx.beginPath();
        ctx.arc(x, 95 + Math.cos(x * 0.03) * 14, 50, 0, Math.PI * 2);
        ctx.fill();
      }
      // Extra bright canopy fringe
      ctx.fillStyle = '#fbbf24';
      for (let x = cx - 280; x <= cx + 280; x += 70) {
        ctx.beginPath();
        ctx.arc(x, 82 + Math.sin(x * 0.04) * 10, 38, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Sanctuary Compound Back Wall & Side Corridors (rich warm brown)
      const wallGrad = ctx.createLinearGradient(80, 190, 80, pondTop);
      wallGrad.addColorStop(0, '#30221e');
      wallGrad.addColorStop(0.5, '#261c1a');
      wallGrad.addColorStop(1, '#1e1412');
      ctx.fillStyle = wallGrad;
      ctx.fillRect(80, 190, worldW - 160, pondTop - 190);

      // Wall ambient glow from lanterns & sunlight
      const wallAmbient = ctx.createRadialGradient(cx, pondTop * 0.7, 20, cx, pondTop * 0.7, 350);
      wallAmbient.addColorStop(0, 'rgba(139, 92, 42, 0.25)');
      wallAmbient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = wallAmbient;
      ctx.fillRect(80, 190, worldW - 160, pondTop - 190);

      // Left & Right Recessed Wall Bays & Square Pillars with depth
      ctx.fillStyle = '#3d2d25';
      for (let px = 220; px <= worldW - 220; px += 150) {
        ctx.fillRect(px - 16, 195, 32, pondTop - 195);
        // Pillar edge highlight
        ctx.fillStyle = 'rgba(120, 85, 55, 0.35)';
        ctx.fillRect(px - 16, 195, 3, pondTop - 195);
        ctx.fillStyle = '#3d2d25';
      }

      // Left & Right Diamond Lattice White Stone Columns
      this.drawLatticeColumn(ctx, 135, 195, 42, pondTop - 195);
      this.drawLatticeColumn(ctx, worldW - 195, 175, 48, pondTop - 165);

      // Left wall wooden eave structure
      ctx.fillStyle = '#1c1210';
      ctx.beginPath();
      ctx.moveTo(80, 190);
      ctx.lineTo(380, 190);
      ctx.lineTo(380, 200);
      ctx.lineTo(80, 200);
      ctx.closePath();
      ctx.fill();

      // 3. Central Fluted Tile Temple Gatehouse & Carved Wooden Double Doors
      const gateW = 400;
      const gateX = cx - gateW * 0.5;
      const roofTop = 100;
      const eavesY = 195;

      // Upper & Lower Tiered Terracotta Fluted Roof with curvature
      const roofGrad = ctx.createLinearGradient(0, roofTop, 0, eavesY);
      roofGrad.addColorStop(0, '#6d4535');
      roofGrad.addColorStop(0.5, '#5c3a2e');
      roofGrad.addColorStop(1, '#4a2d22');
      ctx.fillStyle = roofGrad;
      ctx.beginPath();
      ctx.moveTo(gateX - 55, eavesY + 2);
      // Curved eave lines (subtle upward curve at edges like real Asian roofs)
      ctx.quadraticCurveTo(gateX + gateW * 0.15, roofTop - 8, cx, roofTop - 4);
      ctx.quadraticCurveTo(gateX + gateW * 0.85, roofTop - 8, gateX + gateW + 55, eavesY + 2);
      ctx.closePath();
      ctx.fill();

      // Ridge cap on top of roof
      ctx.fillStyle = '#7a5040';
      ctx.fillRect(gateX + 30, roofTop - 6, gateW - 60, 6);

      // Vertical terracotta roof tile ribs
      ctx.strokeStyle = '#3d241c';
      ctx.lineWidth = 2.8;
      for (let tx = gateX - 40; tx <= gateX + gateW + 40; tx += 14) {
        const yOff = Math.abs(tx - cx) * 0.008;
        ctx.beginPath();
        ctx.moveTo(tx, roofTop + yOff);
        ctx.lineTo(tx + (tx - cx) * 0.14, eavesY - 2);
        ctx.stroke();
      }

      // Eave rafter brackets (Dou-gong blocks) with shadow
      ctx.fillStyle = '#1e120c';
      ctx.fillRect(gateX - 58, eavesY - 4, gateW + 116, 14);
      ctx.fillStyle = '#8b6350';
      for (let bx = gateX - 45; bx <= gateX + gateW + 42; bx += 20) {
        ctx.fillRect(bx, eavesY + 6, 9, 8);
      }
      // Bottom shadow line under eave
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(gateX - 58, eavesY + 12, gateW + 116, 4);

      // Pale Jade-Grey Stone Gate Frame Pillars with lighting
      const pillarGrad = ctx.createLinearGradient(gateX + 18, 0, gateX + 54, 0);
      pillarGrad.addColorStop(0, '#6b665e');
      pillarGrad.addColorStop(0.5, '#7a756c');
      pillarGrad.addColorStop(1, '#5b5650');
      ctx.fillStyle = pillarGrad;
      ctx.fillRect(gateX + 18, eavesY + 16, 38, pondTop - (eavesY + 16));
      ctx.fillRect(gateX + gateW - 56, eavesY + 16, 38, pondTop - (eavesY + 16));
      // Lintel beam
      ctx.fillStyle = '#6b655c';
      ctx.fillRect(gateX + 18, eavesY + 16, gateW - 36, 28);

      // Heavy Carved Wooden Double Sanctuary Doors with rich wood grain
      const doorX = gateX + 64;
      const doorY = eavesY + 48;
      const doorW = gateW - 128;
      const doorH = pondTop - doorY;

      const doorGrad = ctx.createLinearGradient(doorX, 0, doorX + doorW, 0);
      doorGrad.addColorStop(0, '#3e2215');
      doorGrad.addColorStop(0.25, '#553018');
      doorGrad.addColorStop(0.5, '#4a2c1d');
      doorGrad.addColorStop(0.75, '#553018');
      doorGrad.addColorStop(1, '#3e2215');
      ctx.fillStyle = doorGrad;
      ctx.fillRect(doorX, doorY, doorW, doorH);

      // Door frame border
      ctx.strokeStyle = '#1e0f08';
      ctx.lineWidth = 5;
      ctx.strokeRect(doorX, doorY, doorW, doorH);

      // Center door seam & carved coffered panels
      ctx.strokeStyle = '#1e0f08';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(cx, doorY);
      ctx.lineTo(cx, doorY + doorH);
      ctx.stroke();

      // Carved coffered panels with more depth
      ctx.strokeStyle = '#6d4630';
      ctx.lineWidth = 2;
      for (let row = 0; row < 3; row++) {
        const py = doorY + 16 + row * ((doorH - 32) / 3);
        const ph = (doorH - 50) / 3;
        // Left door panels
        ctx.strokeRect(doorX + 16, py, doorW * 0.5 - 24, ph);
        // Right door panels
        ctx.strokeRect(cx + 8, py, doorW * 0.5 - 24, ph);
        // Inner panel fill for depth
        ctx.fillStyle = 'rgba(74, 44, 29, 0.6)';
        ctx.fillRect(doorX + 18, py + 2, doorW * 0.5 - 28, ph - 4);
        ctx.fillRect(cx + 10, py + 2, doorW * 0.5 - 28, ph - 4);
      }

      // Brass Ring Knockers (larger, with glow)
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(cx - 14, doorY + doorH * 0.45, 6, 0, Math.PI * 2);
      ctx.arc(cx + 14, doorY + doorH * 0.45, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#92400e';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Knocker center
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.arc(cx - 14, doorY + doorH * 0.45, 3, 0, Math.PI * 2);
      ctx.arc(cx + 14, doorY + doorH * 0.45, 3, 0, Math.PI * 2);
      ctx.fill();

      // 4. Right Wooden Eaves & Hanging Warm Temple Lanterns
      ctx.fillStyle = '#1c1210';
      ctx.beginPath();
      ctx.moveTo(worldW - 540, 188);
      ctx.lineTo(worldW - 40, 115);
      ctx.lineTo(worldW - 40, 158);
      ctx.lineTo(worldW - 540, 218);
      ctx.closePath();
      ctx.fill();

      // Eave bracket details
      ctx.fillStyle = '#3a2518';
      for (let ex = worldW - 520; ex < worldW - 50; ex += 40) {
        const ey = 188 + (worldW - 50 - ex) / (worldW - 540 - (worldW - 50)) * 30;
        ctx.fillRect(ex, 195 - (worldW - ex) * 0.02, 8, 18);
      }

      // More lanterns for atmospheric warmth
      this.drawHangingLantern(ctx, 175, 248, time);
      this.drawHangingLantern(ctx, 265, 262, time);
      this.drawHangingLantern(ctx, worldW - 500, 258, time);
      this.drawHangingLantern(ctx, worldW - 400, 262, time);
      this.drawHangingLantern(ctx, worldW - 280, 235, time);
      this.drawHangingLantern(ctx, worldW - 180, 218, time);

      // 5. Seated Ganesha Stone Shrine Statue (Right of Central Door)
      this.drawShrineStatue(ctx, cx + 200, pondTop - 8);

      // 6. Left & Right Gnarled Autumn Maple Tree Trunks & Layered Red/Gold Canopies
      ctx.lineCap = 'round';

      // Left trunk - thick, gnarled, rooted near left edge
      ctx.strokeStyle = '#2a1a12';
      ctx.lineWidth = 42;
      ctx.beginPath();
      ctx.moveTo(45, groundY - 35);
      ctx.quadraticCurveTo(80, 340, 120, 180);
      ctx.stroke();
      // Left trunk highlight
      ctx.strokeStyle = '#3d2a1e';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(55, groundY - 40);
      ctx.quadraticCurveTo(88, 320, 130, 190);
      ctx.stroke();

      // Left major branch going up-right
      ctx.strokeStyle = '#2a1a12';
      ctx.lineWidth = 22;
      ctx.beginPath();
      ctx.moveTo(120, 200);
      ctx.quadraticCurveTo(220, 140, 350, 100);
      ctx.stroke();
      // Left minor branch
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(100, 260);
      ctx.quadraticCurveTo(50, 180, 80, 100);
      ctx.stroke();

      // Right trunk - rooted near pond bank
      ctx.strokeStyle = '#2a1a12';
      ctx.lineWidth = 32;
      ctx.beginPath();
      ctx.moveTo(worldW - 460, pondTop + 8);
      ctx.quadraticCurveTo(worldW - 500, 300, worldW - 420, 140);
      ctx.stroke();
      // Right trunk highlight
      ctx.strokeStyle = '#3d2a1e';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(worldW - 455, pondTop + 5);
      ctx.quadraticCurveTo(worldW - 490, 310, worldW - 415, 150);
      ctx.stroke();

      // Right major branch
      ctx.strokeStyle = '#2a1a12';
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(worldW - 420, 160);
      ctx.quadraticCurveTo(worldW - 320, 100, worldW - 200, 80);
      ctx.stroke();

      // Render Lush Autumn Leaf Canopy Clusters (existing + extra depth layers)
      // Background canopy layer (slightly transparent, behind main clusters)
      ctx.save();
      ctx.globalAlpha = 0.6;
      for (const cl of this.foliageClusters) {
        ctx.save();
        ctx.translate(cl.x + 8, cl.y + 12);
        ctx.rotate(cl.rot);
        ctx.fillStyle = '#2d1008';
        ctx.beginPath();
        ctx.ellipse(0, 0, cl.rx * 1.15, cl.ry * 1.15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      // Main canopy clusters
      for (const cl of this.foliageClusters) {
        ctx.save();
        ctx.translate(cl.x, cl.y);
        ctx.rotate(cl.rot + Math.sin(time * 1.1 + cl.x * 0.01) * 0.03);
        ctx.fillStyle = cl.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, cl.rx, cl.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Bright highlight canopy layer on top (sun-facing edges)
      ctx.save();
      ctx.globalAlpha = 0.4;
      for (const cl of this.foliageClusters) {
        if (cl.y < 140 && Math.random() > 0.4) {
          ctx.save();
          ctx.translate(cl.x - 4, cl.y - 6);
          ctx.rotate(cl.rot);
          ctx.fillStyle = cl.side === 'left' ? '#fbbf24' : '#f59e0b';
          ctx.beginPath();
          ctx.ellipse(0, 0, cl.rx * 0.6, cl.ry * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.restore();

      // 7. Large Terracotta Temple Urns (Left & Right Verandas)
      this.drawTerracottaUrn(ctx, 275, pondTop - 10, 48, 56);
      this.drawTerracottaUrn(ctx, worldW - 310, pondTop - 6, 52, 60);
      this.drawTerracottaUrn(ctx, worldW - 115, groundY - 22, 68, 82);

      // Small incense holder near right urn
      ctx.fillStyle = '#4a3520';
      ctx.fillRect(worldW - 165, groundY - 8, 6, 28);
      ctx.fillStyle = '#ff8c00';
      ctx.globalAlpha = 0.7 + Math.sin(time * 3) * 0.15;
      ctx.beginPath();
      ctx.arc(worldW - 162, groundY - 12, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // 8. Tranquil Courtyard Koi Pond & Green Lily Pads
      const pondGrad = ctx.createLinearGradient(0, pondTop, 0, groundY);
      pondGrad.addColorStop(0, '#2d3b30');
      pondGrad.addColorStop(0.3, '#3a5040');
      pondGrad.addColorStop(0.7, '#3f5247');
      pondGrad.addColorStop(1, '#28362d');
      ctx.fillStyle = pondGrad;
      ctx.fillRect(280, pondTop, worldW - 520, groundY - pondTop);

      // Warm door reflection shimmer on pond water
      ctx.fillStyle = 'rgba(217, 119, 6, 0.18)';
      ctx.fillRect(doorX, pondTop, doorW, groundY - pondTop);

      // Ripple reflections on pond surface
      ctx.strokeStyle = 'rgba(160, 200, 170, 0.12)';
      ctx.lineWidth = 1;
      for (let ry = pondTop + 15; ry < groundY - 10; ry += 18) {
        ctx.beginPath();
        for (let rx = 290; rx < worldW - 250; rx += 40) {
          const ox = Math.sin(time * 0.8 + rx * 0.02 + ry * 0.03) * 12;
          if (rx === 290) ctx.moveTo(rx + ox, ry);
          else ctx.lineTo(rx + ox, ry);
        }
        ctx.stroke();
      }

      // Floating Green Lily Pads (more, varied sizes)
      const pads = [
        [400, pondTop + 30, 26], [445, pondTop + 45, 30], [510, pondTop + 35, 24],
        [440, pondTop + 62, 28], [550, pondTop + 55, 27], [620, pondTop + 48, 22],
        [860, pondTop + 48, 34], [950, pondTop + 60, 26], [1050, pondTop + 42, 28],
        [1140, pondTop + 40, 28], [1230, pondTop + 58, 30], [1285, pondTop + 44, 24]
      ];
      for (const [lx, ly, lr] of pads) {
        // Pad shadow
        ctx.fillStyle = 'rgba(30, 60, 40, 0.5)';
        ctx.beginPath();
        ctx.ellipse(lx + 2, ly + 2, lr, lr * 0.34, 0, 0.2, Math.PI * 1.95);
        ctx.fill();
        // Pad surface
        ctx.fillStyle = '#4d7c5b';
        ctx.beginPath();
        ctx.ellipse(lx, ly, lr, lr * 0.32, 0, 0.2, Math.PI * 1.95);
        ctx.fill();
        // Highlight vein
        ctx.strokeStyle = 'rgba(100, 160, 110, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(lx + lr * 0.7, ly - lr * 0.1);
        ctx.stroke();
      }

      // Mossy Pond Boulder on Right Bank (richer detail)
      const boulderGrad = ctx.createRadialGradient(worldW - 490, pondTop + 5, 10, worldW - 490, pondTop + 5, 60);
      boulderGrad.addColorStop(0, '#6b736b');
      boulderGrad.addColorStop(0.6, '#575e5a');
      boulderGrad.addColorStop(1, '#3d4540');
      ctx.fillStyle = boulderGrad;
      ctx.beginPath();
      ctx.moveTo(worldW - 545, groundY - 8);
      ctx.quadraticCurveTo(worldW - 510, pondTop - 16, worldW - 440, pondTop + 14);
      ctx.lineTo(worldW - 415, groundY - 8);
      ctx.closePath();
      ctx.fill();
      // Moss on boulder
      ctx.fillStyle = 'rgba(80, 120, 75, 0.5)';
      ctx.beginPath();
      ctx.ellipse(worldW - 490, pondTop + 4, 22, 8, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // 9. Multiple Diagonal Volumetric Golden Sunbeams (matching reference)
      ctx.save();
      // Primary sunbeam (center-right)
      const rayGrad = ctx.createLinearGradient(cx - 100, 40, cx + 300, groundY);
      rayGrad.addColorStop(0, 'rgba(255, 245, 150, 0.28)');
      rayGrad.addColorStop(0.4, 'rgba(254, 215, 100, 0.14)');
      rayGrad.addColorStop(0.7, 'rgba(251, 146, 60, 0.06)');
      rayGrad.addColorStop(1, 'rgba(251, 146, 60, 0)');
      ctx.fillStyle = rayGrad;
      ctx.beginPath();
      ctx.moveTo(cx - 200, 40);
      ctx.lineTo(cx + 140, 40);
      ctx.lineTo(cx + 520, groundY + 60);
      ctx.lineTo(cx - 20, groundY + 60);
      ctx.closePath();
      ctx.fill();

      // Secondary sunbeam (left-leaning)
      const ray2Grad = ctx.createLinearGradient(cx - 250, 60, cx + 50, groundY);
      ray2Grad.addColorStop(0, 'rgba(255, 240, 140, 0.16)');
      ray2Grad.addColorStop(0.5, 'rgba(251, 180, 80, 0.06)');
      ray2Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ray2Grad;
      ctx.beginPath();
      ctx.moveTo(cx - 380, 50);
      ctx.lineTo(cx - 180, 50);
      ctx.lineTo(cx + 80, groundY + 40);
      ctx.lineTo(cx - 180, groundY + 40);
      ctx.closePath();
      ctx.fill();

      // Narrow bright accent beam (far right)
      const ray3Grad = ctx.createLinearGradient(cx + 200, 80, cx + 500, groundY);
      ray3Grad.addColorStop(0, 'rgba(255, 250, 180, 0.12)');
      ray3Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ray3Grad;
      ctx.beginPath();
      ctx.moveTo(cx + 180, 70);
      ctx.lineTo(cx + 280, 70);
      ctx.lineTo(cx + 560, groundY + 20);
      ctx.lineTo(cx + 420, groundY + 20);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 10. Foreground sunlit stone courtyard slabs, Bolster Pillow & Crimson Rug
      const floorGrad = ctx.createLinearGradient(0, groundY, 0, h);
      floorGrad.addColorStop(0, '#dcc49e');
      floorGrad.addColorStop(0.2, '#c4a880');
      floorGrad.addColorStop(0.5, '#a68b6c');
      floorGrad.addColorStop(1, '#4a3f37');
      ctx.fillStyle = floorGrad;
      ctx.fillRect(0, groundY - 6, worldW, h - groundY + 6);

      // Sunlight warm wash on center courtyard tiles
      const courtSun = ctx.createRadialGradient(cx + 100, groundY + 30, 20, cx + 100, groundY + 40, 350);
      courtSun.addColorStop(0, 'rgba(255, 235, 180, 0.22)');
      courtSun.addColorStop(0.5, 'rgba(220, 180, 120, 0.10)');
      courtSun.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = courtSun;
      ctx.fillRect(0, groundY - 6, worldW, h - groundY + 6);

      // Raised stone curb edge with shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, groundY - 8, worldW, 4);
      ctx.strokeStyle = '#6d5c4a';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, groundY - 4);
      ctx.lineTo(worldW, groundY - 4);
      ctx.stroke();

      // Perspective Stone Tile Grid Lines
      ctx.strokeStyle = 'rgba(60, 50, 42, 0.55)';
      ctx.lineWidth = 2.5;
      const rowMid = groundY + (h - groundY) * 0.46;
      ctx.beginPath();
      ctx.moveTo(0, rowMid);
      ctx.lineTo(worldW, rowMid);
      ctx.stroke();

      // Second tile row
      const rowMid2 = groundY + (h - groundY) * 0.72;
      ctx.beginPath();
      ctx.moveTo(0, rowMid2);
      ctx.lineTo(worldW, rowMid2);
      ctx.stroke();

      for (let sx = 60; sx < worldW; sx += 140) {
        ctx.beginPath();
        ctx.moveTo(sx, groundY - 4);
        ctx.lineTo(cx + (sx - cx) * 1.32, h);
        ctx.stroke();
      }

      // Dappled Leaf Shadows on Stone Courtyard (richer, more varied)
      ctx.fillStyle = 'rgba(42, 34, 46, 0.22)';
      for (let dx = 70; dx < worldW - 70; dx += 150) {
        ctx.beginPath();
        ctx.ellipse(dx + Math.sin(dx) * 20, groundY + 32 + Math.cos(dx) * 8, 55 + Math.sin(dx * 0.3) * 15, 12 + Math.cos(dx * 0.2) * 4, 0.12, 0, Math.PI * 2);
        ctx.fill();
      }
      // Scattered leaf fragments on courtyard
      ctx.fillStyle = '#b91c1c';
      for (let lx = 120; lx < worldW - 120; lx += 220) {
        ctx.save();
        ctx.translate(lx + Math.sin(lx) * 30, groundY + 20 + Math.cos(lx) * 12);
        ctx.rotate(lx * 0.1);
        ctx.beginPath();
        ctx.ellipse(0, 0, 5, 2.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = '#ea580c';
      for (let lx = 180; lx < worldW - 180; lx += 280) {
        ctx.save();
        ctx.translate(lx + Math.cos(lx) * 40, groundY + 35 + Math.sin(lx) * 8);
        ctx.rotate(lx * 0.15);
        ctx.beginPath();
        ctx.ellipse(0, 0, 4, 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Left Gold Bolster Cushion & Orange Mat
      ctx.save();
      ctx.translate(310, groundY + 12);
      // Orange mat with fabric texture
      const matGrad = ctx.createLinearGradient(-45, 6, 140, 28);
      matGrad.addColorStop(0, '#c26d2d');
      matGrad.addColorStop(0.5, '#d4803a');
      matGrad.addColorStop(1, '#a85a20');
      ctx.fillStyle = matGrad;
      ctx.strokeStyle = '#5c2d0c';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-45, 6);
      ctx.lineTo(95, -4);
      ctx.lineTo(140, 14);
      ctx.lineTo(5, 28);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Cylindrical yellow bolster roll with richer shading
      ctx.rotate(-0.14);
      const bolsterGrad = ctx.createLinearGradient(0, -20, 0, 14);
      bolsterGrad.addColorStop(0, '#fde047');
      bolsterGrad.addColorStop(0.3, '#f5c722');
      bolsterGrad.addColorStop(0.6, '#ca8a04');
      bolsterGrad.addColorStop(1, '#713f12');
      ctx.fillStyle = bolsterGrad;
      ctx.beginPath();
      ctx.roundRect(-90, -20, 140, 30, 14);
      ctx.fill();
      ctx.strokeStyle = '#5c2d0c';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      // Bolster end cap
      ctx.fillStyle = '#713f12';
      ctx.beginPath();
      ctx.ellipse(-88, -5, 7, 14, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Right Crimson Woven Prayer Rug with decorative border
      ctx.save();
      ctx.translate(cx + 210, groundY + 14);
      // Rug body
      const rugGrad = ctx.createLinearGradient(-110, -8, 135, 22);
      rugGrad.addColorStop(0, '#9f1239');
      rugGrad.addColorStop(0.5, '#881337');
      rugGrad.addColorStop(1, '#701030');
      ctx.fillStyle = rugGrad;
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-110, -8);
      ctx.lineTo(95, -10);
      ctx.lineTo(135, 16);
      ctx.lineTo(-85, 22);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // Inner border decoration
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-95, -4);
      ctx.lineTo(82, -6);
      ctx.lineTo(118, 14);
      ctx.lineTo(-72, 18);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    drawLatticeColumn(ctx, x, y, w, h) {
      ctx.fillStyle = '#9ca39c';
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = '#576058';
      for (let py = y + 18; py < y + h - 22; py += 34) {
        ctx.beginPath();
        ctx.moveTo(x + w * 0.5, py);
        ctx.lineTo(x + w - 6, py + 14);
        ctx.lineTo(x + w * 0.5, py + 28);
        ctx.lineTo(x + 6, py + 14);
        ctx.closePath();
        ctx.fill();
      }
    }

    drawHangingLantern(ctx, x, y, time) {
      const glow = ctx.createRadialGradient(x, y, 3, x, y, 46);
      glow.addColorStop(0, 'rgba(255, 237, 160, 0.95)');
      glow.addColorStop(0.4, 'rgba(249, 115, 22, 0.42)');
      glow.addColorStop(1, 'rgba(249, 115, 22, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, 46, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#1c1412';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y - 55);
      ctx.lineTo(x, y - 12);
      ctx.stroke();

      ctx.fillStyle = '#291811';
      ctx.fillRect(x - 12, y - 12, 24, 4);
      ctx.fillRect(x - 10, y + 10, 20, 4);
      ctx.fillStyle = '#ffedd5';
      ctx.fillRect(x - 8, y - 8, 16, 18);
    }

    drawShrineStatue(ctx, x, y) {
      // Pedestal
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.ellipse(x, y, 24, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      // Seated statue silhouette with warm stone & gold crown
      ctx.fillStyle = '#a16207';
      ctx.beginPath();
      ctx.arc(x, y - 16, 14, 0, Math.PI * 2);
      ctx.arc(x, y - 34, 9, 0, Math.PI * 2);
      ctx.fill();
      // Crown spire
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.moveTo(x - 6, y - 40);
      ctx.lineTo(x, y - 52);
      ctx.lineTo(x + 6, y - 40);
      ctx.closePath();
      ctx.fill();
    }

    drawTerracottaUrn(ctx, x, y, rx, ry) {
      // Wooden stand
      ctx.fillStyle = '#3b2316';
      ctx.fillRect(x - rx * 0.65, y - 14, rx * 1.3, 14);
      // Rounded clay vessel
      const grad = ctx.createRadialGradient(x - rx * 0.25, y - ry * 0.6, 6, x, y - ry * 0.5, rx);
      grad.addColorStop(0, '#c28d68');
      grad.addColorStop(0.6, '#7c4d34');
      grad.addColorStop(1, '#3d2214');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(x, y - ry * 0.52, rx, ry * 0.48, 0, 0, Math.PI * 2);
      ctx.fill();
      // Rim
      ctx.fillStyle = '#5c3420';
      ctx.beginPath();
      ctx.ellipse(x, y - ry * 0.94, rx * 0.58, 6, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Secondary Arena: Misty Moonlight Bridge (from first reference image)
    renderMoonlightBridgeWorld(ctx, worldW, h, groundY, time) {
      const cx = worldW * 0.5;
      const sky = ctx.createLinearGradient(0, 0, 0, groundY);
      sky.addColorStop(0, '#2b3556');
      sky.addColorStop(0.55, '#596584');
      sky.addColorStop(1, '#8c8c9e');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, worldW, groundY);

      // Snow-capped Mt. Fuji silhouette
      ctx.fillStyle = '#4a526d';
      ctx.beginPath();
      ctx.moveTo(cx - 520, groundY - 90);
      ctx.lineTo(cx - 95, 150);
      ctx.lineTo(cx + 25, 150);
      ctx.lineTo(cx + 450, groundY - 90);
      ctx.closePath();
      ctx.fill();

      // Arched Wooden Bridge & Glowing Lanterns
      ctx.strokeStyle = '#373949';
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.moveTo(cx - 420, groundY - 40);
      ctx.quadraticCurveTo(cx - 80, groundY - 165, cx + 280, groundY - 40);
      ctx.stroke();

      this.drawHangingLantern(ctx, cx - 340, groundY - 125, time);
      this.drawHangingLantern(ctx, cx + 410, groundY - 115, time);

      // Mist band
      const mist = ctx.createLinearGradient(0, groundY - 160, 0, groundY);
      mist.addColorStop(0, 'rgba(210, 200, 195, 0)');
      mist.addColorStop(0.6, 'rgba(210, 195, 180, 0.45)');
      mist.addColorStop(1, 'rgba(15, 15, 20, 0.85)');
      ctx.fillStyle = mist;
      ctx.fillRect(0, groundY - 160, worldW, 160);

      // Pure black foreground bridge floor & chain-link posts
      ctx.fillStyle = '#050507';
      ctx.fillRect(0, groundY, worldW, h - groundY);

      for (let px = 70; px < worldW; px += 170) {
        ctx.fillStyle = '#050507';
        ctx.fillRect(px - 14, groundY - 46, 28, 48);
        ctx.beginPath();
        ctx.arc(px, groundY - 48, 13, 0, Math.PI * 2);
        ctx.fill();

        if (px + 170 < worldW) {
          ctx.strokeStyle = '#050507';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.moveTo(px + 12, groundY - 34);
          ctx.quadraticCurveTo(px + 85, groundY - 8, px + 158, groundY - 34);
          ctx.stroke();
        }
      }
    }
  }

  // ============================================================================
  // 7. AI OPPONENT CONTROLLER
  // ============================================================================
  class AIController {
    constructor(fighter) {
      this.f = fighter;
      this.difficulty = 1;
      this.cooldown = 0.3;
    }

    update(dt, player) {
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
      }

      this.cooldown -= dt;
      const dist = Math.abs(player.x - ai.x);
      const dir = player.x >= ai.x ? 1 : -1;

      // 1. Combo Continuation
      if (ai.state === 'IDLE' && ai.comboWindow > 0 && ai.comboStep > 0 && dist < 140) {
        const comboChance = ['kiba', 'shinobi', 'akari', 'hollow_king'].includes(bId) ? 0.88 : (0.5 + this.difficulty * 0.18);
        if (Math.random() < comboChance) {
          if (ai.comboStep === 1) { ai.comboStep = 2; ai.triggerMove('SLASH_2'); return; }
          if (ai.comboStep === 2) { ai.comboStep = 0; ai.triggerMove('SLASH_3'); return; }
        }
      }

      if (!ai.canAct()) return;

      // 2. Boss-Specific Defense & Reactions when player attacks
      if (player.state === 'ATTACK' && dist < 160 * CHAR_SCALE) {
        // Ren (Master of Parries): extremely high parry chance
        if (bId === 'ren') {
          ai.startState('BLOCK');
          ai.vx = 0;
          ai.parryWindow = 0.22;
          return;
        }
        // Kurogane (False Shogun): heavy iaijutsu counter-guard
        if (bId === 'kurogane' && Math.random() < 0.75) {
          ai.startState('BLOCK');
          ai.vx = 0;
          ai.parryWindow = 0.16;
          return;
        }
        // Kiba / Shinobi / Akari: agile evasive rolls
        if (['kiba', 'shinobi', 'akari'].includes(bId) && Math.random() < 0.45) {
          ai.triggerRoll(Math.random() < 0.5 ? -dir : dir);
          this.cooldown = 0.22;
          return;
        }
        // Brutus: ignores blocking, powers through with poise
        if (bId === 'brutus') {
          if (Math.random() < 0.35 && this.cooldown <= 0) {
            ai.triggerMove('HEAVY');
            this.cooldown = 0.6;
            return;
          }
        }
        // Standard blocking check for other bosses
        const blockProb = [0.25, 0.58, 0.85][this.difficulty];
        if (Math.random() < blockProb * dt * 15) {
          ai.startState('BLOCK');
          ai.vx = 0;
          if (this.difficulty >= 1 && Math.random() < 0.4) ai.parryWindow = 0.14;
          return;
        }
      } else if (ai.state === 'BLOCK' && player.state !== 'ATTACK') {
        // Immediate Counter after block/parry
        if (bId === 'ren' && Math.random() < 0.65) {
          ai.startState('IDLE');
          ai.triggerMove(Math.random() < 0.5 ? 'THRUST' : 'KICK_HIGH');
          this.cooldown = 0.35;
          return;
        }
        if (bId === 'kurogane' && Math.random() < 0.6) {
          ai.startState('IDLE');
          ai.triggerMove('HEAVY');
          vfx.spawnRing(ai.x, ai.y - 50, '#facc15', 75, 0.25);
          this.cooldown = 0.45;
          return;
        }
        ai.startState('IDLE');
      }

      if (this.cooldown > 0) return;

      // 3. Spacing & Positioning per Boss Archetype
      let prefRangeMin = 65, prefRangeMax = 145;
      if (bId === 'kiba' || bId === 'shinobi') { prefRangeMin = 45; prefRangeMax = 95; }
      else if (bId === 'dreadmaw') { prefRangeMin = 130; prefRangeMax = 185; }
      else if (bId === 'raik') { prefRangeMin = 140; prefRangeMax = 195; }
      else if (bId === 'goro' || bId === 'brutus') { prefRangeMin = 75; prefRangeMax = 135; }
      else if (bId === 'ren' || bId === 'kurogane') { prefRangeMin = 80; prefRangeMax = 130; }

      if (dist > prefRangeMax * CHAR_SCALE) {
        ai.facing = dir;
        const isRunner = ['kiba', 'soryu', 'shinobi', 'akari', 'hollow_king'].includes(bId);
        ai.state = (dist > 260 * CHAR_SCALE || isRunner) ? 'RUN' : 'WALK_F';
        ai.vx = dir * (ai.state === 'RUN' ? (isRunner ? 360 : 330) : 205);
        this.cooldown = 0.12;
      } else if (dist < prefRangeMin * CHAR_SCALE) {
        // Too close: retreat or close-quarters kick/roll
        if (['dreadmaw', 'raik'].includes(bId)) {
          if (Math.random() < 0.55) {
            ai.triggerMove('KICK_HIGH');
            this.cooldown = 0.38;
          } else {
            ai.state = 'WALK_B';
            ai.vx = -dir * 190;
            this.cooldown = 0.18;
          }
        } else if (['kiba', 'akari'].includes(bId) && Math.random() < 0.4) {
          ai.triggerRoll(-dir);
          this.cooldown = 0.24;
        } else if (Math.random() < 0.5) {
          ai.triggerMove('KICK_HIGH');
          this.cooldown = 0.32;
        } else {
          ai.state = 'WALK_B';
          ai.vx = -dir * 175;
          this.cooldown = 0.15;
        }
      } else {
        // 4. In Ideal Combat Range: Distinct Attack Execution
        ai.vx = 0;
        ai.facing = dir;

        // Shadow Art check
        const shadowThreshold = bId === 'soryu' ? 65 : (bId === 'hollow_king' ? 70 : 100);
        if (ai.shadow >= shadowThreshold && Math.random() < 0.6) {
          ai.triggerMove('SHADOW_ART');
          if (bId === 'soryu') vfx.spawnRing(ai.x, ai.y - 50, '#ef4444', 120, 0.4);
          if (bId === 'hollow_knight' || bId === 'hollow_king') vfx.spawnRing(ai.x, ai.y - 60, '#a855f7', 150, 0.45);
          this.cooldown = 0.65;
          return;
        }

        // --- Boss-Specific Tactics ---
        if (bId === 'goro') {
          // Slow, readable, heavy two-handed sword strikes
          const r = Math.random();
          if (r < 0.45) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.75) ai.triggerMove('HEAVY');
          else ai.triggerMove('THRUST');
          this.cooldown = 0.68 + Math.random() * 0.18;
        } else if (bId === 'kiba') {
          // Fast twin dagger multi-stabs & low sweeps
          const r = Math.random();
          if (r < 0.6) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.85) ai.triggerMove('SWEEP_LOW');
          else ai.triggerMove('THRUST');
          this.cooldown = 0.22 + Math.random() * 0.12;
        } else if (bId === 'ren') {
          // Patient martial grandmaster: waits, thrusts, low sweeps
          const r = Math.random();
          if (r < 0.5) ai.triggerMove('THRUST');
          else if (r < 0.8) ai.triggerMove('SWEEP_LOW');
          else { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          this.cooldown = 0.42 + Math.random() * 0.15;
        } else if (bId === 'dreadmaw') {
          // Screen-wide colossal scythe cleaves & ground chains
          const r = Math.random();
          if (r < 0.5) ai.triggerMove('HEAVY');
          else if (r < 0.8) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else ai.triggerMove('SWEEP_LOW');
          this.cooldown = 0.52 + Math.random() * 0.16;
        } else if (bId === 'soryu') {
          // Blazing aggressive thrusts & slashes
          const r = Math.random();
          if (r < 0.5) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.8) ai.triggerMove('THRUST');
          else ai.triggerMove('HEAVY');
          vfx.spawnRing(ai.x + dir * 30, ai.y - 45, '#ea580c', 60, 0.25);
          this.cooldown = 0.32 + Math.random() * 0.12;
        } else if (bId === 'raik') {
          // Piercing spear thrusts & anti-air anti-distance sweeps
          const r = Math.random();
          if (r < 0.55) ai.triggerMove('THRUST');
          else if (r < 0.8) ai.triggerMove('SWEEP_LOW');
          else { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          this.cooldown = 0.44 + Math.random() * 0.14;
        } else if (bId === 'shinobi') {
          // Acrobatic dual-blade combos with fast roll repositions
          const r = Math.random();
          if (r < 0.6) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.85) ai.triggerMove('SWEEP_LOW');
          else ai.triggerMove('THRUST');
          if (Math.random() < 0.3) ai.triggerRoll(dir);
          this.cooldown = 0.28 + Math.random() * 0.12;
        } else if (bId === 'vex') {
          // Phantom Dealer: feints & shadow decoy smoke
          vfx.spawnRing(ai.x, ai.y - 40, '#c084fc', 70, 0.3);
          const r = Math.random();
          if (r < 0.45) ai.triggerMove('SWEEP_LOW');
          else if (r < 0.75) ai.triggerMove('KICK_HIGH');
          else { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          this.cooldown = 0.35 + Math.random() * 0.15;
        } else if (bId === 'brutus') {
          // Heavy armored executioner cleaves & screen shaking ground slams
          const r = Math.random();
          if (r < 0.6) {
            ai.triggerMove('HEAVY');
            camera.shakeMag = 12;
            camera.shakeTimer = 0.3;
          } else if (r < 0.85) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else ai.triggerMove('THRUST');
          this.cooldown = 0.6 + Math.random() * 0.18;
        } else if (bId === 'akari') {
          // Agile sister: adaptive combinations, eclipse dashes
          const r = Math.random();
          if (r < 0.55) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.8) ai.triggerMove('THRUST');
          else ai.triggerMove('SWEEP_LOW');
          this.cooldown = 0.26 + Math.random() * 0.12;
        } else if (bId === 'nami') {
          // Delayed strikes with fluid water recovery cancels
          const r = Math.random();
          if (r < 0.5) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.8) ai.triggerMove('SWEEP_LOW');
          else ai.triggerMove('THRUST');
          vfx.spawnRing(ai.x, ai.y - 45, '#2dd4bf', 85, 0.35);
          this.cooldown = 0.48 + Math.random() * 0.22;
        } else if (bId === 'kurogane') {
          // False Shogun: fast iai draws & heavy slashes
          const r = Math.random();
          if (r < 0.5) ai.triggerMove('HEAVY');
          else if (r < 0.8) ai.triggerMove('THRUST');
          else { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          this.cooldown = 0.42 + Math.random() * 0.14;
        } else if (bId === 'hollow_knight') {
          // Supernatural void shockwaves & spectral thrusts
          vfx.spawnRing(ai.x, ai.y - 55, '#a855f7', 110, 0.4);
          const r = Math.random();
          if (r < 0.5) ai.triggerMove('HEAVY');
          else if (r < 0.8) ai.triggerMove('THRUST');
          else { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          this.cooldown = 0.46 + Math.random() * 0.16;
        } else if (bId === 'hollow_king') {
          // Eternal Sovereign: heavy dark strikes in P1, hyper aggressive in P2
          const isP2 = ai.phase2Triggered;
          const r = Math.random();
          if (r < 0.45) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.75) ai.triggerMove('HEAVY');
          else ai.triggerMove('THRUST');
          if (isP2 && Math.random() < 0.4) vfx.spawnRing(ai.x, ai.y - 50, '#ef4444', 130, 0.35);
          this.cooldown = isP2 ? (0.2 + Math.random() * 0.1) : (0.38 + Math.random() * 0.14);
        } else if (bId === 'shadow_kaze') {
          // Flawless dark mirror of the player: counters guard with sweeps, counters attacks with parries
          if (player.state === 'BLOCK') {
            ai.triggerMove(Math.random() < 0.5 ? 'HEAVY' : 'SWEEP_LOW');
          } else {
            const r = Math.random();
            if (r < 0.4) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
            else if (r < 0.7) ai.triggerMove('THRUST');
            else if (r < 0.88) ai.triggerMove('HEAVY');
            else ai.triggerMove('SWEEP_LOW');
          }
          vfx.spawnRing(ai.x, ai.y - 50, '#9333ea', 95, 0.3);
          this.cooldown = 0.26 + Math.random() * 0.14;
        } else {
          // Generic fallback
          const r = Math.random();
          if (r < 0.42) { ai.comboStep = 1; ai.triggerMove('SLASH_1'); }
          else if (r < 0.65) ai.triggerMove('THRUST');
          else if (r < 0.82) ai.triggerMove('SWEEP_LOW');
          else ai.triggerMove('HEAVY');
          this.cooldown = [0.58, 0.38, 0.24][this.difficulty];
        }
      }
    }
  }

  // ============================================================================
  // 8. DYNAMIC CAMERA, STAGE CORNER MOVEMENT & GAME LOOP
  // ============================================================================
  const canvas = document.getElementById('battle-canvas');
  const ctx = canvas.getContext('2d');

  // Expanded 1920px wide stage with 55px corner padding so fighters can walk all the way to the left and right corners
  const WORLD_WIDTH = 1920;
  const STAGE_LEFT_CORNER = 55;
  const STAGE_RIGHT_CORNER = WORLD_WIDTH - 55;

  const vfx = new VFXSystem();
  const arena = new ArenaRenderer();

  const p1 = new ShadowFighter({
    id: 1,
    name: 'SHADOW',
    role: 'shadow',
    weaponKey: 'katana',
    spawnX: 740
  });

  const p2 = new ShadowFighter({
    id: 2,
    name: 'KID',
    role: 'ronin_kid',
    weaponKey: 'katana',
    spawnX: 1180
  });

  const ai = new AIController(p2);

  // Dynamic Camera Controller with X/Y Tracking, Distance Zoom, Impact Punch & Edge Clamping
  const camera = {
    x: WORLD_WIDTH * 0.5,
    y: 0,
    zoom: 1.0,
    punchZoom: 0,
    shakeTimer: 0,
    shakeMag: 0,
    flashAlpha: 0
  };

  const match = {
    round: 1,
    timer: 99,
    state: 'FIGHT',
    stateTimer: 0,
    paused: false,
    hitstop: 0,
    timeScale: 1,
    slowMoTimer: 0,
    debug: false
  };

  const input = { left: false, right: false, up: false, down: false, guard: false };
  let lastTapDir = 0, lastTapTime = 0;

  function focusGame() {
    window.focus();
    canvas.focus({ preventScroll: true });
  }
  window.addEventListener('pointerdown', () => { focusGame(); sfx.init(); });

  function showBanner(main, sub = '', dur = 1.1) {
    const el = document.getElementById('announcer-banner');
    document.getElementById('announcer-main').textContent = main;
    document.getElementById('announcer-sub').textContent = sub;
    el.classList.add('show');
    clearTimeout(el._timer);
    if (dur > 0) el._timer = setTimeout(() => el.classList.remove('show'), dur * 1000);
  }

  function equipWeapon(wKey) {
    if (wKey === 'iron_maw') wKey = 'leviathan_axe';
    if (wKey === 'chain_of_ruin') wKey = 'blood_reaper';
    if (!WEAPONS[wKey]) return;
    p1.weaponKey = wKey;
    p1.startState('IDLE');
    p1.pose = p1.getTargetPose('IDLE', 0);
    document.getElementById('p1-weapon-tag').textContent = WEAPONS[wKey].name;

    document.querySelectorAll('[data-quick-weapon]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-quick-weapon') === wKey);
    });
    document.querySelectorAll('#weapon-list .opt-card').forEach(card => {
      card.classList.toggle('selected', card.getAttribute('data-weapon') === wKey);
    });

    backend.equip(wKey, arena.mode, ai.difficulty);
    refreshProgressionUI();
  }

  function refreshProgressionUI() {
    const p = backend.profile;
    if (!p) return;

    // Top HUD Currencies
    const hudCoins = document.getElementById('hud-coins');
    const hudOrbs = document.getElementById('hud-orbs');
    if (hudCoins) hudCoins.textContent = Number(p.coins || 0).toLocaleString();
    if (hudOrbs) hudOrbs.textContent = Number(p.shadowOrbs || 0).toLocaleString();

    // Arsenal Profile Banner
    const profLvl = document.getElementById('prof-level');
    const profTitle = document.getElementById('prof-title');
    const profXpFill = document.getElementById('prof-xp-fill');
    const profXpText = document.getElementById('prof-xp-text');
    const profCoins = document.getElementById('prof-coins');
    const profOrbs = document.getElementById('prof-orbs');
    const profCareer = document.getElementById('prof-career');
    const profMaxCombo = document.getElementById('prof-max-combo');
    const profParries = document.getElementById('prof-parries');
    const profArts = document.getElementById('prof-arts');

    const nextXp = (p.level || 1) * 300;
    const curXp = p.xp || 0;
    const xpPercent = Math.min(100, Math.round((curXp / nextXp) * 100));

    if (profLvl) profLvl.textContent = p.level || 1;
    if (profTitle) {
      const titles = ['INITIATE', 'SHADOW DISCIPLE', 'WARRIOR', 'SHADOW MASTER', 'ECLIPSE LEGEND'];
      const t = titles[Math.min(titles.length - 1, (p.level || 1) - 1)];
      profTitle.textContent = `SHADOW — ${t}`;
    }
    if (profXpFill) profXpFill.style.width = `${xpPercent}%`;
    if (profXpText) profXpText.textContent = `${curXp} / ${nextXp} XP to Level ${(p.level || 1) + 1}`;
    if (profCoins) profCoins.textContent = Number(p.coins || 0).toLocaleString();
    if (profOrbs) profOrbs.textContent = Number(p.shadowOrbs || 0).toLocaleString();

    const st = p.stats || {};
    const wins = st.wins || 0;
    const losses = st.losses || 0;
    const total = st.totalMatches || (wins + losses);
    const wr = total > 0 ? ((wins / total) * 100).toFixed(1) : 0;

    if (profCareer) profCareer.textContent = `${wins}W - ${losses}L (${wr}% WR)`;
    if (profMaxCombo) profMaxCombo.textContent = `${st.maxCombo || 0} Hits`;
    if (profParries) profParries.textContent = st.totalParries || 0;
    if (profArts) profArts.textContent = st.shadowArtsLanded || 0;

    // Weapon Badges & Upgrade Buttons
    const weapons = [
      'nightfall', 'wraith_fangs', 'skybreaker', 'leviathan_axe', 'ember_twinblades',
      'stormpiercer', 'azure_reapers', 'blood_reaper', 'titans_grudge', 'eclipse_naginata',
      'tidebreaker', 'obsidian_fists', 'voidcleaver', 'kingslayer', 'eternal_night',
      'iron_maw', 'chain_of_ruin', 'katana', 'sai', 'naginata', 'odachi', 'fists'
    ];
    const costs = [250, 500, 1000, 2000];
    const orbCosts = [0, 10, 25, 50];

    weapons.forEach(w => {
      const lvl = (p.weaponLevels && p.weaponLevels[w]) || 1;
      const badge = document.getElementById(`badge-${w}`);
      const btn = document.querySelector(`[data-upgrade-weapon="${w}"]`);
      const dmgBonus = (lvl - 1) * 10;
      const spdBonus = (lvl - 1) * 5;

      if (badge) {
        badge.textContent = `Lv. ${lvl} (+${dmgBonus}% DMG, +${spdBonus}% SPD)`;
      }

      if (btn) {
        if (lvl >= 5) {
          btn.textContent = 'MAX LEVEL (Lv. 5)';
          btn.classList.add('maxed');
        } else {
          const coinCost = costs[lvl - 1];
          const orbCost = orbCosts[lvl - 1];
          const orbStr = orbCost > 0 ? ` + ${orbCost} 🔮` : '';
          btn.textContent = `Upgrade (${coinCost} 🪙${orbStr})`;
          btn.classList.remove('maxed');
        }
      }
    });
  }

  function handlePlayerAction(act) {
    if (match.paused || match.state !== 'FIGHT') return;

    if (act === 'slash') {
      if (p1.state === 'ATTACK' && p1.moveKey && p1.moveKey.startsWith('SLASH_')) {
        const mv = MOVES[p1.moveKey];
        const tot = (mv.startup + mv.active + mv.recovery) / p1.weapon.speed;
        if (p1.stateTime >= tot * 0.52) {
          if (p1.moveKey === 'SLASH_1') { p1.triggerMove('SLASH_2'); return; }
          if (p1.moveKey === 'SLASH_2') { p1.triggerMove('SLASH_3'); return; }
        }
        return;
      }
      if (!p1.canAct()) return;
      if (p1.comboWindow > 0 && p1.comboStep === 1) { p1.comboStep = 2; p1.triggerMove('SLASH_2'); }
      else if (p1.comboWindow > 0 && p1.comboStep === 2) { p1.comboStep = 0; p1.triggerMove('SLASH_3'); }
      else { p1.comboStep = 1; p1.triggerMove('SLASH_1'); }
    } else if (act === 'heavy') {
      if (!p1.canAct()) return;
      p1.triggerMove(input.down ? 'THRUST' : 'HEAVY');
    } else if (act === 'kick') {
      if (!p1.canAct()) return;
      p1.triggerMove(input.down ? 'SWEEP_LOW' : 'KICK_HIGH');
    } else if (act === 'sweep') {
      if (!p1.canAct()) return;
      p1.triggerMove('SWEEP_LOW');
    } else if (act === 'shadow') {
      if (!p1.canAct()) return;
      if (p1.shadow >= 100) {
        camera.punchZoom = 0.14;
        p1.triggerMove('SHADOW_ART');
        backend.telemetry.shadowArtsUsed++;
      } else {
        p1.triggerMove('THRUST');
      }
    }
  }

  // Keyboard Controls
  window.addEventListener('keydown', (e) => {
    const code = e.code || '';
    const key = (e.key || '').toLowerCase();

    // Dialogue Overlay Controls
    const diaOverlay = document.getElementById('dialogue-overlay');
    if (diaOverlay && diaOverlay.classList.contains('active')) {
      if (code === 'Escape') {
        e.preventDefault();
        campaign.endDialogue();
        return;
      }
      if (code === 'Space' || code === 'Enter') {
        e.preventDefault();
        campaign.advanceDialogue();
        return;
      }
    }

    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      e.preventDefault();
    }
    if (e.repeat) return;

    if (key === '1') { equipWeapon('nightfall'); return; }
    if (key === '2') { equipWeapon('wraith_fangs'); return; }
    if (key === '3') { equipWeapon('skybreaker'); return; }
    if (key === '4') { equipWeapon('voidcleaver'); return; }
    if (key === '5') { equipWeapon('blood_reaper'); return; }
    if (key === '6') { equipWeapon('leviathan_axe'); return; }
    if (key === '7') { equipWeapon('titans_grudge'); return; }
    if (key === '8') { equipWeapon('eclipse_naginata'); return; }
    if (key === '9') { equipWeapon('eternal_night'); return; }
    if (key === '0') { equipWeapon('fists'); return; }

    if (code === 'KeyP' || code === 'Escape' || key === 'p') {
      toggleMenu();
      return;
    }

    if (code === 'KeyA' || code === 'ArrowLeft' || key === 'a') {
      input.left = true;
      const now = performance.now();
      if (lastTapDir === -1 && now - lastTapTime < 240 && p1.canAct() && p1.y === 0) {
        p1.triggerRoll(-1);
      }
      lastTapDir = -1; lastTapTime = now;
    } else if (code === 'KeyD' || code === 'ArrowRight' || key === 'd') {
      input.right = true;
      const now = performance.now();
      if (lastTapDir === 1 && now - lastTapTime < 240 && p1.canAct() && p1.y === 0) {
        p1.triggerRoll(1);
      }
      lastTapDir = 1; lastTapTime = now;
    } else if (code === 'KeyW' || code === 'ArrowUp' || key === 'w') {
      input.up = true;
      if (p1.canAct() && p1.y === 0 && !match.paused) {
        p1.vy = -660;
        p1.y = -1;
        p1.startState('JUMP');
        sfx.play('whoosh');
      }
    } else if (code === 'KeyS' || code === 'ArrowDown' || key === 's') {
      input.down = true;
    } else if (code === 'Space' || key === ' ') {
      input.guard = true;
      if (p1.canAct() && p1.y === 0) {
        p1.startState('BLOCK');
        p1.parryWindow = 0.16;
        p1.vx = 0;
      }
    } else if (code === 'ShiftLeft' || code === 'ShiftRight' || key === 'shift') {
      if (p1.canAct() && p1.y === 0 && !match.paused) {
        p1.triggerRoll(input.left ? -1 : (input.right ? 1 : p1.facing));
      }
    } else if (code === 'KeyJ' || key === 'j') {
      handlePlayerAction('slash');
    } else if (code === 'KeyK' || key === 'k') {
      handlePlayerAction('heavy');
    } else if (code === 'KeyL' || key === 'l') {
      handlePlayerAction('kick');
    } else if (code === 'KeyU' || key === 'u') {
      handlePlayerAction('shadow');
    }
  }, { passive: false });

  window.addEventListener('keyup', (e) => {
    const code = e.code || '';
    const key = (e.key || '').toLowerCase();
    if (code === 'KeyA' || code === 'ArrowLeft' || key === 'a') input.left = false;
    if (code === 'KeyD' || code === 'ArrowRight' || key === 'd') input.right = false;
    if (code === 'KeyW' || code === 'ArrowUp' || key === 'w') input.up = false;
    if (code === 'KeyS' || code === 'ArrowDown' || key === 's') input.down = false;
    if (code === 'Space' || key === ' ') {
      input.guard = false;
      if (p1.state === 'BLOCK') p1.startState('IDLE');
    }
  });

  // Bind on-screen keycaps & touch buttons
  document.querySelectorAll('[data-bind]').forEach(el => {
    const act = el.getAttribute('data-bind');
    const down = (ev) => {
      ev.preventDefault();
      focusGame();
      el.classList.add('pressed', 'active-key');
      if (act === 'left') input.left = true;
      else if (act === 'right') input.right = true;
      else if (act === 'down') input.down = true;
      else if (act === 'up') {
        if (p1.canAct() && p1.y === 0) { p1.vy = -660; p1.y = -1; p1.startState('JUMP'); }
      } else if (act === 'roll') {
        if (p1.canAct() && p1.y === 0) p1.triggerRoll(input.left ? -1 : (input.right ? 1 : p1.facing));
      } else if (act === 'guard') {
        input.guard = true;
        if (p1.canAct() && p1.y === 0) { p1.startState('BLOCK'); p1.parryWindow = 0.16; p1.vx = 0; }
      } else {
        handlePlayerAction(act);
      }
    };
    const up = (ev) => {
      ev.preventDefault();
      el.classList.remove('pressed', 'active-key');
      if (act === 'left') input.left = false;
      else if (act === 'right') input.right = false;
      else if (act === 'down') input.down = false;
      else if (act === 'guard') {
        input.guard = false;
        if (p1.state === 'BLOCK') p1.startState('IDLE');
      }
    };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointerleave', up);
    el.addEventListener('pointercancel', up);
  });

  function updatePlayerLocomotion() {
    if (match.state !== 'FIGHT' || !p1.canAct()) return;

    if (input.guard && p1.y === 0) {
      p1.state = 'BLOCK';
      p1.vx = 0;
      return;
    }
    if (input.down && p1.y === 0) {
      p1.state = 'CROUCH';
      p1.vx = 0;
      return;
    }

    const dir = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (dir === 0) {
      p1.vx = 0;
      if (p1.y === 0) p1.state = 'IDLE';
    } else {
      const forward = dir === p1.facing;
      const dist = Math.abs(p2.x - p1.x);
      if (forward && dist > 180 * CHAR_SCALE && p1.y === 0) {
        p1.state = 'RUN';
        p1.vx = dir * 360;
      } else {
        if (p1.y === 0) p1.state = forward ? 'WALK_F' : 'WALK_B';
        // Fast backward & forward walk speed so player can freely move to the left or right corner
        p1.vx = dir * (forward ? 245 : 225);
      }
    }
  }

  function resolvePushboxes() {
    const minSep = 54 * CHAR_SCALE;
    const dx = p2.x - p1.x;
    const absDx = Math.abs(dx);
    if (absDx < minSep && Math.abs(p1.y - p2.y) < 85 * CHAR_SCALE) {
      const push = (minSep - absDx) * 0.5;
      const sign = dx >= 0 ? 1 : -1;
      p1.x = clamp(p1.x - sign * push, STAGE_LEFT_CORNER, STAGE_RIGHT_CORNER);
      p2.x = clamp(p2.x + sign * push, STAGE_LEFT_CORNER, STAGE_RIGHT_CORNER);
    }
  }

  function checkHit(attacker, defender) {
    if (!attacker.isAttackActive() || attacker.hasHit) return;
    if (defender.invulnTimer > 0) return;

    const seg = attacker.getAttackSegment();
    if (!seg) return;

    const hb = defender.getHurtbox();
    const cx = clamp((seg.x1 + seg.x2) * 0.5, hb.x, hb.x + hb.w);
    const cy = clamp((seg.y1 + seg.y2) * 0.5, hb.y, hb.y + hb.h);
    const dSq = distToSegmentSq(cx, cy, seg.x1, seg.y1, seg.x2, seg.y2);

    if (dSq <= seg.r * seg.r) {
      attacker.hasHit = true;
      const mv = MOVES[attacker.moveKey];
      const ix = (seg.x2 + defender.x) * 0.5;
      const iy = clamp(seg.y2, hb.y + 15, hb.y + hb.h - 15);

      const blocking =
        defender.state === 'BLOCK' &&
        !mv.unblockable &&
        !mv.low &&
        defender.facing !== attacker.facing;

      if (blocking && defender.parryWindow > 0) {
        if (defender === p1) backend.telemetry.parriesLanded++;
        sfx.play('parry');
        vfx.spawnRing(ix, iy, '#fde047', 95, 0.26);
        vfx.spawnSpark(ix, iy, -attacker.facing, '#fde047', 22, 360);
        defender.startState('PARRY');
        defender.shadow = clamp(defender.shadow + 28, 0, 100);
        attacker.startState('HITSTUN');
        attacker.vx = -attacker.facing * 240;
        match.hitstop = 0.09;
        camera.punchZoom = 0.08;
        showBanner('PARRY!', 'COUNTER STRIKE', 0.65);
        return;
      }

      if (blocking) {
        sfx.play('clang');
        vfx.spawnSpark(ix, iy, -attacker.facing, '#38bdf8', 12, 240);
        defender.hp = Math.max(1, defender.hp - Math.round(mv.dmg * 0.12));
        defender.vx = attacker.facing * mv.push * 0.6;
        match.hitstop = 0.04;
        return;
      }

      const isCrit = defender.state === 'ATTACK' || mv.knockdown;
      const dmg = Math.round(mv.dmg * attacker.weapon.dmgMult * (defender.state === 'ATTACK' ? 1.2 : 1.0));
      defender.hp = Math.max(0, defender.hp - dmg);
      attacker.shadow = clamp(attacker.shadow + 20, 0, 100);
      defender.shadow = clamp(defender.shadow + 10, 0, 100);

      attacker.comboCount++;
      attacker.comboTimer = 1.8;
      if (attacker === p1) {
        backend.telemetry.maxCombo = Math.max(backend.telemetry.maxCombo, p1.comboCount);
      }

      sfx.play(isCrit ? 'crit' : 'hit');
      vfx.spawnSpark(ix, iy, attacker.facing, '#ff9f1c', isCrit ? 22 : 14, isCrit ? 360 : 260);
      if (isCrit) {
        vfx.spawnRing(ix, iy, '#ff6b00', 88, 0.24);
        camera.flashAlpha = 0.14;
        camera.punchZoom = 0.07;
      }

      defender.vx = attacker.facing * mv.push;
      if (mv.knockdown || defender.hp <= 0) {
        defender.vy = -250;
        defender.y = -2;
        defender.startState('KNOCKDOWN');
      } else {
        defender.startState('HITSTUN');
      }

      match.hitstop = mv.knockdown ? 0.085 : 0.045;
      camera.shakeMag = mv.shake;
      camera.shakeTimer = 0.15;
    }
  }

  function updateHUD() {
    document.getElementById('p1-hp-fill').style.width = `${(p1.hp / p1.maxHp) * 100}%`;
    document.getElementById('p2-hp-fill').style.width = `${(p2.hp / p2.maxHp) * 100}%`;
    document.getElementById('p1-hp-delay').style.width = `${(p1.delayHp / p1.maxHp) * 100}%`;
    document.getElementById('p2-hp-delay').style.width = `${(p2.delayHp / p2.maxHp) * 100}%`;

    const s1 = document.getElementById('p1-shadow-fill');
    const s2 = document.getElementById('p2-shadow-fill');
    s1.style.width = `${p1.shadow}%`;
    s2.style.width = `${p2.shadow}%`;
    s1.classList.toggle('shadow-ready-glow', p1.shadow >= 100);
    s2.classList.toggle('shadow-ready-glow', p2.shadow >= 100);

    document.getElementById('p1-pip-1').classList.toggle('won', p1.roundsWon >= 1);
    document.getElementById('p1-pip-2').classList.toggle('won', p1.roundsWon >= 2);
    document.getElementById('p2-pip-1').classList.toggle('won', p2.roundsWon >= 1);
    document.getElementById('p2-pip-2').classList.toggle('won', p2.roundsWon >= 2);

    document.getElementById('match-timer').textContent = String(Math.ceil(match.timer)).padStart(2, '0');

    const c1 = document.getElementById('p1-combo');
    c1.textContent = `${p1.comboCount} HITS`;
    c1.classList.toggle('show', p1.comboCount >= 2);

    const c2 = document.getElementById('p2-combo');
    c2.textContent = `${p2.comboCount} HITS`;
    c2.classList.toggle('show', p2.comboCount >= 2);
  }

  function startNewRound(fullReset = false) {
    if (fullReset) {
      match.round = 1;
      p1.reset(true);
      p2.reset(true);
      backend.startMatch(p1.weaponKey, ai.difficulty, arena.mode);
    } else {
      p1.reset(false);
      p2.reset(false);
    }
    match.timer = 99;
    match.state = 'FIGHT';
    document.getElementById('result-overlay').classList.remove('active');
    showBanner(`ROUND ${match.round}`, 'FIGHT!', 1.0);
    updateHUD();
  }

  let viewW = 1280, viewH = 720;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    viewW = window.innerWidth;
    viewH = window.innerHeight;
    canvas.width = Math.floor(viewW * dpr);
    canvas.height = Math.floor(viewH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  let lastTime = performance.now();
  function loop(now) {
    requestAnimationFrame(loop);
    const rawDt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    if (match.paused) return;

    if (match.hitstop > 0) {
      match.hitstop -= rawDt;
      render(now / 1000);
      return;
    }

    const dt = rawDt * match.timeScale;
    const groundY = Math.floor(viewH * 0.83);

    if (match.state === 'FIGHT') {
      match.timer = Math.max(0, match.timer - dt);
      updatePlayerLocomotion();
      ai.update(dt, p1);

      if (p1.hp <= 0 || p2.hp <= 0 || match.timer <= 0) {
        match.state = 'ROUND_OVER';
        match.stateTimer = 2.0;
        if (p1.hp >= p2.hp) {
          p1.roundsWon++;
          p1.startState('VICTORY');
          showBanner('K.O.', 'SHADOW WINS THE ROUND', 1.7);
        } else {
          p2.roundsWon++;
          p2.startState('VICTORY');
          showBanner('K.O.', 'KID WINS THE ROUND', 1.7);
        }
      }
    } else if (match.state === 'ROUND_OVER') {
      match.stateTimer -= rawDt;
      if (match.stateTimer <= 0) {
        if (p1.roundsWon >= 2 || p2.roundsWon >= 2) {
          match.state = 'MATCH_OVER';
          const won = p1.roundsWon >= 2;
          document.getElementById('result-title').textContent = won ? 'VICTORY' : 'DEFEAT';
          document.getElementById('result-sub').textContent = won
            ? `SHADOW MASTERED THE ${p1.weapon.name}`
            : 'KID DEFENDED THE TEMPLE';

          const matchResult = {
            winner: won ? 'SHADOW' : 'KID',
            playerRoundsWon: p1.roundsWon,
            opponentRoundsWon: p2.roundsWon,
            weaponUsed: p1.weaponKey,
            aiDifficulty: ai.difficulty,
            arena: arena.mode,
            remainingHp: Math.max(0, p1.hp)
          };

          backend.completeMatch(matchResult).then(res => {
            const rxp = document.getElementById('rw-xp');
            const rcoins = document.getElementById('rw-coins');
            const rorbs = document.getElementById('rw-orbs');
            const rlvlBanner = document.getElementById('rw-levelup-banner');
            const rnewlvl = document.getElementById('rw-new-level');

            if (rxp) rxp.textContent = res.xpEarned;
            if (rcoins) rcoins.textContent = res.coinsEarned;
            if (rorbs) rorbs.textContent = res.shadowOrbsEarned;

            if (res.leveledUp && rlvlBanner && rnewlvl) {
              rnewlvl.textContent = res.newLevel;
              rlvlBanner.style.display = 'block';
            } else if (rlvlBanner) {
              rlvlBanner.style.display = 'none';
            }

            const telem = res.telemetry || backend.telemetry;
            const tCombo = document.getElementById('telem-combo');
            const tParries = document.getElementById('telem-parries');
            const tArts = document.getElementById('telem-arts');
            const tHp = document.getElementById('telem-hp');
            const tTime = document.getElementById('telem-time');
            const tScore = document.getElementById('telem-score');
            const tCareer = document.getElementById('telem-career');

            if (tCombo) tCombo.textContent = `${telem.maxCombo || 0} Hits`;
            if (tParries) tParries.textContent = telem.parriesLanded || 0;
            if (tArts) tArts.textContent = telem.shadowArtsUsed || 0;
            if (tHp) tHp.textContent = `${Math.max(0, p1.hp)} / 1000`;
            if (tTime) tTime.textContent = `${telem.durationSeconds || 0}s`;
            if (tScore) tScore.textContent = res.score ? res.score.toLocaleString() : '0';

            const st = res.stats || backend.profile.stats;
            const wr = st.totalMatches > 0 ? ((st.wins / st.totalMatches) * 100).toFixed(1) : 0;
            if (tCareer) tCareer.textContent = `Career Record: ${st.wins}W - ${st.losses}L (${wr}% WR)`;

            refreshProgressionUI();
          });

          if (won) {
            campaign.onMatchCompleted(campaign.state.currentLevel || 1);
          }

          document.getElementById('result-overlay').classList.add('active');
        } else {
          match.round++;
          startNewRound(false);
        }
      }
    }

    p1.update(dt, groundY, STAGE_LEFT_CORNER, STAGE_RIGHT_CORNER, p2, vfx);
    p2.update(dt, groundY, STAGE_LEFT_CORNER, STAGE_RIGHT_CORNER, p1, vfx);
    resolvePushboxes();

    checkHit(p1, p2);
    checkHit(p2, p1);

    vfx.update(dt, now / 1000, WORLD_WIDTH);

    // Dynamic Fighting Camera: Tracks horizontal midpoint + lead, vertical jump height, and distance zoom
    const midX = (p1.x + p2.x) * 0.5 + (p1.vx + p2.vx) * 0.08;
    const midY = Math.min(p1.y, p2.y) * 0.32;
    const sep = Math.abs(p1.x - p2.x);

    const baseZoom = clamp(1.08 - (sep / 1100) * 0.16, 0.95, 1.10);
    camera.punchZoom = lerp(camera.punchZoom, 0, Math.min(1, rawDt * 8));
    const targetZoom = baseZoom + camera.punchZoom;
    camera.zoom = lerp(camera.zoom, targetZoom, Math.min(1, rawDt * 7));

    // Clamp camera so it never scrolls past the left (0) or right (WORLD_WIDTH) stage edges
    const halfVisibleW = (viewW * 0.5) / camera.zoom;
    const minCamX = Math.min(WORLD_WIDTH * 0.5, halfVisibleW);
    const maxCamX = Math.max(WORLD_WIDTH * 0.5, WORLD_WIDTH - halfVisibleW);
    const clampedTargetX = clamp(midX, minCamX, maxCamX);

    camera.x = lerp(camera.x, clampedTargetX, Math.min(1, rawDt * 9));
    camera.y = lerp(camera.y, midY, Math.min(1, rawDt * 8));

    if (camera.shakeTimer > 0) {
      camera.shakeTimer -= rawDt;
      if (camera.shakeTimer <= 0) camera.shakeMag = 0;
    }
    if (camera.flashAlpha > 0) {
      camera.flashAlpha = Math.max(0, camera.flashAlpha - rawDt * 1.5);
    }

    updateHUD();
    render(now / 1000);
  }

  function render(time) {
    const groundY = Math.floor(viewH * 0.83);
    const sx = camera.shakeTimer > 0 ? (Math.random() - 0.5) * camera.shakeMag * 2 : 0;
    const sy = camera.shakeTimer > 0 ? (Math.random() - 0.5) * camera.shakeMag * 2 : 0;

    ctx.clearRect(0, 0, viewW, viewH);

    ctx.save();
    // Apply Dynamic Camera Transform (Zoom + Horizontal/Vertical Panning + Impact Shake)
    ctx.translate(viewW * 0.5 + sx, groundY + sy);
    ctx.scale(camera.zoom, camera.zoom);
    ctx.translate(-camera.x, -(groundY + camera.y));

    arena.renderWorld(ctx, WORLD_WIDTH, viewH, groundY, time);
    vfx.renderLeaves(ctx);

    p2.render(ctx, groundY, match.debug);
    p1.render(ctx, groundY, match.debug);
    vfx.renderCombatEffects(ctx);

    // Subtle Stage Corner Markers
    ctx.fillStyle = 'rgba(246, 211, 101, 0.22)';
    ctx.fillRect(STAGE_LEFT_CORNER - 8, groundY - 4, 4, 24);
    ctx.fillRect(STAGE_RIGHT_CORNER + 4, groundY - 4, 4, 24);

    ctx.restore();

    if (camera.flashAlpha > 0) {
      ctx.save();
      ctx.fillStyle = '#ff9f1c';
      ctx.globalAlpha = camera.flashAlpha;
      ctx.fillRect(0, 0, viewW, viewH);
      ctx.restore();
    }
  }

  // ============================================================================
  // 9. UI TOOLBAR & MODAL WIRING
  // ============================================================================
  function toggleMenu() {
    const m = document.getElementById('menu-overlay');
    const open = !m.classList.contains('active');
    m.classList.toggle('active', open);
    match.paused = open;
    if (open) {
      m.scrollTop = 0;
    }
    if (!open) focusGame();
  }

  document.getElementById('btn-pause').addEventListener('click', toggleMenu);
  document.getElementById('btn-resume').addEventListener('click', toggleMenu);
  const btnCloseX = document.getElementById('btn-modal-close-x');
  if (btnCloseX) btnCloseX.addEventListener('click', toggleMenu);

  const btnOpenArsenal = document.getElementById('btn-open-arsenal');
  if (btnOpenArsenal) btnOpenArsenal.addEventListener('click', toggleMenu);

  // Weapon category filtering inside Arsenal modal
  const filterStrip = document.getElementById('weapon-filter-strip');
  if (filterStrip) {
    filterStrip.addEventListener('click', (e) => {
      const btn = e.target.closest('.w-filter-btn');
      if (!btn) return;
      filterStrip.querySelectorAll('.w-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const fCat = btn.getAttribute('data-filter');
      document.querySelectorAll('#weapon-list .opt-card').forEach(card => {
        const cCat = card.getAttribute('data-grip-cat');
        if (fCat === 'all' || cCat === fCat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  document.querySelectorAll('[data-quick-weapon]').forEach(btn => {
    btn.addEventListener('click', () => {
      equipWeapon(btn.getAttribute('data-quick-weapon'));
      focusGame();
    });
  });

  document.querySelectorAll('#weapon-list .opt-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const upBtn = e.target.closest('[data-upgrade-weapon]');
      if (upBtn) return;
      equipWeapon(card.getAttribute('data-weapon'));
    });
  });

  document.getElementById('btn-scene-toggle').addEventListener('click', (e) => {
    arena.mode = arena.mode === 'temple' ? 'bridge' : 'temple';
    e.currentTarget.textContent = arena.mode === 'temple' ? 'Arena: Autumn Temple' : 'Arena: Moonlight Bridge';
    document.querySelectorAll('[data-arena]').forEach(c => {
      c.classList.toggle('selected', c.getAttribute('data-arena') === arena.mode);
    });
    focusGame();
  });

  document.querySelectorAll('[data-arena]').forEach(card => {
    card.addEventListener('click', () => {
      arena.mode = card.getAttribute('data-arena');
      document.querySelectorAll('[data-arena]').forEach(c => c.classList.toggle('selected', c === card));
      document.getElementById('btn-scene-toggle').textContent =
        arena.mode === 'temple' ? 'Arena: Autumn Temple' : 'Arena: Moonlight Bridge';
    });
  });

  document.getElementById('btn-hitbox-toggle').addEventListener('click', (e) => {
    match.debug = !match.debug;
    e.currentTarget.classList.toggle('active', match.debug);
    focusGame();
  });

  document.getElementById('opt-ai-diff').addEventListener('click', (e) => {
    ai.difficulty = (ai.difficulty + 1) % 3;
    const names = ['Initiate', 'Shadow Master', 'Eclipse Grandmaster'];
    document.getElementById('diff-name').textContent = `AI Difficulty: ${names[ai.difficulty]}`;
  });

  document.getElementById('opt-reset-match').addEventListener('click', () => {
    toggleMenu();
    
    startNewRound(true);
  });

  document.getElementById('btn-rematch').addEventListener('click', () => {
    startNewRound(true);
    focusGame();
  });

  document.getElementById('btn-change-gear').addEventListener('click', () => {
    document.getElementById('result-overlay').classList.remove('active');
    toggleMenu();
  });

  // Weapon Upgrade Button Listeners
  document.querySelectorAll('[data-upgrade-weapon]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const wKey = btn.getAttribute('data-upgrade-weapon');
      const res = await backend.upgradeWeapon(wKey);
      if (res.success) {
        sfx.play('parry');
        vfx.spawnSpark(p1.x, -60, 1, '#fde047', 18, 300);
        refreshProgressionUI();
      } else {
        alert(res.error);
      }
    });
  });

  // Server Status Re-probe Listener
  const btnServer = document.getElementById('btn-server-status');
  if (btnServer) {
    btnServer.addEventListener('click', async () => {
      btnServer.textContent = '🔄 PROBING...';
      await backend.init();
      refreshProgressionUI();
    });
  }

  // Multiplayer LAN Versus Connect / Disconnect
  const btnMpJoin = document.getElementById('btn-mp-join');
  const btnMpLeave = document.getElementById('btn-mp-leave');
  const mpStatus = document.getElementById('mp-status-text');
  const mpInput = document.getElementById('mp-room-input');

  if (btnMpJoin) {
    btnMpJoin.addEventListener('click', () => {
      const room = mpInput ? mpInput.value.trim() : 'dojo-1';
      backend.connectMultiplayer(room, p1.weaponKey, {
        onStatusChange: (connected, text) => {
          if (mpStatus) {
            mpStatus.innerHTML = `<span>Mode: <strong>${text}</strong></span>`;
            mpStatus.className = `mp-status-badge ${connected ? 'connected' : ''}`;
          }
          if (btnMpJoin && btnMpLeave) {
            btnMpJoin.style.display = connected ? 'none' : 'inline-block';
            btnMpLeave.style.display = connected ? 'inline-block' : 'none';
          }
        },
        onMatchReady: (msg) => {
          showBanner('LAN MATCH READY', 'FIGHT!', 1.5);
          startNewRound(true);
          if (backend.mpRole === 'P2') {
            equipWeapon(msg.p2Weapon || 'katana');
          }
        },
        onRemoteInput: (inputMsg) => {
          if (backend.mpRole === 'P1') {
            // Apply remote P2 state
            p2.x = inputMsg.x;
            p2.y = inputMsg.y;
            p2.vx = inputMsg.vx;
            p2.vy = inputMsg.vy;
            p2.facing = inputMsg.facing;
            p2.state = inputMsg.state;
            p2.hp = inputMsg.hp;
            p2.shadow = inputMsg.shadow;
            if (inputMsg.moveKey && p2.moveKey !== inputMsg.moveKey) {
              p2.triggerMove(inputMsg.moveKey);
            }
          } else if (backend.mpRole === 'P2') {
            // Apply remote P1 state
            p1.x = inputMsg.x;
            p1.y = inputMsg.y;
            p1.vx = inputMsg.vx;
            p1.vy = inputMsg.vy;
            p1.facing = inputMsg.facing;
            p1.state = inputMsg.state;
            p1.hp = inputMsg.hp;
            p1.shadow = inputMsg.shadow;
            if (inputMsg.moveKey && p1.moveKey !== inputMsg.moveKey) {
              p1.triggerMove(inputMsg.moveKey);
            }
          }
        },
        onRemoteHit: (hitMsg) => {
          // Sync hit confirmation
          sfx.play('hit');
        }
      });
    });
  }

  if (btnMpLeave) {
    btnMpLeave.addEventListener('click', () => {
      backend.disconnectMultiplayer();
      if (btnMpJoin && btnMpLeave) {
        btnMpJoin.style.display = 'inline-block';
        btnMpLeave.style.display = 'none';
      }
      if (mpStatus) {
        mpStatus.innerHTML = '<span>Mode: <strong>Single Player (vs Ronin AI)</strong></span>';
        mpStatus.className = 'mp-status-badge';
      }
    });
  }

  // Initialize Backend Connection & Load Saved Profile
  backend.init().then(prof => {
    if (prof) {
      if (prof.equippedWeapon) equipWeapon(prof.equippedWeapon);
      if (prof.preferredArena) {
        arena.mode = prof.preferredArena;
        const btnToggle = document.getElementById('btn-scene-toggle');
        if (btnToggle) {
          btnToggle.textContent = arena.mode === 'temple' ? 'Arena: Autumn Temple' : 'Arena: Moonlight Bridge';
        }
        document.querySelectorAll('[data-arena]').forEach(c => {
          c.classList.toggle('selected', c.getAttribute('data-arena') === arena.mode);
        });
      }
      if (prof.aiDifficulty !== undefined) {
        ai.difficulty = prof.aiDifficulty;
        const names = ['Initiate', 'Shadow Master', 'Eclipse Grandmaster'];
        const diffEl = document.getElementById('diff-name');
        if (diffEl) diffEl.textContent = `AI Difficulty: ${names[ai.difficulty]}`;
      }
      refreshProgressionUI();
    }
  });

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
      let s = null;
      try {
        const raw = localStorage.getItem('shadow_reborn_campaign_v2');
        if (raw) s = JSON.parse(raw);
      } catch (e) {}

      if (!s) {
        s = {
          currentLevel: 1,
          highestUnlocked: 15,
          completedLevels: [1, 2],
          defeatedBosses: ['goro', 'kiba'],
          unlockedWeapons: ['katana', 'iron_katana', 'nightfall', 'twin_daggers'],
          selectedEnding: null,
          endingsUnlocked: []
        };
      }
      if (!s.highestUnlocked || s.highestUnlocked < 15) {
        s.highestUnlocked = 15;
      }
      this.saveState(s);
      return s;
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
      // Pick first node of chapter for inspector
      const firstLvl = (ch - 1) * 3 + 1;
      this.selectedLevel = firstLvl;
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

        // Always allow selecting node to inspect its lore, boss, and rewards
        row.addEventListener('click', () => {
          this.selectedLevel = lvl.level;
          this.renderChapterNodes();
          this.renderInspector();
        });

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


const campaign = new CampaignManager();
  campaign.init();

  // Initialize Cinematic Campaign Hub & 9 Dedicated Pages (interface.md)
  const hub = new HubNavigationManager();
  hub.init();
  hub.openHub('campaign');

  // Pause battle loop during hub exploration
  match.paused = true;

  // Pause menu Return to Campaign Hub button
  const btnPauseHub = document.getElementById('btn-pause-return-hub');
  if (btnPauseHub) {
    btnPauseHub.addEventListener('click', () => {
      const m = document.getElementById('menu-overlay');
      if (m) m.classList.remove('active');
      hub.openHub('campaign');
    });
  }

  requestAnimationFrame(loop);
})();
