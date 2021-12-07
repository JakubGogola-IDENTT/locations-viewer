import { shallow } from 'enzyme';
import { LABELS } from '../../../constants/labels';
import { COLUMN_IDS } from '../../../constants/columnIds';
import { LabelSelectsGroup } from './LabelSelectsGroup';

const mockUseLabelSelectsGroup = jest.fn();
jest.mock('../../../hooks/useLabelSelectsGroup', () => ({
    __esModule: true,
    useLabelSelectsGroup: () => mockUseLabelSelectsGroup(),
}));

describe('components > modules > locations > LabelSelectsGroup', () => {
    const handleSelect = jest.fn();
    const handleSubmit = jest.fn();
    const assignments = {
        [LABELS.ADDRESS]: null,
        [LABELS.CATEGORY]: null,
        [LABELS.CITY]: null,
        [LABELS.STATE]: null,
        [LABELS.ZIP]: null,
    };
    const columnIds = COLUMN_IDS.getAll();
    mockUseLabelSelectsGroup.mockReturnValue({
        assignments,
        canSubmit: false,
        handleSubmit,
        handleSelect,
    });

    beforeEach(jest.clearAllMocks);

    it('should render without crashing', () => {
        const wrapper = shallow(<LabelSelectsGroup />);

        expect(mockUseLabelSelectsGroup).toHaveBeenCalled();

        expect(
            wrapper.find('h1[data-testid="LabelSelectsGroup-header"]')
        ).toExist();

        expect(
            wrapper.find('p[data-testid="LabelSelectsGroup-desc"]')
        ).toExist();

        const selects = wrapper.find(
            '[data-testid="LabelSelectsGroup-select"]'
        );
        expect(selects).toHaveLength(5);
        selects.forEach((select, idx) => {
            expect(select).toHaveProp({
                id: columnIds[idx],
                onSelect: handleSelect,
                assignments,
                selected: assignments[columnIds[idx]],
            });
        });

        const button = wrapper.find('[data-testid="LabelSelectsGroup-button"]');
        expect(button).toExist();
        expect(button).toHaveProp({
            kind: 'primary',
            disabled: true,
            onClick: handleSubmit,
        });
    });

    describe('should handle', () => {
        it('submit', () => {
            const wrapper = shallow(<LabelSelectsGroup />);

            const select = wrapper
                .find('[data-testid="LabelSelectsGroup-select"]')
                .first();

            select.invoke('onSelect')();

            expect(handleSelect).toHaveBeenCalled();
        });

        it('button click', () => {
            mockUseLabelSelectsGroup.mockReturnValue({
                assignments: {
                    [LABELS.ADDRESS]: COLUMN_IDS.COL_1,
                    [LABELS.CATEGORY]: COLUMN_IDS.COL_2,
                    [LABELS.CITY]: COLUMN_IDS.COL_3,
                    [LABELS.STATE]: COLUMN_IDS.COL_4,
                    [LABELS.ZIP]: COLUMN_IDS.COL_5,
                },
                canSubmit: true,
                handleSubmit,
                handleSelect,
            });

            const wrapper = shallow(<LabelSelectsGroup />);

            const button = wrapper.find(
                '[data-testid="LabelSelectsGroup-button"]'
            );
            expect(button).toHaveProp({ disabled: false });
            button.simulate('click');

            expect(handleSubmit).toHaveBeenCalled();
        });
    });
});
