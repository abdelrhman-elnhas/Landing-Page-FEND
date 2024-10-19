document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navList = document.getElementById("navbar");

  // Build nav items dynamically
  sections.forEach((section) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${section.id}">${
      section.id.charAt(0).toUpperCase() + section.id.slice(1)
    }</a>`;
    navList.appendChild(li);
  });

  // Scroll to section on link click with smooth scrolling
  navList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      const section = document.querySelector(e.target.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Highlighting the active section and navbar item
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll("nav ul li a").forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });
});
