// let cart ={1:1,3:1};
// const products = [
//     {id:1,name:"Product 1",price:25},
//     {id:2,name:"Product 2",price:25},
//     {id:3,name:"Product 3",price:75},
// ]

// const showProducts = ()=>{ 
//     let str=" ";
//     products.map((value,index)=>{
//         str += `${value.id} -${value.name} - ${value.price}\n`
    
//     })
//     console.log("Product List");
//     console.log(str);
        

// }


// const addToCart =(id)=>{
// cart ={...cart,[id]:1};

// }



// const showCart = ()=>{
//     // console.log(cart);
//     let str = " ";

//     products.map(value=>{
//        cart[value.id] >0 && ( 
//         str +=`${value.name} - ${value.price} - ${cart[value.id]} - ${value.price * cart[value.id]}\n`);
//     });

//     console.log("My Cart");
//     console.log(str);
//     }


// const increment =(id)=>{
//     cart = {...cart,[id]:cart[id]+1};

// }

// const decrement =(id)=>{
//     cart = {...cart,[id]:cart[id]-1};

// }


// const orderValue=()=>{

//     //reduce -> accumulate the values
//     const result = products.reduce((sum,value)=>{
//        return sum +(value.price *(cart[value.id] ?? 0));
//     },0);
//     console.log(`Total Order Value: ${result}`);
// }


const products = {
  1: { name: "Product 1", price: 10 },
  2: { name: "Product 2", price: 15 },
  3: { name: "Product 3", price: 20 },
};

let cart = {};

function addToCart(id) {
  if (cart[id]) {
    cart[id].qty += 1;
  } else {
    cart[id] = { ...products[id], qty: 1 };
  }
  renderCart();
}

function changeQty(id, delta) {
  cart[id].qty += delta;
  if (cart[id].qty <= 0) {
    delete cart[id];
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  Object.keys(cart).forEach(id => {
    const item = cart[id];
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} ($${item.price}) x ${item.qty}
      <button onclick="changeQty(${id}, 1)">+</button>
      <button onclick="changeQty(${id}, -1)">-</button>
    `;
    cartItems.appendChild(li);
  });
}
