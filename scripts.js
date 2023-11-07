
checkInDate.addEventListener("click", () => {
    checkInDate.style.animation = "glow 0.5s infinite linear";
});

checkOutDate.addEventListener("click", () => {
    checkOutDate.style.animation = "glow 0.5s infinite linear";
});


submitButton.addEventListener("mouseover", () => {
    submitButton.style.transform = "scale(1.2)";
});

submitButton.addEventListener("mouseout", () => {
    submitButton.style.transform = "scale(1)";
});

const reservationForm = document.getElementById("reservation-form");

reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

  
    reservationForm.style.animation = "fadeOut 1s forwards";
});


const formRows = document.getElementsByClassName("form-row");
for (let i = 0; i < formRows.length; i++) {
    formRows[i].classList.add("align-form-row");
}
