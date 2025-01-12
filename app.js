const express=require("express");
const app=express();
const moviesRoutes=require("./routes/moviesRoutes");
const cinemaRoutes=require("./routes/cinemasRoutes");
const kindsofCRoutes=require("./routes/kindofCRoutes")
const userRoutes=require("./routes/userRoutes");

app.use(express.json())
app.use('/movies',moviesRoutes);
app.use('/cinemas',cinemaRoutes);
app.use('/kindsofCinemas',kindsofCRoutes);
app.use('/users',userRoutes)


module.exports=app;