# Enhanced data with Unicode characters and special symbols for the Tonalpohualli reference
import json

# Enhanced Nahuatl day signs with proper Unicode and special characters
nahuatl_day_signs_unicode = [
    {
        "number": 1, 
        "name": "Cipactli", 
        "unicode_name": "Cipactli 🐊", 
        "glyph": "𝔦", 
        "english": "Caiman", 
        "deity": "Tōnacātēcuhtli", 
        "direction": "East ☀️", 
        "element": "Earth 🌍",
        "meaning": "Beginning, primal creative force",
        "ritual_use": "New beginnings, foundation ceremonies"
    },
    {
        "number": 2, 
        "name": "Ehēcatl", 
        "unicode_name": "Ehēcatl 🌬️", 
        "glyph": "𝔢", 
        "english": "Wind", 
        "deity": "Quetzalcoatl", 
        "direction": "North ❄️", 
        "element": "Air 💨",
        "meaning": "Movement, breath, spirit",
        "ritual_use": "Communication with spirits, clearing ceremonies"
    },
    {
        "number": 3, 
        "name": "Calli", 
        "unicode_name": "Calli 🏠", 
        "glyph": "𝔠", 
        "english": "House", 
        "deity": "Tepēyōllōtl", 
        "direction": "West 🌅", 
        "element": "Earth 🌍",
        "meaning": "Stability, foundation, shelter",
        "ritual_use": "Home blessing, protection ceremonies"
    },
    {
        "number": 4, 
        "name": "Cuetzpalin", 
        "unicode_name": "Cuetzpalin 🦎", 
        "glyph": "𝔠", 
        "english": "Lizard", 
        "deity": "Huēhuecoyōtl", 
        "direction": "South 🔥", 
        "element": "Fire 🔥",
        "meaning": "Flexibility, adaptation",
        "ritual_use": "Transformation rituals, adaptability prayers"
    },
    {
        "number": 5, 
        "name": "Cōātl", 
        "unicode_name": "Cōātl 🐍", 
        "glyph": "𝔠", 
        "english": "Snake", 
        "deity": "Chalchiuhtlicue", 
        "direction": "East ☀️", 
        "element": "Water 🌊",
        "meaning": "Transformation, healing",
        "ritual_use": "Healing ceremonies, medicine preparation"
    },
    {
        "number": 6, 
        "name": "Miquiztli", 
        "unicode_name": "Miquiztli 💀", 
        "glyph": "𝔪", 
        "english": "Death", 
        "deity": "Tecuciztecatl", 
        "direction": "North ❄️", 
        "element": "Air 💨",
        "meaning": "Endings, renewal, transformation",
        "ritual_use": "Ancestor veneration, transition ceremonies"
    },
    {
        "number": 7, 
        "name": "Mazātl", 
        "unicode_name": "Mazātl 🦌", 
        "glyph": "𝔪", 
        "english": "Deer", 
        "deity": "Tlāloc", 
        "direction": "West 🌅", 
        "element": "Water 🌊",
        "meaning": "Grace, gentleness, hunting",
        "ritual_use": "Rain ceremonies, gentle guidance rituals"
    },
    {
        "number": 8, 
        "name": "Tōchtli", 
        "unicode_name": "Tōchtli 🐰", 
        "glyph": "𝔱", 
        "english": "Rabbit", 
        "deity": "Mayahuel", 
        "direction": "South 🔥", 
        "element": "Earth 🌍",
        "meaning": "Fertility, abundance, lunar cycles",
        "ritual_use": "Fertility ceremonies, lunar observations"
    },
    {
        "number": 9, 
        "name": "Ātl", 
        "unicode_name": "Ātl 🌊", 
        "glyph": "𝔞", 
        "english": "Water", 
        "deity": "Xiuhtecuhtli", 
        "direction": "East ☀️", 
        "element": "Fire 🔥",
        "meaning": "Flow, purification, life force",
        "ritual_use": "Purification ceremonies, life force renewal"
    },
    {
        "number": 10, 
        "name": "Itzcuintli", 
        "unicode_name": "Itzcuintli 🐕", 
        "glyph": "𝔦", 
        "english": "Dog", 
        "deity": "Mictlāntēcutli", 
        "direction": "North ❄️", 
        "element": "Earth 🌍",
        "meaning": "Loyalty, guidance, psychopomp",
        "ritual_use": "Underworld journeys, guidance seeking"
    },
    {
        "number": 11, 
        "name": "Ozomahtli", 
        "unicode_name": "Ozomahtli 🐒", 
        "glyph": "𝔬", 
        "english": "Monkey", 
        "deity": "Xochipilli", 
        "direction": "West 🌅", 
        "element": "Air 💨",
        "meaning": "Playfulness, creativity, arts",
        "ritual_use": "Artistic creation, joyful ceremonies"
    },
    {
        "number": 12, 
        "name": "Malīnalli", 
        "unicode_name": "Malīnalli 🌿", 
        "glyph": "𝔪", 
        "english": "Grass", 
        "deity": "Patecatl", 
        "direction": "South 🔥", 
        "element": "Water 🌊",
        "meaning": "Flexibility, tenacity, medicine",
        "ritual_use": "Medicine ceremonies, herbal preparations"
    },
    {
        "number": 13, 
        "name": "Ācatl", 
        "unicode_name": "Ācatl 🎋", 
        "glyph": "𝔞", 
        "english": "Reed", 
        "deity": "Tezcatlipōca", 
        "direction": "East ☀️", 
        "element": "Air 💨",
        "meaning": "Guidance, authority, hollow vessel",
        "ritual_use": "Leadership ceremonies, divine communication"
    },
    {
        "number": 14, 
        "name": "Ocēlōtl", 
        "unicode_name": "Ocēlōtl 🐆", 
        "glyph": "𝔬", 
        "english": "Ocelot", 
        "deity": "Tlazōlteōtl", 
        "direction": "North ❄️", 
        "element": "Fire 🔥",
        "meaning": "Stealth, night, inner strength",
        "ritual_use": "Night ceremonies, inner power work"
    },
    {
        "number": 15, 
        "name": "Cuāuhtli", 
        "unicode_name": "Cuāuhtli 🦅", 
        "glyph": "𝔠", 
        "english": "Eagle", 
        "deity": "Xīpe Totēc", 
        "direction": "West 🌅", 
        "element": "Fire 🔥",
        "meaning": "Vision, power, solar energy",
        "ritual_use": "Vision quests, solar ceremonies"
    },
    {
        "number": 16, 
        "name": "Cōzcacuāuhtli", 
        "unicode_name": "Cōzcacuāuhtli 🦅‍⬛", 
        "glyph": "𝔠", 
        "english": "Vulture", 
        "deity": "Itzpapalotl", 
        "direction": "South 🔥", 
        "element": "Air 💨",
        "meaning": "Purification, death/rebirth",
        "ritual_use": "Death/rebirth ceremonies, purification"
    },
    {
        "number": 17, 
        "name": "Olīn", 
        "unicode_name": "Olīn ⚡", 
        "glyph": "𝔬", 
        "english": "Movement", 
        "deity": "Xolotl", 
        "direction": "East ☀️", 
        "element": "Earth 🌍",
        "meaning": "Change, earthquake, current era",
        "ritual_use": "Transformation ceremonies, change rituals"
    },
    {
        "number": 18, 
        "name": "Tecpatl", 
        "unicode_name": "Tecpatl 🗡️", 
        "glyph": "𝔱", 
        "english": "Flint", 
        "deity": "Chalchiuhtotolin", 
        "direction": "North ❄️", 
        "element": "Air 💨",
        "meaning": "Cutting, sacrifice, precision",
        "ritual_use": "Cutting ceremonies, precise actions"
    },
    {
        "number": 19, 
        "name": "Quiyahuitl", 
        "unicode_name": "Quiyahuitl ☔", 
        "glyph": "𝔮", 
        "english": "Rain", 
        "deity": "Tōnatiuh", 
        "direction": "West 🌅", 
        "element": "Water 🌊",
        "meaning": "Cleansing, nourishment, storms",
        "ritual_use": "Rain ceremonies, cleansing rituals"
    },
    {
        "number": 20, 
        "name": "Xōchitl", 
        "unicode_name": "Xōchitl 🌸", 
        "glyph": "𝔵", 
        "english": "Flower", 
        "deity": "Xōchiquetzal", 
        "direction": "South 🔥", 
        "element": "Water 🌊",
        "meaning": "Beauty, art, pleasure, culmination",
        "ritual_use": "Beauty ceremonies, artistic completion"
    }
]

