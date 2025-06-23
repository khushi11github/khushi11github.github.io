// Arrays Method
const points=[2,5,3,2,1,8];

points.forEach(value=>{ // This method executes a provided function once for each array element
    console.log(value);
});

points.forEach((value,index)=>{ // This method executes a provided function once for each array element
    console.log(`${index} => ${value}`);
});