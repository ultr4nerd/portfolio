import _ from 'lodash';

const randomFacts = [
  'I have been happy with my girlfriend for two years. 👫🏻',
  'I became GitHub Campus Expert in May 2020, during quarantine. 🧬',
  'My first paid job was at a department store. 🏪',
  'My favorite band is Arctic Monkeys. 🐵🐵',
  'I consider myself a melomaniac. 🎶',
  "I'm studying computer science. 👨🏻‍💻",
  'My favorite food are tacos. 🌮',
  'This site is built with Vue. I love it. 💚',
  'I used to have a rock band. I love to sing. 🎤',
  "I'm proudly mexican. 🇲🇽",
  'My favourite programming languages are Python, JavaScript and Elixir. 👨🏻‍💻',
  "I'm technical mentor. I love to teach. 👨🏻‍🏫",
  "I'm using OS X. I love my Macbook, sorry. 🍎",
  'My favorite backend framework is Django. 🤠',
  'My favorite frontend framework is Vue. 👀',
  'My favorite mobile framework is Flutter. 🦜',
  'My preferred cloud framework is Google Cloud Platform. ☁️',
  'I love triangles. ▲',
  'I love hackathons. 👨🏻‍💻',
  "My dog's name is Merckx, is a cute french bulldog. 🐶",
  'I founded a student community at my school named Raccooon, where we give tech workshops. 👽',
  "I've organized a hackathon. 👨🏻‍💻",
  "Currently I'm co-organizer of GDG UNAM. 🍕",
  'My favorite TV series are Breaking Bad, Silicon Valley and How I Met Your Mother. 📺',
  'I mentored in a Django Girls event. 👨‍👧‍👧',
  'My favorite colors are black, blue and pink. 🎨',
  'My favorite videogames are "Legend of Zelda: Breath of the Wild", "Guitar Hero" and "Gears of War". 👾',
];

export default function getRandomFact() {
  return _.shuffle(randomFacts)[0];
}
