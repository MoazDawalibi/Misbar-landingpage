import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingAntd from './Components/Utils/Loading/LoadingAntd';
import Layout from './Layout/app/Layout';
import { routesArray } from './config/RoutesArray';

const App = () => {
  
  return (
    <>
      <Suspense fallback={<LoadingAntd />}>
        <Routes>
          {routesArray.map(({ path, LayoutClassName, ComponentElement, isLayoutExist }) => (
            <Route
              key={path}
              path={path}
              element={
                isLayoutExist ? (
                  <Layout className={LayoutClassName}>
                    <ComponentElement />
                  </Layout>
                ) : (
                  <ComponentElement />
                )
              }
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
