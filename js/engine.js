const profile = {

    themes:{},

    emotions:{},

    situations:{},

    keywords:{}

};

function addScores(scores){

    if(scores.themes){

        for(const key in scores.themes){

            profile.themes[key] =
                (profile.themes[key] || 0)
                + scores.themes[key];

        }

    }

    if(scores.emotions){

        for(const key in scores.emotions){

            profile.emotions[key] =
                (profile.emotions[key] || 0)
                + scores.emotions[key];

        }

    }

    if(scores.situations){

        for(const key in scores.situations){

            profile.situations[key] =
                (profile.situations[key] || 0)
                + scores.situations[key];

        }

    }

    if(scores.keywords){

        for(const key in scores.keywords){

            profile.keywords[key] =
                (profile.keywords[key] || 0)
                + scores.keywords[key];

        }

    }

}

function getHighestTheme(){

    let highestTheme = "Hope";

    let highestScore = -1;

    for(const theme in profile.themes){

        if(profile.themes[theme] > highestScore){

            highestScore = profile.themes[theme];
            highestTheme = theme;

        }

    }

    return highestTheme;

}

function findVerse(){

    let bestVerse = null;

    let highestScore = -1;

    for(const verse of VERSES){

        let score = 0;

        /* ---------- THEMES ---------- */

        for(const questionnaireTheme in profile.themes){

            const mappedThemes =
                THEME_MAP[questionnaireTheme] || [];

            for(const mappedTheme of mappedThemes){

                if(verse.themes.includes(mappedTheme)){

                    score += profile.themes[questionnaireTheme] * 2;

                }

            }

        }

        /* ---------- EMOTIONS ---------- */

        for(const emotion in profile.emotions){

            if(verse.emotions.includes(emotion)){

                score += profile.emotions[emotion] * 3;

            }

        }

        /* ---------- LIFE SITUATIONS ---------- */

        for(const situation in profile.situations){

            if(verse.lifeSituations.includes(situation)){

                score += profile.situations[situation] * 5;

            }

        }

        /* ---------- KEYWORDS ---------- */

        for(const keyword in profile.keywords){

            if(verse.keywords.includes(keyword)){

                score += profile.keywords[keyword];

            }

        }

        if(score > highestScore){

            highestScore = score;
            bestVerse = verse;

        }

    }

    return bestVerse || VERSES[0];

}