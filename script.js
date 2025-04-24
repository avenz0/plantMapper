// Constants
let MAX_GROUP_SIZE = 3; // Now this will be controlled by user input

// Plant database with companion planting and growing information
const plants = [
    { 
        id: 1, 
        name: 'Broccoli', 
        type: 'Vegetable',
        companions: [8, 9, 10, 15, 17, 18],
        avoidPlants: [19, 21, 22, 23],
        companionInfo: "Benefits from: Onions, Garlic (repel pests), Celery (nutrient help), Marigolds (pest control), Leeks, Lettuce (ground cover). Avoid: Tomatoes, Squash, Pumpkin (nutrient competition)",
        spacing: {
            plantToPlant: 45, // cm between plants
            rowToRow: 60, // cm between rows
            depth: 1.3, // planting depth in cm
            height: 60, // mature height in cm
            spread: 60 // mature spread in cm
        },
        needsFleeceCover: true, // Protect from cabbage white butterflies and cold
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from pests and frost"
    },
    { 
        id: 2, 
        name: 'Cauliflower', 
        type: 'Vegetable',
        companions: [8, 9, 15, 18],
        avoidPlants: [19, 21, 22, 23],
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (repel pests), Lettuce. Avoid: Tomatoes, Squash, Pumpkin (compete for nutrients)",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 60,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from pests and cold weather"
    },
    { 
        id: 8, 
        name: 'Onions', 
        type: 'Vegetable',
        companions: [1, 2, 13, 18],
        avoidPlants: [16],
        companionInfo: "Good with: Brassicas (broccoli, cauliflower), Lettuce, Cucumber. Avoid: Potatoes. Helps repel many garden pests",
        spacing: {
            plantToPlant: 10,
            rowToRow: 30,
            depth: 2.5,
            height: 45,
            spread: 10
        },
        needsFleeceCover: false
    },
    { 
        id: 9, 
        name: 'Garlic', 
        type: 'Vegetable',
        companions: [1, 2, 13, 19],
        avoidPlants: [16],
        companionInfo: "Good with: Brassicas, Tomatoes, Cucumber. Avoid: Potatoes. Excellent pest deterrent",
        spacing: {
            plantToPlant: 10,
            rowToRow: 30,
            depth: 5,
            height: 45,
            spread: 10
        },
        needsFleeceCover: false
    },
    { 
        id: 10, 
        name: 'Celery', 
        type: 'Vegetable',
        companions: [1, 18, 19],
        avoidPlants: [],
        companionInfo: "Good with: Brassicas, Lettuce, Tomatoes. Helps improve soil and neighbor plant growth",
        spacing: {
            plantToPlant: 15,
            rowToRow: 60,
            depth: 0.6,
            height: 30,
            spread: 30
        },
        needsFleeceCover: false
    },
    { 
        id: 12, 
        name: 'Fennel', 
        type: 'Vegetable',
        companions: [],
        avoidPlants: [1, 2, 13, 19],
        companionInfo: "Generally not a good companion plant - keep separate from most vegetables",
        spacing: {
            plantToPlant: 30,
            rowToRow: 60,
            depth: 0.6,
            height: 120,
            spread: 60
        },
        needsFleeceCover: false
    },
    { 
        id: 13, 
        name: 'Cucumber', 
        type: 'Vegetable',
        companions: [12, 9, 36, 34, 27, 17, 10, 8], // Fennel, Garlic, White Cabbage, Red Cabbage, Butterhead Lettuce, Leek, Celery, Onion
        avoidPlants: [28, 19, 20], // Turnip, Tomato, Zucchini
        companionInfo: "Benefits from: Fennel, Garlic, White and Red Cabbage, Butterhead Lettuce, Leek, Celery, Onion. Avoid: Turnip, Tomato, and Zucchini.",
        spacing: {
            plantToPlant: 30,
            rowToRow: 120,
            depth: 2.5,
            height: 180, // When trellised
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants until established to protect from cold and pests"
    },
    { 
        id: 14, 
        name: 'Eggplant', 
        type: 'Vegetable',
        companions: [15, 19],
        avoidPlants: [13],
        companionInfo: "Good with: Marigolds (pest control), Tomatoes. Avoid: Cucumbers",
        spacing: {
            plantToPlant: 60,
            rowToRow: 90,
            depth: 0.6,
            height: 90,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from cold and flea beetles"
    },
    { 
        id: 15, 
        name: 'Marigolds', 
        type: 'Vegetable',
        companions: [1, 2, 11, 13, 14, 19],
        avoidPlants: [],
        companionInfo: "Excellent companion for most plants - repels pests and nematodes",
        spacing: {
            plantToPlant: 20,
            rowToRow: 30,
            depth: 0.6,
            height: 30,
            spread: 20
        },
        needsFleeceCover: false
    },
    { 
        id: 16, 
        name: 'Potato', 
        type: 'Vegetable',
        companions: [1, 2, 25, 26], // Broccoli, Cauliflower, Blue Kohlrabi, White Kohlrabi
        avoidPlants: [14, 34, 36, 10, 19, 8], // Eggplants, Red Cabbage, White Cabbage, Celery, Tomato, Onion
        companionInfo: "Benefits from: Broccoli, Cauliflower, Blue Kohlrabi, White Kohlrabi. Avoid: Eggplants, Red Cabbage, White Cabbage, Celery, Tomato, and Onion.",
        spacing: {
            plantToPlant: 30,
            rowToRow: 90,
            depth: 10,
            height: 60,
            spread: 60
        },
        needsFleeceCover: false
    },
    { 
        id: 17, 
        name: 'Leek', 
        type: 'Vegetable',
        companions: [1, 2, 13],
        avoidPlants: [16],
        companionInfo: "Good with: Brassicas, Cucumber. Avoid: Potatoes. Helps repel pests",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 15,
            height: 60,
            spread: 15
        },
        needsFleeceCover: false
    },
    { 
        id: 18, 
        name: 'Lettuce', 
        type: 'Vegetable',
        companions: [1, 2, 8, 10, 13],
        avoidPlants: [],
        companionInfo: "Good companion for many plants - works well as ground cover and shallow roots don't compete",
        spacing: {
            plantToPlant: 20,
            rowToRow: 30,
            depth: 0.6,
            height: 20,
            spread: 30
        },
        needsFleeceCover: false
    },
    { 
        id: 19, 
        name: 'Tomatoes', 
        type: 'Vegetable',
        companions: [9, 10, 14, 15],
        avoidPlants: [1, 2, 11, 16],
        companionInfo: "Good with: Garlic, Celery, Eggplant, Marigolds. Avoid: Brassicas, Potatoes (disease risk)",
        spacing: {
            plantToPlant: 60,
            rowToRow: 120,
            depth: 0.6,
            height: 180, // When staked
            spread: 60
        },
        needsFleeceCover: false
    },
    { 
        id: 20, 
        name: 'Zucchini', 
        type: 'Vegetable',
        companions: [11, 16],
        avoidPlants: [],
        companionInfo: "Good with: Potatoes. Can be planted near most vegetables",
        spacing: {
            plantToPlant: 90,
            rowToRow: 120,
            depth: 2.5,
            height: 60,
            spread: 120
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from cold and pests until flowering begins"
    },
    { 
        id: 21, 
        name: 'Pumpkin', 
        type: 'Vegetable',
        companions: [15],
        avoidPlants: [1, 2],
        companionInfo: "Good with: Marigolds (pest control). Avoid: Brassicas (heavy feeder, competes for nutrients)",
        spacing: {
            plantToPlant: 120,
            rowToRow: 180,
            depth: 2.5,
            height: 30,
            spread: 360
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants until established and weather is consistently warm"
    },
    { 
        id: 22, 
        name: 'Squash', 
        type: 'Vegetable',
        companions: [15],
        avoidPlants: [1, 2],
        companionInfo: "Good with: Marigolds (pest control). Avoid: Brassicas (heavy feeder, competes for nutrients)",
        spacing: {
            plantToPlant: 90,
            rowToRow: 150,
            depth: 2.5,
            height: 60,
            spread: 180
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants until established and weather is consistently warm"
    },
    {
        id: 23,
        name: 'Kale',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12], // Fennel
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce (ground cover). Avoid: Fennel (inhibits growth)",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 60,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 24,
        name: 'Celeriac',
        type: 'Vegetable',
        companions: [1, 2, 18, 15], // Brassicas, Lettuce, Marigolds
        avoidPlants: [12], // Fennel
        companionInfo: "Good with: Brassicas (improves growth), Lettuce, Marigolds (pest control). Avoid: Fennel (inhibits growth)",
        spacing: {
            plantToPlant: 30,
            rowToRow: 45,
            depth: 0.6,
            height: 60,
            spread: 30
        },
        needsFleeceCover: false
    },
    {
        id: 25,
        name: 'Kohlrabi (Blue)',
        type: 'Vegetable',
        companions: [16, 27, 10, 19], // Potato, Butterhead Lettuce, Celery, Tomato
        avoidPlants: [12, 36, 34], // Fennel, White Cabbage, Red Cabbage
        companionInfo: "Benefits from: Potato, Butterhead Lettuce, Celery, Tomato. Avoid: Fennel, White Cabbage, and Red Cabbage.",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 1.3,
            height: 30,
            spread: 25
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from flea beetles and cabbage root fly"
    },
    {
        id: 26,
        name: 'Kohlrabi (White)',
        type: 'Vegetable',
        companions: [16, 27, 10, 19], // Potato, Butterhead Lettuce, Celery, Tomato
        avoidPlants: [12, 36, 34], // Fennel, White Cabbage, Red Cabbage
        companionInfo: "Benefits from: Potato, Butterhead Lettuce, Celery, Tomato. Avoid: Fennel, White Cabbage, and Red Cabbage.",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 1.3,
            height: 30,
            spread: 25
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from flea beetles and cabbage root fly"
    },
    {
        id: 27,
        name: 'Butterhead Lettuce',
        type: 'Vegetable',
        companions: [1, 2, 8, 9, 10], // Brassicas, Onions, Garlic, Celery
        avoidPlants: [],
        companionInfo: "Good companion for most plants. Works well with Brassicas, Onions, Garlic, and Celery. Shallow roots don't compete for nutrients",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 0.6,
            height: 20,
            spread: 25
        },
        needsFleeceCover: false
    },
    {
        id: 28,
        name: 'Turnip (May Turnip)',
        type: 'Vegetable',
        companions: [8, 9, 15, 18], // Onions, Garlic, Marigolds, Lettuce
        avoidPlants: [12], // Fennel
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Lettuce. Avoid: Fennel",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 1.3,
            height: 30,
            spread: 15
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from flea beetles"
    },
    {
        id: 29,
        name: 'Swiss Chard (Rainbow)',
        type: 'Vegetable',
        companions: [8, 9, 15, 18], // Onions, Garlic, Marigolds, Lettuce
        avoidPlants: [12], // Fennel
        companionInfo: "Good with: Onions, Garlic (pest control), Marigolds (pest deterrent), Lettuce. Avoid: Fennel",
        spacing: {
            plantToPlant: 30,
            rowToRow: 45,
            depth: 2.5,
            height: 60,
            spread: 30
        },
        needsFleeceCover: false
    },
    {
        id: 30,
        name: 'Pak Choi (Mini)',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 1.3,
            height: 20,
            spread: 15
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from flea beetles and cabbage root fly"
    },
    {
        id: 31,
        name: 'Parsley',
        type: 'Herb',
        companions: [1, 2, 19, 15], // Brassicas, Tomatoes, Marigolds
        avoidPlants: [12], // Fennel
        companionInfo: "Good with: Brassicas (improves growth and flavor), Tomatoes, Marigolds. Avoid: Fennel",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 0.6,
            height: 30,
            spread: 30
        },
        needsFleeceCover: false
    },
    {
        id: 32,
        name: 'Romanesco',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 60,
            rowToRow: 75,
            depth: 1.3,
            height: 60,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from cabbage white butterflies"
    },
    {
        id: 33,
        name: 'Brussels Sprouts',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 60,
            rowToRow: 75,
            depth: 1.3,
            height: 90,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 34,
        name: 'Red Cabbage',
        type: 'Vegetable',
        companions: [14, 13, 27, 17, 29, 28, 10, 19], // Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes
        avoidPlants: [2, 1, 16, 9, 25, 26, 8], // Cauliflower, Broccoli, Potato, Garlic, Kohlrabi Blue, Kohlrabi White, Onion
        companionInfo: "Benefits from: Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes. Avoid: Cauliflower, Broccoli, Potato, Garlic, both Kohlrabi varieties, and Onion.",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 45,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 35,
        name: 'Lollo Rossa Lettuce',
        type: 'Vegetable',
        companions: [1, 2, 8, 9, 10], // Brassicas, Onions, Garlic, Celery
        avoidPlants: [],
        companionInfo: "Good companion for most plants. Works well with Brassicas, Onions, Garlic, and Celery. Shallow roots don't compete for nutrients",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 0.6,
            height: 20,
            spread: 25
        },
        needsFleeceCover: false
    },
    {
        id: 36,
        name: 'White Cabbage',
        type: 'Vegetable',
        companions: [14, 13, 27, 17, 29, 28, 10, 19], // Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes
        avoidPlants: [2, 1, 16, 9, 25, 26, 8], // Cauliflower, Broccoli, Potato, Garlic, Kohlrabi Blue, Kohlrabi White, Onion
        companionInfo: "Benefits from: Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes. Avoid: Cauliflower, Broccoli, Potato, Garlic, both Kohlrabi varieties, and Onion.",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 45,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 37,
        name: 'Savoy Cabbage',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 45,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    }
];

