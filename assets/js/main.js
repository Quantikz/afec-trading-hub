(function () {
  var nav = document.getElementById('nav');
  var drawer = document.getElementById('drawer');
  document.getElementById('menuBtn')?.addEventListener('click', function () { drawer?.classList.add('open'); });
  document.getElementById('closeBtn')?.addEventListener('click', function () { drawer?.classList.remove('open'); });
  window.addEventListener('scroll', function () { nav?.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });
  document.querySelectorAll('.principle').forEach(function (el) {
    el.addEventListener('click', function () { el.classList.toggle('open'); });
  });
  var form = document.getElementById('enquiry-form');
  var success = document.getElementById('enquiry-success');
  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(form).entries());
    var text = encodeURIComponent('Hello AFEC, my name is ' + (data.name || '') + '. Email: ' + (data.email || '') + '. I am interested in ' + (data.interest || 'a conversation') + '. ' + (data.message || '') + ' My number: ' + (data.phone || ''));
    form.classList.add('sent');
    if (success) success.classList.add('show');
    setTimeout(function () { window.location.href = 'https://wa.me/2349017909577?text=' + text; }, 700);
  });
})();
