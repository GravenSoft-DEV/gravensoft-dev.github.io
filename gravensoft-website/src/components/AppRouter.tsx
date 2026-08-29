import { Suspense } from 'react';
import { PageLoader } from './PageLoader.tsx';
import { ROUTES, type RouteMeta } from '../data/routes.ts'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

export function AppRouter() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      { ROUTES.map((route: RouteMeta) => {
        if (route.path === "") {
          return (
            <Route 
              key="root-redirect"
              path="" 
              element={<Navigate to="/home" replace />} 
            />
          );
        }

        const Component = route.route;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              Component ? (
                <Suspense fallback={<PageLoader />}>
                  <Component />
                </Suspense>
              ) : null
            }
          />
        );
      })}
    </Routes>
  );
}