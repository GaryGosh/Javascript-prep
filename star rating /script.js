const container = document.getElementById("star-continer");
const star = document.querySelectorAll(".star");

let filled = 0;

container.addEventListener("click", (e) => {
  let currentClicked = e.target.dataset.index;
  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-filled");
  }

  filled = currentClicked;

  document.querySelector(".rating").innerHTML = `rating ${filled}`;
});

container.addEventListener("mouseover", (e) => {
  let currentClicked = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-filled");
  }
});
