import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

//middlewares
//Define el uso de json en el proyecto
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//console.log(process.env)
//routes
import incidentRoutes from "./routes/incidents.routes.js";
app.get('/', (req, res) => res.send('Hello world'))
app.use("/incidents", incidentRoutes);

// Error Handling
app.use((req, res) => {
    res.status(404).send("Not Found");
  });

  
export default app;