import mongoose from "mongoose";
const EventSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  catergory: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rooms: {
    type: [String],
  },
});

export default mongoose.model("Event", EventSchema)