const plants_gartenzauber = [
    { 
        id: 1, 
        name: 'Broccoli', 
        type: 'Vegetable',
        companions: [14, 16, 10], // Eggplants, Potato, Celery
        avoidPlants: [34, 36, 8], // Red Cabbage, White Cabbage, Onions
        companionInfo: "Benefits from: Eggplants, Potatoes, Celery. Avoid: Red Cabbage, White Cabbage, and Onions.",
        spacing: {
            plantToPlant: 45, // cm between plants
            rowToRow: 60, // cm between rows
            depth: 1.3, // planting depth in cm
            height: 60, // mature height in cm
            spread: 60 // mature spread in cm
        },
        needsFleeceCover: true, // Protect from cabbage white butterflies and cold
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from pests and frost"
    },
    { 
        id: 2, 
        name: 'Cauliflower', 
        type: 'Vegetable',
        companions: [14, 16, 10], // Eggplants, Potato, Celery
        avoidPlants: [34, 36, 8], // Red Cabbage, White Cabbage, Onions
        companionInfo: "Benefits from: Eggplants, Potatoes, Celery. Avoid: Red Cabbage, White Cabbage, and Onions.",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 60,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from pests and cold weather"
    },
    { 
        id: 8, 
        name: 'Onions', 
        type: 'Vegetable',
        companions: [1, 2, 13, 18],
        avoidPlants: [16],
        companionInfo: "Good with: Brassicas (broccoli, cauliflower), Lettuce, Cucumber. Avoid: Potatoes. Helps repel many garden pests",
        spacing: {
            plantToPlant: 10,
            rowToRow: 30,
            depth: 2.5,
            height: 45,
            spread: 10
        },
        needsFleeceCover: false
    },
    { 
        id: 9, 
        name: 'Garlic', 
        type: 'Vegetable',
        companions: [1, 2, 13, 19],
        avoidPlants: [16],
        companionInfo: "Good with: Brassicas, Tomatoes, Cucumber. Avoid: Potatoes. Excellent pest deterrent",
        spacing: {
            plantToPlant: 10,
            rowToRow: 30,
            depth: 5,
            height: 45,
            spread: 10
        },
        needsFleeceCover: false
    },
    { 
        id: 10, 
        name: 'Celery', 
        type: 'Vegetable',
        companions: [1, 18, 19],
        avoidPlants: [],
        companionInfo: "Good with: Brassicas, Lettuce, Tomatoes. Helps improve soil and neighbor plant growth",
        spacing: {
            plantToPlant: 15,
            rowToRow: 60,
            depth: 0.6,
            height: 30,
            spread: 30
        },
        needsFleeceCover: false
    },
    { 
        id: 12, 
        name: 'Fennel', 
        type: 'Vegetable',
        companions: [],
        avoidPlants: [1, 2, 13, 19],
        companionInfo: "Generally not a good companion plant - keep separate from most vegetables",
        spacing: {
            plantToPlant: 30,
            rowToRow: 60,
            depth: 0.6,
            height: 120,
            spread: 60
        },
        needsFleeceCover: false
    },
    { 
        id: 13, 
        name: 'Cucumber', 
        type: 'Vegetable',
        companions: [12, 9, 36, 34, 27, 17, 10, 8], // Fennel, Garlic, White Cabbage, Red Cabbage, Butterhead Lettuce, Leek, Celery, Onion
        avoidPlants: [28, 19, 20], // Turnip, Tomato, Zucchini
        companionInfo: "Benefits from: Fennel, Garlic, White and Red Cabbage, Butterhead Lettuce, Leek, Celery, Onion. Avoid: Turnip, Tomato, and Zucchini.",
        spacing: {
            plantToPlant: 30,
            rowToRow: 120,
            depth: 2.5,
            height: 180, // When trellised
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants until established to protect from cold and pests"
    },
    { 
        id: 14, 
        name: 'Eggplant', 
        type: 'Vegetable',
        companions: [15, 19],
        avoidPlants: [13],
        companionInfo: "Good with: Marigolds (pest control), Tomatoes. Avoid: Cucumbers",
        spacing: {
            plantToPlant: 60,
            rowToRow: 90,
            depth: 0.6,
            height: 90,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from cold and flea beetles"
    },
    { 
        id: 15, 
        name: 'Marigolds', 
        type: 'Vegetable',
        companions: [1, 2, 11, 13, 14, 19],
        avoidPlants: [],
        companionInfo: "Excellent companion for most plants - repels pests and nematodes",
        spacing: {
            plantToPlant: 20,
            rowToRow: 30,
            depth: 0.6,
            height: 30,
            spread: 20
        },
        needsFleeceCover: false
    },
    { 
        id: 16, 
        name: 'Potato', 
        type: 'Vegetable',
        companions: [1, 2, 25, 26], // Broccoli, Cauliflower, Blue Kohlrabi, White Kohlrabi
        avoidPlants: [14, 34, 36, 10, 19, 8], // Eggplants, Red Cabbage, White Cabbage, Celery, Tomato, Onion
        companionInfo: "Benefits from: Broccoli, Cauliflower, Blue Kohlrabi, White Kohlrabi. Avoid: Eggplants, Red Cabbage, White Cabbage, Celery, Tomato, and Onion.",
        spacing: {
            plantToPlant: 30,
            rowToRow: 90,
            depth: 10,
            height: 60,
            spread: 60
        },
        needsFleeceCover: false
    },
    { 
        id: 17, 
        name: 'Leek', 
        type: 'Vegetable',
        companions: [1, 2, 13],
        avoidPlants: [16],
        companionInfo: "Good with: Brassicas, Cucumber. Avoid: Potatoes. Helps repel pests",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 15,
            height: 60,
            spread: 15
        },
        needsFleeceCover: false
    },
    { 
        id: 18, 
        name: 'Lettuce', 
        type: 'Vegetable',
        companions: [1, 2, 8, 10, 13],
        avoidPlants: [],
        companionInfo: "Good companion for many plants - works well as ground cover and shallow roots don't compete",
        spacing: {
            plantToPlant: 20,
            rowToRow: 30,
            depth: 0.6,
            height: 20,
            spread: 30
        },
        needsFleeceCover: false
    },
    { 
        id: 19, 
        name: 'Tomatoes', 
        type: 'Vegetable',
        companions: [9, 10, 14, 15],
        avoidPlants: [1, 2, 11, 16],
        companionInfo: "Good with: Garlic, Celery, Eggplant, Marigolds. Avoid: Brassicas, Potatoes (disease risk)",
        spacing: {
            plantToPlant: 60,
            rowToRow: 120,
            depth: 0.6,
            height: 180, // When staked
            spread: 60
        },
        needsFleeceCover: false
    },
    { 
        id: 20, 
        name: 'Zucchini', 
        type: 'Vegetable',
        companions: [11, 16],
        avoidPlants: [],
        companionInfo: "Good with: Potatoes. Can be planted near most vegetables",
        spacing: {
            plantToPlant: 90,
            rowToRow: 120,
            depth: 2.5,
            height: 60,
            spread: 120
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from cold and pests until flowering begins"
    },
    { 
        id: 21, 
        name: 'Pumpkin', 
        type: 'Vegetable',
        companions: [15],
        avoidPlants: [1, 2],
        companionInfo: "Good with: Marigolds (pest control). Avoid: Brassicas (heavy feeder, competes for nutrients)",
        spacing: {
            plantToPlant: 120,
            rowToRow: 180,
            depth: 2.5,
            height: 30,
            spread: 360
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants until established and weather is consistently warm"
    },
    { 
        id: 22, 
        name: 'Squash', 
        type: 'Vegetable',
        companions: [15],
        avoidPlants: [1, 2],
        companionInfo: "Good with: Marigolds (pest control). Avoid: Brassicas (heavy feeder, competes for nutrients)",
        spacing: {
            plantToPlant: 90,
            rowToRow: 150,
            depth: 2.5,
            height: 60,
            spread: 180
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants until established and weather is consistently warm"
    },
    {
        id: 23,
        name: 'Kale',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12], // Fennel
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce (ground cover). Avoid: Fennel (inhibits growth)",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 60,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 24,
        name: 'Celeriac',
        type: 'Vegetable',
        companions: [1, 2, 18, 15], // Brassicas, Lettuce, Marigolds
        avoidPlants: [12], // Fennel
        companionInfo: "Good with: Brassicas (improves growth), Lettuce, Marigolds (pest control). Avoid: Fennel (inhibits growth)",
        spacing: {
            plantToPlant: 30,
            rowToRow: 45,
            depth: 0.6,
            height: 60,
            spread: 30
        },
        needsFleeceCover: false
    },
    {
        id: 25,
        name: 'Kohlrabi (Blue)',
        type: 'Vegetable',
        companions: [16, 27, 10, 19], // Potato, Butterhead Lettuce, Celery, Tomato
        avoidPlants: [12, 36, 34], // Fennel, White Cabbage, Red Cabbage
        companionInfo: "Benefits from: Potato, Butterhead Lettuce, Celery, Tomato. Avoid: Fennel, White Cabbage, and Red Cabbage.",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 1.3,
            height: 30,
            spread: 25
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from flea beetles and cabbage root fly"
    },
    {
        id: 26,
        name: 'Kohlrabi (White)',
        type: 'Vegetable',
        companions: [16, 27, 10, 19], // Potato, Butterhead Lettuce, Celery, Tomato
        avoidPlants: [12, 36, 34], // Fennel, White Cabbage, Red Cabbage
        companionInfo: "Benefits from: Potato, Butterhead Lettuce, Celery, Tomato. Avoid: Fennel, White Cabbage, and Red Cabbage.",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 1.3,
            height: 30,
            spread: 25
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from flea beetles and cabbage root fly"
    },
    {
        id: 27,
        name: 'Butterhead Lettuce',
        type: 'Vegetable',
        companions: [1, 2, 8, 9, 10], // Brassicas, Onions, Garlic, Celery
        avoidPlants: [],
        companionInfo: "Good companion for most plants. Works well with Brassicas, Onions, Garlic, and Celery. Shallow roots don't compete for nutrients",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 0.6,
            height: 20,
            spread: 25
        },
        needsFleeceCover: false
    },
    {
        id: 28,
        name: 'Turnip (May Turnip)',
        type: 'Vegetable',
        companions: [8, 9, 15, 18], // Onions, Garlic, Marigolds, Lettuce
        avoidPlants: [12], // Fennel
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Lettuce. Avoid: Fennel",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 1.3,
            height: 30,
            spread: 15
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover young plants to protect from flea beetles"
    },
    {
        id: 29,
        name: 'Swiss Chard (Rainbow)',
        type: 'Vegetable',
        companions: [8, 9, 15, 18], // Onions, Garlic, Marigolds, Lettuce
        avoidPlants: [12], // Fennel
        companionInfo: "Good with: Onions, Garlic (pest control), Marigolds (pest deterrent), Lettuce. Avoid: Fennel",
        spacing: {
            plantToPlant: 30,
            rowToRow: 45,
            depth: 2.5,
            height: 60,
            spread: 30
        },
        needsFleeceCover: false
    },
    {
        id: 30,
        name: 'Pak Choi (Mini)',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 1.3,
            height: 20,
            spread: 15
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from flea beetles and cabbage root fly"
    },
    {
        id: 31,
        name: 'Parsley',
        type: 'Herb',
        companions: [1, 2, 19, 15], // Brassicas, Tomatoes, Marigolds
        avoidPlants: [12], // Fennel
        companionInfo: "Good with: Brassicas (improves growth and flavor), Tomatoes, Marigolds. Avoid: Fennel",
        spacing: {
            plantToPlant: 15,
            rowToRow: 30,
            depth: 0.6,
            height: 30,
            spread: 30
        },
        needsFleeceCover: false
    },
    {
        id: 32,
        name: 'Romanesco',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 60,
            rowToRow: 75,
            depth: 1.3,
            height: 60,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece for first 6-8 weeks to protect from cabbage white butterflies"
    },
    {
        id: 33,
        name: 'Brussels Sprouts',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 60,
            rowToRow: 75,
            depth: 1.3,
            height: 90,
            spread: 60
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 34,
        name: 'Red Cabbage',
        type: 'Vegetable',
        companions: [14, 13, 27, 17, 29, 28, 10, 19], // Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes
        avoidPlants: [2, 1, 16, 9, 25, 26, 8], // Cauliflower, Broccoli, Potato, Garlic, Kohlrabi Blue, Kohlrabi White, Onion
        companionInfo: "Benefits from: Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes. Avoid: Cauliflower, Broccoli, Potato, Garlic, both Kohlrabi varieties, and Onion.",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 45,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 35,
        name: 'Lollo Rossa Lettuce',
        type: 'Vegetable',
        companions: [1, 2, 8, 9, 10], // Brassicas, Onions, Garlic, Celery
        avoidPlants: [],
        companionInfo: "Good companion for most plants. Works well with Brassicas, Onions, Garlic, and Celery. Shallow roots don't compete for nutrients",
        spacing: {
            plantToPlant: 25,
            rowToRow: 30,
            depth: 0.6,
            height: 20,
            spread: 25
        },
        needsFleeceCover: false
    },
    {
        id: 36,
        name: 'White Cabbage',
        type: 'Vegetable',
        companions: [14, 13, 27, 17, 29, 28, 10, 19], // Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes
        avoidPlants: [2, 1, 16, 9, 25, 26, 8], // Cauliflower, Broccoli, Potato, Garlic, Kohlrabi Blue, Kohlrabi White, Onion
        companionInfo: "Benefits from: Eggplants, Cucumber, Butterhead Lettuce, Leek, Swiss Chard, Turnip, Celery, Tomatoes. Avoid: Cauliflower, Broccoli, Potato, Garlic, both Kohlrabi varieties, and Onion.",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 45,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    },
    {
        id: 37,
        name: 'Savoy Cabbage',
        type: 'Vegetable',
        companions: [8, 9, 15, 17, 18], // Onions, Garlic, Marigolds, Leek, Lettuce
        avoidPlants: [12, 19], // Fennel, Tomatoes
        companionInfo: "Benefits from: Onions, Garlic (pest control), Marigolds (pest deterrent), Leeks, Lettuce. Avoid: Fennel, Tomatoes",
        spacing: {
            plantToPlant: 45,
            rowToRow: 60,
            depth: 1.3,
            height: 45,
            spread: 45
        },
        needsFleeceCover: true,
        fleeceInfo: "Cover with fleece to protect from cabbage white butterflies and pigeons"
    }
];

// State management
let selectedPlants = [];

// Default plant selections with quantities
const defaultPlantSelections = [
    { id: 2, count: 3 },  // Cauliflower
    { id: 1, count: 6 },  // Broccoli
    { id: 12, count: 3 }, // Fennel
    { id: 23, count: 3 }, // Kale
    { id: 16, count: 12 }, // Potato
    { id: 24, count: 3 }, // Celeriac
    { id: 25, count: 3 }, // Kohlrabi (Blue)
    { id: 26, count: 6 }, // Kohlrabi (White)
    { id: 27, count: 3 }, // Butterhead Lettuce
    { id: 17, count: 8 }, // Leek
    { id: 28, count: 6 }, // Turnip (May turnip)
    { id: 29, count: 3 }, // Swiss Chard (Rainbow)
    { id: 30, count: 3 }, // Pak Choi (Mini)
    { id: 31, count: 3 }, // Parsley
    { id: 32, count: 3 }, // Romanesco
    { id: 33, count: 3 }, // Brussels Sprouts
    { id: 34, count: 3 }, // Red Cabbage
    { id: 35, count: 3 }, // Lollo Rossa Lettuce
    { id: 36, count: 3 }, // White Cabbage
    { id: 37, count: 3 }, // Savoy Cabbage
    { id: 8, count: 3 }   // Onion
];

// DOM Elements
const plantsListElement = document.getElementById('plantsList');
const selectedPlantsListElement = document.getElementById('selectedPlantsList');
const searchInput = document.getElementById('searchInput');
const availableViewBtn = document.getElementById('availableViewBtn');
const selectedViewBtn = document.getElementById('selectedViewBtn');
const availablePlantsView = document.getElementById('availablePlantsView');
const selectedPlantsView = document.getElementById('selectedPlantsView');
const selectedCountElement = document.getElementById('selectedCount');
const plotLengthInput = document.getElementById('plotLength');
const plotWidthInput = document.getElementById('plotWidth');
const plotAreaElement = document.getElementById('plotArea');
const plantingMapElement = document.getElementById('plantingMap');
const errorMessageElement = document.getElementById('errorMessage');
const cursorDatabaseRadio = document.getElementById('cursorDatabase');
const gartenzauberDatabaseRadio = document.getElementById('gartenzauberDatabase');

// Additional DOM Elements
const generateMapBtn = document.getElementById('generateMapBtn');

// Add overlay div to the document
document.body.insertAdjacentHTML('beforeend', `
    <div class="plant-details-overlay">
        <div class="plant-details">
            <div class="plant-details-header">
                <h3>Plant Details</h3>
                <button class="close-details-btn" onclick="closePlantDetails()">×</button>
            </div>
            <div class="plant-details-content">
                <div class="no-plant-selected">
                    Select a plant to view details
                </div>
            </div>
        </div>
    </div>
`);

// Update DOM Elements
const plantDetailsOverlay = document.querySelector('.plant-details-overlay');
const plantDetailsElement = plantDetailsOverlay.querySelector('.plant-details');
const detailsContent = plantDetailsElement.querySelector('.plant-details-content');

// Close plant details when clicking outside the modal
plantDetailsOverlay.addEventListener('click', (e) => {
    if (e.target === plantDetailsOverlay) {
        closePlantDetails();
    }
});

// Close plant details when pressing Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePlantDetails();
    }
});

