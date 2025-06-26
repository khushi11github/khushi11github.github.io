

//?? MongoDB Indexes
// Indexes are special data structures that store a small portion of the collection's data set in
// an easy-to-traverse form. They are used to improve the performance of queries by allowing the database to find documents more quickly.
// Indexes can be created on one or more fields in a collection, and they can be used to speed up queries that filter or sort by those fields.


//?? getIndexes() method
ua> db.employees.getIndexes()
// The getIndexes() method is used to retrieve the indexes on a collection. It returns an array of index specifications.
[ { v: 2, key: { _id: 1 }, name: '_id_' } ]



//?? createIndex() method
db.employees.createIndex({name:1})
// The createIndex() method is used to create an index on a collection. It takes an object that specifies the fields to index and their sort order (1 for ascending, -1 for descending).
// In this case, it creates an ascending index on the name field.


//?? dropIndex() method
// The dropIndex() method is used to remove an index from a collection. It takes the name of the index as an argument.
lpua> db.employees.dropIndex("email_1")