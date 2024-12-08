function mergesort(array) {
    if (array.length <= 1) return array;

    for (let size = 1; size < array.length; size *= 2) {
        for (let start = 0; start < array.length; start += 2 * size) {
            const mid = Math.min(start + size, array.length);
            const end = Math.min(start + 2 * size, array.length);
            merge(array, start, mid, end);
        }
    }
    return array;
}

function merge(array, start, mid, end) {
    let left = start;
    let right = mid;
    
    while (left < right && right < end) {
        if (array[left] <= array[right]) {
            left++;
        } else {
            let temp = array[right];
            for (let i = right; i > left; i--) {
                array[i] = array[i - 1];
            }
            array[left] = temp;
            left++;
            right++;
        }
    }
}
