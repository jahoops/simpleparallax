function scrollSlide(el, targetid) {
  document.querySelectorAll('#nav a.active').forEach(
    function (el) {
      el.classList.remove('active');
    }
  );
  el.classList.add('active');
  var targetDiv = document.querySelector(targetid);
  var y = targetDiv.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
}

$(document).ready(function () {

  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['water', 'grass', 'clock', 'tree'],
    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
    direction: 'horizontal',
    navigation: {
       'position': 'right',
       'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
    },
    afterRender: function(){
       //playing the video
       console.log('callback after render');
    }
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

~ function () {

  'use strict';

  function run() {

    requestAnimationFrame(run);
    r = ((screen.offsetWidth / 2) - pointer.ex) / 2;
    pointer.ease(15);
    live.style[transform] = 'rotateY(' + r + 'deg)';

    for (var i = 0; i < numLetters; i++) {
      letters[i].style[transform] = 'rotateY(' + (-r) + 'deg)';
      var c = (70 - (i - 1.5) * Math.sin(r * Math.PI / 180) * 40);
      letters[i].style.color = 'hsl(0, 0%, ' + c + '%)';
    }
  }

  var live = document.getElementById('live'),
    transform = getPrefix(['transform', 'WebkitTransform']),
    letters = live.children,
    numLetters = letters.length,
    r = 0;

  function getPrefix(prefixes) {
    for (var test, i = 0; test = prefixes[i++];) {
      if (typeof document.body.style[test] != 'undefined') return test;
    }
    return null;
  }

  var screen = document.getElementById('screen');
  var pointer = (function (screen) {
    var pointer = {
      x: screen.offsetWidth / 2,
      ex: screen.offsetWidth / 2 - 180,
      pointer: function (e) {
        var touchMode = e.targetTouches,
          pointer;
        if (touchMode) {
          e.preventDefault();
          pointer = touchMode[0];
        } else pointer = e;
        this.x = pointer.clientX;
      },
      ease: function (steps) {
        this.ex += (this.x - this.ex) / steps;
      }
    };
    window.addEventListener('mousemove', function (e) {
      this.pointer(e);
    }.bind(pointer), false);
    window.addEventListener('touchmove', function (e) {
      this.pointer(e);
    }.bind(pointer), false);
    return pointer;
  }(screen));

  run();

}();