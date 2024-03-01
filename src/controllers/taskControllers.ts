import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Task } from "../interfaces/task";

let tasks: Task[] = [];

const newTask = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

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

const updateTask = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if(!task) {
    res.status(404).send("task not found");
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;

    res.json(task);
  }
}

const deleteTask = async (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send('Task not found');
  } else {
    tasks.splice(index, 1);
    res.status(204).send();
  }
}

export {
  newTask,
  listTask,
  taskId,
  updateTask,
  deleteTask
}
