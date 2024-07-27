import express from 'express'
import { createOne, deleteOne, getAll, updateOne } from '../controllers/ServiceController';

const router = express.Router();

router.route('/').get(getAll).post(createOne)
router.route('/:id').put(updateOne).delete(deleteOne)

export default router;