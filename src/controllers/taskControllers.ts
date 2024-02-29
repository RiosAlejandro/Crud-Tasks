import { Request, Response } from "express";
import { Task } from "../interfaces/task";

let tasks: Task[] = [];

const newTask = async (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length +1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  }

  tasks.push(task);
  res.status(201).json(task);
};

const listTask = async (req: Request, res: Response) => {
  res.json(tasks);
};

const taskId = async (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if(!task) {
    res.status(404).send("task not found");
  } else {
    res.json(task);
  }
};

export {
  newTask,
  listTask,
  taskId,
}
