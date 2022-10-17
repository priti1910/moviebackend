const mongoose = require('mongoose');
const express =require ('express');
const app = express();
const port = 8000;
// routes
const movieRoutes = require('./routes/movie')
const bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost:27017/movies',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
        
    }
) .then(()=>
{
    console.log(`DB connected`);
}

)
app.use(bodyParser.json())
app.use('/api',movieRoutes)

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})
