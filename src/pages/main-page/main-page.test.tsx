import {configureMockStore} from "@jedmao/redux-mock-store";
import {makeCameras} from "../../mocks";
import {Provider} from "react-redux";
import {MainPage} from "./main-page";
import {render, screen} from "@testing-library/react";

const mockStore = configureMockStore();

const store = mockStore({
  cameras: makeCameras()
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MainPage />
        </Provider>
    );

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
