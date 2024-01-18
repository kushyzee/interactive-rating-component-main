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
  ratingNum = e.target.innerText;
  e.target.style.backgroundColor = '#fb7413';
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
console.log(ratingResult.innerText);
