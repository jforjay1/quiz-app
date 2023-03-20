import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import QuizSummary from '../components/quiz/QuizSummary';

describe('<QuizSummary />',
    () => {

        it('renders the title "Quiz App"', () => {
            const props = {
                location: {
                    state: {
                        score: 60,
                        numberOfQuestions: 10,
                        numberOfAnsweredQuestions: 8,
                        correctAnswers: 5,
                        wrongAnswers: 3,
                        hintsUsed: 1,
                        fiftyFiftyUsed: 1
                    }
                }
            };
            const wrapper = shallow(<QuizSummary {...props} />);
            const title = <h1>Summary</h1>;
            expect(wrapper.contains(title)).toEqual(true);
        });

        it('renders without crashing', () => {
            shallow(<QuizSummary location={{ state: {} }} />);
        });

        it('displays no statistics available message when state is undefined', () => {
            const wrapper = shallow(<QuizSummary location={{ state: undefined }} />);
            expect(wrapper.find('.no-stats')).toHaveLength(1);
        });

        it('displays quiz summary when state is defined', () => {
            const props = {
                location: {
                    state: {
                        score: 60,
                        numberOfQuestions: 10,
                        numberOfAnsweredQuestions: 8,
                        correctAnswers: 5,
                        wrongAnswers: 3,
                        hintsUsed: 1,
                        fiftyFiftyUsed: 1
                    }
                }
            };
            const wrapper = shallow(<QuizSummary {...props} />);
            expect(wrapper.find('.stats')).toHaveLength(1);
        });

        const locationMock = {
            state: {
                score: 2,
                numberOfQuestions: 5,
                numberOfAnsweredQuestions: 5,
                correctAnswers: 2,
                wrongAnswers: 3,
                hintsUsed: 1,
                fiftyFiftyUsed: 1,
            },
        };

        let wrapper = shallow(<QuizSummary location={locationMock}/>);

        it('renders the correct remark for a score of 0%', () => {
            wrapper.setState({score: 0});
            expect(wrapper.find('h4').text()).toEqual('You need more practice!');
        });

        it('renders the correct remark for a score between 1% and 30%', () => {
            wrapper.setState({score: 10});
            expect(wrapper.find('h4').text()).toEqual('You need more practice!');
        });

        it('renders the correct remark for a score between 31% and 50%', () => {
            wrapper.setState({score: 40});
            expect(wrapper.find('h4').text()).toEqual('Better luck next time!');
        });

        it('renders the correct remark for a score between 51% and 70%', () => {
            wrapper.setState({score: 60});
            expect(wrapper.find('h4').text()).toEqual('You can do better!');
        });

        it('renders the correct remark for a score between 71% and 84%', () => {
            wrapper.setState({score: 80});
            expect(wrapper.find('h4').text()).toEqual('You did great!');
        });

        it('renders the correct remark for a score of 85% or higher', () => {
            wrapper.setState({score: 100});
            expect(wrapper.find('h4').text()).toEqual("You're an absolute genius!");
        });


        it('displays Play Again and Back to Home buttons when state is defined', () => {
            const props = {
                location: {
                    state: {
                        score: 60,
                        numberOfQuestions: 10,
                        numberOfAnsweredQuestions: 8,
                        correctAnswers: 5,
                        wrongAnswers: 3,
                        hintsUsed: 1,
                        fiftyFiftyUsed: 1
                    }
                }
            };
            const wrapper = shallow(<QuizSummary {...props} />);
            expect(wrapper.find('button')).toHaveLength(2);
            expect(wrapper.find('button').at(0).text()).toEqual("Play Again");
            expect(wrapper.find('button').at(1).text()).toEqual("Back to Home");
        });


        it('redirects to Play Quiz page when Play Again button is clicked', () => {
            const wrapper = mount(<QuizSummary location={{ state: {} }} />);
            const playAgainButton = wrapper.find('button').at(0);
            playAgainButton.simulate('click');
            expect(window.location.href).toEqual('http://localhost/play/quiz');
        });

        it('redirects to Home page when Back to Home button is clicked', () => {
            const wrapper = mount(<QuizSummary location={{ state: {} }} />);
            const playAgainButton = wrapper.find('button').at(1);
            playAgainButton.simulate('click');
            expect(window.location.href).toEqual('http://localhost/');
        });
    });