import { Router } from "express";
import {
  getIncidents,
  createIncident,
  updateIncident,
  getIncident,
  deleteIncident,
} from "../controllers/incident.controller.js";
//import fileUpload from "express-fileupload";

const router = Router();

router.get("/", getIncidents);
router.post("/", createIncident);
router.put("/:id", updateIncident);
router.get("/:id", getIncident);
router.delete("/:id", deleteIncident);

export default router;