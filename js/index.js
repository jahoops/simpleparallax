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

$( document ).ready(function() {

  var rellax = new Rellax('.rellax');

  $('.clockprojecticon').on('mouseenter', function(){
    if($('#clock').css('top')!=='3vh') {
      $('#clock').css('top','3vh');
    }
  });
  $('.clockprojecticon').on('mouseleave', function(){
    $('#clock').css('top','250vh');
  });

});

