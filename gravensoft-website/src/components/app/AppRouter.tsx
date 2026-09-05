import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PageLoader } from './PageLoader';
import { ROUTES, type RouteMeta } from '@/data/routes';
import DefaultLayout from '@/components/app/layouts/DefaultLayout';
import { NotFound } from '@/data/routes';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route element={<DefaultLayout />}>
        {ROUTES.filter((r) => r.path !== '' && r.path !== '*').map((route: RouteMeta) => {
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

        <Route 
          path="*" 
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  );
}