
$(function() {
  
  

    /* слайдер */

$('.sliderSectionPPL').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  autoplay: true,
  prevArrow: $('.sliderSectionPPL__btn_prev'),
  nextArrow: $('.sliderSectionPPL__btn_next')
  
});


  let menu = document.querySelector(".navigation__menu");
  let menuOpenBtn = document.querySelector(".navigation__menuBtn");
  let menuOpenBtnMobail = document.querySelector(".navigation__menuBtnMobail");
  let menuCloserBtn = document.querySelector(".navigation__menu_buttonCloser");
  let circleNumber = document.querySelector(".whySignUp__circle_pi");
  let section = document.querySelector(".whySignUp");
  let flag = false;
  let modalContainerRegister = document.querySelector(".modalContainer");
  let modalContainerBtnJoin = document.querySelector(
    ".navigation__joinNow_btn"
  );
  let navigationbtnMobail = document.querySelector(
    ".navigation__joinNow_btnMobail"
  );
  let modalContainerCloserBtn = document.querySelector(
    ".modalContainer__join_closer"
  );
  let formContainer = document.querySelector(".modalContainer__containerBox");
  let menuJoinBtn = document.querySelector(".navigation__menu_button");
  let backGroundOpacity = document.querySelector('.navigation__menu_backGround');

  modalContainerBtnJoin.addEventListener("click", function() {
    modalContainerRegister.classList.add("active");

  });

  navigationbtnMobail.addEventListener("click", function() {
    modalContainerRegister.classList.add("active");
  });

  menuJoinBtn.addEventListener("click", function() {
    modalContainerRegister.classList.add("active");
  });
  modalContainerCloserBtn.addEventListener("click", function() {
    modalContainerRegister.classList.remove("active");
  });
  modalContainerRegister.addEventListener("click", function(e) {
    if (e.target == formContainer) {
      modalContainerRegister.classList.remove("active");
    }
  });

  menuOpenBtn.addEventListener("click", function(e) {
    if (flag == false) {
      menu.classList.add("active");
       backGroundOpacity.classList.add('activeBack');
      backGroundOpacity.style.opacity= '1';
        
   

    }
  });
  menuOpenBtnMobail.addEventListener("click", function() {
    if (flag == false) {
      menu.classList.add("active");

    }
  });

  menuCloserBtn.addEventListener("click", function(e) {
    if (flag == true) {
      menu.classList.add("not-active");
    }
  });

  menu.addEventListener("animationend", function(e) {
    if (flag) {
      menu.classList.remove("not-active");
      menu.classList.remove("active");
      backGroundOpacity.classList.remove('activeBack');
      flag = false;
    } else {
      flag = true;
    }
  });
  // ЕСЛИ НАЖИМАЕМ НА РЕГИСТРАЦИЮ В МЕНЮ(ТО ЗАКРЫВАЕМ МЕНЮ)
  menu.addEventListener("click", function(e) {
    if (e.target == menuJoinBtn) {
      menu.classList.add("not-active");
    }
  });

  // от 0 до 15800 КРУГ
  function setCounter() {
    let value = +circleNumber.innerText;
    setInterval(() => {
      if (value <= 15824) {
        value = +value + 10;
        circleNumber.innerText = value;
      }
    }, 0);
  }

  // ПРОВЕРКА, КОГДА КРУГ БУДЕТ В ПОЛЕ ЗРЕНИЯ, ТОГДА ПОЙДЕТ ОТСЧЕТ ОТ 0 ДО 15800
  // let options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0
  // };
  // let callback = function(entries, observer) {
  //   if (entries[0].isIntersecting) {
  //     setCounter();
  //   }
  // };
  // let observer = new IntersectionObserver(callback, options);
  // observer.observe(circleNumber);

  let target = $('.whySignUp__circle');
  let targetPos = target.offset().top;

  let winHeight = $(window).height();
  
  let scrollToElem = targetPos - winHeight;
  $(window).scroll(function(){
    let winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
      //сработает когда пользователь доскроллит к элементу с классом .whySignUp__circle
      setCounter()
    }
  });

  //СКРОЛЛ ВНИЗ В ФУТЕР

  let topScroll = $(".firstSection__scrollDown");
  let footerScroll = $(".footer__scrollTop");
  let topScrollMobail = $(".firstSection__scrollDownMobail");
  let footerScrollMobail = $('.footer__scrollTopMobile');

  topScroll.on("click", function(event) {
    event.preventDefault();
    let target = $(event.target);
    let href = target.attr("href");

    let elemToScroll = $(href);
    $("html, body").animate(
      {
        scrollTop: elemToScroll.offset().top-190
      },
      1000
    );
  });
//мобильный скролл
  footerScrollMobail.on("click", function(event) {
    event.preventDefault();
    let target = $(event.target);
    let href = target.attr("href");

    let elemToScroll = $(href);

    $("html, body").animate(
      {
        scrollTop: elemToScroll.offset().top - 90
      },
      1000
    );
  });

  footerScroll.on("click", function(event) {
    event.preventDefault();
    let target = $(event.target);
    let href = target.attr("href");

    let elemToScroll = $(href);

    $("html, body").animate(
      {
        scrollTop: elemToScroll.offset().top - 90
      },
      1000
    );
  });

//мобильный скролл
  topScrollMobail.on("click", function(event) {
    event.preventDefault();
    let target = $(event.target);
    let href = target.attr("href");

    let elemToScroll = $(href);
    $("html, body").animate(
      {
        scrollTop: elemToScroll.offset().top
      },
      1000
    );
  });

  // КОПИРОВАТЬ В БУФЕР
  let buffer = $('.navigation__copyBtn');


  var url = document.location.href;
  new Clipboard('.navigation__copyBtn', {text: function(){ return url;}});



  /* Fix head */
let flag1 = true;
$(window).on("scroll", function(event) {
  let target = $(event.target);
  let scrolledPixels = target.scrollTop();
  let header = $(".navigation");

  let navigation = $(".navFlex");
  let lol;
  var logoImg = document.createElement("img");
  if (scrolledPixels) {
    lol = document.querySelector(".lol");
  }

  if (scrolledPixels > 580) {
    header.addClass("scrolled");
    header.addClass("wrapper");
    if (flag1) {
      flag1 = false;

      logoImg.setAttribute("src", "./img/svg/logoFixedMobail.svg");
      logoImg.style.width = "144px";
      logoImg.style.height = "30px";
      logoImg.style.marginLeft = "10px";
      logoImg.classList.add("lol");
      header["0"].insertAdjacentElement("afterbegin", logoImg);
    }
  } else {
    header.removeClass("scrolled");
    header.removeClass("wrapper");
  }

  if (scrolledPixels > 580) {
    if (lol) {
      lol.style.display = "block";
    }
  }
  if (scrolledPixels < 580) {
    if (lol) {
      lol.style.display = "none";
    }
  }
});
/* Fix head PC */

  $(window).on('scroll', function(event){
    var target = $(event.target);
    var scrolledPixels = target.scrollTop();
    var header = $('.navigationPC');
    if(scrolledPixels > 60){
      header.addClass('scrolledPC');
       header.addClass("wrapper");
    } else{
      header.removeClass('scrolledPC');
    }
  });


});

  