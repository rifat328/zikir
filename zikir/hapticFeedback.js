export const triggerHaptic = () => {
  // Check if the browser/device supports vibration
  if (window !== undefined && window.navigator.vibrate) {
    window.navigator.vibrate(10); //10ms of crisp tick.
  }
};
