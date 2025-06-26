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
import Loading from "../components/Loading";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayouts,
        errorElement: <Error></Error>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('https://kajero-server.vercel.app/tasks/recent')
            },
            {
                path: 'add-task',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
                
            },
            {
                path: 'all-tasks',
                Component: AllTaskPage,
                loader: ()=> fetch('https://kajero-server.vercel.app/tasks'),
                 hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'task-details/:id',
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://kajero-server.vercel.app/tasks/${params.id}`),
                 hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'my-tasks/:email',
                element: <PrivateRoute><MyTaskPage></MyTaskPage></PrivateRoute>,
                loader: ({params})=> fetch(`https://kajero-server.vercel.app/my-task/${params.email}`),
                 hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: '/edit-task/:id',
                element: <PrivateRoute><EditMyTask></EditMyTask></PrivateRoute>,
                loader: ({params})=> fetch(`https://kajero-server.vercel.app/tasks/${params.id}`),
                 hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'about',
                Component: AboutUs
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