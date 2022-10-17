const movie = require("../models/movie")
const Movie = require("../models/movie")

exports.createMovie = (req,res)=>{
    const movie = new Movie(req.body)
    movie.save((err,movie)=>{
        if(err){
            return res.status(400).json({
                error:"not able to save movie in DB"})
        }
        res.json({movie})
    }
        
    )
}
exports.getAllMovies= (req,res)=>{
    
    
    Movie.find().exec((err,movie)=>{
        if(err){
            return res.status(400).json({
                error:"no movies found in DB"})
        }
        res.json({movie})
    }
        
    )
}

//middleware fn
exports.getMovieById= (req,res,next,id)=>{
    
    Movie.findById(id).exec((err,movie)=>{
        if(err){
            return res.status(400).json({
                error:"no movies found in DB"})
        }
        req.movie = movie
        next();
    }
    
    
    )}


//get movie
exports.getMovie = (req,res)=>{
    // get one movie
   return res.json(req.movie)
}

//
exports.updateMovie =(req,res)=>{
    movie.findByIdAndUpdate(
        {_id:req.movie._id},
        {$set:req.body}, //waht to update
        {new:true,useFindAndModify:false},
        (err,movie)=>{
            if(err){
                return res.status(400).json({
                    error:"failed to update movie in DB"})
            }
            res.json(movie)
        }
    )
    
}



//delete route
exports.deleteMovieById =(req,res)=>{
    const movie = req.movie;
    movie.remove((err,movie)=>{
        if(err){
            return res.status(400).json({
                error:"failed to delete movie in DB"})
        }
        res.json({
            message:`${movie.name} Successfully deleted`
        })
    }

    )
}
