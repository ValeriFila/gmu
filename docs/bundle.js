/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ (() => {

eval("const images = [];\r\nconst autoAnimSliderImage = document.getElementById('autoAnimSliderImage');\r\n\r\nlet k = 5;\r\nlet currentImgIndex = 0;\r\nconst IMAGE_WIDTH = document.getElementById('anim_block').offsetWidth;\r\n\r\n//бэктики\r\nfor (let i = 0; i < k; i++) {\r\n    images.push(i + 1 + '.JPG');\r\n}\r\n\r\n//function expression\r\nconst buildAutoAnimatedGallery = function () {\r\n    for (let i = 0; i < k; i++) {\r\n        autoAnimSliderImage.innerHTML += `\r\n        <img src = \"images/${images[i]}\" alt = \"university image\" width = \"${IMAGE_WIDTH}\">\r\n    `\r\n    }\r\n};\r\n\r\nbuildAutoAnimatedGallery();\r\n\r\nfunction slide() {\r\n    if (currentImgIndex === images.length - 1) {\r\n        currentImgIndex = 0;\r\n    } else {\r\n        currentImgIndex += 1;\r\n    }\r\n    autoAnimSliderImage.style.transform = `\r\n    translateX(-${currentImgIndex * IMAGE_WIDTH}px)`;\r\n}\r\n\r\nconst interval = setInterval(() => {\r\n    slide();\r\n}, 10000);\r\n\n\n//# sourceURL=webpack:///./src/counter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _src_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/counter.js */ \"./src/counter.js\");\n/* harmony import */ var _src_counter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_counter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_news_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/news.js */ \"./src/news.js\");\n/* harmony import */ var _src_news_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_news_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_mail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/mail.js */ \"./src/mail.js\");\n/* harmony import */ var _src_speech_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/speech.js */ \"./src/speech.js\");\n/* harmony import */ var _src_speech_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_speech_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _resourses_images_1_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resourses/images/1.JPG */ \"./resourses/images/1.JPG\");\n/* harmony import */ var _resourses_images_2_JPG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resourses/images/2.JPG */ \"./resourses/images/2.JPG\");\n/* harmony import */ var _resourses_images_3_JPG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resourses/images/3.JPG */ \"./resourses/images/3.JPG\");\n/* harmony import */ var _resourses_images_4_JPG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resourses/images/4.JPG */ \"./resourses/images/4.JPG\");\n/* harmony import */ var _resourses_images_5_JPG__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../resourses/images/5.JPG */ \"./resourses/images/5.JPG\");\n/* harmony import */ var _resourses_images_exhibition_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resourses/images/exhibition.jpeg */ \"./resourses/images/exhibition.jpeg\");\n/* harmony import */ var _resourses_images_group_JPG__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resourses/images/group.JPG */ \"./resourses/images/group.JPG\");\n/* harmony import */ var _resourses_images_pictures_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resourses/images/pictures.jpeg */ \"./resourses/images/pictures.jpeg\");\n/* harmony import */ var _resourses_images_ship_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resourses/images/ship.jpg */ \"./resourses/images/ship.jpg\");\n/* harmony import */ var _resourses_images_trees_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../resourses/images/trees.jpeg */ \"./resourses/images/trees.jpeg\");\n/* harmony import */ var _resourses_images_ushacov_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../resourses/images/ushacov.jpeg */ \"./resourses/images/ushacov.jpeg\");\n/* harmony import */ var _resourses_icons_eye_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../resourses/icons/eye.png */ \"./resourses/icons/eye.png\");\n/* harmony import */ var _resourses_icons_to_left_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../resourses/icons/to_left.png */ \"./resourses/icons/to_left.png\");\n/* harmony import */ var _resourses_icons_to_right_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../resourses/icons/to_right.png */ \"./resourses/icons/to_right.png\");\n/* harmony import */ var _resourses_icons_university_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../resourses/icons/university.png */ \"./resourses/icons/university.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mail.js":
/*!*********************!*\
  !*** ./src/mail.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ \"./src/counter.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/* SmtpJS.com - v3.0.0 */\r\nconst Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = \"Send\"; var t = JSON.stringify(a); Email.ajaxPost(\"https://smtpjs.com/v3/smtpjs.aspx?\", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest(\"POST\", e); a.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest(\"GET\", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return \"withCredentials\" in t ? t.open(e, n, !0) : \"undefined\" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };\r\nconst SUBJECT = 'Спасибо за обратную связь!';\r\nconst USER = document.getElementById('name');\r\nconst USER_EMAIL = document.getElementById('email');\r\nconst TEXT = document.getElementById('text');\r\nconst SUBMIT_BUTTON = document.getElementById('confirm_button');\r\nconst FORM = document.getElementById('write_email_form');\r\nconst sendButton = document.getElementById('sendButton');\r\nconst popup = document.getElementById('popup');\r\nconst background = document.getElementById('blur_background');\r\nconst body = document.getElementsByTagName('body')[0];\r\n\r\nfunction handleForSubmit(event) {\r\n    event.preventDefault()\r\n    validateForm()\r\n}\r\nFORM.addEventListener('submit', handleForSubmit)\r\n\r\nfunction openPopup() {\r\n    body.style.overflow = 'hidden';\r\n    popup.style.visibility = 'visible';\r\n    background.classList.add('open');\r\n    USER.classList.add('full_field');\r\n    USER_EMAIL.classList.add('full_field');\r\n    TEXT.classList.add('full_field')\r\n    //SUBMIT_BUTTON.addEventListener('click', validateForm);\r\n}\r\nsendButton.addEventListener('click', openPopup);\r\n\r\nbackground.addEventListener('click', (e) => {\r\n    const click = e.composedPath().includes(popup);\r\n    if (!click) {\r\n        hidePopup();\r\n    }\r\n});\r\n\r\nfunction hidePopup() {\r\n    body.style.overflow = 'scroll';\r\n    popup.style.visibility = 'hidden';\r\n    background.classList.remove('open')\r\n    USER.classList.remove('empty_field')\r\n    USER_EMAIL.classList.remove('empty_field')\r\n    TEXT.classList.remove('empty_field')\r\n    USER.value = ''\r\n    USER_EMAIL.value = ''\r\n    TEXT.value = ''\r\n}\r\n\r\nfunction validateForm() {\r\n    const name = document.forms['write_email_form']['name'].value;\r\n    const email = document.forms['write_email_form']['email'].value;\r\n    const text = document.forms['write_email_form']['text'].value;\r\n    if ((name === null || name === '') || (email === null || email === '') || (text === null || text === '')) {\r\n        USER.classList.remove('full_field')\r\n        USER_EMAIL.classList.remove('full_field')\r\n        TEXT.classList.remove('full_field')\r\n        USER.classList.add('empty_field');\r\n        USER_EMAIL.classList.add('empty_field');\r\n        TEXT.classList.add('empty_field');\r\n    } else {\r\n        Email.send({\r\n            SecureToken : 'a8328433-4994-4e7d-9d6b-656a16cc4e48',\r\n            To : email,\r\n            From : \"universitygmuushacova@gmail.com\",\r\n            Subject : SUBJECT,\r\n            Body : `Здравствуйте, ${name}! Спасибо за обращение в ГМУ \r\n            Ушакова! Ожидайте ответного письма.`\r\n        }).then(\r\n\r\n        );\r\n        Email.send({\r\n            SecureToken : 'a8328433-4994-4e7d-9d6b-656a16cc4e48',\r\n            To : \"universitygmuushacova@gmail.com\",\r\n            From : \"universitygmuushacova@gmail.com\",\r\n            Subject : `Пользователь ${name} отправил следующее сообщение с почты ${email}:`,\r\n            Body : text\r\n        }).then(\r\n\r\n        );\r\n\r\n        hidePopup()\r\n    }\r\n}\r\n//закрыть попап по нажатию на таб\r\nconst confirmButton = document.getElementById('confirm_button')\r\nconfirmButton.addEventListener('keydown', closePopup)\r\nfunction closePopup(event) {\r\n    if(event.code === 'Tab') {\r\n        hidePopup()\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/mail.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ (() => {

eval("const array = []\r\nconst arrayOfCards = document.getElementById('anim_cards')\r\nconst buttonToLeft = document.getElementById('toLeftButton')\r\nconst buttonToRight = document.getElementById('toRightButton')\r\n\r\nconst arrayOfPictures = [\r\n    'exhibition.jpeg',\r\n    'ushacov.jpeg',\r\n    'pictures.jpeg',\r\n    'trees.jpeg',\r\n    '2.JPG',\r\n    'group.JPG'\r\n];\r\n\r\nconst arrayOfText = [\r\n    `На этой неделе прошла красочная выставка кораблей и не только! Самые\r\n    разные корабли были представлены курсантам нашего университета для ознакомления.\r\n    Стоит сказать, что это зрелище по-настоящему завораживающее`,\r\n    `Знакомство с работой администрации Центрального внутригородского района состоялось у курсантов выпускного курса направления «Государственное и муниципальное управление»`,\r\n    `В Морском колледже состоялся круглый стол на тему: \"Мы вместе - мы едины!\", посвященный празднованию \"Дня народного единства\". Первокурсники рассказали об истории праздника, связанного с событиями 1611-1612 годов`,\r\n    `Ко Дню народного единства в Морском колледже была организована выставка «Человек- природа-общество». Здесь свои творческие работы представили курсанты и преподаватели`,\r\n    `Руководители управлений ИТ и инфраструктурных объектов рассказали нашим курсантам о возможности стажировки в самом крупном порту России.\r\nВо встрече приняли участие курсанты 3 курса ИСИТ`,\r\n    `Наши курсанты продолжают радовать нас своими наградами.\r\nВ этот раз похвастаемся и погордимся ребятами 4 курса ИСИТ. Собственно все на фото, вместо тысячи слов. Поздравляем!`\r\n]\r\n\r\nconst arrayOfDate = [\r\n    '5.11.2023',\r\n    '14.10.2023',\r\n    '20.09.2023',\r\n    '15.09.2023',\r\n    '2.09.2023',\r\n    '30.08.2023'\r\n]\r\n\r\n//количество карточек\r\nlet k = 6;\r\nlet cardIndex = 0;\r\n\r\n//массив карточек\r\n(function () {\r\n    for (let i = 0; i < k; i++) {\r\n        array[i] = i+1\r\n    }\r\n})();\r\n\r\nconst buildArrayOfCards = () => {\r\n    for (let i = 0; i < k; i++) {\r\n        arrayOfCards.innerHTML += `\r\n            <div class=\"single_card\" id=\"card${i+1}\" tabindex=\"1\">\r\n                <div class=\"news_image\">\r\n                    <img src=\"images/${arrayOfPictures[i]}\">\r\n                </div>\r\n                <div class=\"text_info\" id=\"cardText${i+1}\" >\r\n                    <p id=\"info\">${arrayOfText[i]}</p>\r\n                    <p id=\"date\">${arrayOfDate[i]}</p>\r\n                </div>\r\n            </div>\r\n        `\r\n    }\r\n}\r\nbuildArrayOfCards();\r\nconst card = document.getElementById('card1')\r\nconst CARD_WIDTH = card.offsetWidth + 100;\r\n\r\nconst toLeftClick = () => {\r\n    if (cardIndex === 0) {\r\n        cardIndex = array.length - 2\r\n    } else {\r\n        cardIndex -= 1\r\n    }\r\n    arrayOfCards.style.transform = `\r\n        translateX(-${cardIndex * CARD_WIDTH}px)\r\n    `\r\n}\r\n\r\nconst toRightClick = () => {\r\n    if (cardIndex === array.length - 2) {\r\n        cardIndex = 0\r\n    } else {\r\n        cardIndex += 1\r\n    }\r\n    arrayOfCards.style.transform = `\r\n        translateX(-${cardIndex * CARD_WIDTH}px)\r\n    `\r\n}\r\n\r\nbuttonToLeft.addEventListener('click', toLeftClick)\r\nbuttonToRight.addEventListener('click', toRightClick)\r\n\r\n\n\n//# sourceURL=webpack:///./src/news.js?");

/***/ }),

/***/ "./src/speech.js":
/*!***********************!*\
  !*** ./src/speech.js ***!
  \***********************/
/***/ (() => {

eval("const labelGMU = document.getElementById('gmu_label')\r\nconst university = document.getElementById('universityText')\r\nconst education = document.getElementById('educationText')\r\nconst entrants = document.getElementById('entrantsText')\r\nconst students = document.getElementById('studentsText')\r\nconst contacts = document.getElementById('contactsText')\r\nconst versionForBlind = document.getElementById('versionForBlind')\r\nconst contactButton = document.getElementById('sendButton')\r\nconst nameInput = document.getElementById('name')\r\nconst emailInput = document.getElementById('email')\r\nconst textInput = document.getElementById('text')\r\nconst sendButton = document.getElementById('confirm_button')\r\nconst card1 = document.getElementById('card1')\r\nconst card2 = document.getElementById('card2')\r\nconst card3 = document.getElementById('card3')\r\nconst card4 = document.getElementById('card4')\r\nconst card5 = document.getElementById('card5')\r\nconst card6 = document.getElementById('card6')\r\nconst phoneNumber = document.getElementById('phone')\r\nconst email1 = document.getElementById('primCom')\r\nconst email2 = document.getElementById('standQuest')\r\n\r\nconst lastElementOfThePage = document.getElementById('standQuest')\r\n\r\n//озвучка сфокусированного элемента c текстом\r\nlabelGMU.addEventListener('focus', speakStandardText)\r\nuniversity.addEventListener('focus', speakStandardText)\r\neducation.addEventListener('focus', speakStandardText)\r\nentrants.addEventListener('focus', speakStandardText)\r\nstudents.addEventListener('focus', speakStandardText)\r\ncontacts.addEventListener('focus', speakStandardText)\r\ncontactButton.addEventListener('focus', speakStandardText)\r\ncard1.addEventListener('focus', speakStandardText)\r\ncard2.addEventListener('focus', speakStandardText)\r\ncard3.addEventListener('focus', speakStandardText)\r\ncard4.addEventListener('focus', speakStandardText)\r\ncard5.addEventListener('focus', speakStandardText)\r\ncard6.addEventListener('focus', speakStandardText)\r\nphoneNumber.addEventListener('focus', speakStandardText)\r\nemail1.addEventListener('focus', speakStandardText)\r\nemail2.addEventListener('focus', speakStandardText)\r\n\r\n//озвучка сфокусированного элемента без текста\r\nversionForBlind.addEventListener('focus', versionForBlindSpeech)\r\nnameInput.addEventListener('focus', nameInputSpeech)\r\nemailInput.addEventListener('focus', emailInputSpeech)\r\ntextInput.addEventListener('focus', textInputSpeech)\r\nsendButton.addEventListener('focus', sendButtonSpeech)\r\n\r\nfunction speakText(text) {\r\n    window.speechSynthesis.cancel()\r\n    speechSynthesis.speak(new SpeechSynthesisUtterance(text))\r\n}\r\nfunction speakStandardText() {\r\n    let text = document.activeElement.textContent\r\n    speakText(text)\r\n}\r\n\r\nfunction versionForBlindSpeech() {\r\n    let text = 'Выключить режим для слепых'\r\n    speakText(text)\r\n}\r\nfunction nameInputSpeech() {\r\n    let text = 'Введите имя'\r\n    speakText(text)\r\n}\r\n\r\nfunction emailInputSpeech() {\r\n    let text = 'Введите почту'\r\n    speakText(text)\r\n}\r\n\r\nfunction textInputSpeech() {\r\n    let text = 'Введите тему обращения'\r\n    speakText(text)\r\n}\r\nfunction sendButtonSpeech() {\r\n    let text = 'Отправить форму обратной связи'\r\n    speakText(text)\r\n}\r\n\r\n//цикл перехода по странице с помощью Tab\r\nlastElementOfThePage.addEventListener('keydown', moveToFirstElement)\r\nfunction moveToFirstElement(event){\r\n    if(event.code === 'Tab'){\r\n        event.preventDefault()\r\n        labelGMU.focus()\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/speech.js?");

/***/ }),

/***/ "./resourses/icons/eye.png":
/*!*********************************!*\
  !*** ./resourses/icons/eye.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/eye.png\";\n\n//# sourceURL=webpack:///./resourses/icons/eye.png?");

/***/ }),

