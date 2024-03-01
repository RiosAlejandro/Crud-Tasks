import { Router } from "express";
import { body } from "express-validator";
import { newTask,
         listTask, 
         taskId, 
         updateTask, 
         deleteTask } from "../controllers/taskControllers";

const router = Router();

const taskValidationRules = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("completed").isBoolean().withMessage("Completed must be a boolean"),
];

router.post("/new", taskValidationRules, newTask);
router.get("/list", listTask);
router.get("/list/:id", taskId);
router.put("/list/:id", taskValidationRules, updateTask);
router.delete("/list/:id", deleteTask);

export default router;
