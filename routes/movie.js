const express = require('express');
const { param } = require('express/lib/request');
const router = express.Router();
//controllers
const {createMovie,getAllMovies,updateMovie,getMovie,getMovieById, deleteMovieById}= require('../controllers/movie')


//param
router.param("movieId",getMovieById)

// get=>read
router.get("/movie/:movieId",getMovie)
router.get("/movies",getAllMovies)

// put=>update
router.put("/update-movie/:movieId",updateMovie)

// delete
router.delete("/delete-movie/:movieId",deleteMovieById)

//post route
 router.post(
    "/add-movie",createMovie
 )
 module.exports = router
 //634db8a039d6495e60bcb613

 