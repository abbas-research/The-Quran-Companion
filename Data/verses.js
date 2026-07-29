/*
=========================================================
QURAN GUIDANCE DATABASE (QGD)

Translation Source:
The Meaning of the Glorious Qur'an
Mohammed Marmaduke Pickthall
First published 1930

Purpose:
This database indexes Qur'anic verses according to
their themes and the human situations they address.

Rules:

1. Never modify the translation.
2. Never paraphrase the translation.
3. Every translation must match Pickthall exactly.
4. Themes are our own indexing.
5. Moods are our own indexing.
6. Life situations are our own indexing.
7. One verse may belong to multiple themes.
=========================================================
*/

const VERSES = [
{
    id: "QGD-0001",

    surahNumber: 1,
    surahName: "Al-Fatihah",

    ayahStart: 5,
    ayahEnd: 7,

    translation:
        "Thee (alone) we worship; Thee (alone) we ask for help. Show us the straight path, The path of those whom Thou hast favoured; Not the (path) of those who earn Thine anger nor of those who go astray.",
    themes: [
        "Guidance",
        "Worship",
        "Reliance on Allah",
        "Straight Path"
    ],

    emotions: [
        "Confused",
        "Lost",
        "Seeking Direction",
        "Need Purpose",
        "Uncertain"
    ],

    lifeSituations: [
        "Major Decision",
        "Career Choice",
        "Marriage",
        "Starting Over",
        "Seeking Guidance"
    ],

    keywords: [
        "Guidance",
        "Straight Path",
        "Worship",
        "Help",
        "Allah"
    ],
    primaryJourney: "STRUGGLE_LOST",

    journeys: [
    "GUIDANCE_PURPOSE",
    "GUIDANCE_KNOWLEDGE",
    "STRUGGLE_LOST"
    ],

    relatedVerses: [
        { surah: 2, ayah: "2" },
        { surah: 20, ayah: "114" }
    ]
},

{
    id: "QGD-0002",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 2,
    ayahEnd: 2,

    translation:
        "This is the Scripture whereof there is no doubt, a guidance unto those who ward off (evil).",

    themes: [
        "Guidance",
        "Faith",
        "Taqwa",
        "Quran"
    ],

    emotions: [
        "Seeking Truth",
        "Curious",
        "Spiritually Lost",
        "Hopeful"
    ],

    lifeSituations: [
        "Learning Islam",
        "Seeking Knowledge",
        "Beginning a Faith Journey"
    ],

    keywords: [
        "Quran",
        "Guidance",
        "Taqwa",
        "Faith"
    ],

    journeys: [
    "GUIDANCE_KNOWLEDGE",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 1, ayah: "5-7" },
        { surah: 20, ayah: "114" }
    ]
},

{
    id: "QGD-0003",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 45,
    ayahEnd: 46,

    translation:
        "Seek help in patience and prayer; and truly it is hard save for the humble- minded, Who know that they will have to meet their Lord, and that unto Him they are returning.",

    themes: [
        "Patience",
        "Prayer",
        "Humility",
        "Reliance on Allah"
    ],

    emotions: [
        "Anxious",
        "Stressed",
        "Overwhelmed",
        "Fearful",
        "Discouraged",
        "Exhausted"
    ],

    lifeSituations: [
        "Financial Difficulty",
        "Illness",
        "Exams",
        "Waiting",
        "Job Search",
        "Hardship"
    ],

    keywords: [
        "Patience",
        "Prayer",
        "Humility",
        "Help"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "ANXIOUS_EVERYTHING",
    "ANXIOUS_HEALTH",
    "ANXIOUS_MONEY"
],

    relatedVerses: [
        { surah: 2, ayah: "153" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0004",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 152,
    ayahEnd: 152,

    translation:
        "Therefore remember Me, I will remember you. Give thanks to Me, and reject not Me.",

    themes: [
        "Gratitude",
        "Remembrance of Allah",
        "Thankfulness"
    ],

    emotions: [
        "Grateful",
        "Happy",
        "Peaceful",
        "Content",
        "Blessed"
    ],

    lifeSituations: [
        "Success",
        "Recovery",
        "Celebration",
        "Daily Reflection"
    ],

    keywords: [
        "Gratitude",
        "Remembrance",
        "Dhikr",
        "Thankfulness"
    ],
    primaryJourney: "GRATEFUL_EVERYTHING",

    journeys: [
    "GRATEFUL_FAITH",
    "GRATEFUL_EVERYTHING",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 14, ayah: "7" },
        { surah: 13, ayah: "28" }
    ]
},

{
    id: "QGD-0005",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 153,
    ayahEnd: 153,

    translation:
        "O ye who believe! Seek help in steadfastness and prayer. Lo! Allah is with the steadfast.",

    themes: [
        "Patience",
        "Prayer",
        "Perseverance",
        "Allah's Support"
    ],

    emotions: [
        "Burnt Out",
        "Anxious",
        "Stressed",
        "Discouraged",
        "Hopeless",
        "Afraid"
    ],

    lifeSituations: [
        "Hardship",
        "Loss",
        "Career Difficulty",
        "Financial Stress",
        "Waiting",
        "Exams"
    ],

    keywords: [
        "Patience",
        "Prayer",
        "Perseverance",
        "Support"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FUTURE",
    "ANXIOUS_EVERYTHING",
    "ANXIOUS_MONEY",
    "ANXIOUS_HEALTH"
],

    relatedVerses: [
        { surah: 2, ayah: "45-46" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0006",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 155,
    ayahEnd: 157,

    translation:
        "And surely We shall try you with something of fear and hunger, and loss of wealth and lives and crops; but give glad tidings to the steadfast, Who say, when a misfortune striketh them: Lo! we are Allah's and lo! unto Him we are returning. Such are they on whom are blessings from their Lord, and mercy. Such are the rightly guided.",

    themes: [
        "Trials",
        "Patience",
        "Acceptance",
        "Hope"
    ],

    emotions: [
        "Grieving",
        "Heartbroken",
        "Fearful",
        "Hopeless",
        "Devastated",
        "Overwhelmed"
    ],

    lifeSituations: [
        "Death of a Loved One",
        "Financial Loss",
        "Illness",
        "Natural Disaster",
        "Hardship"
    ],

    keywords: [
        "Trials",
        "Patience",
        "Disaster",
        "Hope"
    ],
    primaryJourney: "ANXIOUS_HEALTH",

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FAMILY",
    "STRUGGLE_FUTURE",
    "ANXIOUS_HEALTH",
    "ANXIOUS_MONEY",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 94, ayah: "5-6" },
        { surah: 39, ayah: "53" }
    ]
},

{
    id: "QGD-0007",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 186,
    ayahEnd: 186,

    translation:
        "And when My servants question thee concerning Me, then surely I am nigh. I answer the prayer of the suppliant when he crieth unto Me. So let them hear My call and let them trust in Me, in order that they may be led aright.",

    themes: [
        "Du'a",
        "Nearness of Allah",
        "Faith",
        "Hope"
    ],

    emotions: [
        "Lonely",
        "Desperate",
        "Anxious",
        "Hopeful",
        "Heartbroken",
        "Need Comfort"
    ],

    lifeSituations: [
        "Making Du'a",
        "Waiting for an Answer",
        "Family Problems",
        "Financial Stress",
        "Illness",
        "Seeking Guidance"
    ],

    keywords: [
        "Du'a",
        "Prayer",
        "Nearness",
        "Faith"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_LOST",
    "GUIDANCE_PURPOSE",
    "GUIDANCE_FORGIVENESS",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 13, ayah: "28" },
        { surah: 39, ayah: "53" }
    ]
},

{
    id: "QGD-0008",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 201,
    ayahEnd: 201,

    translation:
        'And of them (also) is he who saith: "Our Lord! Give unto us in the world that which is good and in the Hereafter that which is good, and guard us from the doom of Fire."',

    themes: [
        "Balanced Life",
        "Du'a",
        "Hereafter",
        "Hope"
    ],

    emotions: [
        "Hopeful",
        "Content",
        "Thankful",
        "Seeking Blessings"
    ],

    lifeSituations: [
        "Making Du'a",
        "Life Planning",
        "Seeking Success",
        "Seeking Protection"
    ],

    keywords: [
        "Dua",
        "World",
        "Hereafter",
        "Blessings"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GRATEFUL_EVERYTHING",
    "GRATEFUL_FAITH"
],

    relatedVerses: [
        { surah: 2, ayah: "186" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0009",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 255,
    ayahEnd: 255,

    translation:
        "Allah! There is no God save Him, the Alive, the Eternal. Neither slumber nor sleep overtaketh Him. Unto Him belongeth whatsoever is in the heavens and whatsoever is in the earth. Who is he that intercedeth with Him save by His leave? He knoweth that which is in front of them and that which is behind them, while they encompass nothing of His knowledge save what He will. His throne includeth the heavens and the earth, and He is never weary of preserving them. He is the Sublime, the Tremendous.",

    themes: [
        "Allah's Greatness",
        "Tawhid",
        "Protection",
        "Knowledge"
    ],

    emotions: [
        "Fearful",
        "Anxious",
        "Need Security",
        "Amazed",
        "Hopeful"
    ],

    lifeSituations: [
        "Seeking Protection",
        "Night Reflection",
        "Strengthening Faith",
        "General Guidance"
    ],

    keywords: [
        "Ayat al-Kursi",
        "Allah",
        "Protection",
        "Knowledge",
        "Tawhid"
    ],

    journeys: [
        "GUIDANCE_PEACE",
        "ANXIOUS_EVERYTHING",
        "GRATEFUL_FAITH"
    ],

    relatedVerses: [
        { surah: 112, ayah: "1-4" },
        { surah: 50, ayah: "16" }
    ]
},

{
    id: "QGD-0010",

    surahNumber: 2,
    surahName: "Al-Baqarah",

    ayahStart: 286,
    ayahEnd: 286,

    translation:
    "Allah tasketh not a soul beyond its scope. For it (is only) that which it hath earned, and against it (only) that which it hath deserved. Our Lord! Condemn us not if we forget, or miss the mark! Our Lord! Lay not on us such a burden as thou didst lay on those before us! Our Lord! Impose not on us that which we have not the strength to bear! Pardon us, absolve us and have mercy on us, Thou, our Protector, and give us victory over the disbelieving folk.",

    themes: [
        "Hope",
        "Mercy",
        "Forgiveness",
        "Strength",
        "Du'a"
    ],

    emotions: [
        "Overwhelmed",
        "Anxious",
        "Hopeless",
        "Guilty",
        "Need Strength",
        "Need Mercy"
    ],

    lifeSituations: [
        "Heavy Burden",
        "Personal Struggle",
        "Repentance",
        "Hardship",
        "Seeking Forgiveness"
    ],

    keywords: [
        "Mercy",
        "Forgiveness",
        "Strength",
        "Burden",
        "Du'a"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FUTURE",
    "ANXIOUS_MONEY",
    "ANXIOUS_HEALTH",
    "ANXIOUS_FUTURE",
    "ANXIOUS_EVERYTHING",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0011",

    surahNumber: 3,
    surahName: "Aal-E-Imran",

    ayahStart: 139,
    ayahEnd: 139,

    translation:
    "Faint not nor grieve, for ye will overcome them if ye are (indeed) believers.",

    themes: [
        "Hope",
        "Resilience",
        "Faith",
        "Courage"
    ],

    emotions: [
        "Sad",
        "Grieving",
        "Discouraged",
        "Defeated",
        "Hopeless",
        "Fearful"
    ],

    lifeSituations: [
        "Failure",
        "Loss",
        "Setback",
        "Personal Challenge",
        "Recovering from Defeat"
    ],

    keywords: [
        "Hope",
        "Faith",
        "Victory",
        "Strength",
        "Courage"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FUTURE",
    "ANXIOUS_FUTURE",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 94, ayah: "5-6" },
        { surah: 2, ayah: "286" }
    ]
},

{
    id: "QGD-0012",

    surahNumber: 3,
    surahName: "Aal-E-Imran",

    ayahStart: 159,
    ayahEnd: 159,

    translation:
    "It was by the mercy of Allah that thou wast lenient with them (O Muhammad), for if thou hadst been stern and fierce of heart they would have dispersed from round about thee. So pardon them and ask forgiveness for them and consult with them upon the conduct of affairs. And when thou art resolved, then put thy trust in Allah. Lo! Allah loveth those who put their trust (in Him).",

    themes: [
        "Mercy",
        "Forgiveness",
        "Leadership",
        "Consultation",
        "Trust in Allah"
    ],

    emotions: [
        "Angry",
        "Hurt",
        "Conflicted",
        "Uncertain",
        "Seeking Wisdom"
    ],

    lifeSituations: [
        "Leadership",
        "Family Conflict",
        "Workplace Decisions",
        "Marriage",
        "Major Decision"
    ],

    keywords: [
        "Mercy",
        "Forgiveness",
        "Consultation",
        "Trust",
        "Leadership"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_PEACE",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 42, ayah: "38" },
        { surah: 9, ayah: "51" }
    ]
},

{
    id: "QGD-0013",

    surahNumber: 3,
    surahName: "Aal-E-Imran",

    ayahStart: 173,
    ayahEnd: 173,

    translation:
    "Those unto whom men said: Lo! the people have gathered against you, therefor fear them. (The threat of danger) but increased the faith of them and they cried: Allah is Sufficient for us! Most Excellent is He in Whom we trust!",
   
    themes: [
        "Trust in Allah",
        "Faith",
        "Courage",
        "Reliance"
    ],

    emotions: [
        "Afraid",
        "Anxious",
        "Threatened",
        "Overwhelmed",
        "Fearful"
    ],

    lifeSituations: [
        "Facing Opposition",
        "Danger",
        "Difficult Decision",
        "Pressure",
        "Standing for Truth"
    ],

    keywords: [
        "Hasbunallah",
        "Trust",
        "Protection",
        "Faith"
    ],

    journeys: [
    "ANXIOUS_FUTURE",
    "ANXIOUS_EVERYTHING",
    "ANXIOUS_MONEY",
    "ANXIOUS_HEALTH"
],

    relatedVerses: [
        { surah: 9, ayah: "51" },
        { surah: 2, ayah: "286" }
    ]
},

{
    id: "QGD-0014",

    surahNumber: 3,
    surahName: "Aal-E-Imran",

    ayahStart: 200,
    ayahEnd: 200,

   translation:
    "O ye who believe! Endure, outdo all others in endurance, be ready, and observe your duty to Allah, in order that ye may succeed.",
    themes: [
        "Patience",
        "Perseverance",
        "Success",
        "Taqwa"
    ],

    emotions: [
        "Exhausted",
        "Burnt Out",
        "Discouraged",
        "Determined"
    ],

    lifeSituations: [
        "Long-Term Goal",
        "Studying",
        "Career",
        "Building a Business",
        "Personal Growth"
    ],

    keywords: [
        "Patience",
        "Perseverance",
        "Success",
        "Taqwa"
    ],
    primaryJourney: "ANXIOUS_MONEY",

    journeys: [
    "STRUGGLE_FUTURE",
    "ANXIOUS_FUTURE",
    "ANXIOUS_MONEY",
    "ANXIOUS_HEALTH"
],

    relatedVerses: [
        { surah: 2, ayah: "153" },
        { surah: 11, ayah: "115" }
    ]
},

{
    id: "QGD-0015",

    surahNumber: 8,
    surahName: "Al-Anfal",

    ayahStart: 46,
    ayahEnd: 46,

   translation:
    "And obey Allah and His messenger, and dispute not one with another lest ye falter and your strength depart from you; but be steadfast! Lo! Allah is with the steadfast.",
    
    themes: [
        "Unity",
        "Patience",
        "Obedience",
        "Strength"
    ],

    emotions: [
        "Angry",
        "Frustrated",
        "Discouraged",
        "Divided"
    ],

    lifeSituations: [
        "Marriage",
        "Family Conflict",
        "Teamwork",
        "Workplace",
        "Friendship"
    ],

    keywords: [
        "Unity",
        "Patience",
        "Obedience",
        "Strength"
    ],

    journeys: [
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 49, ayah: "10" },
        { surah: 3, ayah: "200" }
    ]
},

{
    id: "QGD-0016",

    surahNumber: 8,
    surahName: "Al-Anfal",

    ayahStart: 66,
    ayahEnd: 66,

    translation:
    "Now hath Allah lightened your burden, for He knoweth that there is weakness in you. So if there be of you a steadfast hundred they shall overcome two hundred, and if there be of you a thousand (steadfast) they shall overcome two thousand by permission of Allah. Allah is with the steadfast.",
   
    themes: [
        "Mercy",
        "Strength",
        "Steadfastness",
        "Hope"
    ],

    emotions: [
        "Weak",
        "Overwhelmed",
        "Discouraged",
        "Need Strength"
    ],

    lifeSituations: [
        "Heavy Responsibility",
        "Leadership",
        "Personal Struggle",
        "Hardship"
    ],

    keywords: [
        "Strength",
        "Steadfast",
        "Mercy",
        "Victory"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 2, ayah: "286" },
        { surah: 3, ayah: "200" }
    ]
},

