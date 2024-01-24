let mountOne = document.getElementById("mount1");
let mountTwo = document.getElementById("mount2");

let tabOne = document.querySelector(".tab1");
let tabTwo = document.querySelector(".tab2");

console.log(tabOne, tabTwo);

mountTwo.addEventListener("click", function () {
  tabOne.classList.add("tabClose");
  tabTwo.classList.remove("tabClose");
  console.log("click");
});

mountOne.addEventListener("click", function () {
  tabTwo.classList.add("tabClose");
  tabOne.classList.remove("tabClose");
  console.log("click");
});
