$(document).ready(function () {
  let slider_counter = 0;
  let line = $('.quiz-content-line');
  let text = $('.quiz-content-line__text')[0];
  let button = $('.quiz-btn__left');
  let modal = $('.modal-dark');
  let modal_2 = $('.modal-enter');
  let modal_counter = 0;
  let modal_3 = $('.modal-form');
  $(".header-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".quiz-block__text").offset().top
    }, 1000);
  });
  $('.modal-window-select__block').on('click', function() {
    $('.modal-window-select__block').removeClass('modal-window-select__block_a');
    $(this).addClass('modal-window-select__block_a');
    return false;
  })
  $('.header-phone__link').on('click', function() {
    $(modal).addClass('modal-dark-a');
    $(modal_3).addClass('modal-window-a');
    return false;
  })
  $('.otkatnii-btn').on('click', function() {
    $(modal).addClass('modal-dark-a');
    $(modal_3).addClass('modal-window-a');
    return false;
  })
  $('.course-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    nextArrow: $('.course-slider-arrow'),
  });
  $('.header-number').on('click', function() {
    $(modal).addClass('modal-dark-a');
    $(modal_3).addClass('modal-window-a');
    return false;
  })
  $(document).mouseleave(function(e){
    if (e.clientY < 10) {
      if (modal_counter == 0) {
        $(modal).addClass('modal-dark-a');
        $(modal_2).addClass('modal-window-a');
      }
      modal_counter = 1;
    }
  });
  $(modal).on('click', function() {
    $(modal).removeClass('modal-dark-a');
    $(modal_2).removeClass('modal-window-a');
    $(modal_3).removeClass('modal-window-a');
  })
  $('#input-range').rangeslider({
    polyfill : false,
    onInit : function() {
	    	$('#count-m').text(this.$element.val())
	    },
    onSlide : function( position, value ) {
        $('#count-m').text(this.$element.val())
    }
  });
  $('#input-range-2').rangeslider({
    polyfill : false,
    onInit : function() {
	    	$('#count-sm').text(this.$element.val())
	    },
    onSlide : function( position, value ) {
        $('#count-sm').text(this.$element.val())
    }
  });
  $(".phone").mask("+7 (999) 999-9999");
  $('.quiz-slide-block').on('click', function() {
    let block = this;
    $('.quiz-slide-block').removeClass('quiz-slide-block__active');
    $(block).addClass('quiz-slide-block__active');
    let button = $('.quiz-btn');
    button.click()
  })
  $('.quiz-t-block').on('click', function() {
    let block = this;
    $('.quiz-t-block').removeClass('quiz-slide-block__active');
    $(block).addClass('quiz-slide-block__active');
  })
  $('.quiz-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    swipe: false,
    nextArrow: $('.quiz-btn'),
    prevArrow: $('.quiz-btn__left'),
    adaptiveHeight: true
  });
  $('.fance-left__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    asNavFor: '.fance-left__slider_nav'
  })
  $('.fance-left__slider_nav').slick({
    asNavFor: '.fance-left__slider',
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: false,
    focusOnSelect: true,
  })
  $('.quiz-btn__left').on('click', function() {
    slider_counter -= 1;
    $(line).removeClass('quiz-content-line-2');
    $(line).removeClass('quiz-content-line-3');
    $(line).removeClass('quiz-content-line-4');
    $(line).removeClass('quiz-content-line-5');
    $(line).removeClass('quiz-content-line-6');
    $(line).removeClass('quiz-content-line-7');
    $(line).removeClass('quiz-content-line-8');
    if (slider_counter == 0) {
      text.innerHTML = 'Вопрос 1 из 8';
    }
    if (slider_counter == 1) {
      $(line).addClass('quiz-content-line-2');
      text.innerHTML = 'Вопрос 2 из 8';
    }
    if (slider_counter == 2) {
      $(line).addClass('quiz-content-line-3');
      text.innerHTML = 'Вопрос 3 из 8';
    }
    if (slider_counter == 3) {
      $(line).addClass('quiz-content-line-4');
      text.innerHTML = 'Вопрос 4 из 8';
    }
    if (slider_counter == 4) {
      $(line).addClass('quiz-content-line-5');
      text.innerHTML = 'Вопрос 5 из 8';
    }
    if (slider_counter == 5) {
      $(line).addClass('quiz-content-line-6');
      text.innerHTML = 'Вопрос 6 из 8';
    }
    if (slider_counter == 7) {
      $(line).addClass('quiz-content-line-7');
      text.innerHTML = 'Вопрос 7 из 8';
    }
    if (slider_counter == 8) {
      $(line).addClass('quiz-content-line-8');
      text.innerHTML = 'Вопрос 7 из 8';
    }
  })
  $('.quiz-btn').on('click', function() {
    $(button).addClass('quiz-btn__left_a');
    let slide_last = $('.quiz-content');
    if (slider_counter == 0) {
      $(line).addClass('quiz-content-line-2');
      text.innerHTML = 'Вопрос 2 из 8';
    }
    if (slider_counter == 1) {
      $(line).addClass('quiz-content-line-3');
      text.innerHTML = 'Вопрос 3 из 8';
    }
    if (slider_counter == 2) {
      $(line).addClass('quiz-content-line-4');
      text.innerHTML = 'Вопрос 4 из 8';
    }
    if (slider_counter == 3) {
      $(line).addClass('quiz-content-line-5');
      text.innerHTML = 'Вопрос 5 из 8';
    }
    if (slider_counter == 4) {
      $(line).addClass('quiz-content-line-6');
      text.innerHTML = 'Вопрос 6 из 8';
    }
    if (slider_counter == 5) {
      $(line).addClass('quiz-content-line-7');
      text.innerHTML = 'Вопрос 7 из 8';
    }
    if (slider_counter == 6) {
      $(line).addClass('quiz-content-line-8');
      $(slide_last).addClass('quiz-content-last');
      text.innerHTML = 'Вопрос 8 из 8';
    }
    if (slider_counter != 6) {
      slider_counter += 1;
    }
  })

});
