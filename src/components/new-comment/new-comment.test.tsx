import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {NewComment} from './new-comment';
import {deleteScrollLock} from '../../utils';

const mockStore = configureMockStore();
const cameraId = makeCamera().id;

const store = mockStore({
  isVisible: false,
  cameraId: cameraId
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <NewComment isVisible={false} onClose={() => deleteScrollLock()} cameraId={2}/>
      </Provider>
    );

    expect(screen.getByText('Комментарий')).toBeInTheDocument();
  });
});
