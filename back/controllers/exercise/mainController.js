import Exercise from "../../../models/exerciseModel.js";
import asyncHandler from "express-async-handler";

// @desc Create new exercise
// @desc POST /api/exercises
// @desc Private

export const createNewExercise = asyncHandler(async (req, res) => {
  const { name, times, imageName } = req.body;

  const exercise = await Exercise.create({
    name,
    times,
    imageName,
  });

  res.json(exercise);
});


// @desc Update exercises
// @route PUT /api/exercises
// @access Private

export const updateExercises = asyncHandler(async (req, res) => {
  const { name, times, imageName, exerciseId } = req.body

  const exercise = await Exercise.findById(exerciseId)

  if (!exercise) {
    res.status(404)
    throw new Error('This exercise does not found')
  }
  exercise.name = name
  exercise.times = times
  exercise.imageName = imageName
  const updatedExercise = await exercise.save()

  res.json(updatedExercise)

})

// @desc Delete exercise
// @route DELETE /api/exercises
// @access Private
export const deleteExercise = asyncHandler(async (req, res) => {
  const { exerciseId } = req.body

  const exercise = await Exercise.findById(exerciseId)

  if (!exercise) {
    res.status(404)
    throw new Error ('This exercise does not found')
  }

  await exercise.remove()

  res.json({ message: 'Exercise has been removed'})
})

// @desc Get exercises
// @route GET /api/exercises
// @access Private

export const getExercises = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find({})

  res.json(exercises)
})
