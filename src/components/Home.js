import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

const handlePlayClick = () => {
	alert('Instructions: Answer the questions to the best of your ability. Good luck!');
};
const Home = () => (

	<Fragment>
		<Helmet><title>Home</title></Helmet>
		<div id="home">
			<section>
				<h1>Quiz App</h1>
				<div className="play-button-container">
					<ul>
						<li><Link className="play-button" to="/play/quiz">Play</Link></li>
					</ul>
				</div>
				<div className="play-button-container">
					<ul>
						<li><Link className="play-button" to="/login" onClick={handlePlayClick}>Login</Link></li>
					</ul>
				</div>
			</section>
		</div>
	</Fragment>
);

export default Home;