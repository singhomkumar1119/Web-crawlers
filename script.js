const spider = document.getElementById("spider");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let targetX = x;
let targetY = y;

const speed = 2.2;

document.addEventListener("mousemove", (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
});

function animate() {
  const dx = targetX - x;
  const dy = targetY - y;
  const distance = Math.hypot(dx, dy);

  if (distance > 2) {
    x += (dx / distance) * speed;
    y += (dy / distance) * speed;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    spider.style.transform = `translate(${x - 22}px, ${y - 22}px) rotate(${angle}deg)`;
  }

  requestAnimationFrame(animate);
}

animate();
