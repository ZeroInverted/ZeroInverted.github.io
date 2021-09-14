// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Nmap',
    competency: 5,
    category: ['Cybersecurity'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Nessus',
    competency: 2,
    category: ['Cybersecurity'],
  },
  {
    title: 'Kali Linux',
    competency: 5,
    category: ['Cybersecurity'],
  },
  {
    title: 'Nessus',
    competency: 2,
    category: ['Cybersecurity'],
  },
  {
    title: 'Metasploit',
    competency: 4,
    category: ['Cybersecurity'],
  },
  {
    title: 'Burpsuite',
    competency: 3,
    category: ['Cybersecurity'],
  },
  {
    title: 'Cyrptography & Decryption',
    competency: 5,
    category: ['Cybersecurity'],
  },
  {
    title: 'SQL Injection',
    competency: 5,
    category: ['Cybersecurity'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React-Native',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },  
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },

  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },

  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 3,
    category: ['Data Engineering', 'Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
