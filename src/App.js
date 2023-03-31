import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Summary from './components/quiz/Summary';
import Instructions from './components/quiz/Instructions';
import LoginPage from './components/quiz/Login';

function App() {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/play/quiz" exact component={Play} />
			<Route path="/play/quizSummary" exact component={QuizSummary} />
			<Route path="/play/summary" exact component={Summary} />
			<Route path="/instructions" exact component={Instructions} />
			<Route path="/login" exact component={LoginPage} />
		</Router>

	);
}

export default App;