# Special Unicode symbols for key concepts
special_symbols = {
    "tonalpohualli": "𝕋𝕠𝕟𝕒𝕝𝕡𝕠𝕙𝕦𝕒𝕝𝕝𝕚",  # Sacred 260-day count
    "trecena": "𝔗𝔯𝔢𝔠𝔢𝔫𝔞",  # 13-day period
    "tonalamatl": "𝕋𝕠𝕟𝕒𝕝𝕒𝕞𝕒𝕥𝕝",  # Book of days
    "tecolli": "🥥", # Sacred gourd/calabash
    "oztotl": "🕳️", # Sacred cave
    "quetzalcoatl": "🐍✨", # Feathered serpent
    "tlaloc": "⚡🌧️", # Lightning and rain
    "directions": {
        "east": "☀️ 𝔦𝔦ℌ𝔲𝔞𝔱𝔩 (Ixhuatl)",
        "north": "❄️ 𝔪𝔦𝔠𝔱𝔩𝔞𝔪𝔞 (Mictlámpa)", 
        "west": "🌅 𝔠𝔦ℌ𝔲𝔞𝔱𝔩 (Cihuatl)",
        "south": "🔥 ℌ𝔦𝔞𝔶 (Huitzilampa)"
    },
    "elements": {
        "fire": "🔥 𝔗𝔩𝔞ℌ𝔲𝔦𝔷𝔞 (Tlahuīza)",
        "water": "🌊 𝔞𝔱𝔩 (Atl)",
        "air": "💨 𝔈ℌ𝔢𝔠𝔞𝔱𝔩 (Ehēcatl)",
        "earth": "🌍 𝔗𝔩𝞠𝔩𝔩𝔞𝔪𝞪𝞞 (Tlallāmpa)"
    }
}