{
    id: "QGD-0017",

    surahNumber: 9,
    surahName: "At-Tawbah",

    ayahStart: 51,
    ayahEnd: 51,

    translation:
    "Say: Naught befalleth us save that which Allah hath decreed for us. He is our Protecting Friend. In Allah let believers put their trust!",
    themes: [
        "Trust in Allah",
        "Destiny",
        "Reliance",
        "Faith"
    ],

    emotions: [
        "Anxious",
        "Fearful",
        "Worried",
        "Uncertain"
    ],

    lifeSituations: [
        "Medical Diagnosis",
        "Financial Worry",
        "Travel",
        "Future Uncertainty",
        "Waiting"
    ],

    keywords: [
        "Qadr",
        "Trust",
        "Destiny",
        "Protection"
    ],

    journeys: [
    "ANXIOUS_FUTURE",
    "ANXIOUS_HEALTH",
    "ANXIOUS_MONEY",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 3, ayah: "173" },
        { surah: 65, ayah: "3" }
    ]
},

{
    id: "QGD-0018",

    surahNumber: 10,
    surahName: "Yunus",

    ayahStart: 57,
    ayahEnd: 57,

   translation:
    "O mankind! There hath come unto you an exhortation from your Lord, a balm for that which is in the breasts, a guidance and a mercy for believers.",
    themes: [
        "Healing",
        "Guidance",
        "Mercy",
        "Quran"
    ],

    emotions: [
        "Broken",
        "Depressed",
        "Anxious",
        "Spiritually Empty",
        "Seeking Peace"
    ],

    lifeSituations: [
        "Emotional Pain",
        "Spiritual Healing",
        "Seeking Guidance",
        "Recovering from Loss"
    ],

    keywords: [
        "Healing",
        "Quran",
        "Mercy",
        "Guidance"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_LOST",
    "GUIDANCE_PURPOSE",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 13, ayah: "28" },
        { surah: 2, ayah: "2" }
    ]
},

{
    id: "QGD-0019",

    surahNumber: 11,
    surahName: "Hud",

    ayahStart: 6,
    ayahEnd: 6,

    translation:
    "And there is not a beast in the earth but the sustenance thereof dependeth on Allah. He knoweth its habitation and its repository. All is in a clear Record.",
    themes: [
        "Provision",
        "Trust in Allah",
        "Knowledge of Allah",
        "Reliance"
    ],

    emotions: [
        "Financially Stressed",
        "Anxious",
        "Fearful",
        "Worried"
    ],

    lifeSituations: [
        "Job Search",
        "Business",
        "Debt",
        "Financial Difficulty",
        "Providing for Family"
    ],

    keywords: [
        "Rizq",
        "Provision",
        "Trust",
        "Allah"
    ],

    journeys: [
    "ANXIOUS_MONEY",
    "STRUGGLE_FUTURE"
],

    relatedVerses: [
        { surah: 65, ayah: "3" },
        { surah: 2, ayah: "286" }
    ]
},

{
    id: "QGD-0020",

    surahNumber: 11,
    surahName: "Hud",

    ayahStart: 115,
    ayahEnd: 115,

   translation:
    "And have patience, (O Muhammad), for lo! Allah loseth not the wages of the good.",

    themes: [
        "Patience",
        "Reward",
        "Perseverance",
        "Hope"
    ],

    emotions: [
        "Discouraged",
        "Tired",
        "Burnt Out",
        "Waiting",
        "Need Motivation"
    ],

    lifeSituations: [
        "Long-Term Struggle",
        "Waiting",
        "Studying",
        "Career",
        "Doing Good Without Recognition"
    ],

    keywords: [
        "Patience",
        "Reward",
        "Good Deeds",
        "Hope"
    ],
    primaryJourney: "STRUGGLE_FUTURE",

    journeys: [
    "STRUGGLE_FUTURE",
    "ANXIOUS_FUTURE",
    "ANXIOUS_MONEY",
    "ANXIOUS_HEALTH"
],

    relatedVerses: [
        { surah: 3, ayah: "200" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0021",

    surahNumber: 12,
    surahName: "Yusuf",

    ayahStart: 18,
    ayahEnd: 18,

    translation:
    "And they came with false blood on his shirt. He said: Nay, but your minds have beguiled you into something. (My course is) comely patience. And Allah it is Whose help is to be sought in that (predicament) which ye describe.",
    themes: [
        "Beautiful Patience",
        "Trust in Allah",
        "Resilience",
        "Truth"
    ],

    emotions: [
        "Betrayed",
        "Heartbroken",
        "Wronged",
        "Grieving",
        "Patient"
    ],

    lifeSituations: [
        "False Accusation",
        "Family Conflict",
        "Betrayal",
        "Personal Loss"
    ],

    keywords: [
        "Beautiful Patience",
        "Trust",
        "Truth",
        "Allah"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 12, ayah: "83" },
        { surah: 11, ayah: "115" }
    ]
},

{
    id: "QGD-0022",

    surahNumber: 12,
    surahName: "Yusuf",

    ayahStart: 83,
    ayahEnd: 83,

    translation:
    "He said: Nay, but your minds have beguiled you into something. (My course is) comely patience! It may be that Allah will bring them all unto me. Lo! He, only He, is the Knower, the Wise.",
    themes: [
        "Beautiful Patience",
        "Hope",
        "Trust in Allah",
        "Faith"
    ],

    emotions: [
        "Grieving",
        "Missing Loved Ones",
        "Lonely",
        "Hopeful",
        "Patient"
    ],

    lifeSituations: [
        "Loss",
        "Waiting",
        "Separated from Family",
        "Long-Term Hardship"
    ],

    keywords: [
        "Hope",
        "Beautiful Patience",
        "Trust",
        "Allah"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 12, ayah: "87" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0023",

    surahNumber: 12,
    surahName: "Yusuf",

    ayahStart: 87,
    ayahEnd: 87,

    translation:
    "Go, O my sons, and ascertain concerning Joseph and his brother, and despair not of the Spirit of Allah. Lo! none despaireth of the Spirit of Allah save disbelieving folk.",
    themes: [
        "Hope",
        "Mercy",
        "Faith",
        "Perseverance"
    ],

    emotions: [
        "Hopeless",
        "Depressed",
        "Discouraged",
        "Heartbroken",
        "Need Hope"
    ],

    lifeSituations: [
        "Searching for Someone",
        "Long-Term Difficulty",
        "Waiting",
        "Loss",
        "Recovery"
    ],

    keywords: [
        "Hope",
        "Mercy",
        "Faith",
        "Perseverance"
    ],
    primaryJourney: "STRUGGLE_HEART",

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FUTURE",
    "ANXIOUS_FUTURE",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 94, ayah: "5-6" }
    ]
},

{
    id: "QGD-0024",

    surahNumber: 13,
    surahName: "Ar-Ra'd",

    ayahStart: 11,
    ayahEnd: 11,

    translation:
    "For him are angels ranged before him and behind him, who guard him by Allah's command. Lo! Allah changeth not the condition of a folk until they (first) change that which is in their hearts; and if Allah willeth misfortune for a folk there is none that can repel it, nor have they a defender beside Him.",
    themes: [
        "Personal Responsibility",
        "Change",
        "Protection",
        "Faith"
    ],

    emotions: [
        "Unmotivated",
        "Lost",
        "Seeking Change",
        "Hopeful"
    ],

    lifeSituations: [
        "Self-Improvement",
        "Breaking Bad Habits",
        "New Beginning",
        "Personal Growth"
    ],

    keywords: [
        "Change",
        "Responsibility",
        "Protection",
        "Faith"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "STRUGGLE_LOST"
],

    relatedVerses: [
        { surah: 29, ayah: "69" },
        { surah: 2, ayah: "286" }
    ]
},

{
    id: "QGD-0025",

    surahNumber: 13,
    surahName: "Ar-Ra'd",

    ayahStart: 28,
    ayahEnd: 28,

    translation:
    "Who have believed and whose hearts have rest in the remembrance of Allah. Verily in the remembrance of Allah do hearts find rest!",
    themes: [
        "Remembrance of Allah",
        "Inner Peace",
        "Faith",
        "Comfort"
    ],

    emotions: [
        "Anxious",
        "Stressed",
        "Overthinking",
        "Lonely",
        "Restless"
    ],

    lifeSituations: [
        "Mental Stress",
        "Emotional Struggle",
        "Seeking Peace",
        "Daily Reflection"
    ],

    keywords: [
        "Dhikr",
        "Peace",
        "Comfort",
        "Remembrance"
    ],
    primaryJourney: "GUIDANCE_PEACE",

    journeys: [
    "GUIDANCE_PEACE",
    "STRUGGLE_HEART",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 10, ayah: "57" },
        { surah: 2, ayah: "152" }
    ]
},

