const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// CHALLENGE #2:
console.log('\tTask #1');
for (const scoreLoop of game.scored.entries()) {
  console.log(`Goal ${scoreLoop[0] + 1}: ${scoreLoop[1]}`);
}
console.log('\t||');
for (const [nr, player] of game.scored.entries())
  console.log(`Goal ${nr + 1}: ${player}`);

console.log('\tTask #2');
let sum = 0;
for (const [key, value] of Object.entries(game.odds)) {
  sum += value;
}
console.log(`The average odd is: ${(sum / 3).toFixed(2)}`);
console.log('\t||');
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average /= Object.values(game.odds).length;
console.log(`The average odd is: ${average.toFixed(2)}`);

console.log('\tTask #3');
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

console.log(`||`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const gameTime = [...gameEvents.keys()].pop();
console.log(`An event happened, on 
average, every ${gameTime / gameEvents.size} minutes.`);

for (const [min, event] of gameEvents) {
  console.log(
    min <= 45
      ? `[FIRST HALF] ${min}: ${event}`
      : `[SECOND HALF] ${min}: ${event}`
  );
}
