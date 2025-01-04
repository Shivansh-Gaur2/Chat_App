import projectModel from "../models/project.model.js";
import * as projectService from "../services/project.service.js";
import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";

export const createProject = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, users } = req.body;
    const loggedInUser = await userModel.findOne({ email: req.user.email });
    const userId = loggedInUser._id;

    const newProject = await projectService.createProject({ name, userId, users });

    res.status(201).json({ project: newProject });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const loggedInUser = await userModel.findOne({ email: req.user.email });
    const allUserProjects = await projectService.getAllProjectsByUserId({
      userId: loggedInUser._id,
    });

    return res.status(200).json({ projects: allUserProjects });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

export const addUserToProject = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    try{
        const {projectId, users} = req.body;
        
    }
    catch(err){
        console.log(err);
        return res.status(400).json({error : err.message});
    }
}