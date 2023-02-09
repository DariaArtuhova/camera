import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page';
import {AppRoute} from '../../const';
import {CameraPage} from '../../pages/camera-page/camera-page';
import {Basket} from '../../pages/basket/basket';
import {Error} from '../../pages/error/error';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path={AppRoute.Root} />
        <Route element={<CameraPage />} path={`${AppRoute.Card}/:id`} />
        <Route element={<Basket />} path={AppRoute.Basket} />
        <Route element={<Error />} path={AppRoute.Error} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
