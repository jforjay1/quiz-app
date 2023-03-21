import { BrowserRouter as Router, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import Home from '../components/Home';
import Play from '../components/quiz/Play';
import QuizSummary from '../components/quiz/QuizSummary';

describe('<App />', () => {
    it('renders the correct routes', () => {
        const wrapper = mount(
            <Router>
                <App />
            </Router>
        );

        expect(wrapper.find(Route)).toHaveLength(3);
        expect(wrapper.find({ path: '/' }).props().component).toEqual(Home);
        expect(wrapper.find({ path: '/play/quiz' }).props().component).toEqual(Play);
        expect(wrapper.find({ path: '/play/quizSummary' }).props().component).toEqual(QuizSummary);
    });
});