{
    id: "QGD-0026",

    surahNumber: 13,
    surahName: "Ar-Ra'd",

    ayahStart: 39,
    ayahEnd: 39,

    translation:
    "Allah effaceth what He will, and establisheth (what He will), and with Him is the source of ordinance.",

    themes: [
        "Allah's Wisdom",
        "Divine Decree",
        "Trust in Allah"
    ],

    emotions: [
        "Uncertain",
        "Confused",
        "Fearful",
        "Need Reassurance"
    ],

    lifeSituations: [
        "Future Uncertainty",
        "Life Changes",
        "Unexpected Events"
    ],

    keywords: [
        "Decree",
        "Wisdom",
        "Allah",
        "Destiny"
    ],

    journeys: [
    "ANXIOUS_FUTURE",
    "STRUGGLE_FUTURE"
],

    relatedVerses: [
        { surah: 9, ayah: "51" },
        { surah: 2, ayah: "286" }
    ]
},

{
    id: "QGD-0027",

    surahNumber: 14,
    surahName: "Ibrahim",

    ayahStart: 7,
    ayahEnd: 7,

    translation:
    "And when your Lord proclaimed: If ye give thanks, I will give you more; but if ye are thankless, lo! My punishment is dire.",
    themes: [
        "Gratitude",
        "Blessings",
        "Thankfulness"
    ],

    emotions: [
        "Grateful",
        "Happy",
        "Content",
        "Blessed"
    ],

    lifeSituations: [
        "Success",
        "Achievement",
        "Daily Reflection",
        "Receiving Blessings"
    ],

    keywords: [
        "Gratitude",
        "Blessings",
        "Thankfulness"
    ],

    journeys: [
    "GRATEFUL_EVERYTHING",
    "GRATEFUL_FAITH",
    "GRATEFUL_FAMILY",
    "GRATEFUL_HEALTH"
],

    relatedVerses: [
        { surah: 2, ayah: "152" },
        { surah: 14, ayah: "34" }
    ]
},

{
    id: "QGD-0028",

    surahNumber: 14,
    surahName: "Ibrahim",

    ayahStart: 24,
    ayahEnd: 27,

    translation:
    "Seest thou not how Allah coineth a similitude: A goodly saying, as a goodly tree, its root set firm, its branches reaching into heaven,",
    themes: [
        "Faith",
        "Good Character",
        "Steadfastness",
        "Good Speech"
    ],

    emotions: [
        "Seeking Stability",
        "Inspired",
        "Hopeful"
    ],

    lifeSituations: [
        "Building Character",
        "Teaching Children",
        "Personal Growth",
        "Giving Advice"
    ],

    keywords: [
        "Faith",
        "Steadfastness",
        "Good Word",
        "Tree"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GUIDANCE_KNOWLEDGE",
    "GRATEFUL_FAITH"
],

    relatedVerses: [
        { surah: 41, ayah: "34" },
        { surah: 49, ayah: "11" }
    ]
},

{
    id: "QGD-0029",

    surahNumber: 14,
    surahName: "Ibrahim",

    ayahStart: 34,
    ayahEnd: 34,

    translation:
    "And He giveth you of all ye ask of Him, and if ye would count the bounty of Allah ye cannot reckon it. Lo! man is verily a wrong-doer, an ingrate.",
    themes: [
        "Gratitude",
        "Blessings",
        "Reflection"
    ],

    emotions: [
        "Ungrateful",
        "Grateful",
        "Content",
        "Reflective"
    ],

    lifeSituations: [
        "Daily Reflection",
        "Success",
        "Receiving Blessings"
    ],

    keywords: [
        "Blessings",
        "Gratitude",
        "Reflection"
    ],

    journeys: [
    "GRATEFUL_EVERYTHING",
    "GRATEFUL_HEALTH",
    "GRATEFUL_FAMILY"
],

    relatedVerses: [
        { surah: 14, ayah: "7" },
        { surah: 2, ayah: "152" }
    ]
},

{
    id: "QGD-0030",

    surahNumber: 14,
    surahName: "Ibrahim",

    ayahStart: 42,
    ayahEnd: 43,

   translation:
    "Deem not that Allah is unaware of what the wicked do. He but giveth them a respite till a day when eyes will stare (in terror),\nAs they come hurrying on in fear, their heads upraised, their gaze returning not to them, and their hearts as air.",
    themes: [
        "Justice",
        "Accountability",
        "Hereafter",
        "Divine Wisdom"
    ],

    emotions: [
        "Wronged",
        "Angry",
        "Seeking Justice",
        "Impatient"
    ],

    lifeSituations: [
        "Experiencing Injustice",
        "Oppression",
        "Waiting for Justice"
    ],

    keywords: [
        "Justice",
        "Accountability",
        "Hereafter",
        "Wrongdoers"
    ],

    journeys: [
    "STRUGGLE_HEART"
],

    relatedVerses: [
        { surah: 16, ayah: "90" },
        { surah: 99, ayah: "7-8" }
    ]
},

{
    id: "QGD-0031",

    surahNumber: 16,
    surahName: "An-Nahl",

    ayahStart: 90,
    ayahEnd: 90,

    translation:
    "Lo! Allah enjoineth justice and kindness, and giving to kinsfolk, and forbiddeth lewdness and abomination and wickedness. He exhorteth you in order that ye may take heed.",
    themes: [
        "Justice",
        "Kindness",
        "Generosity",
        "Good Character"
    ],

    emotions: [
        "Angry",
        "Conflicted",
        "Seeking Fairness",
        "Need Wisdom"
    ],

    lifeSituations: [
        "Family Conflict",
        "Workplace Ethics",
        "Leadership",
        "Helping Others"
    ],

    keywords: [
        "Justice",
        "Kindness",
        "Generosity",
        "Character"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 49, ayah: "10" },
        { surah: 17, ayah: "53" }
    ]
},

{
    id: "QGD-0032",

    surahNumber: 16,
    surahName: "An-Nahl",

    ayahStart: 97,
    ayahEnd: 97,

    translation:
    "Whosoever doeth right, whether male or female, and is a believer, him verily we shall quicken with good life, and We shall pay them a recompense in proportion to the best of what they used to do.",
    themes: [
        "Good Deeds",
        "Reward",
        "Faith",
        "Hope"
    ],

    emotions: [
        "Discouraged",
        "Hopeful",
        "Motivated",
        "Inspired"
    ],

    lifeSituations: [
        "Doing Good",
        "Long-Term Effort",
        "Personal Growth",
        "Serving Others"
    ],

    keywords: [
        "Good Deeds",
        "Reward",
        "Faith",
        "Blessings"
    ],

    journeys: [
    "STRUGGLE_FUTURE",
    "GRATEFUL_FAITH",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 11, ayah: "115" },
        { surah: 18, ayah: "46" }
    ]
},

{
    id: "QGD-0033",

    surahNumber: 17,
    surahName: "Al-Isra",

    ayahStart: 23,
    ayahEnd: 24,

    translation:
    "Thy Lord hath decreed, that ye worship none save Him, and (that ye show) kindness to parents. If one of them or both of them attain old age with thee, say not \"Fie\" unto them nor repulse them, but speak unto them a gracious word.\nAnd lower unto them the wing of submission through mercy, and say: My Lord! Have mercy on them both as they did care for me when I was little.",
    themes: [
        "Parents",
        "Kindness",
        "Mercy",
        "Respect"
    ],

    emotions: [
        "Regretful",
        "Grateful",
        "Loving",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "Caring for Parents",
        "Family",
        "Aging Parents",
        "Daily Life"
    ],

    keywords: [
        "Parents",
        "Mercy",
        "Respect",
        "Family"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GRATEFUL_FAMILY",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 31, ayah: "14" },
        { surah: 25, ayah: "74" }
    ]
},

{
    id: "QGD-0034",

    surahNumber: 17,
    surahName: "Al-Isra",

    ayahStart: 53,
    ayahEnd: 53,

    translation:
    "Tell My bondmen to speak that which is kindlier. Lo! the devil soweth discord among them. Lo! the devil is for man an open foe.",

    themes: [
        "Good Speech",
        "Wisdom",
        "Unity",
        "Self-Control"
    ],

    emotions: [
        "Angry",
        "Frustrated",
        "Offended",
        "Seeking Peace"
    ],

    lifeSituations: [
        "Arguments",
        "Marriage",
        "Family Conflict",
        "Friendship",
        "Social Media"
    ],

    keywords: [
        "Speech",
        "Kindness",
        "Unity",
        "Self-Control"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 41, ayah: "34" },
        { surah: 49, ayah: "11" }
    ]
},

{
    id: "QGD-0035",

    surahNumber: 17,
    surahName: "Al-Isra",

    ayahStart: 70,
    ayahEnd: 70,

    translation:
    "Verily we have honoured the Children of Adam. We carry them on the land and the sea, and have made provision of good things for them, and have preferred them above many of those whom We created with a marked preferment.",
    themes: [
        "Human Dignity",
        "Blessings",
        "Honor",
        "Provision"
    ],

    emotions: [
        "Worthless",
        "Ashamed",
        "Grateful",
        "Hopeful"
    ],

    lifeSituations: [
        "Low Self-Esteem",
        "Identity",
        "Self-Reflection",
        "Personal Growth"
    ],

    keywords: [
        "Dignity",
        "Honor",
        "Blessings",
        "Provision"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 95, ayah: "4-6" },
        { surah: 14, ayah: "34" }
    ]
},

{
    id: "QGD-0036",

    surahNumber: 18,
    surahName: "Al-Kahf",

    ayahStart: 10,
    ayahEnd: 10,

   translation:
    "When the young men fled for refuge to the Cave and said: Our Lord! Give us mercy from Thy presence, and shape for us right conduct in our plight.",

    themes: [
        "Guidance",
        "Mercy",
        "Trust in Allah",
        "Du'a"
    ],

    emotions: [
        "Afraid",
        "Anxious",
        "Need Protection",
        "Seeking Guidance"
    ],

    lifeSituations: [
        "Difficult Circumstances",
        "Persecution",
        "Seeking Safety",
        "Major Decision"
    ],

    keywords: [
        "Mercy",
        "Guidance",
        "Protection",
        "Du'a"
    ],

    journeys: [
    "STRUGGLE_LOST",
    "GUIDANCE_PURPOSE",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 2, ayah: "186" },
        { surah: 1, ayah: "5-7" }
    ]
},

{
    id: "QGD-0037",

    surahNumber: 18,
    surahName: "Al-Kahf",

    ayahStart: 28,
    ayahEnd: 28,

    translation:
    "Restrain thyself along with those who cry unto their Lord at morn and evening, seeking His Countenance; and let not thine eyes overlook them, desiring the pomp of the life of the world; and obey not him whose heart We have made heedless of Our remembrance, who followeth his own lust and whose case hath been abandoned.",
    themes: [
        "Patience",
        "Companionship",
        "Remembrance of Allah",
        "Contentment"
    ],

    emotions: [
        "Lonely",
        "Tempted",
        "Distracted",
        "Seeking Belonging"
    ],

    lifeSituations: [
        "Choosing Friends",
        "Peer Pressure",
        "Spiritual Growth",
        "Avoiding Bad Influences"
    ],

    keywords: [
        "Patience",
        "Companionship",
        "Remembrance",
        "Contentment"
    ],

    journeys: [
    "GUIDANCE_PEACE",
    "GUIDANCE_PURPOSE",
    "GRATEFUL_FAITH"
],

    relatedVerses: [
        { surah: 13, ayah: "28" },
        { surah: 49, ayah: "10" }
    ]
},

{
    id: "QGD-0038",

    surahNumber: 18,
    surahName: "Al-Kahf",

    ayahStart: 46,
    ayahEnd: 46,

    translation:
    "Wealth and children are an ornament of the life of the world. But the good deeds which endure are better in thy Lord's sight for reward, and better in respect of hope.",
    themes: [
        "Good Deeds",
        "Hereafter",
        "Worldly Life",
        "Priorities"
    ],

    emotions: [
        "Materialistic",
        "Ambitious",
        "Reflective",
        "Hopeful"
    ],

    lifeSituations: [
        "Career",
        "Wealth",
        "Parenthood",
        "Life Priorities"
    ],

    keywords: [
        "Good Deeds",
        "Wealth",
        "Children",
        "Hereafter"
    ],

    journeys: [
    "ANXIOUS_MONEY",
    "GRATEFUL_FAMILY",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 57, ayah: "20" },
        { surah: 16, ayah: "97" }
    ]
},

