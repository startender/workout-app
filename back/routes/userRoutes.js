import express, { Router } from 'express'
import { registerUser } from '../controllers/user/regController.js'
import { getUserProfile } from '../controllers/user/profileController.js'
import { protect } from '../middleware/authMiddleware.js'
import { authUser } from '../controllers/user/authController.js'


const router = express.Router()


router.route('/profile').get(protect, getUserProfile)
router.route('/login').post(authUser)
router.route('/').post(registerUser)

export default router
