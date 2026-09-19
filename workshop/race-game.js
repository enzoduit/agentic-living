// === Race to Series A - Game Logic ===
// Uses Firebase Realtime Database for cross-device sync

const CHECKPOINTS = [
    'Start',
    'Hello World',
    'Brain is Alive',
    'On the Phone',
    'Crash Test',
    'Turing Test'
];

// Race-themed emojis with sound descriptions
const TEAM_EMOJIS = [
    { emoji: '🏎️', name: 'Race Car', sound: 'engine' },
    { emoji: '🐎', name: 'Horse', sound: 'neigh' },
    { emoji: '🚀', name: 'Rocket', sound: 'whoosh' },
    { emoji: '🦅', name: 'Eagle', sound: 'screech' },
    { emoji: '⚡', name: 'Lightning', sound: 'zap' },
    { emoji: '🐆', name: 'Cheetah', sound: 'growl' },
    { emoji: '🏍️', name: 'Motorcycle', sound: 'vroom' },
    { emoji: '🦁', name: 'Lion', sound: 'roar' },
    { emoji: '🐉', name: 'Dragon', sound: 'fire' },
    { emoji: '🦄', name: 'Unicorn', sound: 'magic' }
];

// ============================================
// FIREBASE CONFIGURATION
// ============================================
// 
// TO SET UP FIREBASE (5 minutes):
// 
// 1. Go to https://console.firebase.google.com/
// 2. Click "Create a project" (or use existing)
// 3. Name it something like "race-to-series-a"
// 4. Disable Google Analytics (not needed)
// 5. Once created, click "Realtime Database" in left sidebar
// 6. Click "Create Database"
// 7. Choose location (any), click Next
// 8. Select "Start in TEST MODE" (important for easy setup)
// 9. Click Enable
// 10. Copy your database URL (looks like: https://your-project.firebaseio.com)
// 11. Replace the URL below with yours
//
// ============================================

// REPLACE THIS URL WITH YOUR FIREBASE DATABASE URL
const FIREBASE_DATABASE_URL = 'https://series-a-game-default-rtdb.europe-west1.firebasedatabase.app';

// Check if Firebase is configured
const isFirebaseConfigured = !FIREBASE_DATABASE_URL.includes('YOUR-PROJECT-ID');

// Callbacks for update notifications
const updateCallbacks = [];

// Local cache
let localData = {
    teams: [],
    gameState: {
        isRaceActive: false,
        raceStartTime: null
    }
};

// ============================================
// FIREBASE REALTIME DATABASE FUNCTIONS
// ============================================

