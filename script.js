let sliders = document.getElementsByClassName("slider");
let verdi = document.getElementsByClassName("viv");

for(i=0;i!=sliders.length;i++){
    sliders[i].oninput = function () {
        verdi[Number(this.getAttribute('data-value'))].innerHTML = this.value;
    }
}
