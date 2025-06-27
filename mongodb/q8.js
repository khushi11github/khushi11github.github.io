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