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
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../components/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayouts,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('http://localhost:3000/tasks/recent')
            },
            {
                path: 'add-task',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
            },
            {
                path: 'all-tasks',
                Component: AllTaskPage,
                loader: ()=> fetch('http://localhost:3000/tasks')
            },
            {
                path: 'task-details/:id',
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/tasks/${params.id}`)
            },
            {
                path: 'my-tasks/:email',
                element: <PrivateRoute><MyTaskPage></MyTaskPage></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/my-task/${params.email}`)
            },
            {
                path: '/edit-task/:id',
                element: <PrivateRoute><EditMyTask></EditMyTask></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/tasks/${params.id}`)
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