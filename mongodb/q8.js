//POST COLLECTION
db.posts.insertOne({_id:"p2",post:"Post 1"})

db.posts.insertOne({_id:"p2",post:"Post 2"})
lpua> db.comments.insertOne({_id:"c1", pid:"p1",comment:"This is comment 1 od post 1"})
db.comments.insertOne({_id:"c1", pid:"p1",comment:"This is comment 1 od post 1"})
lpua> db.comments.insertOne({_id:"c2", pid:"p1",comment:"This is comment 2 od post 1"})

lpua> db.comments.find()
//comments collection
db.comments.insertOne({_id:"c3", pid:"p2",comment:"This is comment 1 od post 2"})
db.comments.insertOne({_id:"c4", pid:"p2",comment:"This is comment 2 od post 2"})
 db.comments.insertOne({_id:"c5", pid:"p2",comment:"This is comment 3 od post 2"})



 db.posts.aggregate([

    {
        $lookup:{
            from:"comments",
            localField:"_id",
            foreignField:"pid",
            as:"comments"
        }
    },{
        $project: {_id: 0, post: 1, "comments.comment": 1}
    }
 ])


  db.posts.aggregate([

    {
        $lookup:{
            from:"comments",
            localField:"_id",
            foreignField:"pid",
            as:"comments"
        }
    },{
        $unwind: "$comments"
    }
    
 ])


 
  db.posts.aggregate([

    {
        $lookup:{
            from:"comments",
            localField:"_id",
            foreignField:"pid",
            as:"comments"
        }
    },{
        $unwind: "$comments"
    },{
        $project: {_id: 0, post: 1, "comments.comment": 1}
    }
    
 ])

 db.posts.aggregate([

    {
        $lookup:{
            from:"comments",
            localField:"_id",
            foreignField:"pid",
            as:"comments"
        }
    },{
        $unwind: "$comments"
    },{
        $group: {
            _id:"$_id",
    }
}
    
 ])



 > db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},avgscore:{$avg:"$score"}}}]).sort({_id:1})




// lpua> db.marks.find()
// [
//   {
//     _id: ObjectId('685e324080f1f6fae746b799'),
//     name: 'John',
//     term: 't1',
//     subject: 'maths',
//     marks: 95
//   },
//   {
//     _id: ObjectId('685e324c80f1f6fae746b79a'),
//     name: 'John',
//     term: 't2',
//     subject: 'maths',
//     marks: 80
//   },
//   {
//     _id: ObjectId('685e325880f1f6fae746b79b'),
//     name: 'John',
//     term: 't3',
//     subject: 'maths',
//     marks: 70
//   },
//   {
//     _id: ObjectId('685e326d80f1f6fae746b79c'),
//     name: 'John',
//     term: 't1',
//     subject: 'science',
//     marks: 50
//   },
//   {
//     _id: ObjectId('685e327c80f1f6fae746b79d'),
//     name: 'John',
//     term: 't2',
//     subject: 'science',
//     marks: 60
//   },
//   {
//     _id: ObjectId('685e328880f1f6fae746b79e'),
//     name: 'John',
//     term: 't3',
//     subject: 'science',
//     marks: 90
//   },
//   {
//     _id: ObjectId('685e330580f1f6fae746b79f'),
//     name: 'Cathy',
//     term: 't1',
//     subject: 'maths',
//     marks: 91
//   },
//   {
//     _id: ObjectId('685e331080f1f6fae746b7a0'),
//     name: 'Cathy',
//     term: 't2',
//     subject: 'maths',
//     marks: 81
//   },
//   {
//     _id: ObjectId('685e331d80f1f6fae746b7a1'),
//     name: 'Cathy',
//     term: 't3',
//     subject: 'maths',
//     marks: 71
//   },
//   {
//     _id: ObjectId('685e333480f1f6fae746b7a2'),
//     name: 'Cathy',
//     term: 't1',
//     subject: 'science',
//     marks: 51
//   },
//   {
//     _id: ObjectId('685e333e80f1f6fae746b7a3'),
//     name: 'Cathy',
//     term: 't2',
//     subject: 'science',
//     marks: 61
//   },
//   {
//     _id: ObjectId('685e334a80f1f6fae746b7a4'),
//     name: 'Cathy',
//     term: 't3',
//     subject: 'science',
//     marks: 91
//   }
// ]
// lpua> db.marks.find({term:"t1"})
// [
//   {
//     _id: ObjectId('685e324080f1f6fae746b799'),
//     name: 'John',
//     term: 't1',
//     subject: 'maths',
//     marks: 95
//   },
//   {
//     _id: ObjectId('685e326d80f1f6fae746b79c'),
//     name: 'John',
//     term: 't1',
//     subject: 'science',
//     marks: 50
//   },
//   {
//     _id: ObjectId('685e330580f1f6fae746b79f'),
//     name: 'Cathy',
//     term: 't1',
//     subject: 'maths',
//     marks: 91
//   },
//   {
//     _id: ObjectId('685e333480f1f6fae746b7a2'),
//     name: 'Cathy',
//     term: 't1',
//     subject: 'science',
//     marks: 51
//   }
// ]
// lpua> db.marks.find({},{_id:0,name:1,term:1,subject:1,marks:1})
// [
//   { name: 'John', term: 't1', subject: 'maths', marks: 95 },
//   { name: 'John', term: 't2', subject: 'maths', marks: 80 },
//   { name: 'John', term: 't3', subject: 'maths', marks: 70 },
//   { name: 'John', term: 't1', subject: 'science', marks: 50 },
//   { name: 'John', term: 't2', subject: 'science', marks: 60 },
//   { name: 'John', term: 't3', subject: 'science', marks: 90 },
//   { name: 'Cathy', term: 't1', subject: 'maths', marks: 91 },
//   { name: 'Cathy', term: 't2', subject: 'maths', marks: 81 },
//   { name: 'Cathy', term: 't3', subject: 'maths', marks: 71 },
//   { name: 'Cathy', term: 't1', subject: 'science', marks: 51 },
//   { name: 'Cathy', term: 't2', subject: 'science', marks: 61 },
//   { name: 'Cathy', term: 't3', subject: 'science', marks: 91 }
// ]
// lpua> db.marks.updateMany({},{$renameL{marks:"score"})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:32)

