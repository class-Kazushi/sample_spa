$(function() {

  $('#home-menu').hide();
  $('#header-icon').click(function() {
    $('#home-menu').fadeToggle();
  });

  document.addEventListener('click', (e) => {
    if(!e.target.closest('.header-menu')) {
      $('#home-menu').hide();
    } else {
      $('#home-menu').show();
    }
  });

  $('.header-logo').click(function() {
    $('html, body').scrollTop(0);
  });

  let images = [ 'images/spa1.jpg', 'images/spa2.jpg', 'images/spa3.jpg'];

  let randamImgs = function() {
    let spaImage = document.getElementById('spa-img');
    let number = Math.floor(Math.random() * images.length);
    let selectedImg = images[number];
    spaImage.setAttribute('src', selectedImg);
  };
  setInterval(randamImgs, 3000);

});