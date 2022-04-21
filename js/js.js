$(function(){

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('noscroll');
    // $(".linkbatton").hide();

    $('.carusel').slick('setPosition');
    $('.carusel_4').slick('setPosition');
  });
  modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.popup');

    modalParent.removeClass('show');
    $("body").removeClass('noscroll');
    // $(".linkbatton").show();
  });
  $(".popap_content").on("click", function(event) {
    event.stopPropagation();
  });
// https://kenwheeler.github.io/slick/

    $('.carusel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.carusel_4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
    });


});