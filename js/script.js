// 1- Variable declaration
var allProducts = document.querySelectorAll(".parent .product")
var content = document.querySelector("#content")
var btn = document.querySelector("#btnPrice")
var t1 = document.querySelector("#txt")
var totalPrice = 0


// 2- Logic
allProducts.forEach(function(item) {
     item.onclick = function() {
         totalPrice += Number(item.getAttribute("price"))
         content.innerHTML += "/ " + item.textContent + " /"

         if (content.innerHTML != "") {
             btn.style.display = "block"
         }
     }
 } )


// 3- Event
 btn.onclick = function(item){
     content.innerHTML += "<br> The total price = " + (totalPrice)
 }
    