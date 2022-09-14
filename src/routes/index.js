//layouts
import { DefaultLayout } from "~/component/Layouts";

//component
import Home from '~/pages/Home'

export const publicRoutes = [
    {
        path:'/',
        component: Home,
        layout: DefaultLayout
    }
]