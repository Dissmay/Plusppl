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

eval("$(function () {\n  /* слайдер */\n  $('.sliderSectionPPL').slick({\n    centerMode: true,\n    centerPadding: '60px',\n    slidesToShow: 1,\n    autoplay: true,\n    prevArrow: $('.sliderSectionPPL__btn_prev'),\n    nextArrow: $('.sliderSectionPPL__btn_next')\n  });\n  var menu = document.querySelector(\".navigation__menu\");\n  var menuOpenBtn = document.querySelector(\".navigation__menuBtn\");\n  var menuOpenBtnMobail = document.querySelector(\".navigation__menuBtnMobail\");\n  var menuCloserBtn = document.querySelector(\".navigation__menu_buttonCloser\");\n  var circleNumber = document.querySelector(\".whySignUp__circle_pi\");\n  var section = document.querySelector(\".whySignUp\");\n  var flag = false;\n  var modalContainerRegister = document.querySelector(\".modalContainer\");\n  var modalContainerBtnJoin = document.querySelector(\".navigation__joinNow_btn\");\n  var navigationbtnMobail = document.querySelector(\".navigation__joinNow_btnMobail\");\n  var modalContainerCloserBtn = document.querySelector(\".modalContainer__join_closer\");\n  var formContainer = document.querySelector(\".modalContainer__containerBox\");\n  var menuJoinBtn = document.querySelector(\".navigation__menu_button\");\n  modalContainerBtnJoin.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.add(\"active\");\n  });\n  navigationbtnMobail.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.add(\"active\");\n  });\n  menuJoinBtn.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.add(\"active\");\n  });\n  modalContainerCloserBtn.addEventListener(\"click\", function () {\n    modalContainerRegister.classList.remove(\"active\");\n  });\n  modalContainerRegister.addEventListener(\"click\", function (e) {\n    if (e.target == formContainer) {\n      modalContainerRegister.classList.remove(\"active\");\n    }\n  });\n  menuOpenBtn.addEventListener(\"click\", function (e) {\n    if (flag == false) {\n      menu.classList.add(\"active\");\n    }\n  });\n  menuOpenBtnMobail.addEventListener(\"click\", function () {\n    if (flag == false) {\n      menu.classList.add(\"active\");\n    }\n  });\n  menuCloserBtn.addEventListener(\"click\", function (e) {\n    if (flag == true) {\n      menu.classList.add(\"not-active\");\n    }\n  });\n  menu.addEventListener(\"animationend\", function (e) {\n    if (flag) {\n      menu.classList.remove(\"not-active\");\n      menu.classList.remove(\"active\");\n      flag = false;\n    } else {\n      flag = true;\n    }\n  }); // ЕСЛИ НАЖИМАЕМ НА РЕГИСТРАЦИЮ В МЕНЮ(ТО ЗАКРЫВАЕМ МЕНЮ)\n\n  menu.addEventListener(\"click\", function (e) {\n    if (e.target == menuJoinBtn) {\n      menu.classList.add(\"not-active\");\n    }\n  }); // от 0 до 15800 КРУГ\n\n  function setCounter() {\n    var value = +circleNumber.innerText;\n    setInterval(function () {\n      if (value <= 15824) {\n        value = +value + 10;\n        circleNumber.innerText = value;\n      }\n    }, 0);\n  } // ПРОВЕРКА, КОГДА КРУГ БУДЕТ В ПОЛЕ ЗРЕНИЯ, ТОГДА ПОЙДЕТ ОТСЧЕТ ОТ 0 ДО 15800\n  // let options = {\n  //   root: null,\n  //   rootMargin: \"0px\",\n  //   threshold: 1.0\n  // };\n  // let callback = function(entries, observer) {\n  //   if (entries[0].isIntersecting) {\n  //     setCounter();\n  //   }\n  // };\n  // let observer = new IntersectionObserver(callback, options);\n  // observer.observe(circleNumber);\n\n\n  var target = $('.whySignUp__circle');\n  var targetPos = target.offset().top;\n  var winHeight = $(window).height();\n  var scrollToElem = targetPos - winHeight;\n  $(window).scroll(function () {\n    var winScrollTop = $(this).scrollTop();\n\n    if (winScrollTop > scrollToElem) {\n      //сработает когда пользователь доскроллит к элементу с классом .whySignUp__circle\n      setCounter();\n    }\n  }); //СКРОЛЛ ВНИЗ В ФУТЕР\n\n  var topScroll = $(\".firstSection__scrollDown\");\n  var footerScroll = $(\".footer__scrollTop\");\n  var topScrollMobail = $(\".firstSection__scrollDownMobail\");\n  var footerScrollMobail = $('.footer__scrollTopMobile');\n  topScroll.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top\n    }, 1000);\n  }); //мобильный скролл\n\n  footerScrollMobail.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top - 90\n    }, 1000);\n  });\n  footerScroll.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top - 90\n    }, 1000);\n  }); //мобильный скролл\n\n  topScrollMobail.on(\"click\", function (event) {\n    event.preventDefault();\n    var target = $(event.target);\n    var href = target.attr(\"href\");\n    var elemToScroll = $(href);\n    $(\"html, body\").animate({\n      scrollTop: elemToScroll.offset().top\n    }, 1000);\n  }); // КОПИРОВАТЬ В БУФЕР\n\n  var buffer = $('.navigation__copyBtn');\n  var url = document.location.href;\n  new Clipboard('.navigation__copyBtn', {\n    text: function text() {\n      return url;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgXHJcblxyXG4gICAgLyog0YHQu9Cw0LnQtNC10YAgKi9cclxuXHJcbiQoJy5zbGlkZXJTZWN0aW9uUFBMJykuc2xpY2soe1xyXG4gIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBwcmV2QXJyb3c6ICQoJy5zbGlkZXJTZWN0aW9uUFBMX19idG5fcHJldicpLFxyXG4gIG5leHRBcnJvdzogJCgnLnNsaWRlclNlY3Rpb25QUExfX2J0bl9uZXh0JylcclxuICBcclxufSk7XHJcblxyXG5cclxuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKTtcclxuICBsZXQgbWVudU9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVCdG5cIik7XHJcbiAgbGV0IG1lbnVPcGVuQnRuTW9iYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51QnRuTW9iYWlsXCIpO1xyXG4gIGxldCBtZW51Q2xvc2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X2J1dHRvbkNsb3NlclwiKTtcclxuICBsZXQgY2lyY2xlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aHlTaWduVXBfX2NpcmNsZV9waVwiKTtcclxuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2h5U2lnblVwXCIpO1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgbGV0IG1vZGFsQ29udGFpbmVyUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQ29udGFpbmVyXCIpO1xyXG4gIGxldCBtb2RhbENvbnRhaW5lckJ0bkpvaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIubmF2aWdhdGlvbl9fam9pbk5vd19idG5cIlxyXG4gICk7XHJcbiAgbGV0IG5hdmlnYXRpb25idG5Nb2JhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIubmF2aWdhdGlvbl9fam9pbk5vd19idG5Nb2JhaWxcIlxyXG4gICk7XHJcbiAgbGV0IG1vZGFsQ29udGFpbmVyQ2xvc2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLm1vZGFsQ29udGFpbmVyX19qb2luX2Nsb3NlclwiXHJcbiAgKTtcclxuICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxDb250YWluZXJfX2NvbnRhaW5lckJveFwiKTtcclxuICBsZXQgbWVudUpvaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfYnV0dG9uXCIpO1xyXG5cclxuICBtb2RhbENvbnRhaW5lckJ0bkpvaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kYWxDb250YWluZXJSZWdpc3Rlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICBuYXZpZ2F0aW9uYnRuTW9iYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyUmVnaXN0ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgbWVudUpvaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kYWxDb250YWluZXJSZWdpc3Rlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIG1vZGFsQ29udGFpbmVyQ2xvc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyUmVnaXN0ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBtb2RhbENvbnRhaW5lclJlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT0gZm9ybUNvbnRhaW5lcikge1xyXG4gICAgICBtb2RhbENvbnRhaW5lclJlZ2lzdGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbWVudU9wZW5CdG5Nb2JhaWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtZW51Q2xvc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5vdC1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vINCV0KHQm9CYINCd0JDQltCY0JzQkNCV0Jwg0J3QkCDQoNCV0JPQmNCh0KLQoNCQ0KbQmNCuINCSINCc0JXQndCuKNCi0J4g0JfQkNCa0KDQq9CS0JDQldCcINCc0JXQndCuKVxyXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmIChlLnRhcmdldCA9PSBtZW51Sm9pbkJ0bikge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyDQvtGCIDAg0LTQviAxNTgwMCDQmtCg0KPQk1xyXG4gIGZ1bmN0aW9uIHNldENvdW50ZXIoKSB7XHJcbiAgICBsZXQgdmFsdWUgPSArY2lyY2xlTnVtYmVyLmlubmVyVGV4dDtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHZhbHVlIDw9IDE1ODI0KSB7XHJcbiAgICAgICAgdmFsdWUgPSArdmFsdWUgKyAxMDtcclxuICAgICAgICBjaXJjbGVOdW1iZXIuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgLy8g0J/QoNCe0JLQldCg0JrQkCwg0JrQntCT0JTQkCDQmtCg0KPQkyDQkdCj0JTQldCiINCSINCf0J7Qm9CVINCX0KDQldCd0JjQrywg0KLQntCT0JTQkCDQn9Ce0JnQlNCV0KIg0J7QotCh0KfQldCiINCe0KIgMCDQlNCeIDE1ODAwXHJcbiAgLy8gbGV0IG9wdGlvbnMgPSB7XHJcbiAgLy8gICByb290OiBudWxsLFxyXG4gIC8vICAgcm9vdE1hcmdpbjogXCIwcHhcIixcclxuICAvLyAgIHRocmVzaG9sZDogMS4wXHJcbiAgLy8gfTtcclxuICAvLyBsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbihlbnRyaWVzLCBvYnNlcnZlcikge1xyXG4gIC8vICAgaWYgKGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcclxuICAvLyAgICAgc2V0Q291bnRlcigpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcbiAgLy8gbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAvLyBvYnNlcnZlci5vYnNlcnZlKGNpcmNsZU51bWJlcik7XHJcblxyXG4gIGxldCB0YXJnZXQgPSAkKCcud2h5U2lnblVwX19jaXJjbGUnKTtcclxuICBsZXQgdGFyZ2V0UG9zID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcclxuXHJcbiAgbGV0IHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICBcclxuICBsZXQgc2Nyb2xsVG9FbGVtID0gdGFyZ2V0UG9zIC0gd2luSGVpZ2h0O1xyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIGxldCB3aW5TY3JvbGxUb3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYod2luU2Nyb2xsVG9wID4gc2Nyb2xsVG9FbGVtKXtcclxuICAgICAgLy/RgdGA0LDQsdC+0YLQsNC10YIg0LrQvtCz0LTQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LTQvtGB0LrRgNC+0LvQu9C40YIg0Log0Y3Qu9C10LzQtdC90YLRgyDRgSDQutC70LDRgdGB0L7QvCAud2h5U2lnblVwX19jaXJjbGVcclxuICAgICAgc2V0Q291bnRlcigpXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8v0KHQmtCg0J7Qm9CbINCS0J3QmNCXINCSINCk0KPQotCV0KBcclxuXHJcbiAgbGV0IHRvcFNjcm9sbCA9ICQoXCIuZmlyc3RTZWN0aW9uX19zY3JvbGxEb3duXCIpO1xyXG4gIGxldCBmb290ZXJTY3JvbGwgPSAkKFwiLmZvb3Rlcl9fc2Nyb2xsVG9wXCIpO1xyXG4gIGxldCB0b3BTY3JvbGxNb2JhaWwgPSAkKFwiLmZpcnN0U2VjdGlvbl9fc2Nyb2xsRG93bk1vYmFpbFwiKTtcclxuICBsZXQgZm9vdGVyU2Nyb2xsTW9iYWlsID0gJCgnLmZvb3Rlcl9fc2Nyb2xsVG9wTW9iaWxlJyk7XHJcblxyXG4gIHRvcFNjcm9sbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgIGxldCBocmVmID0gdGFyZ2V0LmF0dHIoXCJocmVmXCIpO1xyXG5cclxuICAgIGxldCBlbGVtVG9TY3JvbGwgPSAkKGhyZWYpO1xyXG4gICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZWxlbVRvU2Nyb2xsLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LFxyXG4gICAgICAxMDAwXHJcbiAgICApO1xyXG4gIH0pO1xyXG4vL9C80L7QsdC40LvRjNC90YvQuSDRgdC60YDQvtC70LtcclxuICBmb290ZXJTY3JvbGxNb2JhaWwub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgaHJlZiA9IHRhcmdldC5hdHRyKFwiaHJlZlwiKTtcclxuXHJcbiAgICBsZXQgZWxlbVRvU2Nyb2xsID0gJChocmVmKTtcclxuXHJcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBlbGVtVG9TY3JvbGwub2Zmc2V0KCkudG9wIC0gOTBcclxuICAgICAgfSxcclxuICAgICAgMTAwMFxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgZm9vdGVyU2Nyb2xsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgbGV0IGhyZWYgPSB0YXJnZXQuYXR0cihcImhyZWZcIik7XHJcblxyXG4gICAgbGV0IGVsZW1Ub1Njcm9sbCA9ICQoaHJlZik7XHJcblxyXG4gICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNjcm9sbFRvcDogZWxlbVRvU2Nyb2xsLm9mZnNldCgpLnRvcCAtIDkwXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMDBcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4vL9C80L7QsdC40LvRjNC90YvQuSDRgdC60YDQvtC70LtcclxuICB0b3BTY3JvbGxNb2JhaWwub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgaHJlZiA9IHRhcmdldC5hdHRyKFwiaHJlZlwiKTtcclxuXHJcbiAgICBsZXQgZWxlbVRvU2Nyb2xsID0gJChocmVmKTtcclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBzY3JvbGxUb3A6IGVsZW1Ub1Njcm9sbC5vZmZzZXQoKS50b3BcclxuICAgICAgfSxcclxuICAgICAgMTAwMFxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgLy8g0JrQntCf0JjQoNCe0JLQkNCi0Kwg0JIg0JHQo9Ck0JXQoFxyXG4gIGxldCBidWZmZXIgPSAkKCcubmF2aWdhdGlvbl9fY29weUJ0bicpO1xyXG5cclxuXHJcbiAgdmFyIHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgbmV3IENsaXBib2FyZCgnLm5hdmlnYXRpb25fX2NvcHlCdG4nLCB7dGV4dDogZnVuY3Rpb24oKXsgcmV0dXJuIHVybDt9fSk7XHJcblxyXG59KTtcclxuXHJcbiAgIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });