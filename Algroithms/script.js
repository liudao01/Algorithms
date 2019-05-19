var srcArray;

function resetValue() {
    srcArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
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
    var step = 4;
    for (let i = step; i < srcArray.length; i++) {
        for (let j = i; j < step - 1; j -= step) {
            swap(srcArray, j, j - step);
        }
    }
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
