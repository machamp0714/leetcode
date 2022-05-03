/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const converter: { [key: string]: number } = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const tokens = Object.keys(converter);

function romanToInt(s: string): number {
  function next(): string {
    for (const token of tokens) {
      if (s.startsWith(token)) {
        s = s.replace(token, '');
        return token;
      }
    }

    throw new Error(`Unknown token: ${s}`);
  }

  let chars: string[] = [];

  while (s.length) { chars.push(next()) }

  return chars.reduce((sum, char) => {
    return sum += converter[char]
  }, 0);
}

function convertToRomanArray(
  converter: object,
  s: string,
  a: number[] = []
): [string, number[]] {
  let dup = s;
  while (includesKey(converter, dup)) {
    for (const [key, value] of Object.entries(converter)) {
      if (dup.includes(key)) {
        a.push(value);
        dup = dup.replace(key, "");
      }
    }
  }
  return [dup, a];
}

function includesKey(converter: object, s: string) {
  return Object.keys(converter).some((key) => s.includes(key));
}

// @lc code=end
romanToInt("I");
romanToInt("IV");
romanToInt("V");
romanToInt("IX");
romanToInt("X");
romanToInt("XL");
romanToInt("XLIX");
romanToInt("CDXCIX");
romanToInt("L");
romanToInt("XC");
romanToInt("C");
romanToInt("CD");
romanToInt("D");
romanToInt("CM");
romanToInt("CMXCIX");
romanToInt("M");
romanToInt("MMMCMXCIX");