{
    id: "QGD-0039",

    surahNumber: 18,
    surahName: "Al-Kahf",

    ayahStart: 109,
    ayahEnd: 109,

    translation:
    "Say: Though the sea became ink for the Words of my Lord, verily the sea would be used up before the Words of my Lord were exhausted, even though We brought the like thereof to help.",
    themes: [
        "Knowledge",
        "Greatness of Allah",
        "Reflection",
        "Humility"
    ],

    emotions: [
        "Curious",
        "Inspired",
        "Humbled",
        "Seeking Knowledge"
    ],

    lifeSituations: [
        "Learning",
        "Studying",
        "Research",
        "Seeking Wisdom"
    ],

    keywords: [
        "Knowledge",
        "Wisdom",
        "Allah",
        "Humility"
    ],

    journeys: [
    "GUIDANCE_KNOWLEDGE"
],

    relatedVerses: [
        { surah: 20, ayah: "114" },
        { surah: 96, ayah: "1-5" }
    ]
},

{
    id: "QGD-0040",

    surahNumber: 20,
    surahName: "Ta-Ha",

    ayahStart: 114,
    ayahEnd: 114,

    translation:
    "Then exalted be Allah, the True King! And hasten not (O Muhammad) with the Qur'an ere its revelation hath been perfected unto thee, and say: My Lord! Increase me in knowledge.",
    themes: [
        "Knowledge",
        "Learning",
        "Humility",
        "Du'a"
    ],

    emotions: [
        "Curious",
        "Confused",
        "Seeking Wisdom",
        "Motivated"
    ],

    lifeSituations: [
        "Studying",
        "Exams",
        "Research",
        "Learning New Skills"
    ],

    keywords: [
        "Knowledge",
        "Learning",
        "Wisdom",
        "Du'a"
    ],

    journeys: [
    "GUIDANCE_KNOWLEDGE"
],

    relatedVerses: [
        { surah: 18, ayah: "109" },
        { surah: 96, ayah: "1-5" }
    ]
},

{
    id: "QGD-0041",

    surahNumber: 20,
    surahName: "Ta-Ha",

    ayahStart: 25,
    ayahEnd: 28,

    translation:
    "(Moses) said: My Lord! relieve my mind\nAnd ease my task for me;\nAnd loose a knot from my tongue,\nThat they may understand my saying.",

    themes: [
        "Du'a",
        "Seeking Ease",
        "Confidence",
        "Reliance on Allah"
    ],

    emotions: [
        "Anxious",
        "Nervous",
        "Overwhelmed",
        "Fearful",
        "Unprepared"
    ],

    lifeSituations: [
        "Job Interview",
        "Public Speaking",
        "Presentation",
        "Exam",
        "Important Meeting",
        "Difficult Conversation"
    ],

    keywords: [
        "Ease",
        "Speech",
        "Confidence",
        "Du'a",
        "Musa"
    ],

    journeys: [
    "ANXIOUS_FUTURE",
    "GUIDANCE_PURPOSE",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 2, ayah: "286" },
        { surah: 20, ayah: "46" }
    ]
},

{
    id: "QGD-0042",

    surahNumber: 20,
    surahName: "Ta-Ha",

    ayahStart: 46,
    ayahEnd: 46,

   translation:
    "He said: Fear not. Lo! I am with you twain, Hearing and Seeing.",

    themes: [
        "Courage",
        "Allah's Presence",
        "Trust in Allah",
        "Reassurance"
    ],

    emotions: [
        "Afraid",
        "Anxious",
        "Threatened",
        "Overwhelmed",
        "Lonely"
    ],

    lifeSituations: [
        "Facing Fear",
        "Danger",
        "Major Challenge",
        "Standing for Truth"
    ],

    keywords: [
        "Fear",
        "Presence",
        "Trust",
        "Reassurance"
    ],

    journeys: [
    "ANXIOUS_HEALTH",
    "ANXIOUS_FUTURE",
    "ANXIOUS_EVERYTHING",
    "STRUGGLE_HEART"
],

    relatedVerses: [
        { surah: 3, ayah: "173" },
        { surah: 9, ayah: "51" }
    ]
},

{
    id: "QGD-0043",

    surahNumber: 20,
    surahName: "Ta-Ha",

    ayahStart: 132,
    ayahEnd: 132,

   translation:
    "And enjoin upon thy people worship, and be constant therein. We ask not of thee a provision: We provided for thee. And the sequel is for righteousness.",
    themes: [
        "Prayer",
        "Provision",
        "Reliance on Allah",
        "Righteousness"
    ],

    emotions: [
        "Financially Stressed",
        "Worried",
        "Overworked",
        "Hopeful"
    ],

    lifeSituations: [
        "Financial Difficulty",
        "Providing for Family",
        "Work-Life Balance",
        "Seeking Rizq"
    ],

    keywords: [
        "Prayer",
        "Provision",
        "Rizq",
        "Righteousness"
    ],

    journeys: [
    "ANXIOUS_MONEY",
    "STRUGGLE_FUTURE",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 11, ayah: "6" },
        { surah: 2, ayah: "153" }
    ]
},

{
    id: "QGD-0044",

    surahNumber: 21,
    surahName: "Al-Anbiya",

    ayahStart: 83,
    ayahEnd: 84,

    translation:
    "And Job, when he cried unto his Lord, (saying): Lo! adversity afflicteth me, and Thou art Most Merciful of all who show mercy.\nThen We heard his prayer and removed that adversity from which he suffered, and We gave him his household (that he had lost) and the like thereof along with them, a mercy from Our store, and a remembrance for the worshippers;",
    themes: [
        "Patience",
        "Mercy",
        "Healing",
        "Du'a"
    ],

    emotions: [
        "Sick",
        "Hopeless",
        "Heartbroken",
        "Exhausted",
        "Grieving"
    ],

    lifeSituations: [
        "Illness",
        "Chronic Disease",
        "Loss",
        "Recovery",
        "Long-Term Hardship"
    ],

    keywords: [
        "Ayyub",
        "Healing",
        "Mercy",
        "Patience"
    ],

    journeys: [
    "ANXIOUS_HEALTH",
    "STRUGGLE_HEART",
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 11, ayah: "115" },
        { surah: 39, ayah: "53" }
    ]
},

{
    id: "QGD-0045",

    surahNumber: 21,
    surahName: "Al-Anbiya",

    ayahStart: 87,
    ayahEnd: 87,

   translation:
    "And (mention) Dhu'n-Nun, when he went off in anger and deemed that We had no power over him, but he cried out in the darkness, saying: There is no God save Thee. Be Thou Glorified! Lo! I have been a wrong-doer.",
    themes: [
        "Repentance",
        "Humility",
        "Forgiveness",
        "Du'a"
    ],

    emotions: [
        "Guilty",
        "Ashamed",
        "Regretful",
        "Broken",
        "Need Forgiveness"
    ],

    lifeSituations: [
        "After Sin",
        "Repentance",
        "Starting Over",
        "Seeking Forgiveness"
    ],

    keywords: [
        "Yunus",
        "Repentance",
        "Forgiveness",
        "Du'a"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "STRUGGLE_HEART"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 2, ayah: "186" }
    ]
},

{
    id: "QGD-0046",

    surahNumber: 21,
    surahName: "Al-Anbiya",

    ayahStart: 89,
    ayahEnd: 89,

    translation:
    "And Zachariah, when he cried unto his Lord: My Lord! Leave me not childless, though Thou art the Best of inheritors.",
    themes: [
        "Du'a",
        "Hope",
        "Family",
        "Trust in Allah"
    ],

    emotions: [
        "Hopeful",
        "Longing",
        "Patient",
        "Heartbroken"
    ],

    lifeSituations: [
        "Wanting Children",
        "Infertility",
        "Making Du'a",
        "Waiting"
    ],

    keywords: [
        "Zakariyya",
        "Children",
        "Hope",
        "Du'a"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GRATEFUL_FAMILY"
],

    relatedVerses: [
        { surah: 25, ayah: "74" },
        { surah: 2, ayah: "186" }
    ]
},

{
    id: "QGD-0047",

    surahNumber: 21,
    surahName: "Al-Anbiya",

    ayahStart: 107,
    ayahEnd: 107,

    translation:
    "We sent thee not save as a mercy for the peoples.",

    themes: [
        "Mercy",
        "Prophethood",
        "Compassion",
        "Guidance"
    ],

    emotions: [
        "Seeking Mercy",
        "Hopeful",
        "Inspired",
        "Comforted"
    ],

    lifeSituations: [
        "Learning About Islam",
        "Seeking Guidance",
        "Personal Reflection"
    ],

    keywords: [
        "Mercy",
        "Prophet",
        "Compassion",
        "Guidance"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 10, ayah: "57" }
    ]
},

{
    id: "QGD-0048",

    surahNumber: 22,
    surahName: "Al-Hajj",

    ayahStart: 46,
    ayahEnd: 46,

    translation:
    "Have they not travelled in the land, and have they hearts wherewith to feel and ears wherewith to hear? For indeed it is not the eyes that grow blind, but it is the hearts, which are within the bosoms, that grow blind.",
    themes: [
        "Reflection",
        "Wisdom",
        "Guidance",
        "Awareness"
    ],

    emotions: [
        "Confused",
        "Spiritually Lost",
        "Reflective",
        "Seeking Truth"
    ],

    lifeSituations: [
        "Self-Reflection",
        "Travel",
        "Learning",
        "Seeking Guidance"
    ],

    keywords: [
        "Heart",
        "Reflection",
        "Wisdom",
        "Guidance"
    ],

    journeys: [
    "STRUGGLE_LOST",
    "GUIDANCE_KNOWLEDGE",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 18, ayah: "109" },
        { surah: 20, ayah: "114" }
    ]
},

{
    id: "QGD-0049",

    surahNumber: 22,
    surahName: "Al-Hajj",

    ayahStart: 77,
    ayahEnd: 77,

    translation:
    "O ye who believe! Bow down and prostrate yourselves, and worship your Lord, and do good, that haply ye may prosper.",

    themes: [
        "Worship",
        "Good Deeds",
        "Success",
        "Submission"
    ],

    emotions: [
        "Unmotivated",
        "Seeking Purpose",
        "Hopeful",
        "Inspired"
    ],

    lifeSituations: [
        "Improving Worship",
        "Seeking Success",
        "Personal Growth",
        "Daily Life"
    ],

    keywords: [
        "Worship",
        "Good Deeds",
        "Success",
        "Salah"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GRATEFUL_FAITH"
],

    relatedVerses: [
        { surah: 16, ayah: "97" },
        { surah: 20, ayah: "132" }
    ]
},

{
    id: "QGD-0050",

    surahNumber: 23,
    surahName: "Al-Mu'minun",

    ayahStart: 97,
    ayahEnd: 98,

    translation:
    "And say: My Lord! I seek refuge in Thee from suggestions of the evil ones,\nAnd I seek refuge in Thee, my Lord, lest they be present with me,",

    themes: [
        "Protection",
        "Du'a",
        "Temptation",
        "Seeking Refuge"
    ],

    emotions: [
        "Tempted",
        "Afraid",
        "Spiritually Weak",
        "Anxious"
    ],

    lifeSituations: [
        "Battling Sin",
        "Breaking Addiction",
        "Seeking Protection",
        "Spiritual Struggle"
    ],

    keywords: [
        "Protection",
        "Temptation",
        "Shaytan",
        "Du'a"
    ],

    journeys: [
    "GUIDANCE_PEACE",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 113, ayah: "1-5" },
        { surah: 114, ayah: "1-6" }
    ]
},

{
    id: "QGD-0051",

    surahNumber: 24,
    surahName: "An-Nur",

    ayahStart: 22,
    ayahEnd: 22,

    translation:
    "And let not those who possess dignity and ease among you swear not to give to the near of kin and to the needy, and to fugitives for the cause of Allah. Let them forgive and show indulgence. Yearn ye not that Allah may forgive you? Allah is Forgiving, Merciful.",
    themes: [
        "Forgiveness",
        "Mercy",
        "Charity",
        "Generosity"
    ],

    emotions: [
        "Angry",
        "Betrayed",
        "Resentful",
        "Hurt",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "Family Conflict",
        "Broken Relationships",
        "Giving Charity",
        "Being Wronged",
        "Letting Go"
    ],

    keywords: [
        "Forgiveness",
        "Mercy",
        "Charity",
        "Pardon",
        "Generosity"
    ],
    primaryJourney: "STRUGGLE_FAMILY",

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 41, ayah: "34" },
        { surah: 39, ayah: "53" }
    ]
},

