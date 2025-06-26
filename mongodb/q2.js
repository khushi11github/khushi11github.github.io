// db.users.insertOne()   insertOne is used to insert a single document// it will create the collection if it does not exist
// db.users.insertOne({name:"John", age:30, city:"New York"}) //inserting a single document
// db.users.insertMany()  insertMany is used to insert multiple documents
// db.users.find()-- to view the documents in the collection
// db.users.find().pretty()-- to view the documents in a pretty format
// db.users.findOne() // to view a single document
//db.users.drop() // to drop the collection



// db.users.insertOne({name:"Amy",age:25});

// db.users.insertMany([
//     {name:"shawn",age:23},
//     {name:"james",age:24},
//     {name:"jane",age:22},
//     {name:"chastity",age:21},
//     {name:"jessica",age:20}
// ]);