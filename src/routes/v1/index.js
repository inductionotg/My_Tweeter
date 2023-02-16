import express from "express";

import { createTweet } from '../../controllers/tweet-contoller.js'

import { toggleLike } from "../../controllers/like-controller.js";
import { createCommentController } from "../../controllers/comment-controller.js";
const router = express.Router();
router.post('/tweets',createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comment',createCommentController)
export default router