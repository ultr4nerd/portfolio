import _ from 'lodash';

const combinations = [
  ['blue', 'white'],
  ['blue', 'pink'],
  ['yellow', 'white'],
  ['mint', 'white'],
  ['pink', 'white'],
  ['red', 'white'],
];

export default function getColorCombination() {
  return _.shuffle(combinations, 1)[0];
}
