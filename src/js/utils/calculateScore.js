const calculateScore = (duration_in_bed, duration_asleep) => {
  // TODO: handle irrealistic scores, like 4 hrs in bed, 11 hrs sleep
  return Math.floor(100 * (duration_asleep / duration_in_bed));
};

export default calculateScore;