$(document).ready(function () {
  //слайдер на главной
  $('.main-slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'custom-dots',
  })

  //слайдер в карточке продукта

  $('.product-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider-nav',
  })
  $('.product-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slider-for',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
  })
  //scroll в сравнении 
  $(".compare-scroller").mCustomScrollbar({
    axis:"x",
    advanced:{
      autoExpandHorizontalScroll:true
    }
  });

  //select кастомный
  $('select').niceSelect()

  $('select').change(function (e) {
    console.log($(this).val())
  })

  //Выбор файла
  $('input[type="file"]').on('change', function () {
    console.log($(this).siblings('.file-chosen'))
    $(this).siblings('.file-chosen').text(this.files[0].name)
  })

  //кнопка навигации на карте
  $('.map-navigation__right__buttons button').click(function () {
    $(this).parent().find('button').removeClass('active')
    $(this).addClass('active')
  })

  //табы
  $('.tabs-triggers__item').click(function (e) {
    e.preventDefault()

    $('.tabs-triggers__item').removeClass('active')
    $('.tabs-content__item').removeClass('active')

    $(this).addClass('active')
    $($(this).attr('href')).addClass('active')
  })

  //Кнопка сравнения
  $('.compare-button').click(function (e) {
    if (e.target.nodeName === 'SPAN' || e.target.nodeName === 'BUTTON') {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
      } else {
        $(this).addClass('active')
      }
    }
  })

  //Numeric up down

  $('.numeric-up-down__input').on('input', function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9\.]/g, '')
    )
  })

  $('.numeric-up-down__input').change(function (e) {
    const max = $(this).data('max-value')
    const val = Number($(this).val()).toString().trim()

    if (max <= val) $(this).val(max)
    else if (max > val) $(this).val(Number(val).toString())
    else if (val === NaN) $(this).val(0)
  })

  $('.numeric-up-down .button--plus').click(function () {
    const input = $(this).siblings('.numeric-up-down__input').eq(0)
    const max = input.data('max-value')
    let val = input.val()

    if (val === '') value = 0

    if (max <= val) $(this).val(max)
    else input.val(parseInt(val) + 1)
  })

  $('.numeric-up-down .button--minus').click(function () {
    const input = $(this).siblings('.numeric-up-down__input').eq(0)
    let val = input.val()

    if (val === '') value = 0

    if (val <= 0) $(this).val(0)
    else input.val(parseInt(val) - 1)
  })

  $('.custom-table__row .del--button').click(function () {
    $(this).closest('.custom-table__row').remove()
  })

  //История заказов
  $('.js-history-table--open-button').click(function (params) {
    const parent = $(this).closest('.history-table__row')
    const body = parent.find('.history-table__row__body')

    if (parent.hasClass('active')) {
      body.animate({ height: 0 }, 400, function () {
        parent.removeClass('active')
        // body.css({padding: 0})
      })
    } else {
      const height = body[0].scrollHeight + 40

      body.animate({ height: height }, 400)
      // body.css({padding: 20})
      parent.addClass('active')
    }
  })
  $('.js-history-table--open-button').eq(0).trigger('click')

  //мобильное меню
  $('.js-hamburger-menu').click(function () {
    $('#mobile-menu').addClass('active')
    $('body').css({overflow: 'hidden'})
  })

  $('#js-menu-mobile--close').click(function () {
    $('#mobile-menu').removeClass('active')
    $('body').css({overflow: 'auto'})
  })

  $('.header--mobile__menu--bg').click(function () {
    $('#mobile-menu').removeClass('active')
    $('body').css({overflow: 'auto'})
  })

  // collapsible в моб меню
  $('.js-menu-collapsible-trigger').click(function () {

    const item = $($(this).attr('href'))

    if($(this).hasClass('active')) {
      $(this).removeClass('active')
      item.removeClass('active')
      item.animate({ height: 0 }, 600)
    } else {
      $(this).addClass('active')
      item.addClass('active')
      item.animate({ height: item[0].scrollHeight }, 600)
    }
  })
})
