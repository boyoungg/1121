const express = require('express')
const app = express()
app.listen(1234)

app.get('/youtubers', (req, res) => {
    res.json({
        message: "test"
    })
})

app.get('/youtubers/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    let youtuber = db.get(id)

    if(!youtuber){
        res.json({
            message: "없는 채널"
        })
    }else{
        res.json(youtuber)
    }


})


let youtuber1 = {
    channelTitle : "유튜버1",
    sub : "593만명",
    videoNum : "993개"
}

let youtuber2 = {
    channelTitle : "유튜버2",
    sub : "227만명",
    videoNum : "6.6천개"
}

let youtuber3 = {
    channelTitle : "유튜버3",
    sub : "54.8만명",
    videoNum : "726개"
}


let db = new Map()

var dbKey = 1;

db.set(dbKey++, youtuber1)
db.set(dbKey++, youtuber2) 
db.set(dbKey++, youtuber3) 

app.use(express.json()) 
app.post('/youtubers', (req, res) => {

    console.log(req.body)
    db.set(dbKey++, req.body)//db에 등록

    res.json({
        // message: db.get(4).channelTitle + "유튜브 생성 추카추카"
         message: `${db.get(dbKey-1).channelTitle} 유튜브 생성 추카추카`
    })

})