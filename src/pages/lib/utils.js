/* eslint-disable no-useless-escape */
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const toKebabCase = (string) => {
  return string.replace(/[\s_/]+/g, '-').toLowerCase();
};

export const toSnakeCase = (string) => {
  return string.replace(/[\s_/]+/g, '_').toLowerCase();
};

/**
 * Returns an object containing key/value pairs from the `obj` object for each key specified in the `keys` array.
 *
 * @param {Object} obj - An object to pick the key/value pairs from.
 * @param {Array.<string>} keys - An array of keys to pick from the `obj` object.
 * @returns {Object} An object containing the selected key/value pairs from the `obj` object.
 *
 * @example
 * const obj = {
 *   name: "John",
 *   age: 30,
 *   gender: "male",
 *   occupation: "developer",
 * };
 * const keys = ["name", "age", "occupation"];
 * const result = pick(obj, keys);
 * console.log(result); // { name: "John", age: 30, occupation: "developer" }
 */
export const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
/**
 * Serialize an object into a query string format.
 * @function
 * @param {Object} obj - The object to be serialized.
 * @returns {string} - The serialized query string.
 * @example
 *    serialize({ param1: "value1", param2: "value2" });
 *    // returns "param1=value1&param2=value2"
 */
export const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (Object.keys(obj).includes(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

/**
 * Returns a string with the first letter capitalized.
 * @function
 * @param {string} string - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Formats a string in the format "8175698900" or "817-569-8900" to "+1 (817) 569-8900".
 *
 * @param {string} str - The string to format.
 * @returns {string} The formatted string.
 *
 * @example
 * const str1 = "8175698900";
 * const str2 = "817-569-8900";
 *
 * const result1 = formatPhoneNumber(str1);
 * const result2 = formatPhoneNumber(str2);
 *
 * console.log(result1); // "+1 (817) 569-8900"
 * console.log(result2); // "+1 (817) 569-8900"
 */
export const formatPhoneNumber = (str) => {
  // Remove any non-numeric characters from the string
  const numericStr = str.replace(/\D/g, '');

  // Extract the area code, first three digits, and last four digits of the phone number
  const areaCode = numericStr.slice(0, 3);
  const firstPart = numericStr.slice(3, 6);
  const secondPart = numericStr.slice(6);

  return `+1 (${areaCode}) ${firstPart}-${secondPart}`;
};

/**
 * Removes key/value pairs from an object when the value is an empty string or undefined.
 *
 * @param {Object} obj - The object to remove key/value pairs from.
 * @returns {Object} A new object with the non-empty/non-undefined key/value pairs.
 */
export const removeEmptyValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      // eslint-disable-next-line no-unused-vars
      ([key, value]) => value !== '' && value !== undefined
    )
  );
};

/**
 * Parameterizes a string for use in a slug or permalink.
 *
 * @param {string} str - The string to parameterize.
 * @returns {string} The parameterized string.
 */
export const parameterize = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word and non-space characters
    .replace(/[\s]+/g, '-') // Replace spaces with dashes
    .replace(/[\-]+/g, '-'); // Replace consecutive dashes with a single dash
};

export const camelToTitleCase = (str) => {
  // insert a space before all caps and hyphens
  str = str.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ');
  // capitalize each word
  str = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return str;
};
