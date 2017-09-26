module.exports = function check(str, bracketsConfig) {
	let i = 0;
	let resultArray = [];
	let arrayBrackets = str.slice('');
	
	while (i < arrayBrackets.length) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if ((resultArray[resultArray.length - 1] === bracketsConfig[j][0]) 
				&& (arrayBrackets[i] === bracketsConfig[j][1])) {
				resultArray.pop();
			} else if (arrayBrackets[i] === bracketsConfig[j][0]) {
				resultArray.push(arrayBrackets[i]);
			}
		}
		i++;
	}

	if (resultArray.length === 0) {
		return true;
    } else {
    	return false;
    }
}
