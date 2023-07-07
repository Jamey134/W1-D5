/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {

    let output= []

    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            output.push(left[leftIndex])
            leftIndex++
        } else {
            output.push(right[rightIndex])
            rightIndex++
        }
    }

    while (rightIndex < right.length) {
        output.push(right[rightIndex])
        rightIndex++
    }

    while (leftIndex < left.length) {
        output.push(left[leftIndex])
        leftIndex++
    }
    return output

}
/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(numbers = []) {

    if (numbers.length === 1){
        return numbers
    }

    const middleIdx = Math.floor(numbers.length/2)

    const left = numbers.slice(0,middleIdx)
    const right = numbers.slice(middleIdx)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}


console.log(mergeSort(numbersRandomOrder))