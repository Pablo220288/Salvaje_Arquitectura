//Loader
window.addEventListener("load", () => {
  document.getElementById("loader").classList.toggle("loader-hide");
});

/* const mail = document.querySelector(".mail");
const contactModal = document.querySelector(".contactModal");
const btnCancel = document.querySelector(".btnCancel");

mail.addEventListener("click", () => {
  contactModal.classList.add("contactModalShow");
});

btnCancel.addEventListener("click", (e) => {
  contactModal.classList.remove("contactModalShow");
});
 */

const textarea = document.querySelector(".textarea");

textarea.addEventListener("keydown", autosize);

function autosize() {
  let el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}
