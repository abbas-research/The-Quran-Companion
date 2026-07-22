const QUESTIONS = [

{
    id: 1,

    question: "How would you describe today?",

    answers: [

        {
    text: "I'm struggling",

journey: "STRUGGLE",

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

journey: "ANXIOUS",

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
    journey: "GRATEFUL",

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
    journey: "GUIDANCE",

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
            focus: "HEART",

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
            focus: "FAMILY",

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
            focus: "FUTURE",

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
            focus: "LOST",

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
            focus: "MONEY",

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
            focus: "HEALTH",

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
            focus: "FUTURE",

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
            focus: "EVERYTHING",

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

        {
            text:"Family",
            focus: "FAMILY",

            scores:{

                themes:{
                    Gratitude:5,
                    Mercy:2
                },

                emotions:{
                    Grateful:4
                },

                situations:{
                    "Family Blessings":5
                },

                keywords:{
                    Family:4,
                    Gratitude:3
                }

            },

            next:999
        },

        {
            text:"Health",
            focus: "HEALTH",

            scores:{

                themes:{
                    Gratitude:5,
                    Hope:2
                },

                emotions:{
                    Grateful:4
                },

                situations:{
                    "Health":5
                },

                keywords:{
                    Healing:3,
                    Gratitude:3
                }

            },

            next:999
        },

        {
            text:"Faith",
            focus: "FAITH",

            scores:{

                themes:{
                    Gratitude:4,
                    Trust:4,
                    Guidance:2
                },

                emotions:{
                    Grateful:4
                },

                situations:{
                    "Faith":5
                },

                keywords:{
                    Faith:5
                }

            },

            next:999
        },

        {
            text:"Everything",
            focus: "EVERYTHING",

            scores:{

                themes:{
                    Gratitude:6,
                    Mercy:3,
                    Hope:2
                },

                emotions:{
                    Grateful:5
                },

                situations:{
                    "Daily Reflection":5
                },

                keywords:{
                    Gratitude:5
                }

            },

            next:999
        }

    ]
},

{
    id: 5,

    question: "What are you seeking?",

    answers: [

        {
            text:"Purpose",
            focus: "PURPOSE",

            scores:{

                themes:{
                    Guidance:5
                },

                emotions:{
                    Lost:3,
                    Confused:2
                },

                situations:{
                    "Seeking Guidance":5
                },

                keywords:{
                    Guidance:4
                }

            },

            next:999
        },

        {
            text:"Knowledge",
            focus: "KNOWLEDGE",

            scores:{

                themes:{
                    Guidance:4
                },

                emotions:{
                    Curious:3
                },

                situations:{
                    "Seeking Knowledge":5
                },

                keywords:{
                    Knowledge:5
                }

            },

            next:999
        },

        {
            text:"Forgiveness",
            focus: "FORGIVENESS",

            scores:{

                themes:{
                    Mercy:6
                },

                emotions:{
                    Guilty:4,
                    Regretful:4,
                    "Seeking Forgiveness":3
                },

                situations:{
                    "Seeking Forgiveness":6,
                    "Repentance":5,
                    "After Sin":5,
                    "Returning to Allah":4
                },

                keywords:{
                    Forgiveness:5,
                    Repentance:4,
                    Mercy:3
                }

            },

            next:999
        },

        {
            text:"Peace",
            focus: "PEACE",

            scores:{

                themes:{
                    Peace:6,
                    Trust:2
                },

                emotions:{
                    "Seeking Peace":4
                },

                situations:{
                    "Spiritual Healing":4
                },

                keywords:{
                    Peace:5
                }

            },

            next:999
        }

    ]
}

];