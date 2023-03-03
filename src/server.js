import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import allRoutes from "./routes/allRoutes.js";
import signupRoute from "./routes/signupRoute.js";


mongoose.set('strictQuery', false);

// configuring dotenv
dotenv.config();

// create server instance
const app = express();

// use of cors and body parse
app.use(cors());
app.use(bodyParser.json());

// route - home route
app.get("/", (req, res) => {
  res.status(200).send(`
  <h1 style="text-align: center; color: #CCD6F6; margin-top: 20vh; background: #0A192F; padding: 150px;">APIs for my Brand</h1>
  `);
});

app.use("/api/v1/", allRoutes);
// morgan for logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan('combined'))
};

// define some my env variables
const port = process.env.PORT;
const host = process.env.HOST;

// database connection instance
const con = () => mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// instance to listen to our server
const startServer = () => app.listen(port);

Promise.all([con(), startServer()])
  .then(() => {
    console.log(`MongoDB connected and server listening at http://${host}:${port}`);
  })
  .catch((err) => console.log(err))




