// Tonalpohualli Sacred Calendar Application
class TonalpohualliFApp {
    constructor() {
        this.currentSection = 'dashboard';
        this.daySignsData = [];
        this.sacredSymbols = {};
        this.divinationMethods = {};
        this.unicodePhrases = {};
        
        this.init();
    }
    
    async init() {
        this.loadData();
        this.setupEventListeners();
        this.calculateCurrentDay();
        this.renderDaySignsGrid();
        this.updateDashboard();
    }
    
    loadData() {
        // Nahuatl Day Signs Data
        this.daySignsData = [
            {
                number: 1, name: "Cipactli", unicode_name: "Cipactli 🐊", glyph: "𝔦",
                english: "Caiman", deity: "Tōnacātēcuhtli", direction: "East ☀️", element: "Earth 🌍",
                meaning: "Beginning, primal creative force", ritual_use: "New beginnings, foundation ceremonies"
            },
            {
                number: 2, name: "Ehēcatl", unicode_name: "Ehēcatl 🌬️", glyph: "𝔢",
                english: "Wind", deity: "Quetzalcoatl", direction: "North ❄️", element: "Air 💨",
                meaning: "Movement, breath, spirit", ritual_use: "Communication with spirits, clearing ceremonies"
            },
            {
                number: 3, name: "Calli", unicode_name: "Calli 🏠", glyph: "𝔠",
                english: "House", deity: "Tepēyōllōtl", direction: "West 🌅", element: "Earth 🌍",
                meaning: "Stability, foundation, shelter", ritual_use: "Home blessing, protection ceremonies"
            },
            {
                number: 4, name: "Cuetzpalin", unicode_name: "Cuetzpalin 🦎", glyph: "𝔠",
                english: "Lizard", deity: "Huēhuecoyōtl", direction: "South 🔥", element: "Fire 🔥",
                meaning: "Flexibility, adaptation", ritual_use: "Transformation rituals, adaptability prayers"
            },
            {
                number: 5, name: "Cōātl", unicode_name: "Cōātl 🐍", glyph: "𝔠",
                english: "Snake", deity: "Chalchiuhtlicue", direction: "East ☀️", element: "Water 🌊",
                meaning: "Transformation, healing", ritual_use: "Healing ceremonies, medicine preparation"
            },
            {
                number: 6, name: "Miquiztli", unicode_name: "Miquiztli 💀", glyph: "𝔪",
                english: "Death", deity: "Tecuciztecatl", direction: "North ❄️", element: "Air 💨",
                meaning: "Endings, renewal, transformation", ritual_use: "Ancestor veneration, transition ceremonies"
            },
            {
                number: 7, name: "Mazātl", unicode_name: "Mazātl 🦌", glyph: "𝔪",
                english: "Deer", deity: "Tlāloc", direction: "West 🌅", element: "Water 🌊",
                meaning: "Grace, gentleness, hunting", ritual_use: "Rain ceremonies, gentle guidance rituals"
            },
            {
                number: 8, name: "Tōchtli", unicode_name: "Tōchtli 🐰", glyph: "𝔱",
                english: "Rabbit", deity: "Mayahuel", direction: "South 🔥", element: "Earth 🌍",
                meaning: "Fertility, abundance, lunar cycles", ritual_use: "Fertility ceremonies, lunar observations"
            },
            {
                number: 9, name: "Ātl", unicode_name: "Ātl 🌊", glyph: "𝔞",
                english: "Water", deity: "Xiuhtecuhtli", direction: "East ☀️", element: "Fire 🔥",
                meaning: "Flow, purification, life force", ritual_use: "Purification ceremonies, life force renewal"
            },
            {
                number: 10, name: "Itzcuintli", unicode_name: "Itzcuintli 🐕", glyph: "𝔦",
                english: "Dog", deity: "Mictlāntēcutli", direction: "North ❄️", element: "Earth 🌍",
                meaning: "Loyalty, guidance, psychopomp", ritual_use: "Underworld journeys, guidance seeking"
            },
            {
                number: 11, name: "Ozomahtli", unicode_name: "Ozomahtli 🐒", glyph: "𝔬",
                english: "Monkey", deity: "Xochipilli", direction: "West 🌅", element: "Air 💨",
                meaning: "Playfulness, creativity, arts", ritual_use: "Artistic creation, joyful ceremonies"
            },
            {
                number: 12, name: "Malīnalli", unicode_name: "Malīnalli 🌿", glyph: "𝔪",
                english: "Grass", deity: "Patecatl", direction: "South 🔥", element: "Water 🌊",
                meaning: "Flexibility, tenacity, medicine", ritual_use: "Medicine ceremonies, herbal preparations"
            },
            {
                number: 13, name: "Ācatl", unicode_name: "Ācatl 🎋", glyph: "𝔞",
                english: "Reed", deity: "Tezcatlipōca", direction: "East ☀️", element: "Air 💨",
                meaning: "Guidance, authority, hollow vessel", ritual_use: "Leadership ceremonies, divine communication"
            },
            {
                number: 14, name: "Ocēlōtl", unicode_name: "Ocēlōtl 🐆", glyph: "𝔬",
                english: "Ocelot", deity: "Tlazōlteōtl", direction: "North ❄️", element: "Fire 🔥",
                meaning: "Stealth, night, inner strength", ritual_use: "Night ceremonies, inner power work"
            },
            {
                number: 15, name: "Cuāuhtli", unicode_name: "Cuāuhtli 🦅", glyph: "𝔠",
                english: "Eagle", deity: "Xīpe Totēc", direction: "West 🌅", element: "Fire 🔥",
                meaning: "Vision, power, solar energy", ritual_use: "Vision quests, solar ceremonies"
            },
            {
                number: 16, name: "Cōzcacuāuhtli", unicode_name: "Cōzcacuāuhtli 🦅‍⬛", glyph: "𝔠",
                english: "Vulture", deity: "Itzpapalotl", direction: "South 🔥", element: "Air 💨",
                meaning: "Purification, death/rebirth", ritual_use: "Death/rebirth ceremonies, purification"
            },
            {
                number: 17, name: "Olīn", unicode_name: "Olīn ⚡", glyph: "𝔬",
                english: "Movement", deity: "Xolotl", direction: "East ☀️", element: "Earth 🌍",
                meaning: "Change, earthquake, current era", ritual_use: "Transformation ceremonies, change rituals"
            },
            {
                number: 18, name: "Tecpatl", unicode_name: "Tecpatl 🗡️", glyph: "𝔱",
                english: "Flint", deity: "Chalchiuhtotolin", direction: "North ❄️", element: "Air 💨",
                meaning: "Cutting, sacrifice, precision", ritual_use: "Cutting ceremonies, precise actions"
            },
            {
                number: 19, name: "Quiyahuitl", unicode_name: "Quiyahuitl ☔", glyph: "𝔮",
                english: "Rain", deity: "Tōnatiuh", direction: "West 🌅", element: "Water 🌊",
                meaning: "Cleansing, nourishment, storms", ritual_use: "Rain ceremonies, cleansing rituals"
            },
            {
                number: 20, name: "Xōchitl", unicode_name: "Xōchitl 🌸", glyph: "𝔵",
                english: "Flower", deity: "Xōchiquetzal", direction: "South 🔥", element: "Water 🌊",
                meaning: "Beauty, art, pleasure, culmination", ritual_use: "Beauty ceremonies, artistic completion"
            }
        ];

        // Base date for Tonalpohualli calculation (arbitrary starting point)
        // Using a known correlation date: January 1, 2000 = 8 Malinalli
        this.baseDate = new Date(2000, 0, 1); // January 1, 2000
        this.baseDayNumber = 8;
        this.baseDaySignIndex = 11; // Malinalli is index 11 (12th sign)
    }
    
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.showSection(e.target.dataset.section);
            });
        });
        
        // Dashboard cards navigation
        document.querySelectorAll('.dashboard-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const navTarget = e.currentTarget.dataset.nav;
                if (navTarget) {
                    this.showSection(navTarget);
                }
            });
        });
        
        // Search functionality
        const searchInput = document.getElementById('sign-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterDaySignsGrid(e.target.value);
            });
        }
        
        // Make functions globally available
        window.showSection = (section) => this.showSection(section);
        window.performTonalamatl = () => this.performTonalamatl();
        window.getTrecenaGuidance = () => this.getTrecenaGuidance();
        window.getDirectionalWisdom = () => this.getDirectionalWisdom();
        window.performScrying = () => this.performScrying();
        window.findAuspiciousDays = () => this.findAuspiciousDays();
    }
    
    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Activate corresponding nav button
        const targetBtn = document.querySelector(`[data-section="${sectionName}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
        
        this.currentSection = sectionName;
    }
    
    calculateCurrentDay() {
        const today = new Date();
        const daysDiff = Math.floor((today - this.baseDate) / (1000 * 60 * 60 * 24));
        
        // Calculate day number (1-13 cycle)
        const dayNumber = ((this.baseDayNumber - 1 + daysDiff) % 13) + 1;
        
        // Calculate day sign (20-day cycle)
        const daySignIndex = (this.baseDaySignIndex + daysDiff) % 20;
        const daySign = this.daySignsData[daySignIndex];
        
        this.currentDay = {
            number: dayNumber,
            sign: daySign,
            trecenaStart: daySign.name,
            dayInTrecena: dayNumber
        };
        
        this.updateCurrentDayDisplay();
        return this.currentDay;
    }
    
    updateCurrentDayDisplay() {
        const { number, sign } = this.currentDay;
        
        // Update dashboard preview
        const elements = {
            'today-number': number.toString(),
            'today-sign': sign.unicode_name.split(' ')[1] || sign.glyph,
            'today-name': `${number} ${sign.name}`,
            'today-meaning': sign.meaning
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        // Update current day section
        const currentElements = {
            'current-number': number.toString(),
            'current-name': `${number} ${sign.name}`,
            'current-unicode': sign.unicode_name,
            'current-deity': sign.deity,
            'current-direction': sign.direction,
            'current-element': sign.element,
            'current-meaning': sign.meaning
        };
        
        Object.entries(currentElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        // Update trecena info
        this.updateTrecenaInfo();
        
        // Update daily guidance
        this.updateDailyGuidance();
    }
    
    updateTrecenaInfo() {
        const trecenaElement = document.getElementById('trecena-info');
        if (!trecenaElement) return;
        
        const { number, sign } = this.currentDay;
        const trecenaStart = this.getTrecenaStart(number, sign);
        
        trecenaElement.innerHTML = `
            <p><strong>Current Trecena:</strong> ${trecenaStart.name} (${trecenaStart.english})</p>
            <p><strong>Day ${number} of 13</strong> in this sacred period</p>
            <p><strong>Trecena Deity:</strong> ${trecenaStart.deity}</p>
            <p><strong>Trecena Energy:</strong> ${trecenaStart.meaning}</p>
        `;
    }
    
    getTrecenaStart(dayNumber, daySign) {
        // Calculate which day sign started this trecena
        const daysBack = dayNumber - 1;
        let startSignIndex = (daySign.number - 1 - daysBack) % 20;
        if (startSignIndex < 0) startSignIndex += 20;
        
        return this.daySignsData[startSignIndex];
    }
    
    updateDailyGuidance() {
        const guidanceElement = document.getElementById('daily-guidance');
        if (!guidanceElement) return;
        
        const { sign } = this.currentDay;
        const guidance = this.generateDailyGuidance(sign);
        
        guidanceElement.innerHTML = `
            <p><strong>Today's Energy:</strong> ${guidance.energy}</p>
            <p><strong>Ritual Suggestion:</strong> ${sign.ritual_use}</p>
            <p><strong>Meditation:</strong> ${guidance.meditation}</p>
            <p><strong>Sacred Direction:</strong> Face ${sign.direction} during ceremonies</p>
        `;
    }
    
    generateDailyGuidance(sign) {
        const guidanceMap = {
            'Cipactli': {
                energy: 'Begin new projects with the primal force of creation',
                meditation: 'Connect with the earth\'s foundational energy'
            },
            'Ehēcatl': {
                energy: 'Clear away stagnant energies, communicate with spirit',
                meditation: 'Focus on breath work and wind movements'
            },
            'Calli': {
                energy: 'Strengthen foundations, create sacred space',
                meditation: 'Visualize your inner temple and sanctuary'
            },
            'Cuetzpalin': {
                energy: 'Adapt to changing circumstances with flexibility',
                meditation: 'Practice flowing movements and adaptability'
            },
            'Cōātl': {
                energy: 'Transform and heal through serpent wisdom',
                meditation: 'Work with kundalini energy and healing'
            }
        };
        
        return guidanceMap[sign.name] || {
            energy: `Work with the sacred energy of ${sign.name}`,
            meditation: `Meditate on the qualities of ${sign.english.toLowerCase()}`
        };
    }
    
    updateDashboard() {
        // Dashboard is automatically updated by updateCurrentDayDisplay
        // Add any additional dashboard-specific updates here
    }
    
    renderDaySignsGrid() {
        const gridContainer = document.getElementById('day-signs-grid');
        if (!gridContainer) return;
        
        gridContainer.innerHTML = this.daySignsData.map(sign => `
            <div class="day-sign-card" data-sign="${sign.name.toLowerCase()}">
                <div class="day-sign-header">
                    <div class="sign-number">${sign.number}</div>
                    <div class="sign-unicode">${sign.unicode_name.split(' ')[1] || sign.glyph}</div>
                    <div class="sign-names">
                        <h4>${sign.name}</h4>
                        <p class="sign-english">${sign.english}</p>
                    </div>
                </div>
                <div class="sign-details">
                    <div class="sign-detail">
                        <strong>Deity:</strong>
                        <span>${sign.deity}</span>
                    </div>
                    <div class="sign-detail">
                        <strong>Direction:</strong>
                        <span>${sign.direction}</span>
                    </div>
                    <div class="sign-detail">
                        <strong>Element:</strong>
                        <span>${sign.element}</span>
                    </div>
                    <div class="sign-detail">
                        <strong>Meaning:</strong>
                        <span>${sign.meaning}</span>
                    </div>
                    <div class="sign-detail">
                        <strong>Ritual Use:</strong>
                        <span>${sign.ritual_use}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    filterDaySignsGrid(searchTerm) {
        const cards = document.querySelectorAll('.day-sign-card');
        const term = searchTerm.toLowerCase();
        
        cards.forEach(card => {
            const signName = card.dataset.sign;
            const textContent = card.textContent.toLowerCase();
            
            if (signName.includes(term) || textContent.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    performTonalamatl() {
        const resultElement = document.getElementById('tonalamatl-result');
        if (!resultElement) return;
        
        // Generate a reading based on current day
        const { number, sign } = this.currentDay;
        const reading = this.generateTonalamatl(number, sign);
        
        resultElement.innerHTML = `
            <h4>📖 Sacred Day Reading</h4>
            <p><strong>Your Day Sign:</strong> ${number} ${sign.name} (${sign.english})</p>
            <p><strong>Divine Message:</strong> ${reading.message}</p>
            <p><strong>Guidance:</strong> ${reading.guidance}</p>
            <p><strong>Action:</strong> ${reading.action}</p>
        `;
        
        resultElement.classList.add('active');
    }
    
    generateTonalamatl(number, sign) {
        const messages = {
            1: "New beginnings await you",
            2: "Duality and balance are key",
            3: "Creative expression flows",
            4: "Stability grounds your path",
            5: "Change brings opportunity",
            6: "Transformation deepens",
            7: "Sacred power awakens",
            8: "Abundance manifests",
            9: "Completion approaches",
            10: "Manifestation occurs",
            11: "Resolution emerges",
            12: "Understanding clarifies",
            13: "Transcendence beckons"
        };
        
        return {
            message: messages[number] || "The sacred forces guide you",
            guidance: sign.meaning,
            action: sign.ritual_use
        };
    }
    
    getTrecenaGuidance() {
        const resultElement = document.getElementById('trecena-result');
        if (!resultElement) return;
        
        const trecenaStart = this.getTrecenaStart(this.currentDay.number, this.currentDay.sign);
        const guidance = this.generateTrecenaGuidance(trecenaStart);
        
        resultElement.innerHTML = `
            <h4>📅 Trecena Guidance</h4>
            <p><strong>Current Period:</strong> ${trecenaStart.name} Trecena</p>
            <p><strong>Ruling Deity:</strong> ${trecenaStart.deity}</p>
            <p><strong>Period Energy:</strong> ${guidance.energy}</p>
            <p><strong>Best For:</strong> ${guidance.bestFor}</p>
            <p><strong>Avoid:</strong> ${guidance.avoid}</p>
        `;
        
        resultElement.classList.add('active');
    }
    
    generateTrecenaGuidance(startSign) {
        const guidanceMap = {
            'Cipactli': {
                energy: 'Foundation and new beginnings',
                bestFor: 'Starting new projects, planting seeds',
                avoid: 'Ending relationships or projects'
            },
            'Ocēlōtl': {
                energy: 'Inner strength and night mysteries',
                bestFor: 'Deep meditation, shadow work',
                avoid: 'Superficial activities'
            },
            'Mazātl': {
                energy: 'Grace and gentle power',
                bestFor: 'Healing work, artistic creation',
                avoid: 'Aggressive actions'
            }
        };
        
        return guidanceMap[startSign.name] || {
            energy: `The sacred energy of ${startSign.name}`,
            bestFor: startSign.ritual_use,
            avoid: 'Actions contrary to this sign\'s nature'
        };
    }
    
    getDirectionalWisdom() {
        const resultElement = document.getElementById('directional-result');
        if (!resultElement) return;
        
        const directions = ['East ☀️', 'North ❄️', 'West 🌅', 'South 🔥'];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        const wisdom = this.generateDirectionalWisdom(randomDirection);
        
        resultElement.innerHTML = `
            <h4>🧭 Directional Wisdom</h4>
            <p><strong>Sacred Direction:</strong> ${randomDirection}</p>
            <p><strong>Energy:</strong> ${wisdom.energy}</p>
            <p><strong>Guidance:</strong> ${wisdom.guidance}</p>
            <p><strong>Ritual Placement:</strong> ${wisdom.placement}</p>
        `;
        
        resultElement.classList.add('active');
    }
    
    generateDirectionalWisdom(direction) {
        const wisdomMap = {
            'East ☀️': {
                energy: 'New beginnings, illumination, dawn energy',
                guidance: 'Start fresh projects, seek enlightenment',
                placement: 'Place offerings facing east at sunrise'
            },
            'North ❄️': {
                energy: 'Wisdom, ancestors, purification',
                guidance: 'Connect with ancestral wisdom, purify intentions',
                placement: 'Face north for ancestor communication'
            },
            'West 🌅': {
                energy: 'Introspection, dreams, inner journey',
                guidance: 'Look within, work with dream energy',
                placement: 'Face west for inner work at sunset'
            },
            'South 🔥': {
                energy: 'Action, passion, manifestation',
                guidance: 'Take decisive action, manifest desires',
                placement: 'Face south for active manifestation work'
            }
        };
        
        return wisdomMap[direction] || {
            energy: 'Sacred directional energy',
            guidance: 'Align with this direction\'s power',
            placement: 'Honor this direction in your ceremonies'
        };
    }
    
    performScrying() {
        const resultElement = document.getElementById('scrying-result');
        if (!resultElement) return;
        
        const vision = this.generateScryingVision();
        
        resultElement.innerHTML = `
            <h4>🥥 Gourd Scrying Vision</h4>
            <p><strong>Vision:</strong> ${vision.image}</p>
            <p><strong>Interpretation:</strong> ${vision.meaning}</p>
            <p><strong>Message:</strong> ${vision.message}</p>
            <p><strong>Action Needed:</strong> ${vision.action}</p>
        `;
        
        resultElement.classList.add('active');
    }
    
    generateScryingVision() {
        const visions = [
            {
                image: "Ripples forming a spiral pattern in the sacred water",
                meaning: "Change and transformation are approaching",
                message: "Embrace the cycles of life and renewal",
                action: "Prepare for positive change through ritual cleansing"
            },
            {
                image: "A feathered serpent moving through cloudy water",
                meaning: "Wisdom and spiritual power are awakening",
                message: "Your spiritual gifts are ready to emerge",
                action: "Practice divination and trust your intuition"
            },
            {
                image: "Lightning reflected in still water",
                meaning: "Sudden insight or revelation is coming",
                message: "Truth will be illuminated in unexpected ways",
                action: "Stay alert to signs and synchronicities"
            },
            {
                image: "Flowers floating on the water's surface",
                meaning: "Beauty and harmony are blessing your path",
                message: "Joy and artistic inspiration flow to you",
                action: "Engage in creative expression and celebrate beauty"
            }
        ];
        
        return visions[Math.floor(Math.random() * visions.length)];
    }
    
    findAuspiciousDays() {
        const ceremonyType = document.getElementById('ceremony-type')?.value;
        const resultElement = document.getElementById('auspicious-days');
        if (!resultElement) return;
        
        const auspiciousDays = this.calculateAuspiciousDays(ceremonyType);
        
        resultElement.innerHTML = `
            <h3>🌟 Auspicious Days for ${ceremonyType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            ${auspiciousDays.map(day => `
                <div class="auspicious-day">
                    <h4>${day.date} - ${day.daySign}</h4>
                    <p><strong>Why Auspicious:</strong> ${day.reason}</p>
                    <p><strong>Best Time:</strong> ${day.time}</p>
                    <p><strong>Preparation:</strong> ${day.preparation}</p>
                </div>
            `).join('')}
        `;
    }
    
    calculateAuspiciousDays(ceremonyType) {
        const today = new Date();
        const auspiciousDays = [];
        
        // Calculate next 30 days and find auspicious ones
        for (let i = 1; i <= 30; i++) {
            const futureDate = new Date(today);
            futureDate.setDate(today.getDate() + i);
            
            const dayInfo = this.calculateDayForDate(futureDate);
            const isAuspicious = this.isDayAuspiciousFor(ceremonyType, dayInfo);
            
            if (isAuspicious.suitable) {
                auspiciousDays.push({
                    date: futureDate.toLocaleDateString(),
                    daySign: `${dayInfo.number} ${dayInfo.sign.name}`,
                    reason: isAuspicious.reason,
                    time: isAuspicious.time,
                    preparation: isAuspicious.preparation
                });
            }
            
            if (auspiciousDays.length >= 5) break; // Limit to 5 suggestions
        }
        
        return auspiciousDays.length > 0 ? auspiciousDays : [{
            date: "Coming soon",
            daySign: "Seek patience",
            reason: "No particularly auspicious days in the immediate future",
            time: "Wait for better cosmic alignment",
            preparation: "Use this time for inner preparation and purification"
        }];
    }
    
    calculateDayForDate(date) {
        const daysDiff = Math.floor((date - this.baseDate) / (1000 * 60 * 60 * 24));
        const dayNumber = ((this.baseDayNumber - 1 + daysDiff) % 13) + 1;
        const daySignIndex = (this.baseDaySignIndex + daysDiff) % 20;
        
        return {
            number: dayNumber,
            sign: this.daySignsData[daySignIndex]
        };
    }
    
    isDayAuspiciousFor(ceremonyType, dayInfo) {
        const suitability = {
            'healing': {
                signs: ['Cōātl', 'Malīnalli', 'Ātl', 'Mazātl'],
                reason: 'Healing and transformation energies are strong',
                time: 'Dawn or dusk when healing energies peak',
                preparation: 'Gather healing herbs and prepare sacred water'
            },
            'blessing': {
                signs: ['Xōchitl', 'Cipactli', 'Calli', 'Cuāuhtli'],
                reason: 'Protective and blessing energies are favorable',
                time: 'Midday when solar blessings are strongest',
                preparation: 'Prepare flowers, incense, and sacred objects'
            },
            'new-beginning': {
                signs: ['Cipactli', 'Ehēcatl', 'Ācatl', 'Olīn'],
                reason: 'New beginning and creative forces align',
                time: 'Sunrise for maximum new energy',
                preparation: 'Clear space of old energies, plant new seeds'
            },
            'protection': {
                signs: ['Calli', 'Tecpatl', 'Ocēlōtl', 'Cuāuhtli'],
                reason: 'Protective and warrior energies are active',
                time: 'Sunset for protective boundaries',
                preparation: 'Create protective amulets and boundary markings'
            },
            'divination': {
                signs: ['Ehēcatl', 'Ozomahtli', 'Quiyahuitl', 'Miquiztli'],
                reason: 'Spiritual communication and vision are enhanced',
                time: 'Midnight for deepest spiritual connection',
                preparation: 'Fast, purify, and prepare divinatory tools'
            },
            'transition': {
                signs: ['Miquiztli', 'Olīn', 'Cōzcacuāuhtli', 'Cuetzpalin'],
                reason: 'Transformation and transition energies support change',
                time: 'During liminal hours (dawn/dusk)',
                preparation: 'Release old patterns through ceremony'
            }
        };
        
        const criteria = suitability[ceremonyType];
        if (!criteria) return { suitable: false };
        
        const isSignSuitable = criteria.signs.includes(dayInfo.sign.name);
        const isNumberSuitable = [1, 4, 7, 10, 13].includes(dayInfo.number); // Power numbers
        
        if (isSignSuitable || isNumberSuitable) {
            return {
                suitable: true,
                reason: criteria.reason,
                time: criteria.time,
                preparation: criteria.preparation
            };
        }
        
        return { suitable: false };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.tonalpohualli = new TonalpohualliFApp();
});