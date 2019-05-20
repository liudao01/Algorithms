var srcArray;

function resetValue() {
    srcArray = [9, 6, 11, 3, 5, 12, 8, 7, 10, 15, 14, 4, 1, 13, 2];
    document.getElementById("demo").innerHTML = srcArray;
}

/**
 * 选择排序
 */
function selectSort() {
    console.log("排序前: " + srcArray)
    for (let i = 0; i < srcArray.length - 1; i++) {
        console.log("第" + i + "遍")
        var min = i;
        for (let j = i + 1; j < srcArray.length; j++) {
            let temp = 0;
            if (srcArray[j] < srcArray[min]) {
                min = j;
            }
        }
        swap(srcArray, min, i);
        console.log("排序中 " + srcArray)
    }
    console.log("排序后" + srcArray)
    document.getElementById("demo").innerHTML = srcArray;
}

/**
 * 插入排序
 */
function insterSort() {
    console.log("原始数组: " + srcArray);
    for (let i = 1; i < srcArray.length; i++) {
        console.log("第" + i + "遍")
        for (let j = i; j > 0; j--) {
            if (srcArray[j] < srcArray[j - 1]) {
                console.log("插入中: " + srcArray)
                swap(srcArray, j, j - 1)
            }
        }
    }
    console.log(srcArray);
    document.getElementById("demo").innerHTML = srcArray;
}

/**
 * 希尔排序
 */
function shellSort() {
    console.log("原始数组: " + srcArray);
    // for (var step = Math.floor(srcArray.length / 2); step > 0; step = Math.floor(step / 2)) {
    //     for (let i = step; i < srcArray.length; i++) {
    //         for (let j = i; j > step - 1; j -= step) {
    //             if (srcArray[j] < srcArray[j - step]) {
    //                 swap(srcArray, j, j - step);
    //                 console.log("排序中: " + srcArray);
    //             }
    //         }
    //     }
    // }
    //已间隔为4 排序
    for (var step = 4; step > 0; step = Math.floor(step / 2)) {
        for (let i = step; i < srcArray.length; i++) {
            for (let j = i; j > step - 1; j -= step) {
                if (srcArray[j] < srcArray[j - step]) {
                    swap(srcArray, j, j - step);
                    console.log("排序中: " + srcArray);
                }
            }
        }
    }
    console.log("排序后: " + srcArray);
    document.getElementById("demo").innerHTML = srcArray;
}

/**
 * 交换
 * @param min
 * @param i
 */
function swap(arr, min, i) {
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}
