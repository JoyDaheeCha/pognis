const headerRow3 = document.getElementById("jsHeaderRow3");
const main = document.getElementById("jsMain");

const sticky = headerRow3.offsetTop - 40;

const stickyHeaderRow = () => {
  if (window.pageYOffset > sticky) {
    headerRow3.classList.add("sticky");
    main.style.paddingTop = "50px";
  } else {
    headerRow3.classList.remove("sticky");
    main.style.paddingTop = "0px";
  }
};

function init() {
  window.onscroll = stickyHeaderRow;
}

if (headerRow3) {
  init();
}
