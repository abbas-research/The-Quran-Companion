const QUESTIONS = [

{
    id: 1,

    question: "Which statement best describes today?",

    answers: [

        {
            text: "Today has been difficult.",
            next: 2
        },

        {
            text: "I've been feeling anxious.",
            next: 3
        },

        {
            text: "I need guidance.",
            next: 4
        },

        {
            text: "I want to turn back to Allah.",
            next: 5
        },

        {
            text: "I'm searching for peace.",
            next: 6
        },

        {
            text: "Alhamdulillah, I feel grateful today.",
            next: 7
        },

        {
            text: "I want to grow as a Muslim.",
            next: 8
        },

        {
            text: "I want to reflect on Allah's signs.",
            next: 9
        }

    ]
},

{
    id: 2,

    question: "What has been weighing on you the most?",

    answers: [

        {
            text: "My heart feels heavy.",
            journey: "STRUGGLING_HEART",
            next: 999
        },

        {
            text: "Everything feels overwhelming.",
            journey: "STRUGGLING_OVERWHELMED",
            next: 999
        },

        {
            text: "I'm grieving a loss.",
            journey: "STRUGGLING_LOSS",
            next: 999
        },

        {
            text: "I feel alone.",
            journey: "STRUGGLING_LONELY",
            next: 999
        },

        {
            text: "My relationships are difficult.",
            journey: "STRUGGLING_RELATIONSHIPS",
            next: 999
        },

        {
            text: "I'm struggling with myself.",
            journey: "STRUGGLING_SELF",
            next: 999
        },

        {
            text: "I'm struggling to stay patient.",
            journey: "STRUGGLING_PATIENCE",
            next: 999
        },

        {
            text: "I don't really know.",
            journey: "STRUGGLING_UNKNOWN",
            next: 999
        }

    ]
},

{
    id: 3,

    question: "What has been making you feel anxious?",

    answers: [

        {
            text: "I'm worried about my future.",
            journey: "ANXIOUS_FUTURE",
            next: 999
        },

        {
            text: "I'm worried about my provision (rizq).",
            journey: "ANXIOUS_PROVISION",
            next: 999
        },

        {
            text: "I'm worried about my health.",
            journey: "ANXIOUS_HEALTH",
            next: 999
        },

        {
            text: "I'm afraid of failing.",
            journey: "ANXIOUS_FAILURE",
            next: 999
        },

        {
            text: "I'm struggling to make a decision.",
            journey: "ANXIOUS_DECISIONS",
            next: 999
        },

        {
            text: "I'm feeling afraid.",
            journey: "ANXIOUS_FEAR",
            next: 999
        },

        {
            text: "I can't stop overthinking.",
            journey: "ANXIOUS_OVERTHINKING",
            next: 999
        },

        {
            text: "My responsibilities feel too heavy.",
            journey: "ANXIOUS_RESPONSIBILITIES",
            next: 999
        }

    ]
},

{
    id: 4,

    question: "What guidance are you seeking?",

    answers: [

        {
            text: "I need direction in my life.",
            journey: "GUIDANCE_DIRECTION",
            next: 999
        },

        {
            text: "I need help making a decision.",
            journey: "GUIDANCE_DECISION",
            next: 999
        },

        {
            text: "I'm searching for my purpose.",
            journey: "GUIDANCE_PURPOSE",
            next: 999
        },

        {
            text: "I want to strengthen my faith.",
            journey: "GUIDANCE_FAITH",
            next: 999
        },

        {
            text: "I want to increase my knowledge.",
            journey: "GUIDANCE_KNOWLEDGE",
            next: 999
        },

        {
            text: "I want to become a better person.",
            journey: "GUIDANCE_SELF_IMPROVEMENT",
            next: 999
        },

        {
            text: "I need wisdom.",
            journey: "GUIDANCE_WISDOM",
            next: 999
        },

        {
            text: "I feel lost.",
            journey: "GUIDANCE_LOST",
            next: 999
        }

    ]
},
{
    id: 5,

    question: "What best describes your heart today?",

    answers: [

        {
            text: "I regret what I've done.",
            journey: "FORGIVENESS_REGRET",
            next: 999
        },

        {
            text: "I'm carrying guilt.",
            journey: "FORGIVENESS_GUILT",
            next: 999
        },

        {
            text: "I want to return to Allah.",
            journey: "FORGIVENESS_RETURN",
            next: 999
        },

        {
            text: "I feel distant from Allah.",
            journey: "FORGIVENESS_DISTANCE",
            next: 999
        },

        {
            text: "I keep falling into the same sins.",
            journey: "FORGIVENESS_REPEATED",
            next: 999
        },

        {
            text: "I need Allah's mercy.",
            journey: "FORGIVENESS_MERCY",
            next: 999
        },

        {
            text: "I genuinely want to change.",
            journey: "FORGIVENESS_CHANGE",
            next: 999
        },

        {
            text: "I need hope.",
            journey: "FORGIVENESS_HOPE",
            next: 999
        }

    ]
},

{
    id: 6,

    question: "What kind of peace are you searching for?",

    answers: [

        {
            text: "Comfort for my heart.",
            journey: "PEACE_COMFORT",
            next: 999
        },

        {
            text: "My mind won't rest.",
            journey: "PEACE_RESTLESS",
            next: 999
        },

        {
            text: "I feel lonely.",
            journey: "PEACE_LONELY",
            next: 999
        },

        {
            text: "I need reassurance.",
            journey: "PEACE_REASSURANCE",
            next: 999
        },

        {
            text: "Patience through hardship.",
            journey: "PEACE_PATIENCE",
            next: 999
        },

        {
            text: "Allah's protection.",
            journey: "PEACE_PROTECTION",
            next: 999
        },

        {
            text: "Strength through hardship.",
            journey: "PEACE_HARDSHIP",
            next: 999
        },

        {
            text: "Closeness to Allah.",
            journey: "PEACE_CLOSENESS",
            next: 999
        }

    ]
},

{
    id: 7,

    question: "What are you most grateful for today?",

    answers: [

        {
            text: "My family.",
            journey: "GRATEFUL_FAMILY",
            next: 999
        },

        {
            text: "My health.",
            journey: "GRATEFUL_HEALTH",
            next: 999
        },

        {
            text: "Allah's blessings.",
            journey: "GRATEFUL_BLESSINGS",
            next: 999
        },

        {
            text: "Remembering Allah.",
            journey: "GRATEFUL_REMEMBRANCE",
            next: 999
        },

        {
            text: "Being able to express gratitude.",
            journey: "GRATEFUL_EXPRESSION",
            next: 999
        },

        {
            text: "Allah's protection.",
            journey: "GRATEFUL_PROTECTION",
            next: 999
        },

        {
            text: "The responsibility Allah has entrusted me with.",
            journey: "GRATEFUL_RESPONSIBILITY",
            next: 999
        },

        {
            text: "The person I'm becoming.",
            journey: "GRATEFUL_GROWTH",
            next: 999
        }

    ]
},

{
    id: 8,

    question: "Where would you like to grow?",

    answers: [

        {
            text: "My character.",
            journey: "GROWTH_CHARACTER",
            next: 999
        },

        {
            text: "My discipline.",
            journey: "GROWTH_DISCIPLINE",
            next: 999
        },

        {
            text: "Overcoming my weaknesses.",
            journey: "GROWTH_WEAKNESSES",
            next: 999
        },

        {
            text: "Drawing closer to Allah.",
            journey: "GROWTH_CLOSENESS",
            next: 999
        },

        {
            text: "Building better habits.",
            journey: "GROWTH_HABITS",
            next: 999
        },

        {
            text: "Being more patient.",
            journey: "GROWTH_PATIENCE",
            next: 999
        },

        {
            text: "Increasing my knowledge.",
            journey: "GROWTH_KNOWLEDGE",
            next: 999
        },

        {
            text: "Becoming a better version of myself.",
            journey: "GROWTH_BETTER_SELF",
            next: 999
        }

    ]
},
{
    id: 9,

    question: "What would you like to reflect on today?",

    answers: [

        {
            text: "Why Allah created us.",
            journey: "REFLECTION_PURPOSE",
            next: 999
        },

        {
            text: "The signs of Allah in creation.",
            journey: "REFLECTION_CREATION",
            next: 999
        },

        {
            text: "The signs Allah places around us every day.",
            journey: "REFLECTION_SIGNS",
            next: 999
        },

        {
            text: "The Hereafter.",
            journey: "REFLECTION_HEREAFTER",
            next: 999
        },

        {
            text: "My faith.",
            journey: "REFLECTION_FAITH",
            next: 999
        },

        {
            text: "Allah's wisdom.",
            journey: "REFLECTION_WISDOM",
            next: 999
        },

        {
            text: "The choices I make in life.",
            journey: "REFLECTION_CHOICES",
            next: 999
        },

        {
            text: "Reflecting on the Holy Qur'an.",
            journey: "REFLECTION_QURAN",
            next: 999
        }

    ]
}

];