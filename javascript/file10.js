let cart ={1:1,3:1};
const products = [
    {id:1,name:"Product 1",price:25},
    {id:2,name:"Product 2",price:25},
    {id:3,name:"Product 3",price:75},
]

const showProducts = ()=>{ 
    let str=" ";
    products.map((value,index)=>{
        str += `${value.id} -${value.name} - ${value.price}\n`
    
    })
    console.log("Product List");
    console.log(str);
        

}
showProducts();

const addToCart =(id)=>{
cart ={...cart,[id]:1};

}

addToCart(1);
addToCart(3);
 

const showCart = ()=>{
    // console.log(cart);
    let str = " ";

    products.map(value=>{
       cart[value.id] >0 && ( 
        str +=`${value.name} - ${value.price} - ${cart[value.id]} - ${value.price * cart[value.id]}\n`);
    });

    console.log("My Cart");
    console.log(str);
    }

showCart();

const increment =(id)=>{
    cart = {...cart,[id]:cart[id]+1};

}

const decrement =(id)=>{
    cart = {...cart,[id]:cart[id]-1};

}

increment(1);
showCart();
increment(1);
showCart();
decrement(1);
showCart();
decrement(1);
showCart();
decrement(1);
showCart();

const orderValue=()=>{

    //reduce -> accumulate the values
    const result = products.reduce((sum,value)=>{
       return sum +(value.price *(cart[value.id] ?? 0));
    },0);
    console.log(`Total Order Value: ${result}`);
}

orderValue();