// > 1 | db.marks.updateMany({},{$renameL{marks:"score"})
//     |                                 ^
//   2 |

// lpua> db.marks.updateMany({},{$rename:{marks:"score"})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:47)

// > 1 | db.marks.updateMany({},{$rename:{marks:"score"})
//     |                                                ^
//   2 |

// lpua> db.marks.updateMany({},{$rename:{marks:"score"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 12,
//   modifiedCount: 12,
//   upsertedCount: 0
// }
// lpua> db.marks.find({},{_id:0,name:1,term:1,subject:1,score:1}).sort({name:1})
// [
//   { name: 'Cathy', term: 't1', subject: 'maths', score: 91 },
//   { name: 'Cathy', term: 't2', subject: 'maths', score: 81 },
//   { name: 'Cathy', term: 't3', subject: 'maths', score: 71 },
//   { name: 'Cathy', term: 't1', subject: 'science', score: 51 },
//   { name: 'Cathy', term: 't2', subject: 'science', score: 61 },
//   { name: 'Cathy', term: 't3', subject: 'science', score: 91 },
//   { name: 'John', term: 't1', subject: 'maths', score: 95 },
//   { name: 'John', term: 't2', subject: 'maths', score: 80 },
//   { name: 'John', term: 't3', subject: 'maths', score: 70 },
//   { name: 'John', term: 't1', subject: 'science', score: 50 },
//   { name: 'John', term: 't2', subject: 'science', score: 60 },
//   { name: 'John', term: 't3', subject: 'science', score: 90 }
// ]
// lpua> db.marks.find({},{_id:0,name:1,term:1,subject:1,score:1}).sort({name:1,term:1})
// [
//   { name: 'Cathy', term: 't1', subject: 'maths', score: 91 },
//   { name: 'Cathy', term: 't1', subject: 'science', score: 51 },
//   { name: 'Cathy', term: 't2', subject: 'maths', score: 81 },
//   { name: 'Cathy', term: 't2', subject: 'science', score: 61 },
//   { name: 'Cathy', term: 't3', subject: 'maths', score: 71 },
//   { name: 'Cathy', term: 't3', subject: 'science', score: 91 },
//   { name: 'John', term: 't1', subject: 'maths', score: 95 },
//   { name: 'John', term: 't1', subject: 'science', score: 50 },
//   { name: 'John', term: 't2', subject: 'maths', score: 80 },
//   { name: 'John', term: 't2', subject: 'science', score: 60 },
//   { name: 'John', term: 't3', subject: 'maths', score: 70 },
//   { name: 'John', term: 't3', subject: 'science', score: 90 }
// ]
// lpua> db.marks.find({},{_id:0,name:1,term:1,subject:1,score:1}).sort({term:1})
// [
//   { name: 'John', term: 't1', subject: 'maths', score: 95 },
//   { name: 'John', term: 't1', subject: 'science', score: 50 },
//   { name: 'Cathy', term: 't1', subject: 'maths', score: 91 },
//   { name: 'Cathy', term: 't1', subject: 'science', score: 51 },
//   { name: 'John', term: 't2', subject: 'maths', score: 80 },
//   { name: 'John', term: 't2', subject: 'science', score: 60 },
//   { name: 'Cathy', term: 't2', subject: 'maths', score: 81 },
//   { name: 'Cathy', term: 't2', subject: 'science', score: 61 },
//   { name: 'John', term: 't3', subject: 'maths', score: 70 },
//   { name: 'John', term: 't3', subject: 'science', score: 90 },
//   { name: 'Cathy', term: 't3', subject: 'maths', score: 71 },
//   { name: 'Cathy', term: 't3', subject: 'science', score: 91 }
// ]
// lpua> db.marks.find({},{_id:0,name:1,term:1,subject:1,score:1}).sort({term:1})
// [
//   { name: 'John', term: 't1', subject: 'maths', score: 95 },
//   { name: 'John', term: 't1', subject: 'science', score: 50 },
//   { name: 'Cathy', term: 't1', subject: 'maths', score: 91 },
//   { name: 'Cathy', term: 't1', subject: 'science', score: 51 },
//   { name: 'John', term: 't2', subject: 'maths', score: 80 },
//   { name: 'John', term: 't2', subject: 'science', score: 60 },
//   { name: 'Cathy', term: 't2', subject: 'maths', score: 81 },
//   { name: 'Cathy', term: 't2', subject: 'science', score: 61 },
//   { name: 'John', term: 't3', subject: 'maths', score: 70 },
//   { name: 'John', term: 't3', subject: 'science', score: 90 },
//   { name: 'Cathy', term: 't3', subject: 'maths', score: 71 },
//   { name: 'Cathy', term: 't3', subject: 'science', score: 91 }
// ]
// lpua> db.marks.aggregate({$group:{name:"$name",total:{$sum:"$score"}}})
// MongoServerError[Location40234]: The field 'name' must be an accumulator object
// lpua> db.marks.aggregate([{$group:{name:"$name",total:{$sum:"$score"}}}])
// MongoServerError[Location40234]: The field 'name' must be an accumulator object
// lpua> db.marks.aggregate([{$group:{_id:"$name",totalscore:{$sum:"$score"}}}])
// [ { _id: 'Cathy', totalscore: 446 }, { _id: 'John', totalscore: 445 } ]
// lpua> db.marks.aggregate([{$group:{_id:"$subject",totalscore:{$sum:"$score"}}}])
// [
//   { _id: 'science', totalscore: 403 },
//   { _id: 'maths', totalscore: 488 }
// ]
// lpua> db.marks.aggregate([{$group:{name:"$name",_id:"$subject",totalscore:{$sum:"$score"}}}])
// MongoServerError[Location40234]: The field 'name' must be an accumulator object
// lpua> db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},totalscore:{$sum:"$score"}}}])
// [
//   { _id: { term: 't2', subject: 'science' }, totalscore: 121 },
//   { _id: { term: 't3', subject: 'maths' }, totalscore: 141 },
//   { _id: { term: 't3', subject: 'science' }, totalscore: 181 },
//   { _id: { term: 't1', subject: 'maths' }, totalscore: 186 },
//   { _id: { term: 't1', subject: 'science' }, totalscore: 101 },
//   { _id: { term: 't2', subject: 'maths' }, totalscore: 161 }
// ]
// lpua> db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},totalscore:{$sum:"$score"}}}]).sort(_id:1)
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:106)

