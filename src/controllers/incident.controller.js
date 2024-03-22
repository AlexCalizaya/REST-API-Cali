import Incident from "../models/incident.model.js";
//import {uploadImage, deleteImage} from '../utils/cloudinary.js'
//import fs from 'fs-extra'

export const getIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    return res.json(incidents);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createIncident = async (req, res) => {
  const { supervisor, EPPs, areaName } = req.body;

  if (!supervisor) return res.status(404).json({message: 'supervisor is required'})
  
  try {
    const newIncident = new Incident({
      supervisor,
      EPPs,
      areaName,
    });
    
    const savedIncident = await newIncident.save();
    return res.json(savedIncident);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateIncident = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedIncident = await Incident.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedIncident)
      return res.status(404).json({ message: "Incident Not Found" });
    return res.json(updatedIncident);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteIncident = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedIncident = await Incident.findByIdAndDelete(id);

    if (!deletedIncident) return res.status(404).json({message: 'Incident does not exists'})
    
    return res.json(deletedIncident);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIncident = async (req, res) => {
  const { id } = req.params;
  try {
    const incidentFound = await Incident.findById(id);
    if (!incidentFound)
      return res.status(404).json({ message: "Incident not found" });
    return res.json(incidentFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};