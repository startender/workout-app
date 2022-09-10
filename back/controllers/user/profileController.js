import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import ExerciseLog from "../../models/exersiceLogModel.js";

// @desc Get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  // minutes, workouts, kg
  const exerciseLogByUser = await ExerciseLog.find({
    user: user._id,
    completed: true,
  })

  let countExerciseTimesCompleted = 0
  

  const minutes = exerciseLogByUser.forEach(log => log.times.length)

  res.json(minutes);
});
