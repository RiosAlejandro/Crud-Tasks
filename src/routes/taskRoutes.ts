import { Router } from "express";
import { newTask, listTask, taskId } from "../controllers/taskControllers";

const router = Router();

router.post("/new", newTask);
router.get("/list", listTask);
router.get("/list/:id", taskId);


export default router;
