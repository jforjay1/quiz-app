<h1 align="center">Quiz-App: React Node.js Quiz Application 🚀</h1>


### Overview 📖

Quiz-App is a dynamic web application built with React and Node.js, featuring 9 engaging questions on current affairs and food and cuisines. The primary focus of this project is to analyze test coverage and identify vulnerabilities using SonarQube, ensuring a robust and secure application.

### Key Features 🔑

- **Engaging Quiz Topics**: Current affairs and food & cuisine-themed questions to test and expand your knowledge.  
- **SonarQube Integration**: Utilizes SonarQube for thorough test coverage analysis and vulnerability assessments.  
- **React and JavaScript Framework**: Built with popular and efficient technologies for a seamless user experience.  

### Purpose🎯

Quiz-App is a project that combines fun learning with serious development practices. Dive into a world of trivia while ensuring high standards of code quality and security with SonarQube!

- **Test Coverage Analysis**: Utilizes SonarQube to meticulously analyze test coverage, ensuring that all aspects of the app are thoroughly tested for reliability.
- **Vulnerability Assessment**: Identifies potential security vulnerabilities within the app, making it a safe and trustworthy platform for users.
- **Code Quality Monitoring**: Continuously monitors and improves code quality, adhering to best practices in software development.

### Getting Started 🌟

- #### Prerequisites   

Ensure you have npm, node.js and SonarQube installed on your system. If you haven't installed SonarQube head to their official website to download it: https://www.sonarsource.com/products/sonarqube/downloads/

- #### Installation and Setup 

Clone the repository to your local machine.

```bash
git clone https://github.com/jforjay1/quiz-app.git
```

- #### Install dependencies:

```bash
npm install react-scripts
npx install json-server
```
- #### Running the Application  

To Start the app:

```bash
npm start
```

In a separate terminal, start the JSON server:

```bash
npx json-server --watch users.json --port 3003
```

## SonarQube Integration 🛡️

- #### Generating SonarQube Token

1. Navigate to http://localhost:9000.
2. Login and go to Accounts > My Account > Security.
3. Enter a name and generate the SonarQube token.
4. Generating SonarQube Report

- #### Start SonarQube:

```bash
brew services start sonarqube
```

- #### Generate coverage report:

```bash
npm test -- --coverage
```

- #### Generate eslint report:

```bash
npm run eslint
```

- #### Run SonarQube scanner:

```bash
sonar-scanner \
  -Dsonar.projectKey=quiz-app \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=YOUR_SONARQUBE_TOKEN
```

Visit http://localhost:9000 to view the report for your application.

- #### Stopping SonarQube

```bash
brew services stop sonarqube
```

## Contributors 🌍
This project thrives on collaboration and contributions from the community. We are grateful to the following contributors for their invaluable input and dedication:

<a href="https://github.com/jforjay1/quiz-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jforjay1/quiz-app&anon=0" />
</a>

Want to contribute? Feel free to submit a pull request or raise an issue. Let's work together to enhance quiz app's learning potential! Together, we can make the habit of using coding best practices an increase the coloration and readability. 🌟👩‍💻👨‍💻🚀 For any questions or suggestions, don't hesitate to reach out or contribute.
