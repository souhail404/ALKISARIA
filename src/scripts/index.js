const banners = document.querySelectorAll('.hero-banner');
const timeInterval  = 10000;
setTimeout(moveRight , timeInterval)
function moveRight(){
    banners.forEach(banner => {
        banner.style.transform = "translateX(-100%)";
    });
    setTimeout(moveLeft, timeInterval);
};
function moveLeft(){
    banners.forEach(banner => {
        banner.style.transform = "translateX(0%)";
    });
    setTimeout(moveRight, timeInterval);
};



// Set the date 2 days from now
const endDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

// Update the timer every second
setInterval(() => {
  // Get the time difference between the current date and the end date
  const timeDiff = endDate - new Date();

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

  // Display the remaining time in the HTML
  document.getElementById("days").textContent = `${days} Day`;
  document.getElementById("hours").textContent = `${hours} Hrs`;
  document.getElementById("minutes").textContent = `${minutes} Min`;
  document.getElementById("seconds").textContent = `${seconds} Sec`;
}, 1000);


