const generateDurationList = (start, end) => {
  let calculationList = [];

  for (let i = start; i < end; i++) {
    calculationList.push(i);
    calculationList.push(i + 0.5);
  }
  
  return calculationList;
};

export default generateDurationList;