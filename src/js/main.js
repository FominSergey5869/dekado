$(document).ready(function () {
  $('.main-slider-container').slick({
    arrows: false,
  })

  $('select').niceSelect()

  $('select').change(function (e) {
    console.log($(this).val())
  })

  $('.main-map__navigation__right__buttons button').click(function () {
    $(this).parent().find('button').removeClass('active')
    $(this).addClass('active')
  })
})
