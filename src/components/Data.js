  const data = [
    {
      id: 1,
      question: "What is the correct command to create a new React project?",
      answers: [
        {
          text: "npx create-react-app myReactApp",
          correct: true,
        },
        {
          text: " npm create-react-app",
          correct: false,
        },
        {
          text: " npm create-react-app myReactApp",
          correct: false,
        },
        {
          text: "npm create",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What command is used to start the React local development server?",
      answers: [
        {
          text: "npm run dev",
          correct: false,
        },
        {
          text: "npm start",
          correct: true,
        },
        {
          text: "npm build",
          correct: false,
        },
        {
          text: "npm serve",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "A copy of the 'real' DOM that is kept in memory is called what?",
      answers: [
        {
          text: "shadow DOM",
          correct: false,
        },
        {
          text: "DOM",
          correct: false,
        },
        {
          text: "React DOM",
          correct: false,
        },
        {
          text: "Virtual DOM",
          correct: true,
        },
      ],
    },
    {
        id: 4,
        question: "What does myReactApp refer to in the following command?",
        answers: [
          {
            text: "The type of app to create",
            correct: false,
          },
          {
            text: "The name you want to use for the new app ",
            correct: true,
          },
          {
            text: "The name you want to use for the new app ",
            correct: false,
          },
          {
            text: "The directory to create the new app in",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "To develop and run React code, Node.js is required.",
        answers: [
       
          {
            text: "False",
            correct: false,
          },
          {
            text: "True",
            correct: true,
          },
        ],
      },
      {
        id: 6,
        question: "Which operator can be used to conditionally render a React component?",
        answers: [
          {
            text: "&&",
            correct: true,
          },
          {
            text: "::",
            correct: false,
          },
          {
            text: "||",
            correct: false,
          },
          {
            text: "??",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "A copy of the 'real' DOM that is kept in memory is called what?",
        answers: [
          {
            text: "shadow DOM",
            correct: false,
          },
          {
            text: "DOM",
            correct: false,
          },
          {
            text: "React DOM",
            correct: false,
          },
          {
            text: "Virtual DOM",
            correct: true,
          },
        ],
      },
      {
        id: 7,
        question: "What tool does React use to compile JSX?",
        answers: [
          {
            text: "Babel",
            correct: true,
          },
          {
            text: "React compiler",
            correct: false,
          },
          {
            text: "React DOM",
            correct: false,
          },
          {
            text: "JSX compiler",
            correct: false,
          },
        ],
      },
      {
        id: 8,
        question: "How can you combine the following arrays using the spread operator?",
        answers: [
          {
            text: "const combined = [array1, array2];",
            correct: false,
          },
          {
            text: "const combined = array1 + array2;",
            correct: false,
          },
          {
            text: "const combined = ...array1 + ...array2;",
            correct: false,
          },
          {
            text: "const combined = ...array1 + ...array2;",
            correct: true,
          },
        ],
      },
      {
        id: 9,
        question: "What is the correct syntax to import a Component from React?",
        answers: [
          {
            text: "import React.Component from 'react'",
            correct: false,
          },
          {
            text: "import React.Component from 'react",
            correct: true,
          },
          {
            text: "import React.Component from 'react",
            correct: false,
          },
          {
            text: "import React.Component from 'react",
            correct: false,
          },
        ],
      },
      {
        id: 10,
        question: "Which of the following is NOT a rule for React Hooks?",
        answers: [
          {
            text: "Hooks can be called in Class or Function components  ",
            correct: true,
          },
          {
            text: "Hooks can only be called at the top level of a component",
            correct: false,
          },
          {
            text: "Hooks can only be called inside React Function components",
            correct: false,
          },
          {
            text: "Hooks cannot be conditional",
            correct: false,
          },
        ],
      },
  ];



  export default data;