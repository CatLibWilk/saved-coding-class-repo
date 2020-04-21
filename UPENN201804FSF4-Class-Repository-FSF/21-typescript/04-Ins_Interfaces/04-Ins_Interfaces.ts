function printLabel(labelObj: { label: string } ) {
    console.log(labelObj.label)
}

console.log('--------------------------------------------------------------------------------');
console.log('Calling printLabel, checking against the object shape provided (duck typing)');
console.log('--------------------------------------------------------------------------------');  
const label = { size: 10, label: "Size 10 Object" };
printLabel(label);
console.log('\n');


interface SizeInfo {
    size: number
}

function printShoeSize(sizeObj: SizeInfo ) {
    console.log("Shoe Size is " + sizeObj.size)
}

console.log('--------------------------------------------------------------------------------');
console.log('Calling printShoeSize, checking against the interface type provided (duck typing)');
console.log('--------------------------------------------------------------------------------');  
const shoe = { brand: "Nike", model: "Jordan", size: 12 };
printShoeSize(shoe);
console.log('\n');
