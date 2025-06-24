// //promise


// const f1 =()=>{
//     // setTimeout(() => {
//     //      return 5;
//     // }, 1000);

   
// }

// const f2 =(x)=>{
//     console.log(x+6);
// };

// const n= f1();
// f2(n);


//promise


// const f1 =()=>{
 

//     return new Promise((resolve,reject)=>{
//         resolve(5);
//     })
   
// }

// const f2 =(x)=>{
//     console.log(x+6);
// };
// f1().then((n) => f2(n));



// const f1 =()=>{
 

//     return new Promise((resolve,reject)=>{
//         reject("Something went wrong");
//     })
   
// }

// const f2 =(x)=>{
//     console.log(x+6);
// };
// f1().then((n) => f2(n)).catch((err) => console.log(err));


// const f1 =(n)=>{
 

//     return new Promise((resolve,reject)=>{
//         if(n<0){
//             reject("Number should be positive");
//         }
//         else resolve(n);


//     })
   
// }

// const f2 =(x)=>{
   
//     console.log(x+6);
// };
// f1(1).then((n) => f2(n)).catch((err) => console.log(err));

//fetch return promise

fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>{
    console.log(data);
    data.map((value)=>{
        console.log(`${value.id} - ${value.name} - ${value.email}`);
    });

    
}).catch((err)=>console.log(err));



const fetchData = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.map((value)=>{
        console.log(` ${value.name} `);
    });
}

fetchData();
