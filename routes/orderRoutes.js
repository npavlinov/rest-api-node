import { Router } from 'express'
import ProductController from '../controllers/OrderController'
import { verifyToken } from '../utils/auth'

const router = Router()

router.post('/', verifyToken, ProductController.create)
router.get('/', verifyToken, ProductController.readAll)
router.put('/:id', verifyToken, ProductController.update)

export default router
