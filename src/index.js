// complete the function
function prime(num) {
  // code goes here
  for (var test = 2; test < num; test++) {
    if (num % test === 0) return false;
  }
  return num > 1;
}

function solution(arg) {
  return prime(arg);
}

if (typeof require !== 'undefined' && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error('Require argument');
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
