import express, { Router } from 'express'
import { getUserProfile } from '../controllers/user/regController.js'

const router = express.Router()

router.route('/profile').get(getUserProfile)

export default router
