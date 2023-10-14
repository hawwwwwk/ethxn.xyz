function updateTimer() {
  // create a new date object with '2005-05-25' in the PST timezone
  const birthDate = new Date('2005-05-25T00:00:00-07:00');
  const currentDate = new Date();

  let timeDifference = currentDate - birthDate;

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  timeDifference -= years * (1000 * 60 * 60 * 24 * 365.25);
  document.getElementById('years').textContent = `${years} years`;

  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
  timeDifference -= months * (1000 * 60 * 60 * 24 * 30.44);
  document.getElementById('months').textContent = `${months} months`;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  timeDifference -= days * (1000 * 60 * 60 * 24);
  document.getElementById('days').textContent = `${days} days`;

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  timeDifference -= hours * (1000 * 60 * 60);
  document.getElementById('hours').textContent = `${hours} hours`;

  const minutes = Math.floor(timeDifference / (1000 * 60));
  timeDifference -= minutes * (1000 * 60);
  document.getElementById('minutes').textContent = `${minutes} minutes`;

  const seconds = Math.floor(timeDifference / 1000);
  document.getElementById('seconds').textContent = `${seconds} seconds`;
}

// just to make sure the timer is up to date when the page loads
updateTimer();

setInterval(updateTimer, 1000);
