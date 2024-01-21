window.scroll({
  top: 1000,
  left: 0,
  behavior: "smooth",
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 250, // could be negative value
  left: 0,
  behavior: "smooth",
});

// Scroll to a certain element
document.getElementById("el").scrollIntoView({
  behavior: "smooth",
});
