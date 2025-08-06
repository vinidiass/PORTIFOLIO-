tsParticles.load("particles-js", {
  background: {
    color: "#000000"
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: true
    }
  },
  particles: {
    number: {
      value: 140, // ⬆️ mais partículas
      density: {
        enable: true,
        area: 800
      }
    },
    color: { value: "#a08fff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      animation: { enable: false }
    },
    size: {
      value: { min: 1, max: 2.5 },
      animation: { enable: false }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#a08fff",
      opacity: 0.18,
      width: 0.7
    },
    move: {
      enable: true,
      speed: 0.2, // bem suave
      direction: "none",
      outModes: {
        default: "bounce"
      }
    }
  },
  detectRetina: true
});
