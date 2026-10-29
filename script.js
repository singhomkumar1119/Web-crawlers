const spider = document.getElementById('crawler-spider');
const nodes = document.querySelectorAll('.target-node');
let currentNodeIndex = 0;
let lastX = window.innerWidth / 2;
let lastY = 100;

function executeCrawlIteration() {
  if (nodes.length === 0 || !spider) return;

  const currentTarget = nodes[currentNodeIndex];
  const rect = currentTarget.getBoundingClientRect();

  // Pick a realistic bounding coordinate inside the target text element
  const destinationX = rect.left + window.scrollX + (rect.width * 0.2);
  const destinationY = rect.top + window.scrollY + (rect.height / 2) - 25;

  // Calculate direction angle to turn the spider body towards the text node
  const deltaX = destinationX - lastX;
  const deltaY = destinationY - lastY;
  const angleDegrees = (Math.atan2(deltaY, deltaX) * 180 / Math.PI) - 90;

  // Apply walking animations and translation metrics
  spider.style.transform = `rotate(${angleDegrees}deg)`;
  spider.classList.add('walking');
  
  spider.style.left = `${destinationX}px`;
  spider.style.top = `${destinationY}px`;

  // Retain positional history matrix
  lastX = destinationX;
  lastY = destinationY;

  // Halt step rotations when destination interpolation completes
  setTimeout(() => {
    spider.classList.remove('walking');
  }, 1200);

  // Queue next index path traversal sequence
  currentNodeIndex = (currentNodeIndex + 1) % nodes.length;
}

// Initial engine activation sequence
window.addEventListener('load', () => {
  // Seat spider instantly on layout initialization frame
  if(nodes.length > 0) {
    const startRect = nodes[0].getBoundingClientRect();
    lastX = startRect.left + window.scrollX + 20;
    lastY = startRect.top + window.scrollY - 30;
    spider.style.left = `${lastX}px`;
    spider.style.top = `${lastY}px`;
  }
  
  // Begin the continuous traversal loop
  setInterval(executeCrawlIteration, 3000);
});