{
    id: "QGD-0052",

    surahNumber: 25,
    surahName: "Al-Furqan",

    ayahStart: 63,
    ayahEnd: 63,

    translation:
    "The (faithful) slaves of the Beneficent are they who walk upon the earth modestly, and when the foolish ones address them answer: Peace;",
    themes: [
        "Humility",
        "Patience",
        "Good Character",
        "Self-Control"
    ],

    emotions: [
        "Angry",
        "Provoked",
        "Frustrated",
        "Calm",
        "Patient"
    ],

    lifeSituations: [
        "Arguments",
        "Online Abuse",
        "Family Conflict",
        "Workplace Conflict",
        "Difficult People"
    ],

    keywords: [
        "Humility",
        "Peace",
        "Patience",
        "Character"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 17, ayah: "53" },
        { surah: 16, ayah: "90" }
    ]
},

{
    id: "QGD-0053",

    surahNumber: 25,
    surahName: "Al-Furqan",

    ayahStart: 74,
    ayahEnd: 74,

    translation:
    "And who say: Our Lord! Vouchsafe us comfort of our wives and of our offspring, and make us patterns for (all) those who ward off (evil).",

    themes: [
        "Family",
        "Marriage",
        "Children",
        "Du'a"
    ],

    emotions: [
        "Hopeful",
        "Loving",
        "Longing",
        "Grateful"
    ],

    lifeSituations: [
        "Marriage",
        "Finding a Spouse",
        "Parenthood",
        "Starting a Family",
        "Making Du'a"
    ],

    keywords: [
        "Marriage",
        "Children",
        "Family",
        "Du'a",
        "Righteousness"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GRATEFUL_FAMILY"
],

    relatedVerses: [
        { surah: 30, ayah: "21" },
        { surah: 21, ayah: "89" }
    ]
},

{
    id: "QGD-0054",

    surahNumber: 26,
    surahName: "Ash-Shu'ara",

    ayahStart: 80,
    ayahEnd: 80,

    translation:
    "And when I sicken, then He healeth me,",

    themes: [
        "Healing",
        "Trust in Allah",
        "Mercy",
        "Hope"
    ],

    emotions: [
        "Sick",
        "Afraid",
        "Anxious",
        "Hopeful",
        "Weak"
    ],

    lifeSituations: [
        "Illness",
        "Hospital",
        "Recovery",
        "Chronic Disease",
        "Making Du'a"
    ],

    keywords: [
        "Healing",
        "Health",
        "Mercy",
        "Hope"
    ],

    journeys: [
    "ANXIOUS_HEALTH"
],

    relatedVerses: [
        { surah: 21, ayah: "83-84" },
        { surah: 10, ayah: "57" }
    ]
},

{
    id: "QGD-0055",

    surahNumber: 27,
    surahName: "An-Naml",

    ayahStart: 19,
    ayahEnd: 19,

    translation:
    "And (Solomon) smiled, laughing at her speech, and said: My Lord, arouse me to be thankful for Thy favour wherewith Thou hast favoured me and my parents, and to do good that shall be pleasing unto Thee, and include me in (the number of) Thy righteous slaves.",
    themes: [
        "Gratitude",
        "Good Deeds",
        "Mercy",
        "Du'a"
    ],

    emotions: [
        "Grateful",
        "Happy",
        "Blessed",
        "Inspired",
        "Content"
    ],

    lifeSituations: [
        "Success",
        "Receiving Blessings",
        "Daily Reflection",
        "Making Du'a",
        "Personal Growth"
    ],

    keywords: [
        "Gratitude",
        "Blessings",
        "Good Deeds",
        "Mercy",
        "Sulaiman"
    ],

    journeys: [
    "GRATEFUL_FAITH",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 14, ayah: "7" },
        { surah: 2, ayah: "152" }
    ]
},

{
    id: "QGD-0056",

    surahNumber: 28,
    surahName: "Al-Qasas",

    ayahStart: 24,
    ayahEnd: 24,

    translation:
    "So he watered (their flock) for them. Then he turned aside into the shade, and said: My Lord! I am needy of whatever good Thou sendest down for me.",
    themes: [
        "Provision",
        "Du'a",
        "Reliance on Allah",
        "Humility"
    ],

    emotions: [
        "Financially Stressed",
        "Desperate",
        "Hopeful",
        "Exhausted",
        "Needy"
    ],

    lifeSituations: [
        "Job Search",
        "Financial Difficulty",
        "Starting Over",
        "Seeking Rizq",
        "Making Du'a"
    ],

    keywords: [
        "Provision",
        "Rizq",
        "Du'a",
        "Musa",
        "Need"
    ],

    journeys: [
    "ANXIOUS_MONEY",
    "STRUGGLE_FUTURE"
],

    relatedVerses: [
        { surah: 11, ayah: "6" },
        { surah: 20, ayah: "132" }
    ]
},

{
    id: "QGD-0057",

    surahNumber: 28,
    surahName: "Al-Qasas",

    ayahStart: 77,
    ayahEnd: 77,

    translation:
    "But seek the abode of the Hereafter in that which Allah hath given thee and neglect not thy portion of the world, and be thou kind even as Allah hath been kind to thee, and seek not corruption in the earth; lo! Allah loveth not corrupters,",
    themes: [
        "Balance",
        "Hereafter",
        "Kindness",
        "Good Deeds"
    ],

    emotions: [
        "Materialistic",
        "Ambitious",
        "Reflective",
        "Inspired"
    ],

    lifeSituations: [
        "Career",
        "Business",
        "Success",
        "Wealth",
        "Life Priorities"
    ],

    keywords: [
        "Hereafter",
        "Balance",
        "Kindness",
        "Good Deeds",
        "Worldly Life"
    ],

    journeys: [
    "GRATEFUL_EVERYTHING",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 18, ayah: "46" },
        { surah: 57, ayah: "20" }
    ]
},

{
    id: "QGD-0058",

    surahNumber: 29,
    surahName: "Al-'Ankabut",

    ayahStart: 69,
    ayahEnd: 69,

    translation:
    "As for those who strive in Us, We surely guide them to Our paths, and lo! Allah is with the good.",

    themes: [
        "Guidance",
        "Perseverance",
        "Striving",
        "Faith"
    ],

    emotions: [
        "Discouraged",
        "Determined",
        "Hopeful",
        "Lost",
        "Motivated"
    ],

    lifeSituations: [
        "Self-Improvement",
        "Breaking Bad Habits",
        "Long-Term Goals",
        "Personal Growth",
        "Seeking Guidance"
    ],

    keywords: [
        "Striving",
        "Guidance",
        "Perseverance",
        "Good-doers"
    ],

    journeys: [
    "STRUGGLE_LOST",
    "STRUGGLE_FUTURE",
    "GUIDANCE_PURPOSE",
    "GUIDANCE_KNOWLEDGE"
],

    relatedVerses: [
        { surah: 13, ayah: "11" },
        { surah: 3, ayah: "200" }
    ]
},

{
    id: "QGD-0059",

    surahNumber: 30,
    surahName: "Ar-Rum",

    ayahStart: 21,
    ayahEnd: 21,

   translation:
    "And of His signs is this: He created for you helpmeets from yourselves that ye might find rest in them, and He ordained between you love and mercy. Lo! herein indeed are portents for folk who reflect.",
    themes: [
        "Marriage",
        "Love",
        "Compassion",
        "Mercy"
    ],

    emotions: [
        "Lonely",
        "Loved",
        "Hopeful",
        "Grateful",
        "Seeking Marriage"
    ],

    lifeSituations: [
        "Marriage",
        "Looking for a Spouse",
        "Strengthening Marriage",
        "Family Life"
    ],

    keywords: [
        "Marriage",
        "Spouse",
        "Love",
        "Compassion",
        "Mercy"
    ],
    primaryJourney: "GRATEFUL_FAMILY",

    journeys: [
    "STRUGGLE_FAMILY",
    "GRATEFUL_FAMILY",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 25, ayah: "74" },
        { surah: 24, ayah: "26" }
    ]
},

{
    id: "QGD-0060",

    surahNumber: 31,
    surahName: "Luqman",

    ayahStart: 17,
    ayahEnd: 19,

    translation:
    "O my dear son! Establish worship and enjoin kindness and forbid iniquity, and persevere whatever may befall thee. Lo! that is of the steadfast heart of things.\nTurn not thy cheek in scorn toward folk, nor walk with pertness in the land. Lo! Allah loveth not each braggart boaster.\nBe modest in thy bearing and subdue thy voice. Lo! the harshest of all voices is the voice of the ass.",
    themes: [
        "Prayer",
        "Patience",
        "Humility",
        "Good Character",
        "Parenting"
    ],

    emotions: [
        "Proud",
        "Impatient",
        "Seeking Wisdom",
        "Inspired",
        "Motivated"
    ],

    lifeSituations: [
        "Parenting",
        "Raising Children",
        "Personal Growth",
        "Developing Character",
        "Daily Life"
    ],

    keywords: [
        "Prayer",
        "Patience",
        "Humility",
        "Character",
        "Luqman"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GRATEFUL_FAMILY",
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 16, ayah: "90" },
        { surah: 25, ayah: "63" }
    ]
},

{
    id: "QGD-0061",

    surahNumber: 32,
    surahName: "As-Sajdah",

    ayahStart: 16,
    ayahEnd: 17,

   translation:
    "Who forsake their beds to cry unto their Lord in fear and hope, and spend of that We have bestowed on them.\nNo soul knoweth what is kept hid for them of joy, as a reward for what they used to do.",
    themes: [
        "Worship",
        "Hope",
        "Charity",
        "Reward"
    ],

    emotions: [
        "Hopeful",
        "Inspired",
        "Spiritually Motivated",
        "Seeking Closeness to Allah"
    ],

    lifeSituations: [
        "Tahajjud",
        "Night Prayer",
        "Giving Charity",
        "Strengthening Faith"
    ],

    keywords: [
        "Tahajjud",
        "Hope",
        "Fear",
        "Reward",
        "Charity"
    ],

    journeys: [
    "GRATEFUL_FAITH",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 39, ayah: "10" },
        { surah: 2, ayah: "186" }
    ]
},

{
    id: "QGD-0062",

    surahNumber: 33,
    surahName: "Al-Ahzab",

    ayahStart: 21,
    ayahEnd: 21,

    translation:
    "Verily in the messenger of Allah ye have a good example for him who looketh unto Allah and the Last Day, and remembereth Allah much.",

    themes: [
        "Following the Prophet",
        "Hope",
        "Remembrance of Allah",
        "Good Character"
    ],

    emotions: [
        "Seeking Guidance",
        "Inspired",
        "Hopeful",
        "Motivated"
    ],

    lifeSituations: [
        "Improving Character",
        "Learning Islam",
        "Personal Growth",
        "Daily Life"
    ],

    keywords: [
        "Prophet",
        "Example",
        "Hope",
        "Remembrance"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 25, ayah: "63" },
        { surah: 33, ayah: "35" }
    ]
},

{
    id: "QGD-0063",

    surahNumber: 33,
    surahName: "Al-Ahzab",

    ayahStart: 35,
    ayahEnd: 35,

    translation:
    "Lo! men who surrender unto Allah, and women who surrender, and men who believe and women who believe, and men who obey and women who obey, and men who speak the truth and women who speak the truth, and men who persevere (in righteousness) and women who persevere, and men who are humble and women who are humble, and men who give alms and women who give alms, and men who fast and women who fast, and men who guard their modesty and women who guard (their modesty), and men who remember Allah much and women who remember - Allah hath prepared for them forgiveness and a vast reward.",
    themes: [
        "Faith",
        "Good Character",
        "Forgiveness",
        "Reward"
    ],

    emotions: [
        "Hopeful",
        "Motivated",
        "Inspired",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "Personal Growth",
        "Building Character",
        "Strengthening Faith",
        "Repentance"
    ],

    keywords: [
        "Faith",
        "Forgiveness",
        "Reward",
        "Patience",
        "Charity"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "GUIDANCE_PURPOSE",
    "GRATEFUL_FAITH"
],

    relatedVerses: [
        { surah: 16, ayah: "97" },
        { surah: 11, ayah: "115" }
    ]
},

{
    id: "QGD-0064",

    surahNumber: 33,
    surahName: "Al-Ahzab",

    ayahStart: 70,
    ayahEnd: 71,

    translation:
    "O ye who believe! Guard your duty to Allah, and speak words straight to the point;\nHe will adjust your works for you and will forgive you your sins. Whosoever obeyeth Allah and His messenger, he verily hath gained a signal victory.",
    themes: [
        "Truthfulness",
        "Taqwa",
        "Forgiveness",
        "Success"
    ],

    emotions: [
        "Regretful",
        "Seeking Forgiveness",
        "Inspired",
        "Hopeful"
    ],

    lifeSituations: [
        "Arguments",
        "Daily Speech",
        "Leadership",
        "Personal Growth",
        "Repentance"
    ],

    keywords: [
        "Truth",
        "Speech",
        "Taqwa",
        "Forgiveness",
        "Success"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 17, ayah: "53" },
        { surah: 16, ayah: "90" }
    ]
},

