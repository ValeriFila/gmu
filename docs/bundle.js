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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"university\":\"css-style__university--rInxRDJN\",\"menu_header\":\"css-style__menu_header--X70RUMag\",\"menu\":\"css-style__menu--dfewCZrV\",\"icon\":\"css-style__icon--Xr6BSyep\",\"menu_items\":\"css-style__menu_items--fY97Vik3\",\"item\":\"css-style__item--eskMK6ni\",\"mail\":\"css-style__mail--iGt1ndqV\",\"popup\":\"css-style__popup--alHCIUji\",\"blur_background\":\"css-style__blur_background--J0tnXVU4\",\"open\":\"css-style__open--k_cqRr4Y\",\"empty_field\":\"css-style__empty_field--aQUKQXJV\",\"full_field\":\"css-style__full_field--PxjggCdR\",\"write_email_form\":\"css-style__write_email_form--jdl7XLRz\",\"image_ship\":\"css-style__image_ship--WOcXWjrH\",\"name\":\"css-style__name--EEznJZ2S\",\"custom_input\":\"css-style__custom_input--qXwbVx1N\",\"email\":\"css-style__email--W7Aro_vi\",\"text\":\"css-style__text--xZviQr3H\",\"confirm_button\":\"css-style__confirm_button--tMwou2FJ\",\"main\":\"css-style__main--jFGBGDYK\",\"animated_block\":\"css-style__animated_block--afSYS7rf\",\"anim_block\":\"css-style__anim_block--KroiEhAW\",\"main_building\":\"css-style__main_building--UCz13axy\",\"autoAnimSliderImage\":\"css-style__autoAnimSliderImage--pxjVPKcG\",\"gallery\":\"css-style__gallery--ghGzhtKG\",\"news\":\"css-style__news--nEYrk7WY\",\"title\":\"css-style__title--ufJKp6ks\",\"content\":\"css-style__content--nPnyNUG9\",\"cards\":\"css-style__cards--FziUPmDl\",\"anim_cards\":\"css-style__anim_cards--uUbhpz6U\",\"single_card\":\"css-style__single_card--Ihym6UjM\",\"news_image\":\"css-style__news_image--aH8Ub_KM\",\"text_info\":\"css-style__text_info--UiF7RoRl\",\"info\":\"css-style__info--zfYdmlAv\",\"date\":\"css-style__date--bLH3Kcm3\",\"direction_buttons\":\"css-style__direction_buttons--wMiBJJwn\",\"education\":\"css-style__education--x425mcp7\",\"footer\":\"css-style__footer--H8hqEiv4\",\"footer_card\":\"css-style__footer_card--ysvBfzYV\",\"footer_text\":\"css-style__footer_text--r6XLn2fK\",\"to_applicants\":\"css-style__to_applicants--uM9clSpU\",\"contact_info\":\"css-style__contact_info--so6yH2pU\",\"phone_number\":\"css-style__phone_number--vNEWiLHQ\"});\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ (() => {

