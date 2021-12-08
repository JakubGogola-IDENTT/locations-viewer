import { categoriesMapper } from './categoriesMapper';

describe('functions > mappers > categoriesMapper', () => {
    it('should map categories to colors', () =>
        expect(
            categoriesMapper([
                { category: 'category1' },
                { category: 'category2' },
                { category: 'category3' },
                { category: 'category2' },
                { category: 'category4' },
            ])
        ).toEqual({
            category1: '#755217',
            category2: '#2E0EAC',
            category3: '#C8241A',
            category4: '#987329',
        }));
});
