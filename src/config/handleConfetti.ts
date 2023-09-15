import confetti from 'canvas-confetti';

export const handleConfetti = () => {
  confetti({
    origin: {
      x: 0.3,
      y: 0.9,
    },
  });
  confetti({
    origin: {
      y: 0.9,
    },
  });
  confetti({
    origin: {
      x: 0.7,
      y: 0.9,
    },
  });
};
