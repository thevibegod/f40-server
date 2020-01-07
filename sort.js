function convertDate(timestamp){
  let dateObj = new Date();
  dateObj.setDate(timestamp.slice(0,2));
  dateObj.setMonth(parseInt(timestamp.slice(3,5))-1);
  dateObj.setFullYear(timestamp.slice(6,10));
  dateObj.setHours(timestamp.slice(11,13));
  dateObj.setMinutes(timestamp.slice(14,16));
  dateObj.setSeconds(timestamp.slice(17,19));
  return dateObj;
}

function compare(a, b) {
  const dateA = convertDate(a.uploadTime);
  const dateB = convertDate(b.uploadTime);
	const val = dateA - dateB;
  let comparison = 0;
  if (val < 0) {
    comparison = 1;
  } else if (val > 0) {
    comparison = -1;
  }
  return comparison;
}

const sortArray =(arr)=>{
    arr.sort(compare);
}


module.exports = sortArray;
