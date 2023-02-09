import {configureMockStore} from "@jedmao/redux-mock-store";
import {makeCamera, makeReviews} from "../../mocks";
import {Provider} from "react-redux";
import {render, screen} from "@testing-library/react";
import {CameraPage} from "./camera-page";

const mockStore = configureMockStore();
const currentCamera = {...makeCamera(), id: 1}

const store = mockStore({
  camera: {currentCamera},
  review: {...makeReviews(), id: 1},
});

describe('Component: CameraPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <CameraPage />
        </Provider>
    );

    expect(screen.getByText('Похожие товары')).toBeInTheDocument();
  });
});
