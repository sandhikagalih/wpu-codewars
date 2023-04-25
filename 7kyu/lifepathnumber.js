/**
 * @param {number | string} [yearOrMonthOrDate]
 */
function calculateLifePath(yearOrMonthOrDate) {
  let temp;
  const splittedStrings = yearOrMonthOrDate.toString().split('');

  if (splittedStrings.length > 1) {
    temp = splittedStrings
      .map((char) => parseInt(char, 10))
      .reduce((acc, value) => acc + value);

    if (temp.toString().length > 1) {
      return calculateLifePath(temp.toString());
    }
  }

  return temp || yearOrMonthOrDate;
}

/**
 * Calculate a life path number from the date format 'yyyy-mm-dd'
 *
 * @param {string} dateOfBirth date of birth, in 'yyyy-mm-dd'
 * @returns {number}
 */
function lifePathNumber(dateOfBirth) {
  const [year, month, date] = dateOfBirth.split('-');

  return calculateLifePath(
    calculateLifePath(year) + calculateLifePath(month) + calculateLifePath(date)
  );
}
// 1956-01-31
console.log(lifePathNumber('1956-01-31'));
