import { Task } from "./task.js";
import { User } from "./user.js";

const newTask = new Task('New task');
const user = new User(newTask);
user.do();