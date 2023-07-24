// Form elements
//input
const inputFullName = document.getElementById("full-name");
const nameError = document.getElementById("nameError");
//password
const password = document.getElementById("password");
const repeated = document.getElementById("repeated");
const passwordError = document.getElementById("passwordError");
const submittionStatus = document.getElementById("submittionStatus");

//helper functions
/**
 *
 * @param {string} name
 */
const validateName = (name) => {
  if (name.length > 3) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @param {string} password
 * @param {string} repeated
 * @returns
 */
const validatePassword = (password, repeated) => {
  if (password === repeated) {
    return true;
  } else {
    return false;
  }
};

//events
inputFullName.addEventListener("focus", (e) => {
  inputFullName.style.border = "2px solid #4682A9";
  nameError.innerText = "";
});
inputFullName.addEventListener("blur", (e) => {
  const valid = validateName(e.target.value);
  if (!valid) {
    inputFullName.style.border = "2px solid red";
    nameError.innerText = "Invalid Name!";
  } else {
    inputFullName.style.border = "1px solid black";
    nameError.innerText = "";
  }
});
repeated.addEventListener("blur", (e) => {
  if (e.target.value !== password.value) {
    repeated.style.border = "2px solid red";
    passwordError.innerText = "Not the same password!";
  } else {
    repeated.style.border = "1px solid black";
    passwordError.innerText = "";
  }
});

/**
 * Validates the`full name`, `password` and`repeat password` inputs.
 * @param {Event} e
 */
const submitHandler = (e) => {
  e.preventDefault();
  if (
    password.value.length > 0 &&
    password.value === repeated.value &&
    inputFullName.value.length > 0
  ) {
    submittionStatus.innerText = "Submitted successfully!";
  } else {
    submittionStatus.innerText = "Please correct the validation errors first!";
  }
};

// ========================================= Gallery ===========================================//
//elements
const galleryContainer = document.getElementById("gallery-container");
const imagesContainer = document.getElementById("imgs-container");
const controlBtns = document.querySelectorAll(".control");
const images = Array.from(document.querySelectorAll(".img"));
let i = 0;
let interval;

const setPosition = (index) => {
  const width = images[index].getBoundingClientRect().width;
  imagesContainer.style.transform = `translateX(-${width * index}px)`;
};
const moveImage = () => {
  if (i === images.length) {
    i = 0; // when reaching the end of the array, go back to start.
  } else if (i == -1) {
    i = images.length - 1; // when reaching the beginning of the array, go back to last index.
  }
  setPosition(i);
};

const autoMoveImage = (stop) => {
  if (!stop) {
    interval = setInterval(() => {
      i++;
      moveImage();
    }, 500);
  } else if (stop && interval) {
    clearInterval(interval);
  }
};

controlBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("clicked");
    if (btn.classList.contains("next")) {
      i++;
      console.log(i);
      moveImage();
    } else if (btn.classList.contains("prev")) {
      i--;
      moveImage();
    } else if (btn.classList.contains("play")) {
      autoMoveImage();
    } else if (btn.classList.contains("stop")) {
      autoMoveImage(true);
    }
  });
});
images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    autoMoveImage();
  });
  img.addEventListener("mouseleave", () => {
    autoMoveImage(true);
  });
});

// ========================================= Opacity Gallery ===========================================//
const opImages = document.querySelectorAll(".op-img");
opImages.forEach((img) => {
  img.addEventListener("mouseenter", (e) => {
    img.style.opacity = "0.3";
  });
  img.addEventListener("mouseleave", (e) => {
    img.style.opacity = "1";
  });
});

// ========================================= Add remove Gallery ===========================================//
const container = document.querySelector("#container");
const newImageBtn = document.querySelector("#newImageBtn");
const imgs = document.querySelectorAll(".img-group");
const counterText = document.querySelector("#counter");

function addOpacityHover(image) {
  image.addEventListener("mouseenter", (e) => {
    image.style.opacity = "0.3";
  });
  image.addEventListener("mouseleave", (e) => {
    image.style.opacity = "1";
  });
}
function removeOnClick(image) {
  image.addEventListener("click", (e) => {
    container.removeChild(image);
    setCount();
  });
}
//remove on click
imgs.forEach((image) => {
  removeOnClick(image);
});
//count elements
function setCount() {
  const count = container.childElementCount;
  counterText.innerText = `Number of images: ${count - 1}`;
}
setCount();
//add new random image
newImageBtn.addEventListener("click", () => {
  const newImage = document.createElement("img");
  newImage.classList.add(...["op-img", "img-group"]);
  newImage.setAttribute("src", `./Assets/${Math.ceil(Math.random() * 3)}.jpg`);
  container.insertBefore(newImage, newImageBtn);
  addOpacityHover(newImage);
  removeOnClick(newImage);
  setCount();
});
