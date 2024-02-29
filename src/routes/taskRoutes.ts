import {Router, Request, Response} from "express";
import { Task } from "../interfaces/task";

const router = Router();
let tasks: Task[] = [];


export default router;
