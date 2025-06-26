lpua> db.employees.updateOne({},{$set:{}})
//set operator for update
// it will update first document

db.employees.updateOne({email:"john@gmail.com"},{$set:{salary:2000}}) 
//set operator for update

// Add a new field points with value 1 to all documents in the employees collection
lpua> db.employees.updateMany({},{$set:{points:1}})


//??  $inc operator for update
// The $inc operator is used to increment the value of a field by a specified amount.
lpua> db.employees.updateOne({department:"IT"},{$inc:{points:1}})


//??$rename operator for update
// The $rename operator is used to rename a field in a document.
 db.employees.updateMany({},{$rename:{points:"score"}})


 //?? unset operator for update
// The $unset operator is used to remove a field from a document.
> db.employees.updateMany({},{$unset:{score:""}})


//?? push operator for update (FOR REDUNdancy)
// The $push operator is used to add an element to an array field in a document.
// If the array field does not exist, it will be created.
lpua> db.employees.updateMany({},{$push:{skills:"Java"}});


// updating for particular document
 db.employees.updateMany({email:"john@gmail.com"},{$push:{skills:"MERN"}})



 //?? pull operator for update
// The $pull operator is used to remove an element from an array field in a document.
lpua> db.employees.updateMany({email:"john@gmail.com"},{$pull:{skills:"MERN"}})

//?? addToSet operator for update(for unique value)
// The $addToSet operator is used to add an element to an array field in a document only if it does not already exist in the array.
db.employees.updateMany({email:"john@gmail.com"},{$addToSet:{skills:"MERN"}})


//??$pop operator for update
// The $pop operator s used to remove the first or last element from an array field in
// a document. It takes a value of 1 to remove the last element or -1 to remove the first element.
 db.employees.updateMany({email:"john@gmail.com"},{$pop:{skills:1}}) 



db.employees.updateOne({email:"john@gmail.com"},{$set:{name:"Brain"}})
// The $set operator is used to update the value of a field in a document. If the field does not exist, it will be created.
// If the field exists, it will be updated with the new value.

//?? upsert operator for update
// The upsert option is used to insert a new document if no documents match the query criteria
// or update the existing document if it does match the query criteria.
db.employees.updateOne({email:"brian@gmail.com"},{$set:{name:"Brain"}},{upsert:true})


//delete operator
//?? deleteOne operator for delete
// The deleteOne operator is used to delete a single document that matches the query criteria.

lpua> db.employees.deleteOne({ email :"brian@gmail.com"})    


//?? deleteMany operator for delete
// The deleteMany operator is used to delete multiple documents that match the query criteria.
lpua> db.employees.deleteMany({ department :"IT"})





students> db.students.updateMany({name:"Alice Johnson"},{$pull:{courses:"Physics"}})



db.address.insertOne({
    studentid: ObjectId("64f0b8c1e4b0f3a2c8e4b0f1"),
})

//??JOINING COLLECTIONS
//lookup

// The $lookup stage is used to perform a left outer join between two collections.
// It allows you to combine documents from different collections based on a specified field.


db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "studentId", 
      as: "address"
    }
  },{ 
  $unwind: "$address"
  },
])


db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "studentId", 
      as: "address"
    }
  },{ 
  $unwind: "$address"
  },{
    $project: {
        name: 1,
        age: 1,
        "address.city": 1,
        "address.country": 1
        }
  }
])