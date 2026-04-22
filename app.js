const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("sidemenu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

// Tabs
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// OPEN MENU
openBtn.addEventListener("click", () => {
  sideMenu.style.right = "0";
});

// CLOSE MENU
closeBtn.addEventListener("click", () => {
  sideMenu.style.right = "-200px";
});
// Google form submit
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxVCkijDfS_Xd7k8wP8zh9Xx3JVXcoaxbZsvUUz0iRzWWHKEiWzaQY9HhxlLYJRYJBB/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      msg.innerHTML = "Message sent successfully ✅";

      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);

      form.reset();
    })
    .catch((error) => {
      console.log("Error!", error.message);
      msg.innerHTML = "Something went wrong ❌";
    });
});
