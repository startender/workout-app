import express from 'express'
import { createNewWorkout, getWorkout } from '../controllers/workout/workoutController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout)
router.route('/:id').get(protect, getWorkout)

export default router
