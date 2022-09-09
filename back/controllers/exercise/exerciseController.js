import Exercise from '../../models/exerciseModel.js'
import asyncHandler from 'express-async-handler'
// @desc Add new exercise
// @desc POST /api/exercises
// @desc Private

export const addNewExercise = asyncHandler(async (req, res) => {
  const { name, times, image } = req.body

  const exercise = await Exercise.create({
    name, times, image,
  })

  res.json(exercise)
})

