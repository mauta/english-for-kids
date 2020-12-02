export default function filterData(data, words) {
  const result = [];
  let dataValue = [];
  for (let i = 0; i < data.length; i += 1) {
    dataValue.push(data[i].data);
  }
  dataValue = dataValue.flat();
  words.forEach((el) => {
    for (let i = 0; i < dataValue.length; i += 1) {
      if (dataValue[i].enWord === el) {
        result.push(dataValue[i]);
      }
    }
  });
  return result;
};
