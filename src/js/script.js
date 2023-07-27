import FullPageObserver from "./fullpage.js";

const sections = document.querySelectorAll(".fullpage-section");
const SCROLL_TRESHOLD = 0.15;

sections.forEach((section) => {
  const observer = new FullPageObserver(
    section,
    SCROLL_TRESHOLD,
    (target) => {
      target.classList.add("is-visible");
    },
    (target) => {
      target.classList.remove("is-visible");
    }
  );
  observer.observe();
});
