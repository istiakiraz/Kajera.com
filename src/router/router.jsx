import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import HomePage from "../pages/HomePage";
import AddTask from "../pages/AddTask";
import AllTaskPage from "../pages/AllTaskPage";
import TaskDetails from "../pages/TaskDetails";
import MyTaskPage from "../pages/MyTaskPage";
import EditMyTask from "../pages/EditMyTask";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayouts,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'add-task',
                Component: AddTask,
            },
            {
                path: 'all-task',
                Component: AllTaskPage
            },
            {
                path: 'task-details',
                Component: TaskDetails
            },
            {
                path: 'my-task',
                Component: MyTaskPage,
            },
            {
                path: 'edit-task',
                Component: EditMyTask
            }
        ]
    }
])