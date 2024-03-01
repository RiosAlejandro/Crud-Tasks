import { Router } from "express";
import { newTask,
         listTask, 
         taskId, 
         updateTask, 
         deleteTask } from "../controllers/taskControllers";

const router = Router();

router.post("/new", newTask);
router.get("/list", listTask);
router.get("/list/:id", taskId);
router.put("/list/:id", updateTask);
router.delete("/list/:id", deleteTask);


export default router;
