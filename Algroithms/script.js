var srcArray;

function resetValue() {
    srcArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
    document.getElementById("demo").innerHTML = srcArray;
}

/**
 * 选择排序
 */
function selectSort() {
    for (let i = 0; i < srcArray.length - 1; i++) {
        var min = i;
        for (let j = i + 1; j < srcArray.length; j++) {
            let temp = 0;
            if (srcArray[j] < srcArray[min]) {
                min = j;
            }
        }
        swap(srcArray, min, i);
    }
    for (let i = 0; i < srcArray.length; i++) {
        console.log(srcArray[i])
    }

    document.getElementById("demo").innerHTML = srcArray;
}

/**
 * 插入排序
 */
function insterSort() {

    for (let i = 0; i < srcArray.length; i++) {

        for (let j = i; j > 0; j--) {
            if (srcArray[j] < srcArray[j - 1]) {
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
function shallSort() {

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
