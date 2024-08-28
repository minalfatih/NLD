document.querySelector(".navbar-toggler").onclick = function () {
  document.querySelectorAll(".nav-item").forEach((li) => {
    li.classList.add("active");
  });

  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    let overly = document.createElement("div");
    overly.className = "overlay";
    document.body.appendChild(overly);
  } else {
    document.querySelector(".overlay").remove();
  }
};
