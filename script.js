let slider1 = document.getElementById("jobbinginput");
let verdiboks = document.getElementById("verdiboksid");
let verdi1;

verdiboks.innerHTML = slider1.value;
slider1.oninput = function () {
    verdiboks.innerHTML = this.value;
}
