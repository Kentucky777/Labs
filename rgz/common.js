document.addEventListener('DOMContentLoaded', function () {

  var current = location.pathname.split('/').pop() || 'about.html';
  document.querySelectorAll('nav.sidebar a').forEach(function (a) {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });


  var btn = document.getElementById('toTop');
  if (btn) {
    window.addEventListener('scroll', function () {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
