import { Router } from 'express';
import authControllers from '../controllers/auth-controllers.js';
import { authorize } from '../middlewares/auth.js';
import validate from '../middlewares/request-validator.js';
import schemas from '../utils/validation-schemas.js';
const router = Router();
router.post('/login', validate(schemas.login, 'body'), authControllers.login);
router.post(
    '/signup',
    validate(schemas.signup, 'body'),
    authControllers.signup
);
router.get(
    '/logout',
    authorize(['client', 'freelancer']),
    authControllers.logout
);
router.get('/refresh', authControllers.refresh);
export default router;
