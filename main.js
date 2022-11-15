import Text from "./2.js"

import Schilder from "./Schilder.js"


const t1 = new Text("Hello world")

// console.log(t1.left(4)) 
// console.log(t1.right(6)) 
// console.log(t1.charCount()) 
// console.log(t1.wordCount())
// console.log(t1.countVowel())
// console.log(t1.capitalsCount())
// console.log(t1.append())
// console.log(t1.prepend())


const schilder1 = new Schilder("Peter", "Rubens", "Barok", [] )


schilder1.addPainting("Het oordeel van Paris", "144x197x", 3000000)

console.log(schilder1)