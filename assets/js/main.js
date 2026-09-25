document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => links.classList.toggle("open"));
  }

  const form = document.querySelector("#enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("[name=name]")?.value || "";
      const phone = form.querySelector("[name=phone]")?.value || "";
      const interest = form.querySelector("[name=interest]")?.value || "General enquiry";
      const message = form.querySelector("[name=message]")?.value || "";
      const text = encodeURIComponent(
        `Hello AFEC, my name is ${name}. I am interested in ${interest}. ${message} My number: ${phone}`
      );
      window.location.href = `https://wa.me/2349017909577?text=${text}`;
    });
  }
});
