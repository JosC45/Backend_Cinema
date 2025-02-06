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
//const mainRoutes=require("./routes/mainRoutes")
const cors=require("cors")

app.use(cors());

app.use(express.json())
//app.use('/api/home',mainRoutes)
app.use('/api/movies',moviesRoutes);
app.use('/api/cinemas',cinemaRoutes);
app.use('/api/kindsofCinemas',kindsofCRoutes);
app.use('/api/users',userRoutes);
app.use('/api/ubications',ubicationRoutes);
app.use('/api/screenTypes',screenRoutes);
app.use('/api/hall',hallRoutes);
app.use('/api/features',featureRoutes)



module.exports=app;