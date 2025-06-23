const points=[2,5,3,2,1,8];
points.forEach((value,index)=>{ 
    console.log(value);
});

//Map
// const newArr = points.map((value,index)=> {
//     console.log(value);
//     return value += 5;
// }
//  const newArr = points.map((value,index)=> ( value +=5));


//FILTER
//  const newArr = points.filter((value)=> ( value > 2));
//  console.log(newArr);

//find ->store the first value satisfying the condition
//  const result = points.find((value)=> ( value  === 2));
//  console.log(result);


//reduce -> accumulate the values
// const result = points.reduce((sum,value)=>{
//     return sum + value;
// },0);
// console.log(result);

// map is used to create a copy of the array with some transformation
 const newArr = points.map((value,index)=> (value>2));
 console.log(newArr);