eval("const images = [];\r\nconst autoAnimSliderImage = document.getElementById('autoAnimSliderImage');\r\n\r\nlet k = 5;\r\nlet currentImgIndex = 0;\r\nconst IMAGE_WIDTH = document.getElementById('anim_block').offsetWidth;\r\n\r\nfor (let i = 0; i < k; i++) {\r\n    images.push(i + 1 + '.JPG');\r\n}\r\n\r\n//function expression\r\nconst buildAutoAnimatedGallery = function () {\r\n    for (let i = 0; i < k; i++) {\r\n        autoAnimSliderImage.innerHTML += `\r\n        <img src = \"/resourses/images/${images[i]}\" alt = \"university image\" width = \"${IMAGE_WIDTH}\">\r\n    `\r\n    }\r\n};\r\n\r\nbuildAutoAnimatedGallery();\r\n\r\nfunction slide() {\r\n    if (currentImgIndex === images.length - 1) {\r\n        currentImgIndex = 0;\r\n    } else {\r\n        currentImgIndex += 1;\r\n    }\r\n    autoAnimSliderImage.style.transform = `\r\n    translateX(-${currentImgIndex * IMAGE_WIDTH}px)`;\r\n}\r\n\r\nconst interval = setInterval(() => {\r\n    slide();\r\n}, 10000);\r\n\n\n//# sourceURL=webpack:///./src/counter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _src_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/counter.js */ \"./src/counter.js\");\n/* harmony import */ var _src_counter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_counter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_news_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/news.js */ \"./src/news.js\");\n/* harmony import */ var _src_news_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_news_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_mail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/mail.js */ \"./src/mail.js\");\n\r\n\r\n\r\n\r\nconsole.log('fuuuuuuuuuck')\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mail.js":
/*!*********************!*\
  !*** ./src/mail.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ \"./src/counter.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/* SmtpJS.com - v3.0.0 */\r\nconst Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = \"Send\"; var t = JSON.stringify(a); Email.ajaxPost(\"https://smtpjs.com/v3/smtpjs.aspx?\", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest(\"POST\", e); a.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest(\"GET\", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return \"withCredentials\" in t ? t.open(e, n, !0) : \"undefined\" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };\r\nconst SUBJECT = 'Спасибо за обратную связь!';\r\nconst USER = document.getElementById('name');\r\nconst USER_EMAIL = document.getElementById('email');\r\nconst TEXT = document.getElementById('text');\r\nconst SUBMIT_BUTTON = document.getElementById('confirm_button');\r\nconst FORM = document.getElementById('write_email_form');\r\n\r\nconst sendButton = document.getElementById('sendButton');\r\nconst popup = document.getElementById('popup');\r\nconst background = document.getElementById('blur_background');\r\nconst body = document.getElementsByTagName('body')[0];\r\n\r\nfunction handleForSubmit(event) {\r\n    event.preventDefault()\r\n    validateForm()\r\n}\r\nFORM.addEventListener('submit', handleForSubmit)\r\n\r\nfunction openPopup() {\r\n    body.style.overflow = 'hidden';\r\n    popup.style.visibility = 'visible';\r\n    background.classList.add('open');\r\n    USER.classList.add('full_field');\r\n    USER_EMAIL.classList.add('full_field');\r\n    TEXT.classList.add('full_field')\r\n    //SUBMIT_BUTTON.addEventListener('click', validateForm);\r\n}\r\nsendButton.addEventListener('click', openPopup);\r\n\r\nbackground.addEventListener('click', (e) => {\r\n    const click = e.composedPath().includes(popup);\r\n    if (!click) {\r\n        hidePopup();\r\n    }\r\n});\r\n\r\nfunction hidePopup() {\r\n    body.style.overflow = 'scroll';\r\n    popup.style.visibility = 'hidden';\r\n    background.classList.remove('open')\r\n    USER.classList.remove('empty_field')\r\n    USER_EMAIL.classList.remove('empty_field')\r\n    TEXT.classList.remove('empty_field')\r\n    USER.value = ''\r\n    USER_EMAIL.value = ''\r\n    TEXT.value = ''\r\n}\r\n\r\nfunction validateForm() {\r\n    const name = document.forms['write_email_form']['name'].value;\r\n    const email = document.forms['write_email_form']['email'].value;\r\n    const text = document.forms['write_email_form']['text'].value;\r\n    if ((name === null || name === '') || (email === null || email === '') || (text === null || text === '')) {\r\n        USER.classList.remove('full_field')\r\n        USER_EMAIL.classList.remove('full_field')\r\n        TEXT.classList.remove('full_field')\r\n        USER.classList.add('empty_field');\r\n        USER_EMAIL.classList.add('empty_field');\r\n        TEXT.classList.add('empty_field');\r\n    } else {\r\n        Email.send({\r\n            SecureToken : 'a8328433-4994-4e7d-9d6b-656a16cc4e48',\r\n            To : email,\r\n            From : \"universitygmuushacova@gmail.com\",\r\n            Subject : SUBJECT,\r\n            Body : `Здравствуйте, ${name}! Спасибо за обращение в ГМУ \r\n            Ушакова! Ожидайте ответного письма.`\r\n        }).then(\r\n            console.log('сообщение успешно отправлено')\r\n        );\r\n\r\n        hidePopup()\r\n    }\r\n}\r\n\r\n//ФУНКЦИЯ ОТПРАВКИ СООБЩЕНИЯ\r\n/**/\r\n\r\n\n\n//# sourceURL=webpack:///./src/mail.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ (() => {

eval("const array = []\r\nconst arrayOfCards = document.getElementById('anim_cards')\r\nconst buttonToLeft = document.getElementById('toLeftButton')\r\nconst buttonToRight = document.getElementById('toRightButton')\r\n\r\nconst arrayOfPictures = [\r\n    'exhibition.jpeg',\r\n    'ushacov.jpeg',\r\n    'pictures.jpeg',\r\n    'trees.jpeg',\r\n    '2.JPG',\r\n    'group.JPG'\r\n];\r\n\r\nconst arrayOfText = [\r\n    `На этой неделе прошла красочная выставка кораблей и не только! Самые\r\n    разные корабли были представлены курсантам нашего университета для ознакомления.\r\n    Стоит сказать, что это зрелище по-настоящему завораживающее`,\r\n    `Знакомство с работой администрации Центрального внутригородского района состоялось у курсантов выпускного курса направления «Государственное и муниципальное управление»`,\r\n    `В Морском колледже состоялся круглый стол на тему: \"Мы вместе - мы едины!\", посвященный празднованию \"Дня народного единства\". Первокурсники рассказали об истории праздника, связанного с событиями 1611-1612 годов`,\r\n    `Ко Дню народного единства в Морском колледже была организована выставка «Человек- природа-общество». Здесь свои творческие работы представили курсанты и преподаватели`,\r\n    `Руководители управлений ИТ и инфраструктурных объектов рассказали нашим курсантам о возможности стажировки в самом крупном порту России.\r\nВо встрече приняли участие курсанты 3 курса ИСИТ`,\r\n    `Наши курсанты продолжают радовать нас своими наградами.\r\nВ этот раз похвастаемся и погордимся ребятами 4 курса ИСИТ. Собственно все на фото, вместо тысячи слов. Поздравляем!`\r\n]\r\n\r\nconst arrayOfDate = [\r\n    '5.11.2023',\r\n    '14.10.2023',\r\n    '20.09.2023',\r\n    '15.09.2023',\r\n    '2.09.2023',\r\n    '30.08.2023'\r\n]\r\n\r\n//количество карточек\r\nlet k = 6;\r\nlet cardIndex = 0;\r\nlet lastCard;\r\n\r\n//массив карточек\r\n(function () {\r\n    for (let i = 0; i < k; i++) {\r\n        array[i] = i+1\r\n    }\r\n})();\r\n\r\nconst buildArrayOfCards = () => {\r\n    for (let i = 0; i < k; i++) {\r\n        arrayOfCards.innerHTML += `\r\n            <div class=\"single_card\" id=\"${i+1}card\">\r\n                <div class=\"news_image\">\r\n                    <img src=\"/resourses/images/${arrayOfPictures[i]}\">\r\n                </div>\r\n                <div class=\"text_info\">\r\n                    <p id=\"info\">${arrayOfText[i]}</p>\r\n                    <p id=\"date\">${arrayOfDate[i]}</p>\r\n                </div>\r\n            </div>\r\n        `\r\n    }\r\n    lastCard = document.getElementById(`${k}card`)\r\n    lastCard.style.marginRight = '-200px'\r\n}\r\nbuildArrayOfCards();\r\nconst card = document.getElementById('1card')\r\nconst CARD_WIDTH = card.offsetWidth + 100;\r\n\r\nconst toLeftClick = () => {\r\n    if (cardIndex === 0) {\r\n        cardIndex = array.length - 2\r\n    } else {\r\n        cardIndex -= 1\r\n    }\r\n    arrayOfCards.style.transform = `\r\n        translateX(-${cardIndex * CARD_WIDTH}px)\r\n    `\r\n}\r\n\r\nconst toRightClick = () => {\r\n    if (cardIndex === array.length - 2) {\r\n        cardIndex = 0\r\n    } else {\r\n        cardIndex += 1\r\n    }\r\n    arrayOfCards.style.transform = `\r\n        translateX(-${cardIndex * CARD_WIDTH}px)\r\n    `\r\n}\r\n\r\nbuttonToLeft.addEventListener('click', toLeftClick)\r\nbuttonToRight.addEventListener('click', toRightClick)\r\n\r\n\n\n//# sourceURL=webpack:///./src/news.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;