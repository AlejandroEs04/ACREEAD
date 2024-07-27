import { getAll, createOne, updateOne, deleteOne } from '../controllers/RolController';
import express from 'express'

const router = express.Router();

router.route('/').get(getAll).post(createOne);
router.route('/:id').put(updateOne).delete(deleteOne);

export default router