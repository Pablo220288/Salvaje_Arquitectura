//Loader
window.addEventListener("load", () => {
  document.getElementById("loader").classList.toggle("loader-hide");
});

const mail = document.querySelector(".mail");
const contactModal = document.querySelector(".contactModal");
const btnCancel = document.querySelector(".btnCancel");

mail.addEventListener("click", () => {
  contactModal.classList.add("contactModalShow");
});

btnCancel.addEventListener("click", (e) => {
  contactModal.classList.remove("contactModalShow");
});