# Enhanced sacred symbolism with Unicode
enhanced_sacred_symbolism = {
    "twisted_gourd": {
        "nahuatl_term": "𝔗𝔢𝔠𝔬𝔪𝔞𝔦𝔯 Tecolli 🥥",
        "unicode_symbol": "🥥🌀", 
        "meaning": "Sacred vessel for divination, ritual container",
        "uses": ["💧 Water carrier", "🎁 Ritual offerings", "🔮 Divination bowl", "🌿 Medicine container"],
        "symbolism": "🕳️ Womb of creation, 📚 vessel of knowledge, 🛡️ protective container",
        "ritual_phrases": {
            "classical_nahuatl": "In tecolli, in nepantla tonatiuh",
            "huasteca_variant": "Ne tekoli, ne nepantla tonati",
            "translation": "The gourd, the center of the sun"
        }
    },
    "cave_cloud_symbolism": {
        "nahuatl_term": "𝔒𝔷𝔱𝔬𝔦 ℌ ℌ𝔲𝔞𝔞𝔱𝔩 Oztotl Mixtli 🕳️☁️",
        "unicode_symbol": "🕳️☁️⚡", 
        "meaning": "Sacred cave of clouds, place of transformation",
        "connection": "Chicomoztoc - place of seven caves, origin of peoples",
        "symbolism": "🕳️ Womb of earth, 🌀 place of transformation, 🚪 underworld entrance",
        "ritual_phrases": {
            "classical_nahuatl": "Chicomoztoc, in netlatolyan",
            "huasteca_variant": "Chikomoztok, ne netlatolyal",
            "translation": "Seven caves, the place of emergence"
        }
    },
    "lightning_serpent": {
        "nahuatl_term": "𝔔𝔲𝔢𝔱𝔷𝔞𝔦-𝔗𝔩𝞠𝔞𝔯𝔬 Quetzal-Tláloc ⚡🐍",
        "unicode_symbol": "⚡🐍✨☁️", 
        "meaning": "Feathered serpent of storm and lightning",
        "connection": "Fusion of wind/wisdom (Quetzalcoatl) and rain/lightning (Tláloc)",
        "symbolism": "⚡ Divine knowledge through storm, 💡 illumination, 🌀 transformation",
        "ritual_phrases": {
            "classical_nahuatl": "Ehēcatl-Quetzalcōātl, tlāloc-nāhuaque",
            "huasteca_variant": "Ehekatl-Ketsalkooatl, tlalok-naawake", 
            "translation": "Wind-Feathered Serpent, Tláloc who surrounds"
        }
    }
}

