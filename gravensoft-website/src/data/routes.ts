import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

const NotFound = lazy(() => import('../routes/404'));
const Portfolio = lazy(() => import('../routes/Portfolio'));
const Blogs = lazy(() => import('../routes/Blogs'));
const Home = lazy(() => import('../routes/Home'));

export interface RouteMeta {
    name: string;
    route?: LazyExoticComponent<ComponentType<any>>
}

export const ROUTES: RouteMeta[] = [
    {name: "", route: Home},
    {name: "/home", route: Home},
    {name: "/portfolio", route: Portfolio},
    {name: "/blogs", route: Blogs},
    {name: "*", route: NotFound},
]