import { shallow } from 'enzyme';
import { CsvFileUploader } from './CsvFileUploader';

const mockUseUploadCsvFile = jest.fn();
jest.mock('../../../hooks/useUploadCsvFile', () => ({
    __esModule: true,
    useUploadCsvFile: () => mockUseUploadCsvFile(),
}));

describe('components > modules > file > CsvFileUploader', () => {
    const handleUpload = jest.fn();
    mockUseUploadCsvFile.mockReturnValue({
        isParsing: false,
        handleUpload,
    });

    beforeEach(jest.clearAllMocks);

    it('should render without crashing', () => {
        const wrapper = shallow(<CsvFileUploader />);

        expect(
            wrapper.find('h1[data-testid="CsvFileUploader-header"]')
        ).toExist();

        expect(wrapper.find('p[data-testid="CsvFileUploader-desc"]')).toExist();

        const input = wrapper.find('[data-testid="CsvFileUploader-fileInput"]');
        expect(input).toExist();
        expect(input).toHaveProp({
            disabled: false,
            onChange: handleUpload,
        });
    });

    it('should handle input change', () => {
        const wrapper = shallow(<CsvFileUploader />);

        const input = wrapper.find('[data-testid="CsvFileUploader-fileInput"]');
        input.invoke('onChange')();

        expect(handleUpload).toHaveBeenCalled();
    });
});
