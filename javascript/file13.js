//spread operators


const marks={
    English:20,
};

const newMarks ={
    ...marks,
    Math: 90
}
console.log(newMarks); // { English: 20, Math: 90 }

let student = ['aryan', 'khushi'];
student = [...student, "aditya"];
console.log(student);