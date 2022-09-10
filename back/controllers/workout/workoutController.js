import asyncHandler from "express-async-handler";
import Workout from "../../models/workoutModel.js";

// @desc Create new workout
// @route POST /api/workouts
// @access Private

export const createNewWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body

  // if (!name) throw new Error

  const workout = await Workout.create({
    name,
    exercises: exerciseIds
  })

  res.json(workout)
})

// @desc  Get workput
// @route GET /api/workouts
// @access Private

export const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({}).populate('exercises')
 
  res.json(workouts)
})

// @desc   Update workout
// @route  PUT /api/workouts
// @access Private

export const updateWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds, workoutId } = req.body

  const workout = await Workout.findById(workoutId)

  if (!workout) {
    res.status(404)
    throw new Error('This workout does not found')
  }

  workout.name = name
  workout.exercises = exerciseIds

  const updatedWorkout = await workout.save()

  res.json(updatedWorkout)

})

// @desc   Delete workout
// @route  DELETE /api/workouts
// @access Private
export const deleteWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.body

  const workout = await Workout.findById(workoutId)

  if (!workout) {
    res.status(404)
    throw new Error('This workout does not found')
  }

  await workout.remove()

  res.json({ message: 'Workout has been removed!' })

})
