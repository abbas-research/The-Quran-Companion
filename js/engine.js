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
function shuffleArray(array){

    const copy = [...array];

    for(let i = copy.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] = [copy[j], copy[i]];

    }

    return copy;

}
function findVerse(journeyId){

    const journey = JOURNEY_MAP.find(
        j => j.primaryJourney === journeyId
    );

    if(!journey){

        console.error("Journey not found:", journeyId);

        return null;

    }

    const storageKey = "queue_" + journeyId;

    let queue = JSON.parse(localStorage.getItem(storageKey));

    if(!queue || queue.length === 0){

        queue = shuffleArray(journey.primaryVerses);

    }

    const reference = queue.shift();

    localStorage.setItem(
        storageKey,
        JSON.stringify(queue)
    );

    const verse = VERSES.find(
        v => v.reference === reference
    );

    return verse || null;

}