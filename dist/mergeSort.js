"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function mergeSort(collection1, collection2) {
    const mergedCollection = [];
    let col1Index = 0;
    let col2Index = 0;
    while (col1Index < collection1.length && col2Index < collection2.length) {
        if (collection1[col1Index] < collection2[col2Index]) {
            mergedCollection.push(collection1[col1Index]);
            col1Index++;
        }
        else {
            mergedCollection.push(collection2[col2Index]);
            col2Index++;
        }
    }
    while (col1Index < collection1.length) {
        mergedCollection.push(collection1[col1Index]);
        col1Index++;
    }
    while (col2Index < collection2.length) {
        mergedCollection.push(collection2[col2Index]);
        col2Index++;
    }
    return mergedCollection;
}
exports.mergeSort = mergeSort;
