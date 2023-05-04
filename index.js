const express=require('express')
const  path=require('path')
const app=express()
const port=process.env.PORT || 5000
const UserRoute=require('./src/routes/userRoute')
require('./src/db/conn')



app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api',UserRoute);

// app.get("/" , (req , res)=>{
//     //    res.send("hello from server side")
//     res.render("index")
// })
app.use(express.static(path.join(__dirname, 'loginsystem', 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'loginsystem', 'build', 'index.html'));
})


app.listen(port , ()=>{
    console.log(`server is running at port no ${port}`)
})