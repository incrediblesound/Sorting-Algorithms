var heapSort = require('./src/heapSort').heapSort;
var mergeSort = require('./src/mergeSort').simpleMergeSort;
var insertionSort = require('./src/insertionSort').insertionSort;
var sleepSort = require('./src/sleepSort').sleepSort;
var radixSort = require('./src/radixSort').binaryRadixSort;
var bogoSort = require('./src/bogoSort').bogoSort;
var cocktailSort = require('./src/cocktailSort').cocktailSort;
var quickSort = require('./src/quickSort').quickSort;
var bubbleSort = require('./src/bubbleSort').bubbleSort;

module.exports = {

heapSort  : heapSort,
mergeSort : mergeSort,
insertionSort : insertionSort,
sleepSort : sleepSort,
radixSort : radixSort,
bogoSort  : bogoSort,
cocktailSort : cocktailSort,
quickSort : quickSort,
bubbleSort: bubbleSort

}
