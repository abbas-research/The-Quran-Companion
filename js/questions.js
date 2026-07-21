const QUESTIONS = [

{
    id: 1,

    question: "How would you describe today?",

    answers: [

        {
    text: "I'm struggling",

    scores:{

        themes:{
            Hope:3,
            Patience:3,
            Mercy:2
        },

        emotions:{
            Overwhelmed:3,
            Discouraged:2
        },

        situations:{
    "Hardship":3
},

        keywords:{
            Hope:2
        }

    },

    next:2
},

        {
    text: "I'm anxious",

    scores:{

        themes:{
            Trust:4,
            Peace:3,
            Hope:2
        },

        emotions:{
            Anxious:4,
            Fearful:2
        },

        situations:{
    "Future Uncertainty":3
},

        keywords:{
            Trust:3
        }

    },

    next:3
},

        {
    text: "I'm grateful",

    scores:{

        themes:{
            Gratitude:5,
            Blessings:3
        },

        emotions:{
            Grateful:5
        },

        situations:{
    "Daily Reflection":2
},

        keywords:{
            Gratitude:3
        }

    },

    next:4
},

        {
    text: "I'm looking for guidance",

    scores:{

        themes:{
            Guidance:5,
            Knowledge:3
        },

        emotions:{
            Confused:3,
            Lost:3
        },

        situations:{
    "Seeking Purpose":3
},

        keywords:{
            Guidance:3
        }

    },

    next:5
},

    ]
},

{
    id: 2,

    question: "What hurts the most?",

    answers: [

        {
            text: "My heart",

            scores:{
                themes:{
                    Mercy:3,
                    Hope:2
                },
                emotions:{
                    Heartbroken:4,
                    Lonely:2
                },
                situations:{
    "Heartbreak":3
},
                keywords:{
                    Comfort:2
                }
            },

            next:999
        },

        {
            text:"My family",

            scores:{
                themes:{
                    Patience:3,
                    Mercy:2
                },
                emotions:{
                    Hurt:3
                },
                situations:{
    "Family Conflict":4
},
                keywords:{
                    Family:2
                }
            },

            next:999
        },

        {
            text:"My future",

            scores:{
                themes:{
                    Trust:4,
                    Hope:3
                },
                emotions:{
                    Worried:3,
                    Anxious:3
                },
                situations:{
    "Future Uncertainty":4
},
                keywords:{
                    Rizq:2
                }
            },

            next:999
        },

        {
            text:"I don't know",

            scores:{
                themes:{
                    Guidance:4
                },
                emotions:{
                    Confused:4,
                    Lost:3
                },
                situations:{
    "Seeking Purpose":4
},
                keywords:{
                    Guidance:3
                }
            },

            next:999
        }

    ]
},

{
    id: 3,

    question: "What are you worried about?",

    answers: [

        {
            text: "Money",

            scores:{

                themes:{
                    Trust:4,
                    Hope:2
                },

                emotions:{
                    Anxious:3
                },

                situations:{
                    "Financial Difficulty":5
                },

                keywords:{
                    Rizq:3
                }

            },

            next:999
        },

        {
            text:"Health",

            scores:{

                themes:{
                    Hope:3,
                    Mercy:2
                },

                emotions:{
                    Afraid:3,
                    Anxious:2
                },

                situations:{
                    "Illness":5
                },

                keywords:{
                    Healing:3
                }

            },

            next:999
        },

        {
            text:"The future",

            scores:{

                themes:{
                    Trust:4,
                    Hope:4
                },

                emotions:{
                    Worried:4,
                    Anxious:3
                },

                situations:{
                    "Future Uncertainty":5
                },

                keywords:{
                    Trust:3
                }

            },

            next:999
        },

        {
            text:"Everything",

            scores:{

                themes:{
                    Trust:4,
                    Mercy:3,
                    Hope:3
                },

                emotions:{
                    Overwhelmed:5,
                    Anxious:4
                },

                situations:{
                    "Hardship":5
                },

                keywords:{
                    Comfort:3
                }

            },

            next:999
        }

    ]
},

{
    id: 4,

    question: "What are you grateful for?",

    answers: [

        { text: "Family", next: 999 },
        { text: "Health", next: 999 },
        { text: "Faith", next: 999 },
        { text: "Everything", next: 999 }

    ]
},

{
    id: 5,

    question: "What are you seeking?",

    answers: [

        { text: "Purpose", next: 999 },
        { text: "Knowledge", next: 999 },
        { text: "Forgiveness", next: 999 },
        { text: "Peace", next: 999 }

    ]
}

];