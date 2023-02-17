import express from "express";

import { createTweet, getTweet } from '../../controllers/tweet-contoller.js'

import { toggleLike } from "../../controllers/like-controller.js";
import { createCommentController } from "../../controllers/comment-controller.js";
import { signUp } from "../../controllers/auth-controller.js";
const router = express.Router();
router.post('/tweets',createTweet)
router.get('/tweets/:id',getTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comment',createCommentController)


router.post('/signup',signUp)
export default router