async function firebasePut(path, data) {
    if (!isFirebaseConfigured) return false;
    try {
        const response = await fetch(`${FIREBASE_DATABASE_URL}/${path}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.ok;
    } catch (e) {
        console.error('Firebase PUT error:', e);
        return false;
    }
}

async function firebaseGet(path) {
    if (!isFirebaseConfigured) return null;
    try {
        const response = await fetch(`${FIREBASE_DATABASE_URL}/${path}.json`);
        return await response.json();
    } catch (e) {
        console.error('Firebase GET error:', e);
        return null;
    }
}

// Server-Sent Events for real-time updates
function setupRealtimeListener() {
    if (!isFirebaseConfigured) {
        console.warn('Firebase not configured. Using local storage fallback.');
        setupLocalStorageFallback();
        return;
    }

    const eventSource = new EventSource(`${FIREBASE_DATABASE_URL}/race.json`);
    
    eventSource.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            if (data) {
                localData = {
                    teams: data.teams ? Object.values(data.teams) : [],
                    gameState: data.gameState || { isRaceActive: false, raceStartTime: null }
                };
                notifyCallbacks();
            }
        } catch (e) {
            console.error('Parse error:', e);
        }
    };

    eventSource.onerror = (e) => {
        console.warn('EventSource error, falling back to polling:', e);
        eventSource.close();
        setupPolling();
    };
}

// Fallback: Poll every 2 seconds
let pollingInterval = null;
function setupPolling() {
    if (pollingInterval) return;
    
    pollingInterval = setInterval(async () => {
        const data = await firebaseGet('race');
        if (data) {
            localData = {
                teams: data.teams ? Object.values(data.teams) : [],
                gameState: data.gameState || { isRaceActive: false, raceStartTime: null }
            };
            notifyCallbacks();
        }
    }, 2000);
}

// Local storage fallback for testing without Firebase
function setupLocalStorageFallback() {
    const STORAGE_KEY = 'raceToSeriesA';
    
    // Load initial data
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            localData = JSON.parse(stored);
        }
    } catch (e) {}
    
    // Listen for changes from other tabs
    window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
            try {
                localData = JSON.parse(e.newValue);
                notifyCallbacks();
            } catch (e) {}
        }
    });
    
    // Override save function
    window._saveToLocalStorage = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
    };
}

function notifyCallbacks() {
    updateCallbacks.forEach(cb => {
        try { cb(); } catch (e) { console.error('Callback error:', e); }
    });
}

// ============================================
// DATA ACCESS FUNCTIONS
// ============================================

function generateId() {
    return 'team_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function getTeams() {
    return localData.teams || [];
}

function getGameState() {
    return localData.gameState || { isRaceActive: false, raceStartTime: null };
}

async function saveData() {
    if (isFirebaseConfigured) {
        // Convert teams array to object for Firebase
        const teamsObj = {};
        localData.teams.forEach(team => {
            teamsObj[team.id] = team;
        });
        
        await firebasePut('race', {
            teams: teamsObj,
            gameState: localData.gameState
        });
    } else if (window._saveToLocalStorage) {
        window._saveToLocalStorage();
    }
    notifyCallbacks();
}

// ============================================
// TEAM MANAGEMENT
// ============================================

async function addTeam(name, emojiIndex = null) {
    const existingNames = localData.teams.map(t => t.name.toLowerCase());
    
    if (existingNames.includes(name.toLowerCase())) {
        return null;
    }
    
    // Auto-assign emoji if not specified
    if (emojiIndex === null) {
        const usedEmojis = localData.teams.map(t => t.emojiIndex);
        for (let i = 0; i < TEAM_EMOJIS.length; i++) {
            if (!usedEmojis.includes(i)) {
                emojiIndex = i;
                break;
            }
        }
        if (emojiIndex === null) {
            emojiIndex = localData.teams.length % TEAM_EMOJIS.length;
        }
    }
    
    const team = {
        id: generateId(),
        name: name,
        emojiIndex: emojiIndex,
        currentStep: 0,
        lastUpdated: Date.now()
    };
    
    localData.teams.push(team);
    await saveData();
    return team;
}

function getTeamEmoji(team) {
    const idx = team.emojiIndex !== undefined ? team.emojiIndex : 0;
    return TEAM_EMOJIS[idx] || TEAM_EMOJIS[0];
}

async function removeTeam(id) {
    localData.teams = localData.teams.filter(t => t.id !== id);
    await saveData();
}

async function updateTeamStep(id, newStep) {
    const team = localData.teams.find(t => t.id === id);
    
    if (team) {
        team.currentStep = Math.max(0, Math.min(5, newStep));
        team.lastUpdated = Date.now();
        await saveData();
    }
}

async function clearAllTeams() {
    localData.teams = [];
    localData.gameState.isRaceActive = false;
    localData.gameState.raceStartTime = null;
    await saveData();
}

// ============================================
// RACE CONTROL
// ============================================

async function startRace() {
    localData.teams.forEach(team => {
        team.currentStep = 0;
        team.lastUpdated = Date.now();
    });
    
    localData.gameState.isRaceActive = true;
    localData.gameState.raceStartTime = Date.now();
    
    await saveData();
}

async function stopRace() {
    localData.gameState.isRaceActive = false;
    await saveData();
}

async function resetProgress() {
    localData.teams.forEach(team => {
        team.currentStep = 0;
        team.lastUpdated = Date.now();
    });
    await saveData();
}

// ============================================
// EVENT HANDLING
// ============================================

function onUpdate(callback) {
    updateCallbacks.push(callback);
}

// ============================================
// INITIALIZATION
// ============================================

async function initializeGame() {
    if (isFirebaseConfigured) {
        // Load initial data from Firebase
        const data = await firebaseGet('race');
        if (data) {
            localData = {
                teams: data.teams ? Object.values(data.teams) : [],
                gameState: data.gameState || { isRaceActive: false, raceStartTime: null }
            };
        }
        // Setup real-time listener
        setupRealtimeListener();
    } else {
        setupLocalStorageFallback();
    }
    notifyCallbacks();
}

// Auto-initialize
initializeGame();

// ============================================
// EXPORT API
// ============================================

// Allow external updates (for polling)
function _updateLocalData(teams, gameState) {
    localData.teams = teams;
    localData.gameState = gameState;
    notifyCallbacks();
}

const RaceGame = {
    CHECKPOINTS,
    TEAM_EMOJIS,
    getTeams,
    getTeamEmoji,
    getGameState,
    addTeam,
    removeTeam,
    updateTeamStep,
    clearAllTeams,
    startRace,
    stopRace,
    resetProgress,
    onUpdate,
    isFirebaseConfigured: () => isFirebaseConfigured,
    _updateLocalData
};

window.RaceGame = RaceGame;
window.CHECKPOINTS = CHECKPOINTS;
window.TEAM_EMOJIS = TEAM_EMOJIS;
