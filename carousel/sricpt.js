let buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselbutton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    console.log("slides closest -> ", slides);

    const activeSlide = slides.querySelector("[data-active]");

    let children = slides.children;
    let dummy = [...slides.children];
    console.log("children ", children);
    console.log("dummy ", dummy);

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;

    delete activeSlide.dataset.active;
  });
});

async function getData() {
  console.log("hitting ****");
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("data => ", data);
    return data;
  } catch (err) {
    console.error("Error occurred: ", err);
    throw err; // Rethrow the error for error handling at a higher level if needed.
  }
}

async function fetchData() {
  try {
    const res = await getData();
    console.log("res ==> ", res);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchData(); // Call the fetchData function to trigger data fetching
