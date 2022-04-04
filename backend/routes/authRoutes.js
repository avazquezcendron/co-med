import { Router } from 'express'
import { login } from '../controllers/userControllers.js'
const router = Router()

router.post('/login', login)

export default router
