import { shallow } from 'enzyme';
import { CsvDataProvider } from './CsvDataProvider';

const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
    __esModule: true,
    useSelector: f => mockUseSelector(f),
}));

describe('components > providers > CsvDataProvider', () => {
    const children = <div data-testid="CsvDataProvider-children" />;

    beforeEach(jest.clearAllMocks);

    describe('should render', () => {
        it('CSV data loader component', () => {
            mockUseSelector.mockReturnValueOnce(false);

            const wrapper = shallow(
                <CsvDataProvider>{children}</CsvDataProvider>
            );

            expect(mockUseSelector).toHaveBeenCalledWith(expect.any(Function));

            expect(
                wrapper.find('[data-testid="CsvDataProvider-csvFileUploader"]')
            ).toExist();

            expect(
                wrapper.find('[data-testid="CsvDataProvider-children"]')
            ).not.toExist();
        });

        it('children components', () => {
            mockUseSelector.mockReturnValueOnce(true);

            const wrapper = shallow(
                <CsvDataProvider>{children}</CsvDataProvider>
            );

            expect(mockUseSelector).toHaveBeenCalledWith(expect.any(Function));

            expect(
                wrapper.find('[data-testid="CsvDataProvider-csvFileUploader"]')
            ).not.toExist();

            expect(
                wrapper.find('[data-testid="CsvDataProvider-children"]')
            ).toExist();
        });
    });
});
