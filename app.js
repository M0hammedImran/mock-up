// DOM Caching
const weight_span = document.getElementById('weight');
const btn_1 = document.querySelector('.btn-10');
const btn_2 = document.querySelector('.btn-5');
const price_span = document.querySelector('#price');
const minus_btn = document.querySelector('#minus');
const plus_btn = document.querySelector('#plus');
const quantity_span = document.querySelector('#quantity');
const total_span = document.querySelector('#total');
const prod_img = document.querySelector('#prod__img');

let quantity = 1;
let weight = 10;
let price = 399;

// Default
btn_1.classList.add('select');

// Listeners
btn_1.addEventListener('click', () => {
  weight = 10;
  price = 399;
  weight_span.innerHTML = weight;
  price_span.innerHTML = price;
  btn_1.classList.add('select');
  btn_2.classList.remove('select');
  quantity = 1;
  quantity_span.innerText = quantity;
  total_span.innerText = quantity * price;
  prod_img.src = './images/aashir-10kgs.jpg';
});

btn_2.addEventListener('click', () => {
  weight = 5;
  price = 209;
  weight_span.innerHTML = weight;
  price_span.innerHTML = price;
  btn_1.classList.remove('select');
  btn_2.classList.add('select');
  quantity = 1;
  quantity_span.innerText = quantity;
  total_span.innerText = quantity * price;
  prod_img.src = './images/aashir-5kgs.jpg';
});

minus_btn.addEventListener('click', () => {
  quantity >= 2 ? quantity-- : minus_btn.setAttribute('disabled', '');
  quantity_span.innerText = quantity;
  total_span.innerText = quantity * price;
});

plus_btn.addEventListener('click', () => {
  quantity <= 19 ? quantity++ : plus_btn.setAttribute('disabled', '');
  minus_btn.removeAttribute('disabled');
  quantity_span.innerText = quantity;
  total_span.innerText = quantity * price;
});

// Functions
