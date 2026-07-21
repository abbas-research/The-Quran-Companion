const app = document.getElementById("app");

showWelcome();

function showWelcome(){
document.body.classList.add("homePage");
requestAnimationFrame(() => {

    window.scrollTo(0,0);

});
app.innerHTML = `

<div class="topNav">

<div class="siteTitle">

☪ The Quran Companion

</div>

<div class="navLinks">

<a href="#" style="color:#B8923A;">Home</a>

<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>

<a href="#" onclick="showAbout()">About</a>

</div>

</div>

<div class="headerDivider"></div>

<div class="welcome">

<div class="heroOrnament">

❈ ✦ ☪ ✦ ❈

</div>

<p class="heroIntro">

Answer two simple questions, then let a Verse of the Holy Qur'an find you—offering comfort, hope, gratitude, patience, or reflection for where you are today.

</p>

<p class="coverLabel">

Wisdom from Imam Ali (a)

</p>

<div class="heroDivider"></div>

<p class="hadith">

"Learn the Qur'an, for it is the best of speech. Reflect upon it, for it is the springtime of hearts."

</p>

<p class="hadithSource">

— Imam Ali ibn Abi Talib (a)<br>
Nahj al-Balagha

</p>

<button class="heroButton" onclick="showQuestion(1)">

Begin Journey

</button>

</div>

`;
window.scrollTo(0,0);
}
function showAbout(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => {

    window.scrollTo(0,0);

});

app.innerHTML = `

<div class="topNav">

<div class="siteTitle">

☪ The Quran Companion

</div>

<div class="navLinks">

<a href="#" onclick="showWelcome()">Home</a>

<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>

<a href="#" style="color:#B8923A;">About</a>

</div>

</div>

<div class="headerDivider"></div>

<div class="welcome aboutPage">

<h2>About</h2>

<div class="heroDivider"></div>

<p>

This project was created with the sincere hope of helping people reconnect with the Holy Qur'an during moments of hardship, gratitude, uncertainty and reflection.

</p>

<p>

The Qur'anic translations are presented without alteration.

The accompanying reflections are personal writings intended only for encouragement and contemplation.

They are <strong>not</strong> tafsir.

</p>

<p>

If you notice incorrect references, categorisation errors, bugs or typographical mistakes, please let me know.

</p>

<div>

<b>Email</b>

<p class="emailAddress">

muhammad.abbas.research@proton.me

</p>

</div>

<p class="salawat">

اللهم صل على محمد وآل محمد وعجل فرجهم

</p>

<p>

May Allah accept this humble effort and make it beneficial for all who visit.

</p>

<button onclick="showWelcome()">

Return Home

</button>

<div class="footerNote">

Created with sincere intention by M M Abbas Raza.

</div>

</div>

`;
window.scrollTo(0,0);
}
function showVerseOfDay(){

document.body.classList.remove("homePage");
requestAnimationFrame(() => {

    window.scrollTo(0,0);

});

const today = new Date().toISOString().slice(0,10);

let savedDate = localStorage.getItem("quran_day");
let savedVerse = localStorage.getItem("quran_verse");

if(savedDate !== today){

    savedVerse = Math.floor(Math.random()*VERSES.length);

    localStorage.setItem("quran_day",today);

    localStorage.setItem("quran_verse",savedVerse);

}

const verse = VERSES[savedVerse];

const hour = new Date().getHours();

const reminder = REMINDERS[Math.floor(hour/6)%REMINDERS.length];

app.innerHTML = `

<div class="topNav">

<div class="siteTitle">

☪ The Quran Companion

</div>

<div class="navLinks">

<a href="#" onclick="showWelcome()">Home</a>

<a href="#" style="color:#B8923A;">Verse of the Day</a>

<a href="#" onclick="showAbout()">About</a>

</div>

</div>

<div class="headerDivider"></div>

<div class="resultCard">

<p class="coverLabel">

Verse of the Day

</p>

<h2>${verse.surahName}</h2>

<h3>${verse.surahNumber}:${verse.ayahStart}${verse.ayahEnd!==verse.ayahStart?"-"+verse.ayahEnd:""}</h3>

<div class="surahDivider">

✦ ❈ ✦

</div>

<div class="verseCard">

${verse.translation}

</div>

<div class="reflectionCard">

<h3>🌿 For Today</h3>

<p>

${reminder}

</p>

</div>

</div>

`;
window.scrollTo(0,0);
}

function showQuestion(id){
document.body.classList.remove("homePage");
requestAnimationFrame(() => {

    window.scrollTo(0,0);

});
    const question = QUESTIONS.find(q => q.id === id);

    if(id === 999){

    showResult();
    return;

}

if(!question){

    showWelcome();
    return;

}

    let html = `

        <div class="question">

            <h2>${question.question}</h2>

    `;

    question.answers.forEach((answer,index)=>{

        html += `

            <button class="answerButton"
                    onclick="selectAnswer(${id},${index})">

                ${answer.text}

            </button>

        `;

    });

    html += `</div>`;

    app.innerHTML = html;

}

function selectAnswer(questionId,answerIndex){

    const question =
        QUESTIONS.find(q=>q.id===questionId);

    const answer =
        question.answers[answerIndex];

    if(answer.scores){

        addScores(answer.scores);

    }

    showQuestion(answer.next);

}

function showResult(){

document.body.classList.remove("homePage");

app.innerHTML = `

<div class="welcome loadingCard">

<div class="loadingCircle"></div>

<div class="loadingOrnament">

✦ ❈ ☪ ❈ ✦

</div>

<h2>

Finding Guidance...

</h2>

<div class="loadingDivider"></div>

<p class="loadingVerse">

"Remember Me; I will remember you."

</p>

<p class="loadingReference">

Qur'an 2:152

</p>

<p class="loadingMessage">

Take a quiet moment before continuing.

</p>

</div>

`;
window.scrollTo(0,0);
setTimeout(renderResult,2200);

}

function renderResult(){
    document.body.classList.remove("homePage");
    requestAnimationFrame(() => {

    window.scrollTo(0,0);

});

    const verse = findVerse();

const reflection =
    REFLECTIONS[getHighestTheme()] ||
    REFLECTIONS["Hope"];

app.innerHTML = `

<div class="topNav">

<div class="siteTitle">

☪ The Quran Companion

</div>

<div class="navLinks">

<a href="#" onclick="showWelcome()">Home</a>

<a href="#" onclick="showVerseOfDay()">Verse of the Day</a>

<a href="#" onclick="showAbout()">About</a>

</div>

</div>

<div class="headerDivider"></div>

<div class="resultCard">

<h2>${verse.surahName}</h2>

<h3>${verse.surahNumber}:${verse.ayahStart}${verse.ayahEnd !== verse.ayahStart ? "-" + verse.ayahEnd : ""}</h3>

<div class="surahDivider">

✦ ❈ ✦

</div>

<div class="verseCard">

${verse.translation}

</div>

<div class="reflectionCard">

<h3>${reflection.title}</h3>

<p>

${reflection.text}

</p>

</div>

<button onclick="showWelcome()">

Return Home

</button>

</div>
<div style="margin-top:40px;">

<button onclick="showVerseOfDay()">

Verse of the Day

</button>

</div>
`;
window.scrollTo(0,0);
}