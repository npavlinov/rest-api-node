import { Router } from 'express'
import ProductController from '../controllers/ProductController'
import { verifyToken } from '../utils/auth'

const router = Router()

router.post('/', verifyToken, ProductController.create)
router.get('/', verifyToken, ProductController.readAll)
router.put('/:id', verifyToken, ProductController.update)
router.delete('/:id', verifyToken, ProductController.destroy)
export default router