// > 1 | db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},totalscore:{$sum:"$score"}}}]).sort(_id:1)
//     |                                                                                                           ^
//   2 |

// lpua> db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},totalscore:{$sum:"$score"}}}]).sort({_id:1})
// [
//   { _id: { term: 't1', subject: 'maths' }, totalscore: 186 },
//   { _id: { term: 't1', subject: 'science' }, totalscore: 101 },
//   { _id: { term: 't2', subject: 'maths' }, totalscore: 161 },
//   { _id: { term: 't2', subject: 'science' }, totalscore: 121 },
//   { _id: { term: 't3', subject: 'maths' }, totalscore: 141 },
//   { _id: { term: 't3', subject: 'science' }, totalscore: 181 }
// ]
// lpua> db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},totalscore:{$avg:"$score"}}}]).sort({_id:1})
// [
//   { _id: { term: 't1', subject: 'maths' }, totalscore: 93 },
//   { _id: { term: 't1', subject: 'science' }, totalscore: 50.5 },
//   { _id: { term: 't2', subject: 'maths' }, totalscore: 80.5 },
//   { _id: { term: 't2', subject: 'science' }, totalscore: 60.5 },
//   { _id: { term: 't3', subject: 'maths' }, totalscore: 70.5 },
//   { _id: { term: 't3', subject: 'science' }, totalscore: 90.5 }
// ]
// lpua> db.marks.aggregate([{$group:{_id:{term:"$term",subject:"$subject"},avgscore:{$avg:"$score"}}}]).sort({_id:1})
// [
//   { _id: { term: 't1', subject: 'maths' }, avgscore: 93 },
//   { _id: { term: 't1', subject: 'science' }, avgscore: 50.5 },
//   { _id: { term: 't2', subject: 'maths' }, avgscore: 80.5 },
//   { _id: { term: 't2', subject: 'science' }, avgscore: 60.5 },
//   { _id: { term: 't3', subject: 'maths' }, avgscore: 70.5 },
//   { _id: { term: 't3', subject: 'science' }, avgscore: 90.5 }
// ]
// lpua>