import asyncHandler from "express-async-handler";
import Workout from "../../models/workoutModel.js";

// @desc Add new workout
// @route POST /api/workouts
// @access Private

export const addNewWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body

  // if (!name) throw new Error

  const workout = await Workout.create({
    name,
    exercises: exerciseIds
  })

  res.json(workout)
})
