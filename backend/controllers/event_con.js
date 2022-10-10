import Event from "../models/event_model.js";
import Room from "../models/room_model.js";

export const createEvent = async (req, res, next) => {
  const newEvent = new Event(req.body);

  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    next(err);
  }
};
export const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};
export const deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json("Event has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getEvent = async (req, res, next) => {
  try {
    const Event = await Event.findById(req.params.id);
    res.status(200).json(Event);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const EventCount = await Event.countDocuments({ type: "Event" });
    const programmingCount = await Event.countDocuments({ type: "Programming Language" });
    const webCount = await Event.countDocuments({ type: "Web Development" });
    const dsaCount = await Event.countDocuments({ type: "DSA" });
    const dsCount = await Event.countDocuments({ type: "Data Science" });

    res.status(200).json([
      { type: "Event", count: EventCount },
      { type: "Programming Language", count: programmingCount },
      { type: "Web Development", count: webCount },
      { type: "DSA", count: dsaCount },
      { type: "Data Science", count: dsCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getEventRooms = async (req, res, next) => {
  try {
    const Event = await Event.findById(req.params.id);
    const list = await Promise.all(
      Event.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};