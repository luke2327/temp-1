import Lottie from 'react-lottie-player';
import lottieJson from 'public/animation/notfound_lottie.json';

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 120, height: 120 }}
    />
  );
}
