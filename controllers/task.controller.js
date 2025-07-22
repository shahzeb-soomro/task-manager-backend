const taskService = require('../services/task.service');

exports.getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.json({ message: 'Deleted' });
};