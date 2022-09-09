import User from "../../models/userModel.js";
import asyncHandler from 'express-async-handler'

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password')
  res.json(user)
})
