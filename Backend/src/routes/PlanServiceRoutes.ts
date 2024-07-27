import { createOne, deleteOne, getAll } from '../controllers/PlanServiceController';
import express from 'express'

const router = express.Router();

router.route('/').get(getAll).post(createOne);
router.delete('/:id', deleteOne);

export default router;