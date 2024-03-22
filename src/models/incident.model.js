import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema(
  {
    supervisor: {
      type: String,
      required: true,
      trim: true
    },
    EPPs: {
      type: String,
      required: true,
      trim: true,
    },
    areaName: {
      type: String,
      required: true,
      trim: true,
    },
    // imageUrl: {
    //   secure_url: String,
    //   public_id: String
    // }
  },
  // {
  //   timestamps: true,
  // }
);

export default mongoose.model("Incident", incidentSchema);
