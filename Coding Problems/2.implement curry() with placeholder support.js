/**
 *This is a follow-up on 1. implement curry(). please implement curry() which also supports placeholder.
 * Here is an example:
 *
 * const join = (a, b, c) =>  `${a}_${b}_${c}`;
 * const curriedJoin = curry(join);
 * const _ = curry.placeholder
 *
 * curriedJoin(1, 2, 3)              // '1_2_3
 * curriedJoin(_, 2)(1, 3)           // '1_2_3'
 * curriedJoin(_, _, _)(1)(_, 3)(2)  // '1_2_3'
 */
