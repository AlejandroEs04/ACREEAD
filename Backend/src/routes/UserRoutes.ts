import { createOne, getAll, updateOne } from '../controllers/UserController';
import express from 'express'

const router = express.Router();

router.route('/').get(getAll).post(createOne)
router.route('/:id').put(updateOne)

export default router