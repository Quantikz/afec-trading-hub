document.getElementById('menuBtn')?.addEventListener('click', function () {
  document.getElementById('drawer')?.classList.add('open');
});
document.getElementById('closeBtn')?.addEventListener('click', function () {
  document.getElementById('drawer')?.classList.remove('open');
});
window.addEventListener('scroll', function () {
  document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });
document.querySelectorAll('.chip').forEach(function (chip) {
  chip.addEventListener('click', function () {
    var name = chip.getAttribute('data-field');
    document.querySelectorAll('.chip[data-field="' + name + '"]').forEach(function (c) { c.classList.remove('on'); });
    chip.classList.add('on');
    var hidden = document.getElementById(name);
    if (hidden) hidden.value = chip.getAttribute('data-value');
  });
});
var form = document.getElementById('enquiry-form');
form?.addEventListener('submit', function (e) {
  e.preventDefault();
  var data = Object.fromEntries(new FormData(form).entries());
  var text = encodeURIComponent('Hello AFEC, my name is ' + (data.name || '') + '. I am interested in ' + (data.interest || 'a conversation') + '. ' + (data.message || '') + ' My number: ' + (data.phone || ''));
  window.location.href = 'https://wa.me/2349017909577?text=' + text;
});
