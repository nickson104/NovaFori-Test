import { AddTask } from "./components/AddTask";
import { Task } from "./components/Home";

const AppRoutes = [
  {
        index: true,
        element: <Task />
  },
  {
      path: '/addtask',
      element: <AddTask />
  }
];

export default AppRoutes;
