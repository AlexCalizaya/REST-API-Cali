import { Router } from "express";
import {
  getIncidents,
  createIncident,
  updateIncident,
  getIncident,
  deleteIncident,
} from "../controllers/incident.controller.js";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/", getIncidents);
router.post("/",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads",//Para subir imagenes temporalmente en la carpeta uploads
}), createIncident);
router.put("/:id", updateIncident);
router.get("/:id", getIncident);
router.delete("/:id", deleteIncident);

export default router;