{
    id: "QGD-0065",

    surahNumber: 35,
    surahName: "Fatir",

    ayahStart: 2,
    ayahEnd: 2,

    translation:
    "That which Allah openeth unto mankind of mercy none can withhold it; and that which He withholdeth none can release thereafter. He is the Mighty, the Wise.",

    themes: [
        "Mercy",
        "Trust in Allah",
        "Hope",
        "Allah's Wisdom"
    ],

    emotions: [
        "Hopeless",
        "Anxious",
        "Fearful",
        "Hopeful",
        "Waiting"
    ],

    lifeSituations: [
        "Waiting for Rizq",
        "Waiting for Marriage",
        "Waiting for a Visa",
        "Financial Difficulty",
        "Making Du'a"
    ],

    keywords: [
        "Mercy",
        "Hope",
        "Wisdom",
        "Trust",
        "Allah"
    ],
    primaryJourney: "ANXIOUS_FUTURE",

    journeys: [
    "ANXIOUS_MONEY",
    "ANXIOUS_FUTURE",
    "STRUGGLE_FUTURE"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 2, ayah: "186" }
    ]
},

{
    id: "QGD-0066",

    surahNumber: 35,
    surahName: "Fatir",

    ayahStart: 15,
    ayahEnd: 15,

    translation:
    "O mankind! Ye are the poor in your relation to Allah. And Allah! He is the Absolute, the Owner of Praise.",

    themes: [
        "Reliance on Allah",
        "Humility",
        "Allah's Self-Sufficiency",
        "Worship"
    ],

    emotions: [
        "Proud",
        "Lost",
        "Humbled",
        "Dependent",
        "Seeking Allah"
    ],

    lifeSituations: [
        "Self-Reflection",
        "Repentance",
        "Seeking Guidance",
        "Daily Worship"
    ],

    keywords: [
        "Need",
        "Allah",
        "Humility",
        "Reliance",
        "Self-Sufficient"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 51, ayah: "56" },
        { surah: 2, ayah: "21" }
    ]
},

{
    id: "QGD-0067",

    surahNumber: 36,
    surahName: "Ya-Sin",

    ayahStart: 82,
    ayahEnd: 82,

    translation:
    "But His command, when He intendeth a thing, is only that He saith unto it: Be! and it is.",

    themes: [
        "Allah's Power",
        "Hope",
        "Trust in Allah",
        "Divine Will"
    ],

    emotions: [
        "Hopeless",
        "Desperate",
        "Anxious",
        "Hopeful",
        "Inspired"
    ],

    lifeSituations: [
        "Making Du'a",
        "Impossible Situation",
        "Waiting for Relief",
        "Seeking a Miracle"
    ],

    keywords: [
        "Kun Fayakun",
        "Power",
        "Allah",
        "Hope",
        "Divine Will"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "ANXIOUS_EVERYTHING",
    "ANXIOUS_HEALTH",
    "ANXIOUS_FUTURE"
],

    relatedVerses: [
        { surah: 2, ayah: "117" },
        { surah: 39, ayah: "53" }
    ]
},

{
    id: "QGD-0068",

    surahNumber: 39,
    surahName: "Az-Zumar",

    ayahStart: 10,
    ayahEnd: 10,

    translation:
    "Say: O My bondmen who believe! Observe your duty to your Lord. For those who do good in this world there is good, and Allah's earth is spacious. Verily the steadfast will be paid their wages without stint.",
    themes: [
        "Patience",
        "Reward",
        "Taqwa",
        "Hope"
    ],

    emotions: [
        "Discouraged",
        "Exhausted",
        "Hopeful",
        "Patient",
        "Motivated"
    ],

    lifeSituations: [
        "Long-Term Struggle",
        "Migration",
        "Career Difficulty",
        "Hardship",
        "Personal Growth"
    ],

    keywords: [
        "Patience",
        "Reward",
        "Taqwa",
        "Endurance",
        "Hope"
    ],

    journeys: [
    "STRUGGLE_FUTURE",
    "ANXIOUS_HEALTH",
    "ANXIOUS_MONEY",
    "ANXIOUS_FUTURE"
],

    relatedVerses: [
        { surah: 11, ayah: "115" },
        { surah: 3, ayah: "200" }
    ]
},

{
    id: "QGD-0069",

    surahNumber: 39,
    surahName: "Az-Zumar",

    ayahStart: 53,
    ayahEnd: 53,

    translation:
    "Say: O My slaves who have been prodigal to their own hurt! Despair not of the mercy of Allah, Who forgiveth all sins. Lo! He is the Forgiving, the Merciful.",
    themes: [
        "Forgiveness",
        "Mercy",
        "Repentance",
        "Hope"
    ],

    emotions: [
        "Guilty",
        "Ashamed",
        "Hopeless",
        "Broken",
        "Regretful",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "After Sin",
        "Repentance",
        "Returning to Allah",
        "Starting Over",
        "Seeking Mercy"
    ],

    keywords: [
        "Forgiveness",
        "Mercy",
        "Repentance",
        "Hope",
        "Allah"
    ],
    primaryJourney: "GUIDANCE_FORGIVENESS",

    journeys: [
    "STRUGGLE_HEART",
    "GUIDANCE_FORGIVENESS",
    "STRUGGLE_LOST",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 21, ayah: "87" },
        { surah: 2, ayah: "186" }
    ]
},

{
    id: "QGD-0070",

    surahNumber: 39,
    surahName: "Az-Zumar",

    ayahStart: 73,
    ayahEnd: 73,

    translation:
    "And those who keep their duty to their Lord are driven unto the Garden in troops till, when they reach it, and the gates thereof are opened, and the warders thereof say unto them: Peace be unto you! Ye are good, so enter ye (the Garden of delight), to dwell therein;",
    themes: [
        "Paradise",
        "Reward",
        "Hope",
        "Taqwa"
    ],

    emotions: [
        "Hopeful",
        "Inspired",
        "Motivated",
        "Peaceful"
    ],

    lifeSituations: [
        "Seeking Motivation",
        "Personal Growth",
        "Daily Worship",
        "Reflection on the Hereafter"
    ],

    keywords: [
        "Paradise",
        "Jannah",
        "Reward",
        "Taqwa",
        "Peace"
    ],

    journeys: [
    "GRATEFUL_FAITH",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 32, ayah: "16-17" },
        { surah: 16, ayah: "97" }
    ]
},

{
    id: "QGD-0071",

    surahNumber: 40,
    surahName: "Ghafir",

    ayahStart: 44,
    ayahEnd: 44,

    translation:
    "And ye will remember what I say unto you. I confide my cause unto Allah. Lo! Allah is Seer of (His) slaves.",

    themes: [
        "Trust in Allah",
        "Reliance",
        "Patience",
        "Faith"
    ],

    emotions: [
        "Overwhelmed",
        "Anxious",
        "Worried",
        "Hopeful",
        "Seeking Peace"
    ],

    lifeSituations: [
        "Major Decision",
        "Personal Crisis",
        "Financial Stress",
        "Family Problems",
        "Leaving Matters to Allah"
    ],

    keywords: [
        "Trust",
        "Reliance",
        "Allah",
        "Faith",
        "Tawakkul"
    ],

    journeys: [
    "ANXIOUS_EVERYTHING",
    "ANXIOUS_FUTURE",
    "STRUGGLE_FUTURE"
],

    relatedVerses: [
        { surah: 9, ayah: "51" },
        { surah: 3, ayah: "173" }
    ]
},

{
    id: "QGD-0072",

    surahNumber: 40,
    surahName: "Ghafir",

    ayahStart: 60,
    ayahEnd: 60,

    translation:
    "And your Lord hath said: Pray unto Me and I will hear your prayer. Lo! those who scorn My service, they will enter hell, disgraced.",

    themes: [
        "Du'a",
        "Worship",
        "Humility",
        "Hope"
    ],

    emotions: [
        "Desperate",
        "Lonely",
        "Hopeful",
        "Broken",
        "Need Help"
    ],

    lifeSituations: [
        "Making Du'a",
        "Seeking Relief",
        "Hardship",
        "Illness",
        "Personal Crisis"
    ],

    keywords: [
        "Du'a",
        "Prayer",
        "Response",
        "Worship",
        "Humility"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "GUIDANCE_FORGIVENESS",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 2, ayah: "186" },
        { surah: 21, ayah: "87" }
    ]
},

{
    id: "QGD-0073",

    surahNumber: 41,
    surahName: "Fussilat",

    ayahStart: 30,
    ayahEnd: 32,

    translation:
    "Lo! those who say: Our Lord is Allah, and afterward are upright, the angels descend upon them, saying: Fear not nor grieve, but hear good tidings of the paradise which ye are promised.\nWe are your protecting friends in the life of the world and in the Hereafter. There ye will have (all) that your souls desire, and there ye will have (all) for which ye pray.\nA gift of welcome from One Forgiving, Merciful.",
    themes: [
        "Steadfastness",
        "Hope",
        "Paradise",
        "Faith",
        "Comfort"
    ],

    emotions: [
        "Afraid",
        "Grieving",
        "Anxious",
        "Hopeful",
        "Seeking Comfort"
    ],

    lifeSituations: [
        "Bereavement",
        "Illness",
        "Hardship",
        "Remaining Firm in Faith",
        "Needing Reassurance"
    ],

    keywords: [
        "Steadfastness",
        "Paradise",
        "Angels",
        "Hope",
        "Comfort"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "ANXIOUS_HEALTH",
    "ANXIOUS_EVERYTHING",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 39, ayah: "73" },
        { surah: 3, ayah: "200" }
    ]
},

{
    id: "QGD-0074",

    surahNumber: 41,
    surahName: "Fussilat",

    ayahStart: 34,
    ayahEnd: 34,

    translation:
    "The good deed and the evil deed are not alike. Repel the evil deed with one which is better, then lo! he, between whom and thee there was enmity (will become) as though he was a bosom friend.",

    themes: [
        "Forgiveness",
        "Good Character",
        "Kindness",
        "Reconciliation"
    ],

    emotions: [
        "Angry",
        "Hurt",
        "Resentful",
        "Seeking Peace",
        "Frustrated"
    ],

    lifeSituations: [
        "Arguments",
        "Family Conflict",
        "Marriage",
        "Friendship",
        "Workplace Conflict"
    ],

    keywords: [
        "Forgiveness",
        "Kindness",
        "Peace",
        "Character",
        "Reconciliation"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_FORGIVENESS",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 24, ayah: "22" },
        { surah: 25, ayah: "63" }
    ]
},

{
    id: "QGD-0075",

    surahNumber: 42,
    surahName: "Ash-Shura",

    ayahStart: 30,
    ayahEnd: 30,

    translation:
    "Whatever of misfortune striketh you, it is what your right hands have earned. And He forgiveth much.",

    themes: [
        "Accountability",
        "Forgiveness",
        "Reflection",
        "Mercy"
    ],

    emotions: [
        "Regretful",
        "Guilty",
        "Reflective",
        "Seeking Forgiveness",
        "Humbled"
    ],

    lifeSituations: [
        "Repentance",
        "After a Mistake",
        "Self-Reflection",
        "Seeking Allah's Mercy",
        "Personal Growth"
    ],

    keywords: [
        "Accountability",
        "Forgiveness",
        "Mercy",
        "Reflection",
        "Repentance"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 21, ayah: "87" }
    ]
},

{
    id: "QGD-0076",

    surahNumber: 42,
    surahName: "Ash-Shura",

    ayahStart: 43,
    ayahEnd: 43,

    translation:
    "And verily whoso is patient and forgiveth - lo! that, verily, is (of) the steadfast heart of things.",

    themes: [
        "Patience",
        "Forgiveness",
        "Strength",
        "Good Character"
    ],

    emotions: [
        "Angry",
        "Hurt",
        "Betrayed",
        "Resentful",
        "Seeking Peace"
    ],

    lifeSituations: [
        "Family Conflict",
        "Marriage",
        "Friendship",
        "Being Wronged",
        "Letting Go"
    ],

    keywords: [
        "Patience",
        "Forgiveness",
        "Strength",
        "Character",
        "Mercy"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 24, ayah: "22" },
        { surah: 41, ayah: "34" }
    ]
},

