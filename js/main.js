let togglemenuBtn = document.querySelector(".navbar-toggler");
let menu = document.querySelector(".navbar-nav");

togglemenuBtn.onclick = function (e) {
  // stop propagation => icon inside the toggle will not effect when you click
  e.stopPropagation();
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    let overly = document.createElement("div");
    overly.className = "overlay";
    document.body.appendChild(overly);
  } else {
    document.querySelector(".overlay").remove();
  }
};
menu.onclick = function (e) {
  // stop propagation => icon inside the toggle will not effect when you click
  e.stopPropagation();
};
document.querySelectorAll(".navbar-nav .nav-item .nav-link").forEach((link) => {
  link.onclick = function () {
    if (menu.classList.contains("open")) {
      document.querySelector(".overlay").remove();
    }
  };
});

// countdown the number in project section
let arr = [];
document.querySelectorAll(".project-boxs .box .num").forEach((num, index) => {
  arr.push(num.textContent);

  if (+num.innerHTML > 100) {
    num.innerHTML = +num.innerHTML - 30;
  } else {
    num.innerHTML = 0;
  }
  counter();

  let count = setInterval(counter, 100);
  function counter() {
    num.innerHTML++;
    if (num.innerHTML === arr[index]) {
      clearInterval(count);
    }
  }
});
