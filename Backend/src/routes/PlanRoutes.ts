import { createOne, getAll, updateOne, deleteOne } from '../controllers/PlanController'
import express from 'express'

const router = express.Router()

router.route('/').get(getAll).post(createOne)
router.route('/:id').put(updateOne).delete(deleteOne)

export default router