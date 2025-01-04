import { Router } from "express";
import { body } from 'express-validator';
import * as projectController from '../controllers/project.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.post('/create', 
    authMiddleware.authUser,
    body('name').isString().withMessage('Name is required'),
    body('users').isArray().withMessage('Users must be an array').custom((users) => {
        if (!users.every(user => typeof user === 'string')) {
            throw new Error('Each user must be a string');
        }
        return true;
    }),
    projectController.createProject
)

router.get('/all',
    authMiddleware.authUser,
    projectController.getAllProjects
)

router.put('/add-user', 
    authMiddleware.authUser,
    body('projectId').isString().withMessage('Project ID must be a string'),
    body('users').isArray().withMessage('Users must be an array').custom((users) => {
        if (!users.every(user => typeof user === 'string')) {
            throw new Error('Each user must be a string');
        }
        return true;
    }),
    projectController.addUserToProject
)

export default router;