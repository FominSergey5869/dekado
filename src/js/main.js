$(document).ready(function () {
  //слайдер на главной
  $('.main-slider-container').slick({
    arrows: false,
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

  //select кастомный
  $('select').niceSelect()

  $('select').change(function (e) {
    console.log($(this).val())
  })

  //кнопка навигации на карте
  $('.main-map__navigation__right__buttons button').click(function () {
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
})
