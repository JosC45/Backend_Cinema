const express=require("express");
const app=express();
const moviesRoutes=require("./routes/moviesRoutes");
const cinemaRoutes=require("./routes/cinemasRoutes");
const kindsofCRoutes=require("./routes/kindofCRoutes")
const userRoutes=require("./routes/userRoutes");
const ubicationRoutes=require("./routes/ubicationRoutes")
const screenRoutes=require("./routes/screenTypesRoutes")
const hallRoutes=require("./routes/hallRoutes")
const featureRoutes=require("./routes/featureRoutes")

app.use(express.json())
app.use('/movies',moviesRoutes);
app.use('/cinemas',cinemaRoutes);
app.use('/kindsofCinemas',kindsofCRoutes);
app.use('/users',userRoutes);
app.use('/ubications',ubicationRoutes);
app.use('/screenTypes',screenRoutes);
app.use('/hall',hallRoutes);
app.use('/features',featureRoutes)


module.exports=app;