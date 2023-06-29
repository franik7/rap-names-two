const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use(express.static("public"))

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'URL': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/21_Savage_2018.jpg/1024px-21_Savage_2018.jpg'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois',
        'URL': 'https://s.yimg.com/ny/api/res/1.2/jvpkFZ77TBFn1ZOmX.kIXw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Mg--/https://media.zenfs.com/en/gold_derby_993/d27552d98b74fc85e53f79f9b0814ec4'
    },
    'dylan':{
        'age': 30,
        'birthName': 'Dylan',
        'birthLocation': 'Minsk',
        'URL': 'https://preview.redd.it/thoughts-on-dylan-v0-arjgu9fumo3b1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=3179f5ea62c143167cc7f49152edf75a0b88eb39'
    }
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')    
})

app.get('/api/:name', (request, response)=>{
    const rappersName = request.params.name.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
