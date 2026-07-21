/*
=========================================================
QURAN GUIDANCE DATABASE (QGD)

Translation Source:
Holy Quran - English Translation
Ali Quli Qara'i

Purpose:
This database indexes Qur'anic verses according to
their themes and the human situations they address.

Rules:

1. Never modify the translation.
2. Never paraphrase the translation.
3. Every translation must match the source exactly.
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
        "You ˹alone˺ we worship and You ˹alone˺ we ask for help. Guide us along the Straight Path, the Path of those You have blessed—not those You are displeased with, or those who are astray.",

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
        "This is the Book! There is no doubt about it—a guide for those mindful ˹of Allah˺.",

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
        "And seek help through patience and prayer. Indeed, it is a burden except for the humble—those who are certain that they will meet their Lord and to Him they will return.",

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
        "Remember Me; I will remember you. And thank Me, and never be ungrateful.",

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
        "O believers! Seek comfort in patience and prayer. Allah is truly with those who are patient.",

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
        "We will certainly test you with a touch of fear and famine and loss of property, life, and crops. Give good news to those who patiently endure—who say, when struck by a disaster, “Surely to Allah we belong and to Him we will ˹all˺ return.”",

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
        "When My servants ask you ˹O Prophet˺ about Me: I am truly near. I respond to one’s prayer when they call upon Me. So let them respond ˹with obedience˺ to Me and believe in Me, perhaps they will be guided ˹to the Right Way˺.",

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
        "Yet there are others who say, “Our Lord! Grant us the good of this world and the Hereafter, and protect us from the torment of the Fire.”",

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
        "Allah! There is no god ˹worthy of worship˺ except Him, the Ever-Living, All-Sustaining. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who could possibly intercede with Him without His permission? He ˹fully˺ knows what is ahead of them and what is behind them, but no one can grasp any of His knowledge—except what He wills ˹to reveal˺. His Seat encompasses the heavens and the earth, and the preservation of both does not tire Him. For He is the Most High, the Greatest.",

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
        "Allah does not require of any soul more than what it can afford. All good will be for its own benefit, and all evil will be to its own loss. ˹The believers pray,˺ “Our Lord! Do not punish us if we forget or make a mistake. Our Lord! Do not place a burden on us like the one you placed on those before us. Our Lord! Do not burden us with what we cannot bear. Pardon us, forgive us, and have mercy on us. You are our ˹only˺ Guardian. So grant us victory over the disbelieving people.”",

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
        "Do not falter or grieve, for you will have the upper hand, if you are ˹true˺ believers.",

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
        "It is out of Allah’s mercy that you ˹O Prophet˺ have been lenient with them. Had you been cruel or hard-hearted, they would have certainly abandoned you. So pardon them, ask Allah’s forgiveness for them, and consult with them in ˹conducting˺ matters. Once you make a decision, put your trust in Allah. Surely Allah loves those who trust in Him.",

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
        "Those who were warned, “Your enemies have mobilized their forces against you, so fear them,” the warning only made them grow stronger in faith and they replied, “Allah ˹alone˺ is sufficient ˹as an aid˺ for us and ˹He˺ is the best Protector.”",

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
        "O believers! Patiently endure, persevere, stand on guard, and be mindful of Allah, so you may be successful.",

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
        "Obey Allah and His Messenger and do not dispute with one another, or you would be discouraged and weakened. Persevere! Surely Allah is with those who persevere.",

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
        "Now Allah has lightened your burden, for He knows that there is weakness in you. So if there are a hundred steadfast among you, they will overcome two hundred. And if there be one thousand, they will overcome two thousand, by Allah’s Will. And Allah is with the steadfast.",

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
        "Say, “Nothing will ever befall us except what Allah has destined for us. He is our Protector.” So in Allah let the believers put their trust.",

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
        "O humanity! Indeed, there has come to you a warning from your Lord, a cure for what is in the hearts, a guide, and a mercy for the believers.",

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
        "There is no moving creature on earth whose provision is not guaranteed by Allah. And He knows where it lives and where it is laid to rest. All is ˹written˺ in a perfect Record.",

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
        "And be patient! Certainly Allah does not discount the reward of the good-doers.",

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
        "And they brought his shirt, stained with false blood. He responded, “No! Your souls must have tempted you to do something ˹evil˺. So ˹I can only endure with˺ beautiful patience! It is Allah’s help that I seek to bear your claims.”",

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
        "He cried, “No! Your souls must have tempted you to do something ˹evil˺. So ˹I am left with nothing but˺ beautiful patience! I trust Allah will return them all to me. Surely He ˹alone˺ is the All-Knowing, All-Wise.”",

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
        "O my sons! Go and search ˹diligently˺ for Joseph and his brother. And do not lose hope in the mercy of Allah, for no one loses hope in Allah’s mercy except those with no faith.",

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
        "For each one there are successive angels before and behind, protecting them by Allah’s command. Indeed, Allah would never change a people’s state ˹of favour˺ until they change their own state ˹of faith˺. And if it is Allah’s Will to torment a people, it can never be averted, nor can they find a protector other than Him.",

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
        "Those who believe and whose hearts find comfort in the remembrance of Allah. Surely in the remembrance of Allah do hearts find comfort.",

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
        "Allah eliminates and confirms what He wills, and with Him is the Master Record.",

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
        "And ˹remember˺ when your Lord proclaimed, ‘If you are grateful, I will certainly give you more. But if you are ungrateful, surely My punishment is severe.’",

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
        "Do you not see how Allah compares a good word to a good tree? Its root is firm and its branches reach the sky, ˹always˺ yielding its fruit in every season by the Will of its Lord. This is how Allah sets forth parables for the people, so perhaps they will be mindful. And the parable of an evil word is that of an evil tree, uprooted from the earth, having no stability. Allah makes the believers steadfast with the firm Word ˹of faith˺ in this worldly life and the Hereafter. And Allah leaves the wrongdoers to stray. For Allah does what He wills.",

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
        "And He has granted you all that you asked Him for. If you tried to count Allah’s blessings, you would never be able to number them. Indeed humankind is truly unfair, ˹totally˺ ungrateful.",

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
        "Do not think ˹O Prophet˺ that Allah is unaware of what the wrongdoers do. He only delays them until a Day when ˹their˺ eyes will stare in horror—rushing forth, heads raised, never blinking, hearts void.",

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
        "Indeed, Allah commands justice, grace, as well as generosity to close relatives. He forbids indecency, wickedness, and aggression. He instructs you so perhaps you will be mindful.",

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
        "Whoever does good, whether male or female, and is a believer, We will surely bless them with a good life, and We will certainly reward them according to the best of their deeds.",

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
        "For your Lord has decreed that you worship none but Him. And honour your parents. If one or both of them reach old age in your care, never say to them ˹even˺ ‘ugh,’ nor yell at them. Rather, address them respectfully. And be humble with them out of mercy, and pray, “My Lord! Be merciful to them as they raised me when I was young.”",

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
        "Tell My ˹believing˺ servants to say only what is best. Satan certainly seeks to sow discord among them. Satan is indeed a sworn enemy to humankind.",

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
        "Indeed, We have dignified the children of Adam, carried them on land and sea, granted them good and lawful provisions, and privileged them far above many of Our creatures.",

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
        "˹Remember˺ when those youths took refuge in the cave, and said, “Our Lord! Grant us mercy from Yourself and guide us rightly through our ordeal.”",

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
        "And patiently stick with those who call upon their Lord morning and evening, seeking His pleasure. Do not let your eyes look beyond them, desiring the luxuries of this worldly life. And do not obey those whose hearts We have made heedless of Our remembrance, who follow ˹only˺ their desires and whose state is ˹total˺ loss.",

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
        "Wealth and children are the adornment of this worldly life, but the everlasting good deeds are far better with your Lord in reward and in hope.",

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
        "Say, ˹O Prophet,˺ “If the ocean were ink for ˹writing˺ the Words of my Lord, it would certainly run out before the Words of my Lord were finished, even if We refilled it with its equal.”",

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
        "Exalted is Allah, the True King! Do not rush to recite ˹a revelation of˺ the Quran ˹O Prophet˺ before it is ˹properly˺ conveyed to you, and pray, “My Lord! Increase me in knowledge.”",

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
        "Moses prayed, “My Lord! Uplift my heart for me, and make my task easy, and remove the impediment from my tongue so people may understand my speech,”",

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
        "Allah reassured ˹them˺, “Have no fear! I am with you, hearing and seeing.”",

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
        "Bid your people to pray, and be diligent in ˹observing˺ it. We do not ask you to provide. It is We Who provide for you. And the ultimate outcome is ˹only˺ for ˹the people of˺ righteousness.",

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
        "And ˹remember˺ when Job cried out to his Lord, “I have been touched with adversity, and You are the Most Merciful of the merciful.” So We answered his prayer and removed his adversity, and gave him back his family, twice as many, as a mercy from Us and a lesson for the ˹devoted˺ worshippers.",

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
        "And ˹remember˺ when the Man of the Whale stormed off ˹from his city˺ in a rage, thinking We would not restrain him. Then in the ˹veils of˺ darkness he cried out, “There is no god ˹worthy of worship˺ except You. Glory be to You! I have certainly done wrong.”",

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
        "And ˹remember˺ when Zachariah cried out to his Lord, “My Lord! Do not leave me childless, though You are the Best of Successors.”",

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
        "We have sent you ˹O Prophet˺ only as a mercy for the whole world.",

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
        "Have they not travelled throughout the land so their hearts may reason, and their ears may listen? Indeed, it is not the eyes that are blind, but it is the hearts in the chests that grow blind.",

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
        "O believers! Bow down, prostrate yourselves, worship your Lord, and do ˹what is˺ good so that you may be successful.",

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
        "And say, “My Lord! I seek refuge in You from the temptations of the devils. And I seek refuge in You, my Lord, that they ˹even˺ come near me.”",

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
        "Do not let the people of virtue and affluence among you swear to suspend donations to their relatives, the needy, and the emigrants in the cause of Allah. Let them pardon and forgive. Do you not love to be forgiven by Allah? And Allah is All-Forgiving, Most Merciful.",

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
        "The ˹true˺ servants of the Most Compassionate are those who walk on the earth humbly, and when the foolish address them ˹improperly˺, they only respond with peace.",

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
        "˹They are˺ those who pray, “Our Lord! Bless us with ˹pious˺ spouses and offspring who will be the joy of our hearts, and make us models for the righteous.”",

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
        "And He ˹alone˺ heals me when I am sick.",

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
        "So Solomon smiled in amusement at her words, and prayed, “My Lord! Inspire me to ˹always˺ be thankful for Your favours which You have blessed me and my parents with, and to do good deeds that please you. Admit me, by Your mercy, into ˹the company of˺ Your righteous servants.”",

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
        "So he watered ˹their herd˺ for them, then withdrew to the shade and prayed, “My Lord! I am truly in ˹desperate˺ need of whatever provision You may have in store for me.”",

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
        "Rather, seek the ˹reward˺ of the Hereafter by means of what Allah has granted you, without forgetting your share of this world. And be good ˹to others˺ as Allah has been good to you. Do not seek to spread corruption in the land, for Allah certainly does not like the corruptors.",

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
        "As for those who struggle in Our cause, We will surely guide them along Our Way. And Allah is certainly with the good-doers.",

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
        "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.",

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
        "“O my dear son! Establish prayer, encourage what is good and forbid what is evil, and endure patiently whatever befalls you. Surely this is a resolve to aspire to. “And do not turn your nose up to people, nor walk pridefully upon the earth. Surely Allah does not like whoever is arrogant, boastful. Be moderate in your pace. And lower your voice, for the ugliest of all voices is certainly the braying of donkeys.”",

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
        "They abandon their beds, invoking their Lord with hope and fear, and donate from what We have provided for them. No soul can imagine what delights are kept in store for them as a reward for what they used to do.",

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
        "Indeed, in the Messenger of Allah you have an excellent example for whoever has hope in Allah and the Last Day, and remembers Allah often.",

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
        "Surely ˹for˺ Muslim men and women, believing men and women, devout men and women, truthful men and women, patient men and women, humble men and women, charitable men and women, fasting men and women, men and women who guard their chastity, and men and women who remember Allah often—for ˹all of˺ them Allah has prepared forgiveness and a great reward.",

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
        "O believers! Be mindful of Allah, and say what is right. He will bless your deeds for you, and forgive your sins. And whoever obeys Allah and His Messenger, has truly achieved a great triumph.",

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
        "Whatever mercy Allah opens up for people, none can withhold it. And whatever He withholds, none but Him can release it. For He is the Almighty, All-Wise.",

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
        "O humanity! It is you who stand in need of Allah, but Allah ˹alone˺ is the Self-Sufficient, Praiseworthy.",

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
        "All it takes, when He wills something ˹to be˺, is simply to say to it: “Be!” And it is!",

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
        "Say ˹O Prophet, that Allah says˺, “O My servants who believe! Be mindful of your Lord. Those who do good in this world will have a good reward. And Allah’s earth is spacious. Only those who endure patiently will be given their reward without limit.”",

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
        "Say, ˹O Prophet, that Allah says,˺ “O My servants who have exceeded the limits against their souls! Do not lose hope in Allah’s mercy, for Allah certainly forgives all sins. He is indeed the All-Forgiving, Most Merciful.",

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
        "And those who were mindful of their Lord will be led to Paradise in ˹successive˺ groups. When they arrive at its ˹already˺ open gates, its keepers will say, “Peace be upon you! You have done well, so come in, to stay forever.”",

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
        "You will remember what I say to you, and I entrust my affairs to Allah. Surely Allah is All-Seeing of all ˹His˺ servants.",

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
        "Your Lord has proclaimed, “Call upon Me, I will respond to you. Surely those who are too proud to worship Me will enter Hell, fully humbled.”",

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
        "Surely those who say, “Our Lord is Allah,” and then remain steadfast, the angels descend upon them, ˹saying,˺ “Do not fear, nor grieve. Rather, rejoice in the good news of Paradise, which you have been promised. We are your supporters in this worldly life and in the Hereafter. There you will have whatever your souls desire, and there you will have whatever you ask for: an accommodation from the All-Forgiving, Most Merciful ˹Lord˺.”",

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
        "Good and evil cannot be equal. Respond ˹to evil˺ with what is best, then the one you are in a feud with will be like a close friend.",

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
        "Whatever affliction befalls you is because of what your own hands have committed. And He pardons much.",

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
        "And whoever endures patiently and forgives—surely this is a resolve to aspire to.",

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
        "But if they turn away, We have not sent you ˹O Prophet˺ as a keeper over them. Your duty is only to deliver ˹the message˺. And indeed, when We let someone taste a mercy from Us, they become prideful ˹because˺ of it. But when afflicted with evil because of what their hands have done, then one becomes totally ungrateful.",

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
        "To Allah ˹alone˺ belongs the kingdom of the heavens and the earth. He creates whatever He wills. He blesses whoever He wills with daughters, and blesses whoever He wills with sons, or grants both, sons and daughters, ˹to whoever He wills˺, and leaves whoever He wills infertile. He is indeed All-Knowing, Most Capable.",

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
        "And whoever turns a blind eye to the Reminder of the Most Compassionate, We place at the disposal of each a devilish one as their close associate,",

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
        "O believers! If you stand up for Allah, He will help you and make your steps firm.",

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
        "The believers are but one brotherhood, so make peace between your brothers. And be mindful of Allah so you may be shown mercy.",

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
        "O believers! Do not let some ˹men˺ ridicule others, they may be better than them, nor let ˹some˺ women ridicule other women, they may be better than them. Do not defame one another, nor call each other by offensive nicknames. How evil it is to act rebelliously after having faith! And whoever does not repent, it is they who are the ˹true˺ wrongdoers.",

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
        "O believers! Avoid many suspicions, ˹for˺ indeed, some suspicions are sinful. And do not spy, nor backbite one another. Would any of you like to eat the flesh of their dead brother? You would despise that! And fear Allah. Surely Allah is ˹the˺ Accepter of Repentance, Most Merciful.",

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
        "Indeed, ˹it is˺ We ˹Who˺ created humankind and ˹fully˺ know what their souls whisper to them, and We are closer to them than ˹their˺ jugular vein.",

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
        "I did not create jinn and humans except to worship Me.",

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
        "Then which of your Lord’s favours will you ˹humans and jinn˺ both deny?",

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
        "Know that this worldly life is no more than play, amusement, luxury, mutual boasting, and competition in wealth and children. This is like rain that causes plants to grow, to the delight of the planters. But later the plants dry up and you see them wither, then they are reduced to chaff. And in the Hereafter there will be either severe punishment or forgiveness and pleasure of Allah, whereas the life of this world is no more than the delusion of enjoyment.",

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
        "O people of faith! Fear Allah and believe in His Messenger. ˹And˺ He will grant you a double share of His mercy, provide you with a light to walk in ˹on Judgment Day˺, and forgive you. For Allah is All-Forgiving, Most Merciful.",

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
        "O believers! Be mindful of Allah and let every soul look to what ˹deeds˺ it has sent forth for tomorrow. And fear Allah, ˹for˺ certainly Allah is All-Aware of what you do.",

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
        "No calamity befalls ˹anyone˺ except by Allah’s Will. And whoever has faith in Allah, He will ˹rightly˺ guide their hearts ˹through adversity˺. And Allah has ˹perfect˺ knowledge of all things.",

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
        "By the morning sunlight, and the night when it falls still! Your Lord ˹O Prophet˺ has not abandoned you, nor has He become hateful ˹of you˺. And the next life is certainly far better for you than this one. And ˹surely˺ your Lord will give so much to you that you will be pleased. Did He not find you as an orphan then sheltered you? Did He not find you unguided then guided you? And did He not find you needy then satisfied your needs? So do not oppress the orphan, nor repulse the beggar. And proclaim the blessings of your Lord.",

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
        "Have We not uplifted your heart for you ˹O Prophet˺, relieved you of the burden which weighed so heavily on your back, and elevated your renown for you? So, surely with hardship comes ease. Surely with ˹that˺ hardship comes ˹more˺ ease. So once you have fulfilled ˹your duty˺, strive ˹in devotion˺, turning to your Lord ˹alone˺ with hope.",

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
        "Exams",
        "Career Challenges",
        "Financial Stress",
        "Illness",
        "Recovery",
        "Long-Term Struggle"
    ],

    keywords: [
        "Hardship",
        "Ease",
        "Patience",
        "Hope",
        "Relief",
        "Perseverance"
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
        "Indeed, We created humans in the best form. But We will reduce them to the lowest of the low ˹in Hell˺, except those who believe and do good—they will have a never-ending reward.",

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
        "Read, ˹O Prophet,˺ in the Name of your Lord Who created— created humans from a clinging clot. Read! And your Lord is the Most Generous, Who taught by the pen—taught humanity what they knew not.",

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
        "Indeed, ˹it is˺ We ˹Who˺ sent this ˹Quran˺ down on the Night of Glory. And what will make you realize what the Night of Glory is? The Night of Glory is better than a thousand months. That night the angels and the ˹holy˺ spirit descend, by the permission of their Lord, for every ˹decreed˺ matter. It is all peace until the break of dawn.",

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
        "So whoever does an atom’s weight of good will see it. And whoever does an atom’s weight of evil will see it.",

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
        "By the ˹passage of˺ time! Surely humanity is in ˹grave˺ loss, except those who have faith, do good, and urge each other to the truth, and urge each other to perseverance.",

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
        "Say, ˹O Prophet,˺ “He is Allah—One ˹and Indivisible˺; Allah—the Sustainer ˹needed by all˺. He has never had offspring, nor was He born. And there is none comparable to Him.”",

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
        "Say, ˹O Prophet,˺ “I seek refuge in the Lord of the daybreak from the evil of whatever He has created, and from the evil of the night when it grows dark, and from the evil of those ˹witches casting spells by˺ blowing onto knots, and from the evil of an envier when they envy.”",

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
        "Say, ˹O Prophet,˺ “I seek refuge in the Lord of humankind, the Master of humankind, the God of humankind, from the evil of the lurking whisperer—who whispers into the hearts of humankind—from among jinn and humankind.”",

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

    relatedVerses: [
        { surah: 23, ayah: "97-98" },
        { surah: 113, ayah: "1-5" }
    ]
},
];