//Omgosh, a gif from my generation on this lab page. It's *Darling*

var recipes = {
  milk: "one cup",
  chocolate: "two squares",
  vanilla: "1/2 teaspoon",
  flour: "two cups"
}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, (object[key]=value))
}
