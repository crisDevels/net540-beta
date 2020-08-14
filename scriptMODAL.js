const $overlay = document.querySelector("#overlay");
const $modal = document.getElementById("modal");
const $modalEmpresa = document.querySelector(".modalEmpresa");

const $hideModal = document.querySelector("#hide-modal");
const $hideModalEmpresa = document.querySelector("#hide-modal-Empresa");

const $buttonRegistre = document.querySelector(".buttonRegistre");
const $buttonRegistree = document.querySelector("#buttonRegistree");

const $home = document.querySelector(".home");



function showModal() {
    $overlay.classList.add("active");
    $modal.style.animation = "modalIn .8s forwards";
    $home.classList.add("activeBlur");
  }


  function showModalEmpresa() {
    $modalEmpresa.style.animation = "modalIn .8s forwards";
    $home.classList.add("activeBlur");
    $overlay.classList.add("active");

  }
  
  $hideModal.addEventListener("click", ()=>{
    $overlay.classList.remove("active");
    $modal.style.animation = "modalOut .8s forwards";
    $home.classList.remove("activeBlur");
  })

  $hideModalEmpresa.addEventListener("click", ()=>{
    $overlay.classList.remove("active");
    $modalEmpresa.style.animation = "modalOut .8s forwards";
    $home.classList.remove("activeBlur");
  })

  $buttonRegistre.addEventListener("click", () => {
    showModal();
  })

  $buttonRegistree.addEventListener("click", () => {
    showModalEmpresa();
  })





