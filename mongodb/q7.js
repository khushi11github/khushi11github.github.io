//aggregate
// MongoDB aggregate method is used to process data and return computed results.
// It is used to perform complex queries and aggregations on the data in a collection.
//for complex queries we can use the aggregate method
//equivalent ti find method
//db.employees.aggregate()-- to view the documents in the collection
db.employees.aggregate([
     {$match:{department:"IT"}},// first this one executes the pipeline stage
    {$project:{name:1,department:1}},//pipeline stages
])


db.employees.aggregate([
     {$match:{department:"IT",name:"John smith"}},
    {$project:{name:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:3}
])

// filter the documents based on the department field and then project only the name and salary fields in the result set.



//?? $group
// The $group stage is used to group documents by a specific field and perform aggregations on the grouped data.
// It is similar to the GROUP BY clause in SQL.


db.employees.aggregate([
    {$match:{department:"IT"}}, 
    {$group:{ _id:"$department",total:{$sum:"$salary"}}}
])
// The $group stage groups the documents by the department field and calculates the total salary for each department.



db.employees.aggregate([
    {$group:{ _id:"$department", names: { $push: "$name" } }}
])




db.employees.aggregate([
    {$project:{name:0}},
])
// The $project stage is used to include or exclude specific fields in the result set. It can also be used to rename fields or create new fields based on existing ones.


db.employees.aggregate([
    {$project:{EmpName:"$name"}},
])

//??$multiply operator
db.employees.aggregate([
    {$project:{name:1,bonus:{$multiply:["$salary",2]}}},
])


db.employees.aggregate([{$match:{department:"IT"}},{$project:{name:1,email:1,salary:1}}])

db.employees.aggregate([{$project:{name:1,annualSalary:{$multiply:["$salary",12]}}}])


db.employees.aggregate(
    {$sort:{salary:-1}},
    {$limit:1},
    {$project:{CTC:"$salary",name:1, department:1}}
)


db.students.updateOne(
    {name:"Alice Johnson"},
    {$set :{age:23,courses:["Math","Physics"],enrolled:true}},

    {upsert:true}
)


//calculating the avg using group stage
db.students.aggregate([

    {$group:{_id:null,avg:{$avg:"$age"}}}

])





//friday