function closePlantDetails() {
    plantDetailsOverlay.classList.remove('visible');
}

// Function to load default plant selections
function loadDefaultPlantSelections() {
    selectedPlants = [];
    defaultPlantSelections.forEach(selection => {
        for (let i = 0; i < selection.count; i++) {
            selectedPlants.push(selection.id);
        }
    });
    renderPlants();
    renderSelectedPlants();
    updateSelectedCount();
}

// Function to get current database
function getCurrentDatabase() {
    return cursorDatabaseRadio.checked ? plants : plants_gartenzauber;
}

// Function to refresh the plant list
function refreshPlantList() {
    // Clear selected plants when switching databases
    selectedPlants = [];
    
    // Get the current database
    const currentDatabase = getCurrentDatabase();
    
    // Render plants from the current database
    renderPlants();
    
    // Update the selected plants view
    renderSelectedPlants();
    
    // Update the selected count
    updateSelectedCount();
    
    // Clear the search input
    searchInput.value = '';
    
    // Clear the planting map
    plantingMapElement.innerHTML = `
        <div class="no-map">
            Click "Generate Planting Map" to create your garden layout
        </div>
    `;
}

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    plotLengthInput.addEventListener('input', updatePlotArea);
    plotWidthInput.addEventListener('input', updatePlotArea);
    cursorDatabaseRadio.addEventListener('change', refreshPlantList);
    gartenzauberDatabaseRadio.addEventListener('change', refreshPlantList);
}

