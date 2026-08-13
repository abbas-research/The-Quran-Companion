const app = document.getElementById("app");
let questionHistory = [];
let selectedJourney = "";

showWelcome();

const vocabularyPopup = document.createElement("div");
vocabularyPopup.id = "vocabularyPopup";
document.body.appendChild(vocabularyPopup);

document.addEventListener("click", function(event){
    const word = event.target.closest(".vocabWord");
    if(word){
        const key = word.dataset.word;
        const entry = VOCABULARY[key];
        if(!entry) return;
        vocabularyPopup.innerHTML = `
<strong>${word.textContent}</strong>
<br><br>
${entry}
`;
        const rect = word.getBoundingClientRect();
        vocabularyPopup.style.left = window.scrollX + rect.left + "px";
        vocabularyPopup.style.top = window.scrollY + rect.bottom + 12 + "px";
        vocabularyPopup.classList.add("show");
        event.stopPropagation();
        return;
    }
    vocabularyPopup.classList.remove("show");
});

function showWelcome(){
    questionHistory = [];
    selectedJourney = "";
    document.body.classList.add("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    app.innerHTML = `
<div class="topNav">
<div class="siteTitle">
  <img src="Assets/logo/logo.png" alt="Narjis" style="height: 28px; vertical-align: middle;" />
</div>
<div class="navLinks">
<a href="#" style="color:#B8923A;">Home</a>
<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>
<a href="#" onclick="showAbout()">About</a>
<a href="#" onclick="showReferences()">References</a>
<a href="#" onclick="showPrivacy()">Privacy</a>
</div>
</div>
<div class="headerDivider"></div>
<div class="welcome">
<div class="heroOrnament">❈ ✦ ☪ ✦ ❈</div>
<p class="heroIntro">Answer two simple questions, and let a verse of the Holy Qur'an find you.</p>
<p class="coverLabel">Wisdom from Imam Ali (a)</p>
<div class="heroDivider"></div>
<p class="hadith">"Learn the Qur'an, for it is the best of speech. Reflect upon it, for it is the springtime of hearts."</p>
<p class="hadithSource">— Imam Ali ibn Abi Talib (a)<br>Nahj al-Balagha</p>
<button class="heroButton" onclick="showQuestion(1)">Begin Journey</button>
</div>
    `;
    window.scrollTo(0,0);
}

function showAbout(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    app.innerHTML = `
<div class="topNav">
<div class="siteTitle">
  <img src="Assets/logo/logo.png" alt="Narjis" style="height: 28px; vertical-align: middle;" />
</div>
<div class="navLinks">
<a href="#" onclick="showWelcome()">Home</a>
<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>
<a href="#" style="color:#B8923A;">About</a>
<a href="#" onclick="showReferences()">References</a>
<a href="#" onclick="showPrivacy()">Privacy</a>
</div>
</div>
<div class="headerDivider"></div>
<div class="welcome aboutPage">
<h2>About</h2>
<div class="heroDivider"></div>
<p>This project was created with the sincere hope of helping people reconnect with the Holy Qur'an during moments of hardship, gratitude, uncertainty and reflection.</p>
<p>The Qur'anic translations are presented without alteration. The accompanying reflections are personal writings intended only for encouragement and contemplation. They are <strong>not</strong> tafsir.</p>
<p>If you notice incorrect references, categorisation errors, bugs or typographical mistakes, please let me know.</p>
<div><b>Email</b><p class="emailAddress">muhammad.abbas.research@proton.me</p></div>
<p class="salawat">اللهم صل على محمد وآل محمد وعجل فرجهم</p>
<p>May Allah accept this humble effort and make it beneficial for all who visit.</p>
<button onclick="showWelcome()">Return Home</button>
<div class="footerNote">Created with sincere intention by M M Abbas Raza.</div>
</div>
    `;
    window.scrollTo(0,0);
}

function showReferences(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    app.innerHTML = `
<div class="topNav">
<div class="siteTitle">
  <img src="Assets/logo/logo.png" alt="Narjis" style="height: 28px; vertical-align: middle;" />
</div>
<div class="navLinks">
<a href="#" onclick="showWelcome()">Home</a>
<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>
<a href="#" onclick="showAbout()">About</a>
<a href="#" style="color:#B8923A;">References</a>
<a href="#" onclick="showPrivacy()">Privacy</a>
</div>
</div>
<div class="headerDivider"></div>
<div class="welcome aboutPage">
<h2>References</h2>
<div class="heroDivider"></div>
<h3>Qur'an Translation</h3>
<p>All English Qur'anic translations used throughout this project are taken from:</p>
<p><b>Mohammed Marmaduke Pickthall</b><br><i>The Meaning of the Glorious Koran</i><br>First published in 1930.</p>
<h3>Quran Guidance Database (QGD)</h3>
<p>The Quran Guidance Database (QGD) is the verse categorisation system developed specifically for <strong>Narjis</strong>. Verses are organised according to journeys, themes, emotions, situations and keywords to help users discover relevant passages for reflection.</p>
<h3>Vocabulary</h3>
<p>Vocabulary definitions are original explanatory notes created specifically for this project to help readers understand older English words found in the Pickthall translation.</p>
<h3>Version</h3>
<p>Translation: <strong>Mohammed Marmaduke Pickthall (1930)</strong><br>QGD: <strong>Version 1.0</strong></p>
<button onclick="showWelcome()">Return Home</button>
</div>
    `;
    window.scrollTo(0,0);
}

function showPrivacy(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    window.location.href = "privacy-policy.html";
}

function showVerseOfDay(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    const now = new Date();
    if(now.getHours() < 3) now.setDate(now.getDate() - 1);
    const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
    let savedDate = localStorage.getItem("quran_day");
    let savedVerse = localStorage.getItem("quran_verse");
    if(savedDate !== today){
        savedVerse = Math.floor(Math.random()*VERSES.length);
        localStorage.setItem("quran_day",today);
        localStorage.setItem("quran_verse",savedVerse);
    }
    const verse = VERSES[savedVerse];
    const reflection = DAILY_REFLECTIONS[Math.floor(Math.random()*DAILY_REFLECTIONS.length)];
    app.innerHTML = `
<div class="topNav">
<div class="siteTitle">
  <img src="Assets/logo/logo.png" alt="Narjis" style="height: 28px; vertical-align: middle;" />
</div>
<div class="navLinks">
<a href="#" onclick="showWelcome()">Home</a>
<a href="#" style="color:#B8923A;">Verse of the Day</a>
<a href="#" onclick="showAbout()">About</a>
<a href="#" onclick="showReferences()">References</a>
<a href="#" onclick="showPrivacy()">Privacy</a>
</div>
</div>
<div class="headerDivider"></div>
<div class="resultCard">
<p class="coverLabel">Verse of the Day</p>
<h2>${verse.surahName}</h2>
<h3>${verse.surahNumber}:${verse.ayahStart}${verse.ayahEnd!==verse.ayahStart?"-"+verse.ayahEnd:""}</h3>
<div class="surahDivider">✦ ❈ ✦</div>
<div class="verseCard">${formatVerseWithVocabulary(verse.translation)}</div>
<div class="reflectionCard"><h3>🌿 Today's Reflection</h3><p>${reflection}</p></div>
</div>
    `;
    window.scrollTo(0,0);
}

function formatVerseWithVocabulary(text){
    return text.replace(/\b[A-Za-z]+\b/g, function(match){
        const key = match.toLowerCase();
        if(VOCABULARY[key]){
            return `<span class="vocabWord" data-word="${key}">${match}</span>`;
        }
        return match;
    });
}

function showQuestion(id){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    const question = QUESTIONS.find(q => q.id === id);
    if(id === 999){ showResult(); return; }
    if(!question){ showWelcome(); return; }
    let html = `
<div class="question">
<div class="heroOrnament">❈ ✦ ☪ ✦ ❈</div>
<p class="questionIntro">The Holy Qur'an has accompanied believers through every season of life, and always will. Today, let it accompany you.</p>
<div class="heroDivider"></div>
<p class="questionStep">Question ${question.id === 1 ? "1" : "2"} of 2</p>
<h2 class="questionTitle">${question.id === 1 ? "Which statement feels closest to your heart today?" : question.question}</h2>
    `;
    question.answers.forEach((answer,index)=>{
        const subtitles = {
            "Today has been difficult.":"Feeling overwhelmed or carrying something heavy today.",
            "I've been feeling anxious.":"Worrying about something that lies ahead.",
            "I need guidance.":"Looking for clarity or direction.",
            "I want to turn back to Allah.":"Seeking forgiveness and a fresh beginning.",
            "I'm searching for peace.":"Hoping to find comfort and tranquillity.",
            "Alhamdulillah, I feel grateful today.":"Thankful for Allah's blessings today.",
            "I want to grow as a Muslim.":"Hoping to strengthen my faith and character.",
            "I want to reflect on Allah's signs.":"Reflecting upon His words and His creation."
        };
        html += `
<div class="questionCard" onclick="selectAnswer(${id},${index})">
<div class="questionCardTitle">${answer.text}</div>
<div class="questionCardSubtitle">${subtitles[answer.text] || ""}</div>
</div>
        `;
    });
    if(questionHistory.length>0){
        html += `<div style="margin-top:35px;"><button onclick="goBack()">← Back</button><br><br><button onclick="showWelcome()">Return Home</button></div>`;
    } else {
        html += `<div style="margin-top:35px;"><button onclick="showWelcome()">Return Home</button></div>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

function selectAnswer(questionId, answerIndex){
    const question = QUESTIONS.find(q => q.id === questionId);
    const answer = question.answers[answerIndex];
    if(answer.journey){ selectedJourney = answer.journey; }
    questionHistory.push(questionId);
    showQuestion(answer.next);
}

function goBack(){
    if(questionHistory.length===0){ showWelcome(); return; }
    const previousQuestion = questionHistory.pop();
    showQuestion(previousQuestion);
}

function showResult(){
    document.body.classList.remove("homePage");
    app.innerHTML = `
<div class="welcome loadingCard">
<div class="loadingCircle"></div>
<div class="loadingOrnament">✦ ❈ ☪ ❈ ✦</div>
<h2>Finding Guidance...</h2>
<div class="loadingDivider"></div>
<p class="loadingVerse">"Remember Me; I will remember you."</p>
<p class="loadingReference">The Qur'an 2:152</p>
<p class="loadingMessage">Take a quiet moment before continuing.</p>
</div>
    `;
    window.scrollTo(0,0);
    setTimeout(renderResult,2200);
}

function renderResult(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => window.scrollTo(0,0));
    const verse = findVerse(selectedJourney);
    if(!verse){
        app.innerHTML = `<div class="resultCard"><h2>No matching verses found.</h2><button onclick="showWelcome()">Return Home</button></div>`;
        return;
    }
    const group = selectedJourney.split("_")[0];
    const reflection = REFLECTIONS[group] || { title: "A Gentle Reminder", text: "Take a quiet moment with this verse and ask Allah to open your heart to His guidance." };
    app.innerHTML = `
<div class="topNav">
<div class="siteTitle">
  <img src="Assets/logo/logo.png" alt="Narjis" style="height: 28px; vertical-align: middle;" />
</div>
<div class="navLinks">
<a href="#" onclick="showWelcome()">Home</a>
<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>
<a href="#" onclick="showAbout()">About</a>
<a href="#" onclick="showReferences()">References</a>
<a href="#" onclick="showPrivacy()">Privacy</a>
</div>
</div>
<div class="headerDivider"></div>
<div class="resultCard">
<h2>${verse.surahName}</h2>
<h3>${verse.surahNumber}:${verse.ayahStart}${verse.ayahEnd !== verse.ayahStart ? "-" + verse.ayahEnd : ""}</h3>
<div class="surahDivider">✦ ❈ ✦</div>
<div class="verseCard">${formatVerseWithVocabulary(verse.translation)}</div>
<div class="reflectionCard"><h3>🌿 A Gentle Reminder</h3><p>${reflection.text}</p></div>
<p class="carryVerse">Take this verse with you today.</p>
<button onclick="showRelatedVerses('${selectedJourney}')">Show More Related Verses</button>
<br><br>
<button onclick="showWelcome()">Return Home</button>
</div>
<div style="margin-top:40px;"><button onclick="showVerseOfDay()">Verse of the Day</button></div>
    `;
    window.scrollTo(0,0);
}

function showRelatedVerses(journey){
    const map = JOURNEY_MAP.find(j => j.primaryJourney === journey);
    if(!map){ showWelcome(); return; }
    const verses = map.otherVerses.map(ref => VERSES.find(v => v.reference === ref)).filter(Boolean);
    let html = `
<div class="topNav">
<div class="siteTitle">
  <img src="Assets/logo/logo.png" alt="Narjis" style="height: 28px; vertical-align: middle;" />
</div>
<div class="navLinks">
<a href="#" onclick="showWelcome()">Home</a>
<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>
<a href="#" onclick="showAbout()">About</a>
<a href="#" onclick="showReferences()">References</a>
<a href="#" onclick="showPrivacy()">Privacy</a>
</div>
</div>
<div class="headerDivider"></div>
<div class="resultCard">
<button onclick="showWelcome()" style="margin-bottom:25px;">← Return Home</button>
<h2>Related Verses</h2>
    `;
    verses.forEach(verse => {
        html += `
<div class="verseCard" style="margin-bottom:30px;">
<h3>${verse.surahName}</h3>
<p>${verse.surahNumber}:${verse.ayahStart}${verse.ayahEnd !== verse.ayahStart ? "-" + verse.ayahEnd : ""}</p>
<div class="surahDivider">✦ ❈ ✦</div>
<p>${formatVerseWithVocabulary(verse.translation)}</p>
</div>
        `;
    });
    html += `<button onclick="showWelcome()">Return Home</button></div>`;
    app.innerHTML = html;
    window.scrollTo(0,0);
}