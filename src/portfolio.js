import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  homepage: '',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  name: 'MANJIT KAUR',
  role: 'Full stack developer',
  description:
    'A very warm Welcome to my Portfolio. I am a recent graduate from UIET, Panjab University. highly interested in cutting edge technology, web development and problem solving.Here I have shared some of the insights about me. Please feel free to reach out in case any query.',
  resume: 'https://drive.google.com/file/d/1set5Yt9utSaBmn1Qh_1qD3aCtRLP8UG5/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/manjit-kaur-5a34a6223/',
    github: 'https://github.com/Maneet-k',
  },
}

const projects = [
  {
    name: 'OnlyMind',
    description:
      'So basically it was a team project which can help people get appointment with psychologist and psychiatrist so that they can have.',
    stack: ['MongoDb', 'RazorPay', 'ZegoCloud','MERN'],
    sourceCode: 'https://github.com/Maneet-k',
    livePreview: 'https://theonlymind.com/',
  },
  {
    name: 'IoT-Dashboard',
    description:
      'Basically Integration of hardware with the software i.e Arduino and other required sensors data integrated with the database to visualise and monitor the values on User Interface.',
    stack: ['pyserial', 'npm', 'jawsdb','google-sheets','express','nodejs'],
    sourceCode: 'https://github.com/Maneet-k/IoT-Dashboard',
    livePreview: '',
  },
  {
    name: 'TicTacToe',
    description:
      'The UI is designed using CSS so it is easy to create. In the game, Player-1 starts playing the game and both players make their moves in consecutive turns. The player who makes a straight 3-block chain wins the game. This game is built on the front-end using simple logic and validation checks only.',
    stack: ['html-css-javascript'],
    sourceCode: 'https://github.com/Maneet-k/tictactoe',
    livePreview: 'https://maneet-k.github.io/tictactoe/',
  },
  {
    name: 'ToDoList',
    description:
      'ToDoList maintains the general tasks we decide to perform and tract them and clear out the ones that got completed. Still no user authentication. But will add that too. It was a beginner project',
    stack: ['Js', 'ejs', 'Node','MondoDb'],
    sourceCode: 'https://github.com/Maneet-k/todolist',
    
  },
  {
    name: 'Kiwix',
    description:
      'Merged a PR at this open source project. It was a tough task for a beginner but your commitment and strong will can do anything',
    stack: ['html-css-javascript'],
    sourceCode: 'https://github.com/kiwix/kiwix-js',
    livePreview: 'https://kiwix.github.io/kiwix-js/www/index.html',
  },
]

const skills = [
  'HTML',
  'CSS',
  'C++',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Vite',
  'NextJS',
  'Redux',
  'TailwindCSS',
  'Material UI',
  'Git',
  'Github',
  'MERN',
  'Firebase',
  'AWS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manjitkaurk797@gmail.com',
}

export { header, about, projects, skills, contact }
