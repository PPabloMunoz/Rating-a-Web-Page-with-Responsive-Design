let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let submit = document.getElementById("submit");
let container = document.getElementById("container");
let experiencia = document.getElementById("experiencia");


var valorBtn = 0;



btn1.addEventListener("click", function () {
    valorBtn = btn1.value;
    experiencia.textContent = (`Your experiencie is ${valorBtn}/5`);
});

btn2.addEventListener("click", function () {
    valorBtn = btn2.value;
    experiencia.textContent = (`Your experiencie is ${valorBtn}/5`);
});

btn3.addEventListener("click", function () {
    valorBtn = btn3.value;
    experiencia.textContent = (`Your experiencie is ${valorBtn}/5`);
});

btn4.addEventListener("click", function () {
    valorBtn = btn4.value;
    experiencia.textContent = (`Your experiencie is ${valorBtn}/5`);
});

btn5.addEventListener("click", function () {
    valorBtn = btn5.value;
    experiencia.textContent = (`Your experiencie is ${valorBtn}/5`);
});

experiencia.textContent = (`Your experiencie is ${valorBtn}/5`);


submit.addEventListener("click", function () {
    container.innerHTML = (`<section class="tarjeta card p-3 d-flex justify-content-center align-items-center">
    <img src="images/illustration-thank-you.svg" class="w-50 p-2 my-3 ">
    <div class="nota p-2 mb-2 rounded-pill">You selected ${valorBtn} out of 5</div>
    <div class="card-title fs-1 m-0 mt-3">Thank You!</div>
    <div class="card-body pt-0">
        <p class="text-texto text-center">We appreciated you taking the time to give a rating. If you ever need
            more support, don't hesitate to
            get in touch!</p>
    </div>
</section>`)
});