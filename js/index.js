// ITERATION 1

function updateSubtotal(product) {
  // alerts when button is clicked
  console.log('Calculating subtotal, yey!');
  // get DOM element for price and quantity
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")

// get the value: get the numeric value from the input field price using Number(), get value from quantity
  const priceValue = Number(price.innerHTML);
  const quantityValue = quantity.value;

  // calculate subtotal of price and quantity
  const calculateSubtotal = priceValue * quantityValue;
  // add subtotal back to DOM
  const subtotalPrice = product.querySelector(".subtotal span").innerHTML = calculateSubtotal;
  // return the subtotal price inside the calculateAll function
  return subtotalPrice

}

function calculateAll() {
  /* // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // get the first DOM element with the class product, saved in variable
  const singleProduct = document.querySelector('.product');
  // pass singleProduct as an argument to updateSubtotal function
  updateSubtotal(singleProduct);
  // end of test */


  // ITERATION 2: call updateSubtotal function with every tr.product

  // we want to sum up the subtotal value of each product and store the integer value in our sum. Later that will be used for the DOM #total-value
  // result will be let sum = subtotal + subtotal
  let sum = 0;
  // get all DOM elements with the class product (getElementsByClassName didn't work??)
  const allProducts = document.querySelectorAll(".product");
  // create a copy of the DOM element so we can use methods
  const copiedAllProducts = [...allProducts]

// for each product, call the updateSubtotal function and pass in each product
// from iteration 3: add all subtotals to the sum
  const subtotalValue = copiedAllProducts.forEach(el =>{
    sum += updateSubtotal(el)
})

  // ITERATION 3 // Update total: Reuse the subtotalValue and add all updateSubtotals to the sum (sum up )

  // grab the DOM element with the id total-value
  const total = document.getElementById("total-value");
  // change content to sum
  total.innerHTML = `Total: $<span>${sum}</span>`

} 

// ITERATION 4 // remove a product from the cart

function removeProduct(event) {
  // get the parent from parent from the button (remove-btn - action - product)
  const target = event.currentTarget.parentNode.parentNode;
  console.log(event);
  // remove the product
 target.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  // get the DOM element calculate and store it in a variable
  const calculatePricesBtn = document.getElementById('calculate');
  // add eventListener with the event click to it, when button clicked calulateAll function will run
  calculatePricesBtn.addEventListener('click', calculateAll);

  // get all remove buttons from the DOM
  const removeBtn = document.querySelectorAll(".btn-remove")
  // iterate through 
  const remove = removeBtn.forEach(btn =>{
    btn.addEventListener("click", removeProduct)
  });

  removeBtn.innerHTML = remove

});
