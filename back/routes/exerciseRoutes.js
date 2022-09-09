import express from 'express'
import { addNewExercise } from '../controllers/exercise/mainController.js'
import { addNewExerciseLog } from '../controllers/exercise/logController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addNewExercise)
router.route('/log').post(protect, addNewExerciseLog)

export default router
