# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Answer:
Worst Case: O(n log n)
The worst case time complexity for Merge Sort is O(n log n). This is because the algorithm divides the array into smaller subarrays, which takes logarithmic time log n. After dividing,
it starts performing linear work O(n) to merge the subarrays back together. Since merge sort will always divide the array into subarrays and then merge them in a similar manner,
regardless of the input order. The time complexity remains consistent at O(n log n) for all cases, which includes the worst case.
