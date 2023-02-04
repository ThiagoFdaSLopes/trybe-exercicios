import express from 'express';
import PostController from '../controllers/post.controller';

const postController = new PostController();

const router = express.Router();

router.get('/', postController.getAll);
router.get('/:id', postController.getById);

export default router;