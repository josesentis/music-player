const shuffle = a => {
  let temp = a.slice();
  for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
};

const convertTime = timestamp => {
  let minutes = Math.floor(timestamp / 60);
  let seconds = timestamp - (minutes * 60);

  if (seconds < 10) seconds = '0' + seconds;
  timestamp = minutes + ':' + seconds;

  return timestamp;
};

export { shuffle, convertTime };
