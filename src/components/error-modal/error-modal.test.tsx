
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {deleteScrollLock} from '../../utils';
import {ErrorModal} from './error-modal';


describe('Component: ErrorModal', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <ErrorModal openModal={false} onClose={() => deleteScrollLock()} />
      </MemoryRouter>
    );

    expect(screen.getByText('Произошла ошибка, попробуйте снова')).toBeInTheDocument();
  });
});
