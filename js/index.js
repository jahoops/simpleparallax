function scrollSlide(el,targetid) {
  document.querySelectorAll('#nav a.active').forEach( 
    function(el){el.classList.remove('active');} 
  );
  el.classList.add('active');
  var targetDiv = document.querySelector(targetid);
  var y = targetDiv.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth'
  });
}

