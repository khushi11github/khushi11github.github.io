db.employees.insertOne(
    {
        name:"John smith",
        email:"johm@gmail.com",
        department:"IT",
        salary:1456,
        location:["FL","OH"],
        date:Date()
    }
)
db.employees.insertMany(
    [
    {
        name:"Mike Joseph",
        email:"mike@gmail.com",
        department:"IT",
        salary:2456,
        location:["FL","TX"],
        date:Date()
    },
     {
        name:"Cathy G",
        email:"cathy@gmail.com",
        department:"IT",
        salary:3456,
        location:["AZ","TX"],
        date:Date()
    }
]
)
// db.employees.find().skip(1)--> // to skip the first document
// db.employees.find().limit(2)--> // to limit the number of documents returned
//db.employees.find({department :"IT"}) // to find documents with a specific field value
// db.employees.find({},{name:1})//display name field only


//lpua> db.employees.find({},{_id:0,name:1}) -->// to display name field only and exclude the _id field

//lpua> db.employees.find({},{_id:0,name:1})
// [
//   { name: 'John smith' },
//   { name: 'Mike Joseph' },
//   { name: 'Cathy G' }
// ]   (we can assign o to id only)



//display where location is FL (and display name field only)

// lpua> db.employees.find({location:"FL"},{_id:0,name:1})
// [ { name: 'John smith' }, { name: 'Mike Joseph' } ]
//find(filter, projection) --> filter is used to filter the documents based on a specific field value, and projection is used to specify which fields to include or exclude in the result set.


//lpua> db.employees.find({},{EmpName:"$name"}) // to rename the field name to EmpName in the result set


//sort //lpua> db.employees.find().sort({salary:1}) // to sort the documents in ascending order based on the salary field

