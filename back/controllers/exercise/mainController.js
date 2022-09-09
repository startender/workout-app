import Exercise from '../../models/exerciseModel.js'
import asyncHandler from 'express-async-handler'
// @desc Create new exercise
// @desc POST /api/exercises
// @desc Private

export const createNewExercise = asyncHandler(async (req, res) => {
  const { name, times, imageName } = req.body

  const exercise = await Exercise.create({
    name, times, imageName,
  })

  res.json(exercise)
})
