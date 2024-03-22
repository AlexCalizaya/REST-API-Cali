import { PORT } from "./config.js";
import { connectToDB } from "./utils/mongoose.js";
import app from "./app.js";

connectToDB();

//Iniciando el sv
app.listen(PORT, () => {
    console.log("Server on port", PORT);
});