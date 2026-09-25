(function () {
  const header = `\n    <div class=\"nav-shell\">\n      <div class=\"nav\" id=\"nav\">\n        <a class=\"brand\" href=\"/\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 80 80\" aria-hidden=\"true\"><rect width=\"80\" height=\"80\" rx=\"16\" fill=\"#111\"/><rect x=\"22\" y=\"38\" width=\"8\" height=\"22\" fill=\"#c4453c\"/><rect x=\"32\" y=\"28\" width=\"8\" height=\"32\" fill=\"#c4453c\"/><rect x=\"42\" y=\"22\" width=\"8\" height=\"38\" fill=\"#1f8a4d\"/><rect x=\"52\" y=\"30\" width=\"8\" height=\"30\" fill=\"#1f8a4d\"/><path d=\"M18 48c10-2 16-14 28-16 6-1 10 2 16 8-8-1-14 6-22 10-8 4-16 4-22-2z\" fill=\"#f4f1ea\"/></svg>\n          <b>AFEC</b>\n        </a>\n        <nav class=\"nav-links\" aria-label=\"Primary\">\n          <a href=\"/about\">About</a>\n          <a href=\"/academy\">Academy</a>\n          <a href=\"/services\">Services</a>\n          <a href=\"/business\">Business</a>\n          <a href=\"/contact\">Contact</a>\n        </nav>\n        <a class=\"nav-cta\" href=\"/contact\">Enrol / Enquire <span class=\"arr\" aria-hidden=\"true\">\u2197</span></a>\n        <button class=\"menu-btn\" id=\"menuBtn\" aria-label=\"Open menu\">\u2630</button>\n      </div>\n    </div>\n    <div class=\"drawer\" id=\"drawer\">\n      <div class=\"drawer-top\"><b>AFEC</b><button class=\"menu-btn\" id=\"closeBtn\" aria-label=\"Close menu\">\u2715</button></div>\n      <nav>\n        <a href=\"/\">Home</a>\n        <a href=\"/about\">About</a>\n        <a href=\"/academy\">Academy</a>\n        <a href=\"/services\">Services</a>\n        <a href=\"/business\">Business Resources</a>\n        <a href=\"/contact\">Contact</a>\n      </nav>\n      <div class=\"drawer-foot\">\n        <a class=\"btn btn-dark\" href=\"/contact\">Enrol / Enquire \u2197</a>\n        <a class=\"btn btn-ghost\" href=\"https://wa.me/2349017909577\">WhatsApp</a>\n      </div>\n    </div>\n    <a class=\"wa-fab\" href=\"https://wa.me/2349017909577\" aria-label=\"Chat on WhatsApp\">WA</a>`;
  const footer = `\n    <footer class=\"footer\"><div class=\"wrap\"><div class=\"footer-top\"><div><div class=\"footer-brand\">AFEC</div><p>Building a generation of freedom through knowledge & trade.</p></div><div><h4>COMPANY</h4><a href=\"/about\">About</a><a href=\"/academy\">Academy</a><a href=\"/services\">Services</a><a href=\"/contact\">Contact</a></div><div><h4>ACADEMY</h4><a href=\"/academy\">Trading</a><a href=\"/academy/programs\">Programs</a><a href=\"/academy/admissions\">Admissions</a></div><div><h4>CONNECT</h4><a href=\"https://wa.me/2349017909577\">WhatsApp</a><a href=\"tel:+2349017909577\">+234 901 790 9577</a><a href=\"https://x.com/AfecTradeHub\">X</a><a href=\"/privacy\">Privacy</a><a href=\"/terms\">Terms</a></div></div><div class=\"footer-bot\"><span>\u00a9 2025 AFEC Trading Hub & Business Resources Ltd</span><span>RC 8262024 \u00b7 TIN 32817914-0001</span></div></div></footer>`;
  const mountHead = document.getElementById(\"site-header\");
  const mountFoot = document.getElementById(\"site-footer\");
  if (mountHead) mountHead.innerHTML = header;
  if (mountFoot) mountFoot.innerHTML = footer;
  const nav = document.getElementById(\"nav\");
  const drawer = document.getElementById(\"drawer\");
  document.getElementById(\"menuBtn\")?.addEventListener(\"click\", () => drawer.classList.add(\"open\"));
  document.getElementById(\"closeBtn\")?.addEventListener(\"click\", () => drawer.classList.remove(\"open\"));
  window.addEventListener(\"scroll\", () => nav?.classList.toggle(\"scrolled\", window.scrollY > 12), { passive: true });
  document.querySelectorAll(\".chip\").forEach((chip) => {
    chip.addEventListener(\"click\", () => {
      const name = chip.dataset.field;
      document.querySelectorAll('.chip[data-field=\"' + name + '\"]').forEach((c) => c.classList.remove(\"on\"));
      chip.classList.add(\"on\");
      const hidden = document.getElementById(name);
      if (hidden) hidden.value = chip.dataset.value;
    });
  });
  const form = document.getElementById(\"enquiry-form\");
  form?.addEventListener(\"submit\", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const text = encodeURIComponent(\"Hello AFEC, my name is \" + (data.name || \"\") + \". \" + (data.email ? \"Email: \" + data.email + \". \" : \"\") + \"I am interested in \" + (data.interest || \"a conversation\") + \". \" + (data.message || \"\") + \" My number: \" + (data.phone || \"\"));
    window.location.href = \"https://wa.me/2349017909577?text=\" + text;
  });
})();
