
export function initAIParticles(container) {
  if (!container) return () => {};

  const canvas = container.querySelector(".ai-particles");
  if (!canvas) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const PARTICLE_COLOR = { r: 150, g: 20, b: 55 };
  const CONNECTION_DISTANCE = 115;
  const PARTICLE_SIZE_MIN = 0.8;
  const PARTICLE_SIZE_MAX = 2.1;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrame = 0;
  let isVisible = false;
  let isRunning = false;
  let lastTime = 0;
  let destroyed = false;

  const random = (min, max) =>
    Math.random() * (max - min) + min;

  function createParticle() {
    return {
      x: random(0, width),
      y: random(0, height),
      vx: random(-0.18, 0.18),
      vy: random(-0.2, 0.2),
      radius: random(PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX),
      alpha: random(0.2, 0.75),
      phase: random(0, Math.PI * 2),
      twinkleSpeed: random(0.0005, 0.0015),
    };
  }

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width;
    height = rect.height;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Около одной частицы на каждые 8500 пикселей площади.
    const count = Math.min(
      110,
      Math.max(24, Math.floor((width * height) / 8500))
    );

    particles = Array.from(
      { length: count },
      createParticle
    );
  }

  function drawParticle(particle, time) {
    const twinkle =
      0.65 +
      0.35 *
        Math.sin(time * particle.twinkleSpeed + particle.phase);

    const alpha = particle.alpha * twinkle;
    const { r, g, b } = PARTICLE_COLOR;

    // Мягкое свечение вокруг частицы.
    ctx.beginPath();
    ctx.arc(
      particle.x,
      particle.y,
      particle.radius * 4,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.12})`;
    ctx.fill();

    // Сама частица.
    ctx.beginPath();
    ctx.arc(
      particle.x,
      particle.y,
      particle.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.fill();
  }

  function drawConnections() {
    const { r, g, b } = PARTICLE_COLOR;
    const maxDistanceSquared =
      CONNECTION_DISTANCE * CONNECTION_DISTANCE;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const bParticle = particles[j];

        const dx = a.x - bParticle.x;
        const dy = a.y - bParticle.y;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared > maxDistanceSquared) continue;

        const distance = Math.sqrt(distanceSquared);
        const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.13;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(bParticle.x, bParticle.y);

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  }

  function updateParticles(delta) {
    const speed = delta / 16.67;

    for (const particle of particles) {
      particle.x += particle.vx * speed;
      particle.y += particle.vy * speed;

      // Возвращаем частицы с противоположной стороны.
      if (particle.x < -5) particle.x = width + 5;
      if (particle.x > width + 5) particle.x = -5;

      if (particle.y < -5) particle.y = height + 5;
      if (particle.y > height + 5) particle.y = -5;
    }
  }

  function render(time) {
    if (destroyed || !isVisible || reducedMotion.matches) {
      stop();
      return;
    }

    const delta = lastTime
      ? Math.min(time - lastTime, 40)
      : 16.67;

    lastTime = time;

    ctx.clearRect(0, 0, width, height);

    updateParticles(delta);
    drawConnections();

    for (const particle of particles) {
      drawParticle(particle, time);
    }

    animationFrame = requestAnimationFrame(render);
  }

  function start() {
    if (
      destroyed ||
      isRunning ||
      !isVisible ||
      reducedMotion.matches
    ) {
      return;
    }

    isRunning = true;
    lastTime = 0;
    animationFrame = requestAnimationFrame(render);
  }

  function stop() {
    if (isRunning) {
      cancelAnimationFrame(animationFrame);
      isRunning = false;
    }
  }

  function handleMotionPreference() {
    if (reducedMotion.matches) {
      stop();
      ctx.clearRect(0, 0, width, height);
    } else {
      start();
    }
  }

  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;

    if (isVisible) {
      start();
    } else {
      stop();
    }
  });

  observer.observe(container);

  const resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(container);

  reducedMotion.addEventListener("change", handleMotionPreference);

  resizeCanvas();

  function destroy() {
    destroyed = true;
    stop();
    observer.disconnect();
    resizeObserver.disconnect();
    reducedMotion.removeEventListener(
      "change",
      handleMotionPreference
    );
    ctx.clearRect(0, 0, width, height);
  }

  return destroy;
}
