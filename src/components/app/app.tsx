import {Route, Routes} from 'react-router-dom';
import {MainPage} from '../../pages/main-page/main-page';
import {AppRoute} from '../../const';
import {CameraPage} from '../../pages/camera-page/camera-page';
import {Basket} from '../../pages/basket/basket';
import {Error} from '../../pages/error/error';
import ScrollToTop from 'react-scroll-to-top';
import {ButtonUp} from '../button-up/button-up';


function App(): JSX.Element {
  return (
    <>
      <ScrollToTop smooth style={{borderRadius:'32px', width: '48px', height: '48px', border: '2px solid #7575E2'}} component={<ButtonUp />}/>
      <Routes>
        <Route element={<MainPage />} path={AppRoute.Root} />
        <Route element={<CameraPage />} path={`${AppRoute.Card}/:id`} />
        <Route element={<Basket />} path={AppRoute.Basket} />
        <Route element={<Error />} path={AppRoute.Error} />
      </Routes>
    </>
  );
}

export default App;
