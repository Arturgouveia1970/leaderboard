import './styles.css';
import { addScore, getScore } from './modules/leaderboard.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh-button');

refresh.addEventListener('click', getScore);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = form.names.value;
  const scoreInput = form.marks.value;
  const userscore = { user: `${nameInput}`, score: `${scoreInput}` };

  addScore(userscore).then(() => {
    getScore();
  });
  form.names.value = '';
  form.marks.value = '';
});