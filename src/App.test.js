import { shallow } from 'enzyme';
import { App } from './App';

test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const root = wrapper.find('div[data-testid="App-root"]');
    expect(root).toExist();
});
