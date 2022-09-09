import Exercise from "../../../models/exerciseModel.js";
import asyncHandler from "express-async-handler";
import ExerciseLog from "../../../models/exersiceLogModel.js";
// @desc Create new exercise
// @desc POST /api/exercises/log
// @desc Private

export const createNewExerciseLog = asyncHandler(async (req, res) => {
  const { exerciseId, times } = req.body;

  let timesArray = [];

  const prevExercises = await ExerciseLog.find({
    user: req.user._id,
    exercise: exerciseId,
  }).sort("desc"); // сортировка по дате добавления

  if (prevExercises[0]) {
    timesArray = prevExercises[0].times;
  } else {
    for (let i = 0; i < times; i++) {
      times.push({
        weight: 0,
        repeat: 0,
      });
    }
  }

  const exerciseLog = await ExerciseLog.create({
    user: req.user._id,
    exercise: exerciseId,
    times: timesArray,
  });

  res.json(exerciseLog);
});

// @desc Get exerciseLog
// @desc POST /api/exercises/log/:id
// @desc Private

export const getExerciseLog = asyncHandler(async (req, res) => {
  const exerciseLog = await ExerciseLog.findById(req.params.id).populate(
    "exercise",
    "name imageId"
  );
  res.json(exerciseLog);
});
