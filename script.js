const ratingsBtnGroup = document.getElementById("rating-btns");
const ratingBtns = ratingsBtnGroup.children;
const submitBtn = document.getElementById("submit-btn");
const ratingResult = document.getElementById("rating-result");
const mainCard = document.getElementById("main");
const thankYouCard = document.getElementById("thank-you");
const spinner = document.getElementById("spinner");

let ratingNum = "";

// FUNCTIONS
const ratings = (e) => {
  if (e.target.id !== "rating-btns" && e.target.localName !== "li") {
    Array.from(ratingBtns).forEach((list) => {
      list.firstChild.style = "";
    });

    ratingNum = e.target.innerText;
    e.target.style.backgroundColor = "#959eac";
    e.target.style.color = "#ffffff";
  }
};

const submitRating = () => {
  if (!ratingNum) {
    alert("please pick a rating");
    return;
  }

  ratingResult.innerText = ratingNum;
  spinner.classList.toggle("v-hidden");
  thankYouCard.style.display = "initial";

  setTimeout(() => {
    mainCard.classList.toggle("hidden2");
  }, 800);

  setTimeout(() => {
    mainCard.style.display = "none";
    thankYouCard.classList.toggle("hidden");
  }, 1000);
};

ratingsBtnGroup.addEventListener("click", ratings);
submitBtn.addEventListener("click", submitRating);
