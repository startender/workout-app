import express, { Router } from 'express'
import { registerUser } from '../controllers/user/regController.js'
import { getUserProfile } from '../controllers/user/profileController.js'


const router = express.Router()


router.route('/profile').get(getUserProfile)
router.route('/').post(registerUser)

export default router
