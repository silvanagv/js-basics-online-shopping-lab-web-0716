var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item){
  var obj = {}
  obj[item] = Math.floor(Math.random()*100)
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length===0){
    console.log('Your shopping cart is empty.')
  }
  else {
    var ary = ["In your cart, you have "]

    for (var y = 0; y < cart.length;y++){
      for (var name in cart[y]){
        if (cart[y].hasOwnProperty(name)){
          ary.push(`${name} at $${cart[y][name]}`)
          ary.push(', ')
        }
      }
    }

    ary = ary.join("")
    ary = ary.substring(0, ary.length-2)
    ary+= "."
    console.log(ary)
  }
}

cart = [ { cheese: 50 }, { pizza: 58 }, { calzone: 69 } ]
viewCart()

function total(){
  var sum = 0
  for (let i = 0; i < cart.length;i++){
    for (var key in cart[i]){
      if(Object.prototype.hasOwnProperty.call(cart[i], key)){
        sum += cart[i][key]
      }
    }
  }

return sum
}

function removeFromCart(itemName){
  var found = false
  for (let i = 0; i < cart.length; i++){
    if (!!cart[i][itemName]){
      cart.splice(i, 1)
      found = true
    }
  }

  if (!found){
    console.log("That item is not in your cart.")
  }

}


// removeFromCart("cheese")


function placeOrder(creditCardNumber){
  if (!!creditCardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    cart = []
  }
  else {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }

}
