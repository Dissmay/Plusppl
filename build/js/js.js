/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  /* слайдер */\n  $('.sliderSectionPPL').slick({\n    centerMode: true,\n    centerPadding: '1x',\n    slidesToShow: 1,\n    autoplay: true,\n    prevArrow: $('.sliderSectionPPL__btn_prev'),\n    nextArrow: $('.sliderSectionPPL__btn_next')\n  });\n  var menu = document.querySelector(\".navigation__menu\");\n  var menuOpenBtn = document.querySelector(\".navigation__menuBtn\");\n  var menuOpenBtnMobail = document.querySelector(\".navigation__menuBtnMobail\");\n  var menuCloserBtn = document.querySelector(\".navigation__menu_buttonCloser\");\n  var circleNumber = document.querySelector(\".whySignUp__circle_pi\");\n  var section = document.querySelector(\".whySignUp\");\n  var flag = false;\n  var modalContainerRegister = document.querySelector(\".modalContainer\");\n  var modalContainerBtnJoin = document.querySelector(\".navigation__joinNow_btn\");\n  var navigationbtnMobail = document.querySelector(\".navigation__joinNow_btnMobail\");\n  var modalContainerCloserBtn = document.querySelector(\".modalContainer__join_closer\");\n  var formContainer = document.querySelector(\".modalContainer__containerBox\");\n  var menuJoinBtn = document.querySelector(\".navigation__menu_button\");\n  modalContainerBtnJoin.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.add(\"active\");\n  });\n  navigationbtnMobail.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.add(\"active\");\n  });\n  menuJoinBtn.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.add(\"active\");\n  });\n  modalContainerCloserBtn.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.remove(\"active\");\n  });\n  modalContainerRegister.addEventListener(\"click\", function (e) {\n    if (e.target == formContainer) {\n      modalContainerRegister.classList.remove(\"active\");\n    }\n  });\n  menuOpenBtn.addEventListener(\"click\", function (e) {\n    if (flag == false) {\n      menu.classList.add(\"active\");\n    }\n  });\n  menuOpenBtnMobail.addEventListener(\"click\", function () {\n    if (flag == false) {\n      menu.classList.add(\"active\");\n    }\n  });\n  menuCloserBtn.addEventListener(\"click\", function (e) {\n    if (flag == true) {\n      menu.classList.add(\"not-active\");\n    }\n  });\n  menu.addEventListener(\"animationend\", function (e) {\n    if (flag) {\n      menu.classList.remove(\"not-active\");\n      menu.classList.remove(\"active\");\n      flag = false;\n    } else {\n      flag = true;\n    }\n  }); // ЕСЛИ НАЖИМАЕМ НА РЕГИСТРАЦИЮ В МЕНЮ(ТО ЗАКРЫВАЕМ МЕНЮ)\n\n  menu.addEventListener(\"click\", function (e) {\n    if (e.target == menuJoinBtn) {\n      menu.classList.add(\"not-active\");\n    }\n  }); // от 0 до 15800 КРУГ\n\n  function setCounter() {\n    var value = +circleNumber.innerText;\n    setInterval(function () {\n      if (value < 15800) {\n        value = +value + 25;\n        circleNumber.innerText = value;\n      }\n    }, 0.1);\n  } // ПРОВЕРКА, КОГДА КРУГ БУДЕТ В ПОЛЕ ЗРЕНИЯ, ТОГДА ПОЙДЕТ ОТСЧЕТ ОТ 0 ДО 15800\n  // let options = {\n  //   root: null,\n  //   rootMargin: \"0px\",\n  //   threshold: 1.0\n  // };\n  // let callback = function(entries, observer) {\n  //   if (entries[0].isIntersecting) {\n  //     setCounter();\n  //   }\n  // };\n  // let observer = new IntersectionObserver(callback, options);\n  // observer.observe(circleNumber);\n\n\n  var target = $('.whySignUp__circle');\n  var targetPos = target.offset().top;\n  var winHeight = $(window).height();\n  var scrollToElem = targetPos - winHeight;\n  $(window).scroll(function () {\n    var winScrollTop = $(this).scrollTop();\n\n    if (winScrollTop > scrollToElem) {\n      //сработает когда пользователь доскроллит к элементу с классом .elem\n      setCounter();\n    }\n  }); //СКРОЛЛ ВНИЗ В ФУТЕР\n\n  var topScroll = $(\".firstSection__scrollDown\");\n  var footerScroll = $(\".footer__scrollTop\");\n  var topScrollMobail = $(\".firstSection__scrollDownMobail\");\n  var footerScrollMobail = $('.footer__scrollTopMobile');\n  topScroll.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top\n    }, 1000);\n  });\n  footerScrollMobail.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top - 90\n    }, 1000);\n  });\n  footerScroll.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top - 90\n    }, 1000);\n  });\n  topScrollMobail.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top\n    }, 1000);\n  }); // КОПИРОВАТЬ В БУФЕР\n\n  var buffer = $('.navigation__copyBtn');\n  var url = document.location.href;\n  new Clipboard('.navigation__copyBtn', {\n    text: function text() {\n      return url;\n    }\n  });\n  buffer.on('click', function () {});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgXHJcblxyXG4gICAgLyog0YHQu9Cw0LnQtNC10YAgKi9cclxuXHJcbiQoJy5zbGlkZXJTZWN0aW9uUFBMJykuc2xpY2soe1xyXG4gIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgY2VudGVyUGFkZGluZzogJzF4JyxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgcHJldkFycm93OiAkKCcuc2xpZGVyU2VjdGlvblBQTF9fYnRuX3ByZXYnKSxcclxuICBuZXh0QXJyb3c6ICQoJy5zbGlkZXJTZWN0aW9uUFBMX19idG5fbmV4dCcpXHJcbiAgXHJcbn0pO1xyXG5cclxuXHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIik7XHJcbiAgbGV0IG1lbnVPcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51QnRuXCIpO1xyXG4gIGxldCBtZW51T3BlbkJ0bk1vYmFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudUJ0bk1vYmFpbFwiKTtcclxuICBsZXQgbWVudUNsb3NlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9idXR0b25DbG9zZXJcIik7XHJcbiAgbGV0IGNpcmNsZU51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2h5U2lnblVwX19jaXJjbGVfcGlcIik7XHJcbiAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoeVNpZ25VcFwiKTtcclxuICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gIGxldCBtb2RhbENvbnRhaW5lclJlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbENvbnRhaW5lclwiKTtcclxuICBsZXQgbW9kYWxDb250YWluZXJCdG5Kb2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLm5hdmlnYXRpb25fX2pvaW5Ob3dfYnRuXCJcclxuICApO1xyXG4gIGxldCBuYXZpZ2F0aW9uYnRuTW9iYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLm5hdmlnYXRpb25fX2pvaW5Ob3dfYnRuTW9iYWlsXCJcclxuICApO1xyXG4gIGxldCBtb2RhbENvbnRhaW5lckNsb3NlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5tb2RhbENvbnRhaW5lcl9fam9pbl9jbG9zZXJcIlxyXG4gICk7XHJcbiAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQ29udGFpbmVyX19jb250YWluZXJCb3hcIik7XHJcbiAgbGV0IG1lbnVKb2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X2J1dHRvblwiKTtcclxuXHJcbiAgbW9kYWxDb250YWluZXJCdG5Kb2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyUmVnaXN0ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgbmF2aWdhdGlvbmJ0bk1vYmFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBtb2RhbENvbnRhaW5lclJlZ2lzdGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVKb2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyUmVnaXN0ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBtb2RhbENvbnRhaW5lckNsb3NlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBtb2RhbENvbnRhaW5lclJlZ2lzdGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgbW9kYWxDb250YWluZXJSZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0ID09IGZvcm1Db250YWluZXIpIHtcclxuICAgICAgbW9kYWxDb250YWluZXJSZWdpc3Rlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtZW51T3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKGZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIG1lbnVPcGVuQnRuTW9iYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChmbGFnID09IGZhbHNlKSB7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWVudUNsb3NlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKGZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKGZsYWcpIHtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWFjdGl2ZVwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyDQldCh0JvQmCDQndCQ0JbQmNCc0JDQldCcINCd0JAg0KDQldCT0JjQodCi0KDQkNCm0JjQriDQkiDQnNCV0J3QrijQotCeINCX0JDQmtCg0KvQktCQ0JXQnCDQnNCV0J3QrilcclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT0gbWVudUpvaW5CdG4pIHtcclxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8g0L7RgiAwINC00L4gMTU4MDAg0JrQoNCj0JNcclxuICBmdW5jdGlvbiBzZXRDb3VudGVyKCkge1xyXG4gICAgbGV0IHZhbHVlID0gK2NpcmNsZU51bWJlci5pbm5lclRleHQ7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA8IDE1ODAwKSB7XHJcbiAgICAgICAgdmFsdWUgPSArdmFsdWUgKyAyNTtcclxuICAgICAgICBjaXJjbGVOdW1iZXIuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0sIDAuMSk7XHJcbiAgfVxyXG5cclxuICAvLyDQn9Cg0J7QktCV0KDQmtCQLCDQmtCe0JPQlNCQINCa0KDQo9CTINCR0KPQlNCV0KIg0JIg0J/QntCb0JUg0JfQoNCV0J3QmNCvLCDQotCe0JPQlNCQINCf0J7QmdCU0JXQoiDQntCi0KHQp9CV0KIg0J7QoiAwINCU0J4gMTU4MDBcclxuICAvLyBsZXQgb3B0aW9ucyA9IHtcclxuICAvLyAgIHJvb3Q6IG51bGwsXHJcbiAgLy8gICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gIC8vICAgdGhyZXNob2xkOiAxLjBcclxuICAvLyB9O1xyXG4gIC8vIGxldCBjYWxsYmFjayA9IGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgLy8gICBpZiAoZW50cmllc1swXS5pc0ludGVyc2VjdGluZykge1xyXG4gIC8vICAgICBzZXRDb3VudGVyKCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuICAvLyBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG4gIC8vIG9ic2VydmVyLm9ic2VydmUoY2lyY2xlTnVtYmVyKTtcclxuXHJcbiAgbGV0IHRhcmdldCA9ICQoJy53aHlTaWduVXBfX2NpcmNsZScpO1xyXG4gIGxldCB0YXJnZXRQb3MgPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cclxuICBsZXQgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gIFxyXG4gIGxldCBzY3JvbGxUb0VsZW0gPSB0YXJnZXRQb3MgLSB3aW5IZWlnaHQ7XHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgbGV0IHdpblNjcm9sbFRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICBpZih3aW5TY3JvbGxUb3AgPiBzY3JvbGxUb0VsZW0pe1xyXG4gICAgICAvL9GB0YDQsNCx0L7RgtCw0LXRgiDQutC+0LPQtNCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQtNC+0YHQutGA0L7Qu9C70LjRgiDQuiDRjdC70LXQvNC10L3RgtGDINGBINC60LvQsNGB0YHQvtC8IC5lbGVtXHJcbiAgICAgIHNldENvdW50ZXIoKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL9Ch0JrQoNCe0JvQmyDQktCd0JjQlyDQkiDQpNCj0KLQldCgXHJcblxyXG4gIGxldCB0b3BTY3JvbGwgPSAkKFwiLmZpcnN0U2VjdGlvbl9fc2Nyb2xsRG93blwiKTtcclxuICBsZXQgZm9vdGVyU2Nyb2xsID0gJChcIi5mb290ZXJfX3Njcm9sbFRvcFwiKTtcclxuICBsZXQgdG9wU2Nyb2xsTW9iYWlsID0gJChcIi5maXJzdFNlY3Rpb25fX3Njcm9sbERvd25Nb2JhaWxcIik7XHJcbiAgbGV0IGZvb3RlclNjcm9sbE1vYmFpbCA9ICQoJy5mb290ZXJfX3Njcm9sbFRvcE1vYmlsZScpO1xyXG5cclxuICB0b3BTY3JvbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgaHJlZiA9IHRhcmdldC5hdHRyKFwiaHJlZlwiKTtcclxuXHJcbiAgICBsZXQgZWxlbVRvU2Nyb2xsID0gJChocmVmKTtcclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBzY3JvbGxUb3A6IGVsZW1Ub1Njcm9sbC5vZmZzZXQoKS50b3BcclxuICAgICAgfSxcclxuICAgICAgMTAwMFxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgZm9vdGVyU2Nyb2xsTW9iYWlsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgbGV0IGhyZWYgPSB0YXJnZXQuYXR0cihcImhyZWZcIik7XHJcblxyXG4gICAgbGV0IGVsZW1Ub1Njcm9sbCA9ICQoaHJlZik7XHJcblxyXG4gICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZWxlbVRvU2Nyb2xsLm9mZnNldCgpLnRvcCAtIDkwXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMDBcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGZvb3RlclNjcm9sbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIGxldCBocmVmID0gdGFyZ2V0LmF0dHIoXCJocmVmXCIpO1xyXG5cclxuICAgIGxldCBlbGVtVG9TY3JvbGwgPSAkKGhyZWYpO1xyXG5cclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBzY3JvbGxUb3A6IGVsZW1Ub1Njcm9sbC5vZmZzZXQoKS50b3AgLSA5MFxyXG4gICAgICB9LFxyXG4gICAgICAxMDAwXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgdG9wU2Nyb2xsTW9iYWlsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgbGV0IGhyZWYgPSB0YXJnZXQuYXR0cihcImhyZWZcIik7XHJcblxyXG4gICAgbGV0IGVsZW1Ub1Njcm9sbCA9ICQoaHJlZik7XHJcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBlbGVtVG9TY3JvbGwub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMDBcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINCa0J7Qn9CY0KDQntCS0JDQotCsINCSINCR0KPQpNCV0KBcclxuICBsZXQgYnVmZmVyID0gJCgnLm5hdmlnYXRpb25fX2NvcHlCdG4nKTtcclxuXHJcblxyXG4gIHZhciB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gIG5ldyBDbGlwYm9hcmQoJy5uYXZpZ2F0aW9uX19jb3B5QnRuJywge3RleHQ6IGZ1bmN0aW9uKCl7IHJldHVybiB1cmw7fX0pO1xyXG4gIGJ1ZmZlci5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuICAiXSwibWFwcGluZ3MiOiJBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });