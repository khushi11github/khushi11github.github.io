db.employees.find({department:"IT"});
// same query using operator
db.employees.find({department :{$eq:"IT"}})
//! The $eq operator is used to compare the value of a field with a specific value. It is equivalent to the equality operator (==) in JavaScript.
//??db.employees.find({salary :{$gt:3000}})
// The $gt operator is used to compare the value of a field with a specific value. It is equivalent to the greater than operator (>) in JavaScript.

//??db.employees.find({salary :{$lt:3000}})
// The $lt operator is used to compare the value of a field with a specific value.

//!   gte :- greater than or equal to
//!  gt :- greater than
//!  lte :- less than or equal to
//!  lt :- less than
//! ne :- not equal to


//pua> db.employees.find({salary :{$ne:3456}},{name:1});
//db.employees.find(
//{salary :{$ne:3456},department:{$eq:"IT"}}
// ,{name:1}
// );

// db.employees.find({salaray:{$gte:3456}},{name:1});

// db.users.find({point:{$gt:3}},{name:1}).sort({point:-1}).limit(1);

//?and clause
// The $and operator is used to combine multiple conditions in a query. It returns documents that
db.employees.find(
    {$and:[{salary :{$gt : 3000}, department :{$eq:"IT"}}]},
);


db.employees.find(
    {
        $operator:[{field}]
    }
)