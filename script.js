const $ = (selector) => document.querySelector(selector);

const grid = $(".grid");
const toggleButton = $(".toggle-layout");

toggleButton.addEventListener("click", () => {
  const toggleLayout = () => grid.classList.toggle("two-columns");
  const isViewTransitionSupported = document.startViewTransition;

  // if (isViewTransitionSupported) {
  //   document.startViewTransition(toggleLayout);
  //   return;
  // }

  toggleLayout();
});
