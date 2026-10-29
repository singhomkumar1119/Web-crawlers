const spider = document.getElementById('spider');
const targets = document.querySelectorAll('.target-line');

function crawlToElement(element) {
  const rect = element.getBoundingClientRect();
  
  // Calculate position relative to the document
  const targetX = rect.left + window.scrollX + (rect.width / 2);
  const targetY = rect.top + window.scrollY - 15; // Sit slightly above the text

  spider.classList.add('moving');
  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;

  setTimeout(() => {
    spider.classList.remove('moving');
  }, 500); // Match CSS transition duration
}

// Example: Cycle through target elements every 2 seconds
let index = 0;
setInterval(() => {
  if (targets.length > 0) {
    crawlToElement(targets[index]);
    index = (index + 1) % targets.length;
  }
}, 2000);
