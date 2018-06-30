$(document).ready(function () {

  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['water', 'grass', 'clock', 'tree'],
    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
    direction: 'horizontal',
    navigation: {
      'position': 'right',
      'tooltips': ['Home', 'Life', 'Projects', 'Contact']
    },
    afterRender: function () {
      //playing the video
      console.log('callback after render');
    }

  });
  $("#logo").blast({
    delimiter: "letter"
  }).velocity("transition.fadeIn", {
    display: null,
    duration: 1500,
    stagger: 100,
    delay: 1000
  });
  $('.clockprojecticon').on('mouseenter', function () {
    if ($('#clock').css('top') !== '3vh') {
      $('#clock').css('top', '3vh');
    }
  });
  $('.clockprojecticon').on('mouseleave', function () {
    $('#clock').css('top', '250vh');
  });

});