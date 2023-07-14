import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/common/Loader';

const MainPage = lazy(() => import('./pages/main'));
const DetailPage = lazy(() => import('./pages/detail'));

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="issues/:id" element={<DetailPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
