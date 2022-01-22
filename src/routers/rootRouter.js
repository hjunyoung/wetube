import express from 'express';
import { join, login } from '../controllers/userController';
import { trending, search } from '../controllers/videoController';

const rootRouter = express.Router();

rootRouter.get('/', trending);
rootRouter.get('/join', join);
rootRouter.get('/login', login);
rootRouter.get('/search', search);

export default rootRouter;
