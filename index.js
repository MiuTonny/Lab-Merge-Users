require('datejs'); // step 5

function combineUsers(...arrays) {
  const combinedObject = {
    users: [] // 
  };

  for (let arr of arrays) {
    if (Array.isArray(arr)) {
      combinedObject.users.push(...arr); // Merge all arrays
    }
  }

  combinedObject.merge_date = new Date().toString("M/d/yyyy"); // format for Datejs.

  return combinedObject; 
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
