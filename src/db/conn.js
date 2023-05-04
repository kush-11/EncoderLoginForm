//connecting my express application to mongodb

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://kush1604be20:DULawSfeZwgUMdh2@cluster0.wvk193e.mongodb.net/co" , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log('connnection successful')
}).catch((event)=>{
    console.log('no connection')
    console.log(event)
})