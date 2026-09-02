import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

export interface RouteMeta {
    name?: string;
    path: string;
    route?: LazyExoticComponent<ComponentType<any>>
}

export const NotFound = lazy(() => import('../routes/404'));

export const ROUTES: RouteMeta[] = [
    {path: "", route: lazy(() => import('../routes/Home'))},
    {name: "Home", path: "/home", route: lazy(() => import('../routes/Home'))},
    {name: "Contact", path: "/contact", route: lazy(() => import('../routes/Contact'))},
    {name: "Portfolio", path: "/portfolio", route: lazy(() => import('../routes/Portfolio'))},
    {name: "Blog", path: "/blogs", route: lazy(() => import('../routes/Blog'))},
    {name: "Blog Post", path: "/blogs/:slug", route: lazy(() => import('../routes/BlogPost'))},
    {name: "Privacy Policy", path: "/privacy-policy", route: lazy(() => import('../routes/PrivacyPolicy'))},
    {name: "Terms of Service", path: "/terms-of-service", route: lazy(() => import('../routes/TOS'))},
    {name: "Page Not Found", path: "*", route: NotFound},
]

export const HEADERROUTES: RouteMeta[] = [
    {name: "Home", path: "/home", route: lazy(() => import('../routes/Home'))},
    {name: "Portfolio", path: "/portfolio", route: lazy(() => import('../routes/Portfolio'))},
    {name: "Blog", path: "/blogs", route: lazy(() => import('../routes/Blog'))},
]