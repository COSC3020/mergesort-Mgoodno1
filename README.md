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
Worst Case: O(n^2 log n)
The worst case time complexity for Merge Sort is O(n^2 log n). This is because the algorithm divides the array into smaller subarrays, which takes logarithmic time log n. After dividing,
it starts operations to merge the subarrays back together, but because the merging is done in-place. Each merge operation involves the shifting of elements within the array making the merging process take O(n) time. However, due to the quadratic behavior that arises due to the in-place element shifting over multiple steps of merging the typical O(n log n) becomes O(n^2 log n). Since merge sort will always divide the array into subarrays and then merge them in a similar manner, regardless of the input order. The time complexity remains consistent at O(n^2 log n) for all cases, which includes the worst case.

Sources:
Lecture notes
ChatGPT to understand why the worst case is not O(n log n) (Was used to understand why the worst case in not O(n log n) because I was really stuck so I was trying to find something to identify and build off of. ChatGPT actually reassured me that it was O(n log n) which I knew was wrong thanks to the professor. I then compared my reasoning with the results of ChatGPT, there were contradictions which I then built on and eventually got to log(n^2 log n). I can include my reasoning of how I got here if you want, I thought it was unesscary due to the process of comparing with ChatGPT. So all the reasoning is of my own work, just influenced by ChatGPT and made me see where I was going wrong on accident.)

# Plagarism Statement
All exercises must contain the following statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
