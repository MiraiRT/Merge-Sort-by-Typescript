"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mergeSort_1 = require("./mergeSort");
describe('mergeSort', () => {
    it('should merge two sorted collections', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const expected = [1, 2, 3, 4, 5, 6];
        const result = (0, mergeSort_1.mergeSort)(collection1, collection2);
        (0, chai_1.expect)(result).to.deep.equal(expected);
    });
    it('should merge two sorted collections with repeated elements', () => {
        const collection1 = [1, 3, 3, 5];
        const collection2 = [2, 3, 4, 6];
        const expected = [1, 2, 3, 3, 3, 4, 5, 6];
        const result = (0, mergeSort_1.mergeSort)(collection1, collection2);
        (0, chai_1.expect)(result).to.deep.equal(expected);
    });
    it('should merge two empty collections', () => {
        const collection1 = [];
        const collection2 = [];
        const expected = [];
        const result = (0, mergeSort_1.mergeSort)(collection1, collection2);
        (0, chai_1.expect)(result).to.deep.equal(expected);
    });
    it('should merge an empty collection with a non-empty collection', () => {
        const collection1 = [];
        const collection2 = [2, 4, 6];
        const expected = [2, 4, 6];
        const result = (0, mergeSort_1.mergeSort)(collection1, collection2);
        (0, chai_1.expect)(result).to.deep.equal(expected);
    });
    it('should merge a non-empty collection with an empty collection', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [];
        const expected = [1, 3, 5];
        const result = (0, mergeSort_1.mergeSort)(collection1, collection2);
        (0, chai_1.expect)(result).to.deep.equal(expected);
    });
});
