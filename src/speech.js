const labelGMU = document.getElementById('gmu_label')
const university = document.getElementById('universityText')
const education = document.getElementById('educationText')
const entrants = document.getElementById('entrantsText')
const students = document.getElementById('studentsText')
const contacts = document.getElementById('contactsText')
const versionForBlind = document.getElementById('versionForBlind')
const sendButton = document.getElementById('sendButton')
const toLeftButton = document.getElementById('toLeftButton')
const toRightButton = document.getElementById('toRightButton')
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')
const card5 = document.getElementById('card5')
const card6 = document.getElementById('card6')
const phoneNumber = document.getElementById('phone')
const email1 = document.getElementById('primCom')
const email2 = document.getElementById('standQuest')

const lastElementOfThePage = document.getElementById('standQuest')

//озвучка сфокусированного элемента c текстом
labelGMU.addEventListener('focus', speakStandardText)
university.addEventListener('focus', speakStandardText)
education.addEventListener('focus', speakStandardText)
entrants.addEventListener('focus', speakStandardText)
students.addEventListener('focus', speakStandardText)
contacts.addEventListener('focus', speakStandardText)
sendButton.addEventListener('focus', speakStandardText)
card1.addEventListener('focus', speakStandardText)
card2.addEventListener('focus', speakStandardText)
card3.addEventListener('focus', speakStandardText)
card4.addEventListener('focus', speakStandardText)
card5.addEventListener('focus', speakStandardText)
card6.addEventListener('focus', speakStandardText)
phoneNumber.addEventListener('focus', speakStandardText)
email1.addEventListener('focus', speakStandardText)
email2.addEventListener('focus', speakStandardText)

//озвучка сфокусированного элемента без текста
versionForBlind.addEventListener('focus', versionForBlindSpeech)
toLeftButton.addEventListener('focus',toLeftSpeech)
toRightButton.addEventListener('focus', toRightSpeech)

function speakText(text) {
    window.speechSynthesis.cancel()
    speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}
function speakStandardText() {
    let text = document.activeElement.textContent
    console.log(text)
    speakText(text)
}

function versionForBlindSpeech() {
    let text = 'Выключить версию для слепых'
    speakText(text)
}
function toLeftSpeech() {
    let text = 'Пролистaть новости влево'
    speakText(text)
}

function toRightSpeech() {
    let text = 'Пролистaть новости вправо'
    speakText(text)
}

//цикл перехода по странице с помощью Tab
lastElementOfThePage.addEventListener('keydown', moveToFirstElement)
function moveToFirstElement(event){
    if(event.code === 'Tab'){
        event.preventDefault()
        labelGMU.focus()
    }
}