// Update selected count
function updateSelectedCount() {
    selectedCountElement.textContent = selectedPlants.length;
}

// Handle plant selection
function togglePlantSelection(plantId, event, selectedIndex = -1) {
    event.stopPropagation(); // Stop event from bubbling up
    
    if (selectedIndex !== -1) {
        selectedPlants.splice(selectedIndex, 1);
    } else {
        selectedPlants.push(plantId);
    }
    
    renderPlants();
    renderSelectedPlants();
    updateSelectedCount();
}

// Check if a plant is selected at least once
function isPlantSelected(plantId) {
    return selectedPlants.includes(plantId);
}

// Get companion info for a plant
function getCompanionInfo(plantId) {
    const currentDatabase = getCurrentDatabase();
    const plant = currentDatabase.find(p => p.id === plantId);
    return plant?.companionInfo || '';
}

// Render available plants
function renderPlants(searchTerm = '') {
    const currentDatabase = getCurrentDatabase();
    const sortedPlants = [...currentDatabase].sort((a, b) => a.name.localeCompare(b.name));
    
    plantsListElement.innerHTML = sortedPlants
        .filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(plant => {
            const companionInfo = getCompanionInfo(plant.id);
            const infoTooltip = companionInfo ? ` title="${companionInfo}"` : '';
            
            return `
                <div class="plant-item ${isPlantSelected(plant.id) ? 'selected' : ''}"
                     onclick="togglePlantSelection(${plant.id}, event)"
                     ${infoTooltip}>
                    <span>${plant.name} (${plant.type})</span>
                </div>
            `;
        }).join('');
}

