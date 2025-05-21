import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import HomePage from "../pages/HomePage";
import AddTask from "../pages/AddTask";
import AllTaskPage from "../pages/AllTaskPage";
import TaskDetails from "../pages/TaskDetails";
import MyTaskPage from "../pages/MyTaskPage";
import EditMyTask from "../pages/EditMyTask";
import SIgnIn from "../pages/SIgnIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayouts,
        errorElement: <p>error</p>,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('http://localhost:3000/tasks/recent')
            },
            {
                path: 'add-task',
                Component: AddTask,
            },
            {
                path: 'all-tasks',
                Component: AllTaskPage,
                loader: ()=> fetch('http://localhost:3000/tasks')
            },
            {
                path: 'task-details/:id',
                Component: TaskDetails,
                loader: ({params})=> fetch(`http://localhost:3000/tasks/${params.id}`)
            },
            {
                path: 'my-tasks',
                Component: MyTaskPage,
            },
            {
                path: 'edit-task',
                Component: EditMyTask
            }
        ]
    },
    {
        path: 'sign-in',
        Component: SIgnIn,
    },
    {
        path: 'sign-up',
        Component: SignUp
    }
])