{
    id: "QGD-0077",

    surahNumber: 42,
    surahName: "Ash-Shura",

    ayahStart: 48,
    ayahEnd: 48,

    translation:
    "But if they are averse, We have not sent thee as a warder over them. Thine is only to convey (the message). And lo! when We cause man to taste of mercy from Us he exulteth therefor. And if some evil striketh them because of that which their own hands have sent before, then lo! man is an ingrate.",
    themes: [
        "Responsibility",
        "Gratitude",
        "Humility",
        "Accountability"
    ],

    emotions: [
        "Frustrated",
        "Rejected",
        "Proud",
        "Ungrateful",
        "Reflective"
    ],

    lifeSituations: [
        "Giving Advice",
        "Da'wah",
        "Teaching",
        "Self-Reflection",
        "Responding to Rejection"
    ],

    keywords: [
        "Responsibility",
        "Gratitude",
        "Humility",
        "Accountability",
        "Mercy"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 14, ayah: "7" },
        { surah: 16, ayah: "90" }
    ]
},

{
    id: "QGD-0078",

    surahNumber: 42,
    surahName: "Ash-Shura",

    ayahStart: 49,
    ayahEnd: 50,

    translation:
    "Unto Allah belongeth the Sovereignty of the heavens and the earth. He createth what He will. He bestoweth female (offspring) upon whom He will, and bestoweth male (offspring) upon whom He will;\nOr He mingleth them, males and females, and He maketh barren whom He will. Lo! He is Knower, Powerful.",
    themes: [
        "Children",
        "Allah's Wisdom",
        "Family",
        "Divine Decree"
    ],

    emotions: [
        "Hopeful",
        "Heartbroken",
        "Patient",
        "Grateful",
        "Accepting"
    ],

    lifeSituations: [
        "Infertility",
        "Wanting Children",
        "Pregnancy",
        "Family Planning",
        "Trusting Allah"
    ],

    keywords: [
        "Children",
        "Family",
        "Allah's Wisdom",
        "Decree",
        "Provision"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GRATEFUL_FAMILY"
],

    relatedVerses: [
        { surah: 21, ayah: "89" },
        { surah: 25, ayah: "74" }
    ]
},

{
    id: "QGD-0079",

    surahNumber: 43,
    surahName: "Az-Zukhruf",

    ayahStart: 36,
    ayahEnd: 36,

    translation:
    "And he whose sight is dim to the remembrance of the Beneficent, We assign unto him a devil who becometh his comrade;",

    themes: [
        "Remembrance of Allah",
        "Guidance",
        "Spiritual Awareness",
        "Warning"
    ],

    emotions: [
        "Spiritually Lost",
        "Distracted",
        "Tempted",
        "Neglectful",
        "Seeking Guidance"
    ],

    lifeSituations: [
        "Neglecting Worship",
        "Breaking Bad Habits",
        "Returning to Allah",
        "Spiritual Struggle"
    ],

    keywords: [
        "Dhikr",
        "Reminder",
        "Guidance",
        "Shaytan",
        "Warning"
    ],

    journeys: [
    "STRUGGLE_LOST",
    "GUIDANCE_PEACE",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 13, ayah: "28" },
        { surah: 23, ayah: "97-98" }
    ]
},

{
    id: "QGD-0080",

    surahNumber: 47,
    surahName: "Muhammad",

    ayahStart: 7,
    ayahEnd: 7,

    translation:
    "O ye who believe! If ye help Allah, He will help you and will make your foothold firm.",

    themes: [
        "Faith",
        "Courage",
        "Allah's Help",
        "Steadfastness"
    ],

    emotions: [
        "Fearful",
        "Uncertain",
        "Hopeful",
        "Determined",
        "Inspired"
    ],

    lifeSituations: [
        "Standing for Truth",
        "Facing Opposition",
        "Making Difficult Decisions",
        "Personal Struggles",
        "Strengthening Faith"
    ],

    keywords: [
        "Help",
        "Steadfastness",
        "Faith",
        "Victory",
        "Allah"
    ],

    journeys: [
    "STRUGGLE_FUTURE",
    "ANXIOUS_FUTURE",
    "ANXIOUS_EVERYTHING"
],

    relatedVerses: [
        { surah: 3, ayah: "173" },
        { surah: 20, ayah: "46" }
    ]
},

{
    id: "QGD-0081",

    surahNumber: 49,
    surahName: "Al-Hujurat",

    ayahStart: 10,
    ayahEnd: 10,

    translation:
    "The believers are naught else than brothers. Therefore make peace between your brethren and observe your duty to Allah that haply ye may obtain mercy.",

    themes: [
        "Brotherhood",
        "Unity",
        "Peace",
        "Mercy"
    ],

    emotions: [
        "Angry",
        "Divided",
        "Hurt",
        "Seeking Reconciliation",
        "Hopeful"
    ],

    lifeSituations: [
        "Family Conflict",
        "Friendship",
        "Community Disputes",
        "Marriage",
        "Making Peace"
    ],

    keywords: [
        "Brotherhood",
        "Unity",
        "Peace",
        "Mercy",
        "Reconciliation"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 8, ayah: "46" },
        { surah: 41, ayah: "34" }
    ]
},

{
    id: "QGD-0082",

    surahNumber: 49,
    surahName: "Al-Hujurat",

    ayahStart: 11,
    ayahEnd: 11,

   translation:
    "O ye who believe! Let not a folk deride a folk who may be better than they (are), nor let women (deride) women who may be better than they are; neither defame one another, nor insult one another by nicknames. Bad is the name of lewdness after faith. And whoso turneth not in repentance, such are evil-doers.",
    themes: [
        "Respect",
        "Humility",
        "Repentance",
        "Good Character"
    ],

    emotions: [
        "Bullied",
        "Mocked",
        "Ashamed",
        "Proud",
        "Regretful"
    ],

    lifeSituations: [
        "Bullying",
        "School",
        "Workplace",
        "Social Media",
        "Family Relationships"
    ],

    keywords: [
        "Respect",
        "Humility",
        "Bullying",
        "Repentance",
        "Character"
    ],

    journeys: [
    "STRUGGLE_FAMILY",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 25, ayah: "63" },
        { surah: 17, ayah: "53" }
    ]
},

{
    id: "QGD-0083",

    surahNumber: 49,
    surahName: "Al-Hujurat",

    ayahStart: 12,
    ayahEnd: 12,

    translation:
    "O ye who believe! Shun much suspicion; for lo! some suspicion is a crime. And spy not, neither backbite one another. Would one of you love to eat the flesh of his dead brother? Ye abhor that (so abhor the other)! And keep your duty (to Allah). Lo! Allah is Relenting, Merciful.",
    themes: [
        "Backbiting",
        "Repentance",
        "Trust",
        "Good Character"
    ],

    emotions: [
        "Suspicious",
        "Guilty",
        "Regretful",
        "Ashamed",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "Gossip",
        "Workplace",
        "Friendships",
        "Family",
        "Social Gatherings"
    ],

    keywords: [
        "Backbiting",
        "Suspicion",
        "Repentance",
        "Trust",
        "Character"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "STRUGGLE_FAMILY"
],

    relatedVerses: [
        { surah: 24, ayah: "22" },
        { surah: 41, ayah: "34" }
    ]
},

{
    id: "QGD-0084",

    surahNumber: 50,
    surahName: "Qaf",

    ayahStart: 16,
    ayahEnd: 16,

    translation:
    "We verily created man and We know what his soul whispereth to him, and We are nearer to him than his jugular vein.",

    themes: [
        "Allah's Nearness",
        "Knowledge of Allah",
        "Comfort",
        "Faith"
    ],

    emotions: [
        "Lonely",
        "Anxious",
        "Misunderstood",
        "Heartbroken",
        "Seeking Comfort"
    ],

    lifeSituations: [
        "Loneliness",
        "Mental Struggle",
        "Private Du'a",
        "Personal Reflection",
        "Seeking Allah"
    ],

    keywords: [
        "Nearness",
        "Allah",
        "Comfort",
        "Heart",
        "Knowledge"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "ANXIOUS_EVERYTHING",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 2, ayah: "186" },
        { surah: 13, ayah: "28" }
    ]
},

{
    id: "QGD-0085",

    surahNumber: 51,
    surahName: "Adh-Dhariyat",

    ayahStart: 56,
    ayahEnd: 56,

    translation:
    "I created the jinn and humankind only that they might worship Me.",

    themes: [
        "Purpose",
        "Worship",
        "Faith",
        "Meaning of Life"
    ],

    emotions: [
        "Lost",
        "Confused",
        "Empty",
        "Seeking Purpose",
        "Spiritually Searching"
    ],

    lifeSituations: [
        "Identity Crisis",
        "Seeking Purpose",
        "Life Direction",
        "Returning to Faith",
        "Self-Reflection"
    ],

    keywords: [
        "Purpose",
        "Worship",
        "Life",
        "Faith",
        "Allah"
    ],
    primaryJourney: "GUIDANCE_PURPOSE",

    journeys: [
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 1, ayah: "5-7" },
        { surah: 2, ayah: "21" }
    ]
},

{
    id: "QGD-0086",

    surahNumber: 55,
    surahName: "Ar-Rahman",

    ayahStart: 13,
    ayahEnd: 13,

    translation:
    "Which is it, of the favours of your Lord, that ye deny?",

    themes: [
        "Gratitude",
        "Blessings",
        "Reflection",
        "Thankfulness"
    ],

    emotions: [
        "Ungrateful",
        "Grateful",
        "Reflective",
        "Content",
        "Blessed"
    ],

    lifeSituations: [
        "Daily Reflection",
        "Receiving Blessings",
        "Personal Growth",
        "Gratitude Practice"
    ],

    keywords: [
        "Gratitude",
        "Blessings",
        "Favours",
        "Reflection",
        "Thankfulness"
    ],
    primaryJourney: "GRATEFUL_HEALTH",

    journeys: [
    "GRATEFUL_EVERYTHING",
    "GRATEFUL_FAITH",
    "GRATEFUL_HEALTH"
],

    relatedVerses: [
        { surah: 14, ayah: "7" },
        { surah: 14, ayah: "34" }
    ]
},

{
    id: "QGD-0087",

    surahNumber: 57,
    surahName: "Al-Hadid",

    ayahStart: 20,
    ayahEnd: 20,

    translation:
    "Know that the life of the world is only play, and idle talk, and pageantry, and boasting among you, and rivalry in respect of wealth and children; as the likeness of vegetation after rain, whereof the growth is pleasing to the husbandman, but afterward it drieth up and thou seest it turning yellow, then it becometh straw. And in the Hereafter there is grievous punishment, and (also) forgiveness from Allah and His good pleasure, whereas the life of the world is but matter of illusion.",
    themes: [
        "Worldly Life",
        "Hereafter",
        "Priorities",
        "Reflection"
    ],

    emotions: [
        "Materialistic",
        "Distracted",
        "Reflective",
        "Seeking Purpose",
        "Humbled"
    ],

    lifeSituations: [
        "Career",
        "Wealth",
        "Life Priorities",
        "Personal Reflection",
        "Seeking Balance"
    ],

    keywords: [
        "Dunya",
        "Hereafter",
        "Wealth",
        "Reflection",
        "Priorities"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 18, ayah: "46" },
        { surah: 28, ayah: "77" }
    ]
},

{
    id: "QGD-0088",

    surahNumber: 57,
    surahName: "Al-Hadid",

    ayahStart: 28,
    ayahEnd: 28,

    translation:
    "O ye who believe! Be mindful of your duty to Allah and put faith in His messenger. He will give you twofold of His mercy and will appoint for you a light wherein ye shall walk, and will forgive you. Allah is Forgiving, Merciful;",
    themes: [
        "Mercy",
        "Forgiveness",
        "Faith",
        "Guidance"
    ],

    emotions: [
        "Hopeful",
        "Seeking Forgiveness",
        "Inspired",
        "Regretful",
        "Motivated"
    ],

    lifeSituations: [
        "Repentance",
        "Strengthening Faith",
        "Returning to Allah",
        "Personal Growth",
        "Making Du'a"
    ],

    keywords: [
        "Mercy",
        "Forgiveness",
        "Light",
        "Faith",
        "Guidance"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 2, ayah: "186" }
    ]
},

{
    id: "QGD-0089",

    surahNumber: 59,
    surahName: "Al-Hashr",

    ayahStart: 18,
    ayahEnd: 18,

    translation:
    "O ye who believe! Observe your duty to Allah. And let every soul look to that which it sendeth on before for the morrow. And observe your duty to Allah. Lo! Allah is Informed of what ye do.",
    themes: [
        "Self-Reflection",
        "Accountability",
        "Taqwa",
        "Preparation for the Hereafter"
    ],

    emotions: [
        "Reflective",
        "Regretful",
        "Motivated",
        "Hopeful",
        "Humbled"
    ],

    lifeSituations: [
        "Self-Improvement",
        "Daily Reflection",
        "Repentance",
        "Planning for the Hereafter",
        "Personal Growth"
    ],

    keywords: [
        "Reflection",
        "Accountability",
        "Taqwa",
        "Hereafter",
        "Deeds"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "GUIDANCE_FORGIVENESS"
],

    relatedVerses: [
        { surah: 99, ayah: "7-8" },
        { surah: 57, ayah: "20" }
    ]
},