# Enhanced divination methods with Unicode symbols
enhanced_divination_methods = {
    "tonalamatl_reading": {
        "unicode_title": "📖 𝕋𝕠𝕟𝕒𝕝𝕒𝐦𝕒𝕥𝕝 Reading",
        "symbol": "📖🔮",
        "description": "Traditional day-sign divination using the 260-day calendar",
        "method": "🔢 Combine day number (1-13) with day sign (1-20) for guidance",
        "interpretation": "✨ Each combination provides specific spiritual guidance",
        "ritual_preparation": "🕯️ Light copal, 🌿 prepare sacred space, 🥥 place gourd vessel"
    },
    "trecena_guidance": {
        "unicode_title": "📅 𝔗𝔯𝔢𝔠𝔢𝔫𝞞 Guidance", 
        "symbol": "📅⚡",
        "description": "13-day period ruled by specific deity",
        "method": "🔍 Identify current trecena and its ruling deity for period guidance",
        "application": "🎭 Planning ceremonies, 🤔 important decisions, ⏰ timing",
        "ritual_preparation": "🙏 Invoke trecena deity, 🕯️ light appropriate candles"
    },
    "directional_wisdom": {
        "unicode_title": "🧭 Directional Wisdom",
        "symbol": "🧭🌟", 
        "description": "Each day sign has cardinal direction association",
        "method": "🧭 Use directional correspondences for spatial/energetic guidance",
        "application": "🎁 Placement of offerings, 🚶 travel timing, 🎪 ceremonial orientation",
        "ritual_preparation": "🧭 Orient to cardinal directions, 🌟 acknowledge direction spirits"
    },
    "gourd_scrying": {
        "unicode_title": "🥥 𝔗𝔢𝔠𝔬𝔩𝔦 Scrying",
        "symbol": "🥥🌊",
        "description": "Water scrying using sacred gourd vessel", 
        "method": "🌊 Fill gourd with spring water, 🔮 gaze into surface for visions",
        "application": "🔍 Seeking hidden knowledge, 👁️ vision quests, 🔮 prophecy",
        "ritual_preparation": "🌙 Best at dawn or dusk, 🌿 burn sacred herbs, 🤲 purify hands"
    }
}

# Create comprehensive Unicode-enhanced dataset
tonalpohualli_unicode_data = {
    "title": "📚 𝕋𝕠𝕟𝕒𝕝𝞞ℌ ℌ ℌ ℌ𝕚 𝔗𝔬𝔫𝔞𝔩𝔞𝔪𝔞𝔱𝔩 📚",
    "subtitle": "Nahuatl-Maya Sacred Calendar Reference & Strategy Planner",
    "nahuatl_day_signs": nahuatl_day_signs_unicode,
    "special_symbols": special_symbols,
    "sacred_symbolism": enhanced_sacred_symbolism, 
    "divination_methods": enhanced_divination_methods,
    "unicode_phrases": {
        "blessings": {
            "classical_nahuatl": "🙏 Ōmeteōtl, in tōnēmi, in tlahuēlīlōc",
            "huasteca_variant": "🙏 Ometeotl, ne tonemi, ne tlawelilok", 
            "translation": "🌟 Dual God, we live, we are powerful"
        },
        "calendar_invocation": {
            "classical_nahuatl": "📅 Tōnalpōhualli, in tonalāmatl, tech-machtia",
            "huasteca_variant": "📅 Tonalpoohali, ne tonalamatl, tech-machtiya",
            "translation": "⏰ Day count, the book of days, teach us"
        },
        "ritual_opening": {
            "classical_nahuatl": "🕯️ Ōmpa huītz teōtl, nican mani",
            "huasteca_variant": "🕯️ Ompa wiits teotl, nikan mani", 
            "translation": "✨ From there comes god, here it rests"
        }
    }
}

# Save enhanced Unicode data
with open('tonalpohualli_unicode_data.json', 'w', encoding='utf-8') as f:
    json.dump(tonalpohualli_unicode_data, f, ensure_ascii=False, indent=2)

print("📚 Enhanced Tonalpohualli data with Unicode symbols created!")
print(f"🔤 Day signs with Unicode: {len(nahuatl_day_signs_unicode)}")
print(f"✨ Special symbols: {len(special_symbols)}")
print(f"🎭 Enhanced sacred symbolism: {len(enhanced_sacred_symbolism)}")
print(f"🔮 Enhanced divination methods: {len(enhanced_divination_methods)}")
print("\n🌟 Sample Unicode elements:")
print(f"Title: {tonalpohualli_unicode_data['title']}")
print(f"Sacred gourd: {enhanced_sacred_symbolism['twisted_gourd']['unicode_symbol']}")
print(f"Lightning serpent: {enhanced_sacred_symbolism['lightning_serpent']['unicode_symbol']}")