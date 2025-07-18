const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".photo-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerText = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});