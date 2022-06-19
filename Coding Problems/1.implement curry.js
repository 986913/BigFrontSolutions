/**
 * Currying is a useful technique used in JavaScript applications.
 * Please implement a curry() function, which accepts a function and return a curried one.
 *
 * Here is an example:
 * const join = (a, b, c) =>  `${a}_${b}_${c}`;
 * const curriedJoin = curry(join)
 * curriedJoin(1, 2, 3) // '1_2_3
 * curriedJoin(1)(2, 3) // '1_2_3'
 * curriedJoin(1, 2)(3) // '1_2_3'
 */

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

function curry(fn) {
  return function inner(...args) {
    //1. if enough args, call func (fn.length is the len of parameters)
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      //2. if not enough args, bind the args and wait for new one
      return inner.bind(this, ...args);
    }
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
