const _ = require("lodash")

const items = [1,[2,[3,[4,[5]]]]]

const newItems = _.flattenDeep(items)   //Macht alles wieder zu einem Array
console.log(newItems)

