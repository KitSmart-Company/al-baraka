/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  // Аналог $(document).ready(function(){
  new WOW().init();
  $('.parthners__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    appendArrows: '.parthners__arr',
    // centerMode: true,
    responsive: [{
      breakpoint: 900,
      settings: {
        centerMode: true
      }
    }]
  });
  $('.faq__item').on('click', function () {
    $(this).toggleClass('active');
    $(this).find('.faq__item-answ').slideToggle();
  });
  var sum = 50000;
  var len = 3;
  var rate = 0.02;
  $("#calc-sum").slider({
    range: "min",
    value: 50000,
    min: 8000,
    max: 200000,
    step: 100,
    animate: false,
    slide: function slide(event, ui) {
      sum = ui.value;
      $('#sum-val').html(ui.value);
      calculate();
    },
    change: function change(event, ui) {
      sum = ui.value;
      $('#sum-val').html(ui.value);
      calculate();
    },
    stop: function stop(event, ui) {}
  });
  $("#calc-len").slider({
    range: "min",
    value: 3,
    min: 2,
    max: 12,
    step: 1,
    animate: false,
    slide: function slide(event, ui) {
      len = ui.value;
      $('#len-val').html(ui.value);

      if (ui.value < 5) {
        $('#len-month').html('месяца');
      } else {
        $('#len-month').html('месяцев');
      }

      calculate();
    },
    change: function change(event, ui) {
      len = ui.value;
      $('#len-val').html(ui.value);

      if (ui.value < 5) {
        $('#len-month').html('месяца');
      } else {
        $('#len-month').html('месяцев');
      }

      calculate();
    },
    stop: function stop(event, ui) {}
  });

  function calculate() {
    var first = Math.round(sum * 0.3);
    first = first / 100;
    first = Math.ceil(first);
    first = first * 100;
    var add = Math.round(rate * len * sum);
    var sum_ttl = Math.round(sum + add);
    sum_ttl = sum_ttl / 100;
    sum_ttl = Math.ceil(sum_ttl);
    sum_ttl = sum_ttl * 100;
    var sum_left = sum_ttl - first;
    var period = Math.round(sum_left / len);

    period = period / 100;
    period = Math.ceil(period);
    period = period * 100;
    
    sum_ttl = period * len + first;
    
    add = sum_ttl - sum;

    $('#first-pay span').html(first);
    $('#add-val span').html(add);
    $('#total-val').html(sum_ttl);
    $('#period-pay span').html(period);
  }

  $('.calc__vars-item').on('click', function () {
    $('.calc__vars-item').removeClass('active');
    $(this).addClass('active');
    rate = Number($(this).data('rate'));
    calculate();
  });
  calculate();
  $(".calc__ui-val").keypress(function (e) {
    if (e.keyCode === 13) {
        var val = Number($(this).html());
        $("#calc-sum").slider("value", val);
        return false;
    }
    if (!(e.keyCode >= 48 && e.keyCode <= 57) && !(e.keyCode >= 96 && e.keyCode <= 105)) {
      e.preventDefault();
    }
  }); 
  $("#sum-val").on('focus', function (e) {
    $(this).html('')
  });
  $("#sum-val").on('blur', function (e) {
    var val = Number($(this).html());
    $("#calc-sum").slider("value", val);
  });
  $("#len-val").on('blur', function (e) {
    var val = Number($(this).html());
    $("#calc-len").slider("value", val);
  });
  $('[data-p]').on('click', function () {
    var id = $(this).data('p');
    $('#' + id).fadeIn();
  });
  $('.popup-wrap, .close').on('click', function (e) {
    if (e.target == this) {
      $(this).closest('.popup').fadeOut();
    }
  });
  $('input[name="phone"]').mask("+7(999) 999-99-99");
  $('form').on('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(this);
    var file_link = $(this).data('file');
    var btn = $(this).find('.form-btn')
    $(btn).prop('disabled', true)
    $.ajax({
      url: 'submit.php',
      data: fd,
      processData: false,
      contentType: false,
      type: 'POST',
      
      success: function success(response) {
        $('.popup').fadeOut();
        $('#thx').fadeIn();
        $(btn).prop('false', true)
        if (file_link){
        	var link = document.createElement('a');
		       link.setAttribute('href', 'docs/al-baraka-parthners.pdf');
		       link.setAttribute('download','download');
		       link.click();
        }
      }
    });
  });
  $('a[href="#policy"]').on('click', function(e){
    e.preventDefault()
    $('#policy').fadeIn()
  })
});


/******/ })()
;