{
    id: "QGD-0090",

    surahNumber: 64,
    surahName: "At-Taghabun",

    ayahStart: 11,
    ayahEnd: 11,

    translation:
    "No calamity befalleth save by Allah's leave. And whosoever believeth in Allah, He guideth his heart. And Allah is Knower of all things.",
    themes: [
        "Trust in Allah",
        "Calamity",
        "Patience",
        "Guidance"
    ],

    emotions: [
        "Grieving",
        "Heartbroken",
        "Anxious",
        "Fearful",
        "Seeking Comfort"
    ],

    lifeSituations: [
        "Loss",
        "Illness",
        "Hardship",
        "Unexpected Tragedy",
        "Recovering from Disaster"
    ],

    keywords: [
        "Calamity",
        "Trust",
        "Guidance",
        "Patience",
        "Faith"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "ANXIOUS_HEALTH",
    "ANXIOUS_EVERYTHING",
    "STRUGGLE_FUTURE"
],

    relatedVerses: [
        { surah: 2, ayah: "155-157" },
        { surah: 2, ayah: "286" }
    ]
},

{
    id: "QGD-0091",

    surahNumber: 93,
    surahName: "Ad-Duhaa",

    ayahStart: 1,
    ayahEnd: 11,

   translation:
    "By the morning hours, And by the night when it is stillest, Thy Lord hath not forsaken thee nor doth He hate thee, And verily the latter portion will be better for thee than the former, And verily thy Lord will give unto thee so that thou wilt be content. Did He not find thee an orphan and protect (thee)? Did He not find thee wandering and direct (thee)? Did He not find thee destitute and enrich (thee)? Therefor the orphan oppress not, Therefor the beggar drive not away, Therefor of the bounty of thy Lord be thy discourse.",
    themes: [
        "Hope",
        "Allah's Care",
        "Gratitude",
        "Mercy",
        "Compassion"
    ],

    emotions: [
        "Depressed",
        "Lonely",
        "Abandoned",
        "Hopeless",
        "Heartbroken",
        "Seeking Comfort",
        "Grateful"
    ],

    lifeSituations: [
        "Feeling Abandoned",
        "Depression",
        "Financial Hardship",
        "Remembering Allah's Blessings",
        "Helping the Needy",
        "Caring for Orphans",
        "Starting Over"
    ],

    keywords: [
        "Hope",
        "Mercy",
        "Blessings",
        "Orphan",
        "Guidance",
        "Provision",
        "Comfort"
    ],

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FUTURE",
    "GRATEFUL_EVERYTHING"
],

    relatedVerses: [
        { surah: 39, ayah: "53" },
        { surah: 2, ayah: "286" },
        { surah: 13, ayah: "28" }
    ]
},

{
    id: "QGD-0092",

    surahNumber: 94,
    surahName: "Ash-Sharh",

    ayahStart: 1,
    ayahEnd: 8,

    translation:
    "Have We not caused thy bosom to dilate, And eased thee of the burden Which weighed down thy back; And exalted thy fame? But lo! with hardship goeth ease, Lo! with hardship goeth ease; So when thou art relieved, still toil And strive to please thy Lord.",
    themes: [
        "Hope",
        "Ease After Hardship",
        "Patience",
        "Perseverance",
        "Reliance on Allah"
    ],

    emotions: [
        "Overwhelmed",
        "Stressed",
        "Anxious",
        "Burnt Out",
        "Discouraged",
        "Hopeless",
        "Need Encouragement"
    ],

    lifeSituations: [
    "Hardship",
    "Long-Term Struggle",
    "Recovery"
    ],

    keywords: [
        "Hardship",
        "Ease",
        "Patience",
        "Hope",
        "Relief",
        "Perseverance"
    ],
    primaryJourney: "ANXIOUS_EVERYTHING",

    journeys: [
    "STRUGGLE_HEART",
    "STRUGGLE_FUTURE",
    "ANXIOUS_EVERYTHING",
    "ANXIOUS_FUTURE"
],

    relatedVerses: [
        { surah: 2, ayah: "155-157" },
        { surah: 3, ayah: "139" },
        { surah: 11, ayah: "115" }
    ]
},

{
    id: "QGD-0093",

    surahNumber: 95,
    surahName: "At-Tin",

    ayahStart: 4,
    ayahEnd: 6,

   translation:
    "Surely We created man of the best stature, Then we reduced him to the lowest of the low, Save those who believe and do good works, and theirs is a reward unfailing.",
    themes: [
        "Human Dignity",
        "Faith",
        "Good Deeds",
        "Reward"
    ],

    emotions: [
        "Worthless",
        "Ashamed",
        "Seeking Purpose",
        "Hopeful",
        "Motivated"
    ],

    lifeSituations: [
        "Low Self-Esteem",
        "Identity Crisis",
        "Personal Growth",
        "Returning to Allah",
        "Doing Good"
    ],

    keywords: [
        "Human Dignity",
        "Faith",
        "Good Deeds",
        "Reward",
        "Creation"
    ],

    journeys: [
    "STRUGGLE_LOST",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 17, ayah: "70" },
        { surah: 16, ayah: "97" }
    ]
},

{
    id: "QGD-0094",

    surahNumber: 96,
    surahName: "Al-'Alaq",

    ayahStart: 1,
    ayahEnd: 5,

    translation:
    "Read: In the name of thy Lord Who createth, Createth man from a clot. Read: And thy Lord is the Most Bounteous, Who teacheth by the pen, Teacheth man that which he knew not.",
    themes: [
        "Knowledge",
        "Learning",
        "Education",
        "Creation"
    ],

    emotions: [
        "Curious",
        "Inspired",
        "Motivated",
        "Seeking Wisdom",
        "Confused"
    ],

    lifeSituations: [
        "Studying",
        "Exams",
        "Research",
        "Learning New Skills",
        "Beginning Education"
    ],

    keywords: [
        "Knowledge",
        "Read",
        "Learning",
        "Pen",
        "Education"
    ],
    primaryJourney: "GUIDANCE_KNOWLEDGE",

    journeys: [
    "GUIDANCE_KNOWLEDGE"
],

    relatedVerses: [
        { surah: 20, ayah: "114" },
        { surah: 18, ayah: "109" }
    ]
},

{
    id: "QGD-0095",

    surahNumber: 97,
    surahName: "Al-Qadr",

    ayahStart: 1,
    ayahEnd: 5,

    translation:
    "Lo! We revealed it on the Night of Predestination. Ah, what will convey unto thee what the Night of Power is! The Night of Power is better than a thousand months. The angels and the Spirit descend therein, by the permission of their Lord, with all decrees. (The night is) Peace until the rising of the dawn.",
    themes: [
        "Laylat al-Qadr",
        "Quran",
        "Blessings",
        "Peace",
        "Mercy"
    ],

    emotions: [
        "Hopeful",
        "Inspired",
        "Spiritually Motivated",
        "Peaceful",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "Ramadan",
        "Laylat al-Qadr",
        "Night Worship",
        "Making Du'a",
        "Seeking Allah's Mercy"
    ],

    keywords: [
        "Laylat al-Qadr",
        "Quran",
        "Peace",
        "Mercy",
        "Angels"
    ],
    primaryJourney: "GRATEFUL_FAITH",

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "GRATEFUL_FAITH"
],

    relatedVerses: [
        { surah: 2, ayah: "186" },
        { surah: 32, ayah: "16-17" }
    ]
},

{
    id: "QGD-0096",

    surahNumber: 99,
    surahName: "Az-Zalzalah",

    ayahStart: 7,
    ayahEnd: 8,

    translation:
    "And whoso doeth good an atom's weight will see it then, And whoso doeth ill an atom's weight will see it then.",

    themes: [
        "Accountability",
        "Good Deeds",
        "Justice",
        "Hereafter"
    ],

    emotions: [
        "Regretful",
        "Reflective",
        "Hopeful",
        "Motivated",
        "Seeking Forgiveness"
    ],

    lifeSituations: [
        "Self-Reflection",
        "Repentance",
        "Daily Decisions",
        "Personal Growth",
        "Preparing for the Hereafter"
    ],

    keywords: [
        "Accountability",
        "Good Deeds",
        "Justice",
        "Hereafter",
        "Actions"
    ],

    journeys: [
    "GUIDANCE_FORGIVENESS",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 59, ayah: "18" },
        { surah: 16, ayah: "97" }
    ]
},

{
    id: "QGD-0097",

    surahNumber: 103,
    surahName: "Al-'Asr",

    ayahStart: 1,
    ayahEnd: 3,

    translation:
    "By the declining day, Lo! man is a state of loss, Save those who believe and do good works, and exhort one another to truth and exhort one another to endurance.",
    themes: [
        "Time",
        "Faith",
        "Good Deeds",
        "Perseverance",
        "Truth"
    ],

    emotions: [
        "Unmotivated",
        "Lost",
        "Reflective",
        "Inspired",
        "Determined"
    ],

    lifeSituations: [
        "Time Management",
        "Personal Growth",
        "Building Good Habits",
        "Encouraging Others",
        "Long-Term Goals"
    ],

    keywords: [
        "Time",
        "Faith",
        "Truth",
        "Perseverance",
        "Good Deeds"
    ],

    journeys: [
    "GUIDANCE_PURPOSE",
    "STRUGGLE_LOST"
],

    relatedVerses: [
        { surah: 3, ayah: "200" },
        { surah: 16, ayah: "97" }
    ]
},

{
    id: "QGD-0098",

    surahNumber: 112,
    surahName: "Al-Ikhlas",

    ayahStart: 1,
    ayahEnd: 4,

    translation:
    "Say: He is Allah, the One! Allah, the eternally Besought of all! He begetteth not nor was begotten. And there is none comparable unto Him.",
    themes: [
        "Tawhid",
        "Allah's Oneness",
        "Faith",
        "Belief"
    ],

    emotions: [
        "Seeking Faith",
        "Reflective",
        "Inspired",
        "Spiritually Searching"
    ],

    lifeSituations: [
        "Learning Islam",
        "Strengthening Faith",
        "Daily Worship",
        "Personal Reflection"
    ],

    keywords: [
        "Tawhid",
        "Allah",
        "Oneness",
        "Faith",
        "Ikhlas"
    ],

    journeys: [
    "GRATEFUL_FAITH",
    "GUIDANCE_PURPOSE"
],

    relatedVerses: [
        { surah: 2, ayah: "255" },
        { surah: 51, ayah: "56" }
    ]
},

{
    id: "QGD-0099",

    surahNumber: 113,
    surahName: "Al-Falaq",

    ayahStart: 1,
    ayahEnd: 5,

    translation:
    "Say: I seek refuge in the Lord of the Daybreak From the evil of that which He created; From the evil of the darkness when it is intense, And from the evil of malignant witchcraft, And from the evil of the envier when he envieth.",
    themes: [
        "Protection",
        "Seeking Refuge",
        "Trust in Allah",
        "Safety"
    ],

    emotions: [
        "Afraid",
        "Anxious",
        "Threatened",
        "Envious of Others",
        "Seeking Protection"
    ],

    lifeSituations: [
        "Fear",
        "Hasad (Envy)",
        "Spiritual Protection",
        "Daily Adhkar",
        "Nighttime Anxiety"
    ],

    keywords: [
        "Protection",
        "Refuge",
        "Envy",
        "Hasad",
        "Al-Falaq"
    ],

    journeys: [
    "ANXIOUS_EVERYTHING",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 23, ayah: "97-98" },
        { surah: 2, ayah: "255" }
    ]
},

{
    id: "QGD-0100",

    surahNumber: 114,
    surahName: "An-Nas",

    ayahStart: 1,
    ayahEnd: 6,

    translation:
    "Say: I seek refuge in the Lord of mankind, The King of mankind, The God of mankind, From the evil of the sneaking whisperer, Who whispereth in the hearts of mankind, Of the jinn and of mankind.",
    themes: [
        "Protection",
        "Seeking Refuge",
        "Whispers of Shaytan",
        "Faith"
    ],

    emotions: [
        "Anxious",
        "Tempted",
        "Fearful",
        "Overthinking",
        "Seeking Peace"
    ],

    lifeSituations: [
        "Intrusive Thoughts",
        "Temptation",
        "Spiritual Struggle",
        "Daily Adhkar",
        "Seeking Allah's Protection"
    ],

    keywords: [
        "Protection",
        "Shaytan",
        "Whispers",
        "Refuge",
        "An-Nas"
    ],

    journeys: [
    "ANXIOUS_EVERYTHING",
    "STRUGGLE_HEART",
    "GUIDANCE_PEACE"
],

    relatedVerses: [
        { surah: 23, ayah: "97-98" },
        { surah: 113, ayah: "1-5" }
    ]
},
];