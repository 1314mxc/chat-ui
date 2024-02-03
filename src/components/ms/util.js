
let cache_ms = [];

export function setListArr(arr) {
    cache_ms = arr;
    for (let i = 0; i < cache_ms.length; i++) {
        if (i < cache_ms.length - 1 && cache_ms[i].id === cache_ms[i + 1].id) {
            cache_ms[i].hidden = true;
        }
    }
    cache_ms = processArray(cache_ms)
    return cache_ms
}

export function addListItem(item, list) {
    cache_ms = list;
    cache_ms.push(item)
    if (cache_ms[cache_ms.length - 1].id === item.id) {
        cache_ms[cache_ms.length - 1].hidden = true
    }
    cache_ms = processArray(cache_ms)
    return cache_ms
}

function processArray(arr) {
    const result = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const previous = arr[i - 1];
        const next = arr[i + 1];

        // Check if the current element has the same 'id' as the next element
        if (next && current.id === next.id) {
            // Check if the current element has the same 'id' as the previous element
            if (previous && current.id === previous.id) {
                // Middle element
                current.middle = true;
            } else {
                // First element
                current.first = true;
            }
        } else if (previous && current.id === previous.id) {
            // Last element
            current.last = true;
        }

        // Push the processed element to the result array
        result.push(current);
    }

    return result;
}