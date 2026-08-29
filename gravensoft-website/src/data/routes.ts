import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

const NotFound = lazy(() => import('../routes/404'));
const Portfolio = lazy(() => import('../routes/Portfolio'));
const Blogs = lazy(() => import('../routes/Blogs'));
const Home = lazy(() => import('../routes/Home'));

export interface RouteMeta {
    name?: string;
    path: string;
    route?: LazyExoticComponent<ComponentType<any>>
}

export const ROUTES: RouteMeta[] = [
    {path: "", route: Home},
    {name: "Home", path: "/home", route: Home},
    {name: "Portfolio", path: "/portfolio", route: Portfolio},
    {name: "Blogs", path: "/blogs", route: Blogs},
    {name: "Page Not Found", path: "*", route: NotFound},
]