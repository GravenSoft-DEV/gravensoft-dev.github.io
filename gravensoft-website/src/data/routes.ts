import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

const NotFound = lazy(() => import('../routes/404'));
const Portfolio = lazy(() => import('../routes/Portfolio'));
const Blog = lazy(() => import('../routes/Blog'));
const BlogPost = lazy(() => import('../routes/BlogPost'));
const PrivacyPolicy = lazy(() => import('../routes/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../routes/TOS'));
const Contact = lazy(() => import('../routes/Contact'));
const Home = lazy(() => import('../routes/Home'));

export interface RouteMeta {
    name?: string;
    path: string;
    route?: LazyExoticComponent<ComponentType<any>>
}

export const ROUTES: RouteMeta[] = [
    {path: "", route: Home},
    {name: "Home", path: "/home", route: Home},
    {name: "Contact", path: "/contact", route: Contact},
    {name: "Portfolio", path: "/portfolio", route: Portfolio},
    {name: "Blog", path: "/blogs", route: Blog},
    {name: "Blog Post", path: "/blogs/:slug", route: BlogPost},
    {name: "Privacy Policy", path: "/privacy-policy", route: PrivacyPolicy},
    {name: "Terms of Service", path: "/terms-of-service", route: TermsOfService},
    {name: "Page Not Found", path: "*", route: NotFound},
]

export const HEADERROUTES: RouteMeta[] = [
    {name: "Home", path: "/home", route: Home},
    {name: "Portfolio", path: "/portfolio", route: Portfolio},
    {name: "Blog", path: "/blogs", route: Blog},
]