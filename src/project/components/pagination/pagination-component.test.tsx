import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { INITAL_PAGE_BY_PANGINATION } from '../../const/const';
import { Pagination } from './pagination-component';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'pagination-component';
    const prepareComponent = withHistory(
      <Pagination
        currentPage={1}
        pagesAmount={INITAL_PAGE_BY_PANGINATION}
        onPageChange={vi.fn()}
      />
    );

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});
