document.addEventListener("DOMContentLoaded", function () {
  var active = document.querySelector(".tabs a.active");
  if (active && typeof active.scrollIntoView === "function") {
    active.scrollIntoView({ inline: "center", block: "nearest" });
  }
});
