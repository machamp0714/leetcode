/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  let [ss, array] = convertToRomanArray(spacialConverter(), s);
  [ss, array] = convertToRomanArray(basicConverter(), ss, array);
  return array.reduce((pre, cur) => pre + cur, 0);
};

function convertToRomanArray(converter: object, s: string, a: number[] = []): [string, number[]] {
  let dup = s;
  while (includesKey(converter, dup)) {
    for (const [key, value] of Object.entries(converter)) {
      if (dup.includes(key)) {
        a.push(value);
        dup = dup.replace(key, '');
      }
    }
  }
  return [dup, a];
}

function includesKey(converter: object, s: string) {
  return Object.keys(converter).some(key => s.includes(key));
}

function basicConverter() {
  return {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
}

function spacialConverter() {
  return {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
}
// @lc code=end
romanToInt('I');
romanToInt('IV');
romanToInt('V');
romanToInt('IX');
romanToInt('X');
romanToInt('XL');
romanToInt('XLIX');
romanToInt('CDXCIX');
romanToInt('L');
romanToInt('XC');
romanToInt('C');
romanToInt('CD');
romanToInt('D');
romanToInt('CM');
romanToInt('CMXCIX');
romanToInt('M');
romanToInt('MMMCMXCIX');
// 1 = I
// 4 = IV
// 5 = V
// 9 = IX
// 10 = X
// 40 = XL
// 49 = XLIX
// 50 = L
// 90 = XC
// 100 = C
// 400 = CD
// 499 = CDXCIX
// 500 = D
// 900 = CM
// 999 = CMXCIX
// 1000 = M
// 1001 = MI
// 3999 = MMMCMXCIX = ['MMM', 'CM', 'XC', 'IX'] = [3000, 900, 90, 9] = 3999
