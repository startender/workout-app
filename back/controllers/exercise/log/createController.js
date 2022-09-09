import Exercise from "../../../models/exerciseModel.js";
import asyncHandler from "express-async-handler";
import ExerciseLog from "../../../models/exersiceLogModel.js";
// @desc Create new exercise
// @desc POST /api/exercises/log
// @desc Private

export const createNewExerciseLog = asyncHandler(async (req, res) => {
  const { exerciseId, times } = req.body;

  let timesArray = [];

  // const prevExercises = await ExerciseLog.find({
  //   user: req.user._id,
  //   exercise: exerciseId,
  // }).sort("desc"); // сортировка по дате добавления

  for (let i = 0; i< times; i++) {
    timesArray.push({
      weight: 0,
      repeat: 0,
    })
  }
  const exerciseLog = await ExerciseLog.create({
    user: req.user_id,
    exercise: exerciseId,
    times: timesArray,
  })
  res.json(exerciseLog)
});