/***/ "./resourses/icons/to_left.png":
/*!*************************************!*\
  !*** ./resourses/icons/to_left.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/to_left.png\";\n\n//# sourceURL=webpack:///./resourses/icons/to_left.png?");

/***/ }),

/***/ "./resourses/icons/to_right.png":
/*!**************************************!*\
  !*** ./resourses/icons/to_right.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/to_right.png\";\n\n//# sourceURL=webpack:///./resourses/icons/to_right.png?");

/***/ }),

/***/ "./resourses/icons/university.png":
/*!****************************************!*\
  !*** ./resourses/icons/university.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/university.png\";\n\n//# sourceURL=webpack:///./resourses/icons/university.png?");

/***/ }),

/***/ "./resourses/images/1.JPG":
/*!********************************!*\
  !*** ./resourses/images/1.JPG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.JPG\";\n\n//# sourceURL=webpack:///./resourses/images/1.JPG?");

/***/ }),

/***/ "./resourses/images/2.JPG":
/*!********************************!*\
  !*** ./resourses/images/2.JPG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2.JPG\";\n\n//# sourceURL=webpack:///./resourses/images/2.JPG?");

/***/ }),

/***/ "./resourses/images/3.JPG":
/*!********************************!*\
  !*** ./resourses/images/3.JPG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3.JPG\";\n\n//# sourceURL=webpack:///./resourses/images/3.JPG?");

/***/ }),

