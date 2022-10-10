import express from "express";
import {
  countByType,
  createEvent,
  deleteEvent,
  getEvent,
  getEventRooms,
  updateEvent,
} from "../controllers/event_con.js";
import Event from "../models/event_model.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createEvent);
// UPDATE
router.put("/:id", verifyAdmin, updateEvent);
// DELETE
router.delete("/:id", verifyAdmin, deleteEvent);
// GET
router.get("/find/:id", getEvent);
// COUNT
router.get("/countByType", countByType);
// ROOM
router.get("/room/:id", getEventRooms);

export default router;