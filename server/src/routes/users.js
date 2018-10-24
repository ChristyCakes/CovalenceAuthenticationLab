import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';

let router = Router();

//api/users/me
router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user); // req.user is the user with token, ex. req.user.email would be the user's email
});

export default router;