// Display plant details
function displayPlantDetails(plantId, element) {
    // Remove selected class from previously selected plant
    const previouslySelected = document.querySelector('.plant-placement.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Add selected class to clicked plant
    if (element) {
        element.classList.add('selected');
    }

    const plant = getCurrentDatabase().find(p => p.id === plantId);
    if (!plant) {
        detailsContent.innerHTML = `
            <div class="no-plant-selected">
                Plant not found
            </div>
        `;
        return;
    }

    const goodCompanions = plant.companions
        .map(id => getCurrentDatabase().find(p => p.id === id)?.name)
        .filter(name => name)
        .join(', ') || 'None';

    const badCompanions = plant.avoidPlants
        .map(id => getCurrentDatabase().find(p => p.id === id)?.name)
        .filter(name => name)
        .join(', ') || 'None';

    detailsContent.innerHTML = `
        <div class="plant-details-content">
            <h3>${plant.name}</h3>
            
            <div class="plant-details-section">
                <h4>Growing Dimensions</h4>
                <ul>
                    <li>Planting Depth: <span class="measurement-value">${plant.spacing.depth} cm</span></li>
                    <li>Mature Height: <span class="measurement-value">${plant.spacing.height} cm</span></li>
                    <li>Mature Spread: <span class="measurement-value">${plant.spacing.spread} cm</span></li>
                </ul>
            </div>

            <div class="plant-details-section">
                <h4>Spacing Requirements</h4>
                <ul>
                    <li>Plant to Plant: <span class="measurement-value">${plant.spacing.plantToPlant} cm</span></li>
                    <li>Row to Row: <span class="measurement-value">${plant.spacing.rowToRow} cm</span></li>
                </ul>
            </div>

            <div class="plant-details-section">
                <h4>Companion Planting</h4>
                <ul>
                    <li><strong>Good Companions:</strong> ${goodCompanions}</li>
                    <li><strong>Plants to Avoid:</strong> ${badCompanions}</li>
                </ul>
            </div>

            ${plant.needsFleeceCover ? `
            <div class="plant-details-section">
                <h4>Protection Needed</h4>
                <p>${plant.fleeceInfo}</p>
            </div>
            ` : ''}
        </div>
    `;

    // Show the overlay
    plantDetailsOverlay.classList.add('visible');
}

// Render selected plants
function renderSelectedPlants() {
    const selectedPlantsList = selectedPlants.map((id, index) => ({
        ...getCurrentDatabase().find(p => p.id === id),
        selectedIndex: index
    }));

    selectedPlantsListElement.innerHTML = selectedPlantsList
        .map(plant => {
            const companionInfo = getCompanionInfo(plant.id);
            const infoTooltip = companionInfo ? ` title="${companionInfo}"` : '';
            
            return `
                <div class="plant-item"${infoTooltip}>
                    <span class="plant-name-text" onclick="displayPlantDetails(${plant.id}, this.closest('.plant-item'))">${plant.name} (${plant.type})</span>
                    <span class="remove-button" onclick="event.stopPropagation(); togglePlantSelection(${plant.id}, event, ${plant.selectedIndex})">×</span>
                </div>
            `;
        }).join('');
}

// Handle search
function handleSearch(e) {
    renderPlants(e.target.value);
}

// Update plot area calculation
function updatePlotArea() {
    const length = parseFloat(plotLengthInput.value) || 0;
    const width = parseFloat(plotWidthInput.value) || 0;
    const area = (length * width).toFixed(2);
    plotAreaElement.textContent = area;
}

// Add event listener for generate map button
generateMapBtn.addEventListener('click', generatePlantingMap);

// Add checkboxes and max group size input
const algorithmControls = document.createElement('div');
algorithmControls.className = 'algorithm-controls';
algorithmControls.innerHTML = `

    <div class="algorithm-option">
        <label>
            <input type="checkbox" id="groupSamePlantsCheckbox" checked>
            Group Same Plants
            <input type="number" id="maxGroupSizeInput" value="3" min="1" max="10" class="max-group-size-input">
            at a time
        </label>
    </div>
        <div class="algorithm-option">
        <label>
            <input type="checkbox" id="mixCultureCheckbox">
            Mix Culture Algorithm
        </label>
    </div>
    <div class="algorithm-option">
        <label>
            <input type="checkbox" id="groupFleeceCheckbox">
            Group Fleece Plants
        </label>
    </div>
`;
generateMapBtn.parentNode.insertBefore(algorithmControls, generateMapBtn);

// Function to check if mix culture is enabled
function isMixCultureEnabled() {
    return document.getElementById('mixCultureCheckbox').checked;
}

// Function to check if grouping same plants is enabled
function isGroupingSameEnabled() {
    return document.getElementById('groupSamePlantsCheckbox').checked;
}

// Function to check if grouping fleece plants is enabled
function isGroupingFleeceEnabled() {
    return document.getElementById('groupFleeceCheckbox').checked;
}

// Function to get maximum group size
function getMaxGroupSize() {
    const size = parseInt(document.getElementById('maxGroupSizeInput').value);
    return isNaN(size) ? 3 : Math.max(1, Math.min(10, size));
}

// Group plants by type and limit to 6 per group
function groupSelectedPlants() {
    // First, count all instances of each plant
    const plantCounts = selectedPlants.reduce((counts, id) => {
        counts[id] = (counts[id] || 0) + 1;
        return counts;
    }, {});

    // Create groups with the actual count of each plant
    const groups = {};
    Object.entries(plantCounts).forEach(([id, count]) => {
        const plant = getCurrentDatabase().find(p => p.id === parseInt(id));
        if (plant) {
            groups[id] = {
                plant: plant,
                count: count
            };
        }
    });

    return Object.values(groups);
}

// Check if two plants can be planted next to each other and get compatibility score
function getPlantCompatibilityScore(plant1, plant2) {
    // First check if plants are incompatible
    if (plant1.avoidPlants.includes(plant2.id)) return 0;
    if (plant2.avoidPlants.includes(plant1.id)) return 0;
    
    // Return score based on companion status
    // 2 = companion plants
    // 1 = neutral plants (can be planted together)
    if (plant1.companions.includes(plant2.id) || plant2.companions.includes(plant1.id)) {
        return 2;
    }
    return 1;
}

// Update findBestNextPlant to consider fleece grouping with higher priority
function findBestNextPlant(currentPlant, remainingGroups, currentRow, rowWidth, plotWidth) {
    let bestScore = 0;
    let bestGroup = null;
    const mixCulture = isMixCultureEnabled();
    const groupSamePlants = isGroupingSameEnabled();
    const groupFleece = isGroupingFleeceEnabled();
    const maxGroupSize = getMaxGroupSize();
    
    // If no remaining groups, return null
    if (remainingGroups.length === 0) {
        return null;
    }
    
    // First, try to continue the current group if possible and grouping is enabled
    if (groupSamePlants && currentPlant && currentRow.length > 0) {
        const consecutiveCount = countConsecutivePlants(currentRow, currentPlant.id);
        if (consecutiveCount < maxGroupSize) {
            // Look for more of the same plant
            const sameGroup = remainingGroups.find(g => g.plant.id === currentPlant.id);
            if (sameGroup && (rowWidth + sameGroup.plant.spacing.plantToPlant <= plotWidth * 100)) {
                return sameGroup;
            }
        }
    }
    
    // If we can't continue the current group or other algorithms are enabled, look for the best option
    for (const group of remainingGroups) {
        // Skip if adding this plant would exceed plot width
        if (rowWidth + group.plant.spacing.plantToPlant > plotWidth * 100) {
            continue;
        }
        
        // Count consecutive same plants from the end of current row
        const consecutiveCount = countConsecutivePlants(currentRow, group.plant.id);
        
        // Skip if would exceed maxGroupSize (only if grouping is enabled)
        if (groupSamePlants && consecutiveCount >= maxGroupSize) {
            continue;
        }
        
        // Calculate base compatibility score
        const score = currentPlant ? getPlantCompatibilityScore(currentPlant, group.plant) : 1;
        
        // Calculate grouping score based on enabled algorithms
        let groupingScore = 0;

        if (currentPlant) {
            // Priority 1: Same plant grouping
            if (groupSamePlants && group.plant.id === currentPlant.id && consecutiveCount < maxGroupSize) {
                groupingScore = 10; // Highest priority
            }
            // Priority 2: Companion planting with fleece consideration
            else if (mixCulture) {
                const hasMatchingFleece = currentPlant.needsFleeceCover === group.plant.needsFleeceCover;
                if (score === 2) { // Good companion
                    if (hasMatchingFleece) {
                        groupingScore = 8; // Good companion + same fleece
                    } else {
                        groupingScore = 6; // Good companion + different fleece
                    }
                } else { // No harm (neutral) companion
                    if (hasMatchingFleece) {
                        groupingScore = 7; // Neutral companion + same fleece
                    } else {
                        groupingScore = 5; // Neutral companion + different fleece
                    }
                }
            }
            // Priority 3: Fleece grouping
            else if (groupFleece && currentPlant.needsFleeceCover === group.plant.needsFleeceCover) {
                groupingScore = 4; // Just fleece matching
            }
            else {
                groupingScore = 1; // Default score for any valid placement
            }
        } else {
            // If no current plant, just use base score
            groupingScore = 1;
        }
        
        if (groupingScore > bestScore) {
            bestScore = groupingScore;
            bestGroup = group;
        }
    }
    
    // If no suitable plant found and mix culture is enabled, try to find any plant with double spacing
    if (!bestGroup && mixCulture) {
        for (const group of remainingGroups) {
            // Check if plant would fit with double spacing
            if (rowWidth + (group.plant.spacing.plantToPlant * 2) <= plotWidth * 100) {
                return {
                    ...group,
                    plant: {
                        ...group.plant,
                        spacing: {
                            ...group.plant.spacing,
                            plantToPlant: group.plant.spacing.plantToPlant * 2
                        }
                    }
                };
            }
        }
    }
    
    return bestGroup;
}

// Helper function to count consecutive plants of the same type from the end of the row
function countConsecutivePlants(row, plantId) {
    let count = 0;
    for (let i = row.length - 1; i >= 0; i--) {
        if (row[i].plant.id === plantId) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

// Generate the planting map
function generatePlantingMap() {
    // Clear previous error messages
    errorMessageElement.classList.remove('visible');
    errorMessageElement.textContent = '';

    // Get plot dimensions
    const plotWidth = parseFloat(plotWidthInput.value);
    const plotLength = parseFloat(plotLengthInput.value);

    // Validate inputs
    if (!plotWidth || !plotLength || plotWidth <= 0 || plotLength <= 0) {
        errorMessageElement.textContent = 'Please enter valid plot dimensions greater than 0.';
        errorMessageElement.classList.add('visible');
        return;
    }

    // Check if plants are selected
    if (selectedPlants.length === 0) {
        errorMessageElement.textContent = 'Please select some plants before generating the map.';
        errorMessageElement.classList.add('visible');
        return;
    }

    // Get current database
    const currentDatabase = getCurrentDatabase();

    // Group selected plants
    let plantGroups = groupSelectedPlants();
    if (plantGroups.length === 0) return;

    // Initialize the map
    const plantingMap = [];
    let remainingGroups = [...plantGroups];
    
    while (remainingGroups.length > 0) {
        let currentRow = [];
        let rowWidth = 0;
        let maxRowToRowDistance = 0;

        // Keep adding plants to the column while there's space
        while (rowWidth < plotWidth * 100 && remainingGroups.length > 0) {
            // Get the last plant in the current column (if any)
            const lastPlant = currentRow.length > 0 ? currentRow[currentRow.length - 1].plant : null;
            
            // Find the best next plant
            const nextGroup = findBestNextPlant(lastPlant, remainingGroups, currentRow, rowWidth, plotWidth);
            
            if (!nextGroup) break; // No suitable plant found
            
            // Add the plant
            currentRow.push({
                plant: nextGroup.plant,
                distance: nextGroup.plant.spacing.plantToPlant,
                rowToRow: nextGroup.plant.spacing.rowToRow,
                groupStart: currentRow.length === 0 || currentRow[currentRow.length - 1].plant.id !== nextGroup.plant.id,
                groupEnd: true // Will be updated in next iteration if needed
            });
            
            // Update the previous plant's groupEnd if it's the same type
            if (currentRow.length > 1 && 
                currentRow[currentRow.length - 2].plant.id === nextGroup.plant.id) {
                currentRow[currentRow.length - 2].groupEnd = false;
            }
            
            rowWidth += nextGroup.plant.spacing.plantToPlant;
            maxRowToRowDistance = Math.max(maxRowToRowDistance, nextGroup.plant.spacing.rowToRow);
            
            // Update remaining count and remove group if depleted
            nextGroup.count--;
            if (nextGroup.count === 0) {
                remainingGroups = remainingGroups.filter(g => g !== nextGroup);
            }
        }

        // Add the column to the map
        if (currentRow.length > 0) {
            plantingMap.push({
                plants: currentRow,
                maxRowToRowDistance: maxRowToRowDistance,
                totalWidth: rowWidth
            });
        }
    }

    // Render the planting map
    renderPlantingMap(plantingMap);
}

// Render the planting map
function renderPlantingMap(plantingMap) {
    let html = '<div class="planting-map-container">';
    
    // Add legend
    html += `
        <div class="planting-map-legend">
            <div class="legend-item">
                <div class="legend-sample needs-fleece"></div>
                <span>Needs Fleece Cover</span>
            </div>
        </div>`;

    html += '<div class="planting-columns">';

    // Convert rows to columns
    plantingMap.forEach((row, rowIndex) => {
        // Start a new column
        html += '<div class="planting-column">';
        
        // Add plants vertically
        row.plants.forEach((placement, plantIndex) => {
            const groupClass = placement.groupStart ? ' group-start' : 
                             placement.groupEnd ? ' group-end' : ' group-middle';
            const fleeceClass = placement.plant.needsFleeceCover ? ' needs-fleece' : '';
            
            // Add the plant
            html += `
                <div class="plant-placement${groupClass}${fleeceClass}">
                    <div class="plant-name">
                        <span class="plant-name-text" onclick="displayPlantDetails(${placement.plant.id}, this.closest('.plant-placement'))">
                            ${placement.plant.name}
                        </span>
                    </div>
                    ${plantIndex < row.plants.length - 1 ? `
                        <div class="distance-value">${placement.plant.spacing.plantToPlant} cm</div>
                    ` : ''}
                </div>`;
        });

        // Add column total at the bottom
        const totalPlantToPlant = row.plants.reduce((sum, plant) => sum + plant.plant.spacing.plantToPlant, 0);
        html += `
            <div class="column-total">
                Sum of plant-to-plant: ${totalPlantToPlant} cm
            </div>
        </div>`;

        // Add horizontal distance between columns if not the last column
        if (rowIndex < plantingMap.length - 1) {
            html += `
                <div class="column-distance">
                    <div class="distance-value">${row.maxRowToRowDistance} cm</div>
                </div>`;
        }
    });

    html += '</div></div>';

    plantingMapElement.innerHTML = html || `
        <div class="no-map">
            No valid planting arrangement could be generated
        </div>
    `;
}

// Helper function to calculate total column height
function calculateColumnHeight(plants) {
    if (plants.length === 0) return 0;
    
    let totalHeight = 0;
    
    plants.forEach((placement, index) => {
        if (index === 0) {
            // For first plant, just add its height
            totalHeight += placement.plant.spacing.height;
        } else {
            // For subsequent plants, add the maximum of:
            // - Current plant height
            // - Row-to-row spacing from previous plant
            // - Row-to-row spacing to current plant
            totalHeight += Math.max(
                placement.plant.spacing.height,
                plants[index - 1].plant.spacing.rowToRow,
                placement.plant.spacing.rowToRow
            );
        }
    });
    
    return totalHeight;
}

// Add event listeners for algorithm controls
document.getElementById('maxGroupSizeInput').addEventListener('change', function() {
    this.value = Math.max(1, Math.min(10, parseInt(this.value) || 3));
});

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners
    setupEventListeners();
    
    // Ensure GartenZauber database is selected by default
    gartenzauberDatabaseRadio.checked = true;
    
    // Render the initial plant list from the selected database
    renderPlants();
    
    // Load default plant selections
    loadDefaultPlantSelections();
    
    // Update plot area
    updatePlotArea();
}); 