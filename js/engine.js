const profile = {

    themes:{},

    emotions:{},

    situations:{},

    keywords:{}

};

function resetProfile(){

    profile.themes = {};

    profile.emotions = {};

    profile.situations = {};

    profile.keywords = {};

}

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

function findVerse(selectedJourneyId){

    const bestVerses = VERSES.filter(verse =>
    verse.journeys &&
    verse.journeys.includes(selectedJourneyId)
);

if(bestVerses.length === 0){

    return VERSES[0];

}

const randomIndex =
    Math.floor(Math.random() * bestVerses.length);

console.log("Selected Verse:", bestVerses[randomIndex]);

return bestVerses[randomIndex];

}