const Task = require('../models/task.model');

exports.getAllTasks = async () => await Task.find();
exports.createTask = async (data) => await new Task(data).save();
exports.updateTask = async (id, data) => await Task.findByIdAndUpdate(id, data, { new: true });
exports.deleteTask = async (id) => await Task.findByIdAndDelete(id);