/***/ "./resourses/images/4.JPG":
/*!********************************!*\
  !*** ./resourses/images/4.JPG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/4.JPG\";\n\n//# sourceURL=webpack:///./resourses/images/4.JPG?");

/***/ }),

/***/ "./resourses/images/5.JPG":
/*!********************************!*\
  !*** ./resourses/images/5.JPG ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/5.JPG\";\n\n//# sourceURL=webpack:///./resourses/images/5.JPG?");

/***/ }),

/***/ "./resourses/images/exhibition.jpeg":
/*!******************************************!*\
  !*** ./resourses/images/exhibition.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/exhibition.jpeg\";\n\n//# sourceURL=webpack:///./resourses/images/exhibition.jpeg?");

/***/ }),

/***/ "./resourses/images/group.JPG":
/*!************************************!*\
  !*** ./resourses/images/group.JPG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/group.JPG\";\n\n//# sourceURL=webpack:///./resourses/images/group.JPG?");

/***/ }),

/***/ "./resourses/images/pictures.jpeg":
/*!****************************************!*\
  !*** ./resourses/images/pictures.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pictures.jpeg\";\n\n//# sourceURL=webpack:///./resourses/images/pictures.jpeg?");

/***/ }),

/***/ "./resourses/images/ship.jpg":
/*!***********************************!*\
  !*** ./resourses/images/ship.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ship.jpg\";\n\n//# sourceURL=webpack:///./resourses/images/ship.jpg?");

/***/ }),

/***/ "./resourses/images/trees.jpeg":
/*!*************************************!*\
  !*** ./resourses/images/trees.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/trees.jpeg\";\n\n//# sourceURL=webpack:///./resourses/images/trees.jpeg?");

/***/ }),

/***/ "./resourses/images/ushacov.jpeg":
/*!***************************************!*\
  !*** ./resourses/images/ushacov.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ushacov.jpeg\";\n\n//# sourceURL=webpack:///./resourses/images/ushacov.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;