import Home from '../components/Home';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';


describe('Home component', () => {
    it('renders the title "Quiz App"', () => {
        const wrapper = shallow(<Home />);
        const title = <h1>Quiz App</h1>;
        expect(wrapper.contains(title)).toEqual(true);
    });

    it('contains a Play button', () => {
        const wrapper = shallow(<Home />);
        const button = <Link className="play-button" to="/play/quiz">Play</Link>;
        expect(wrapper.contains(button)).toEqual(true);
    });
});
