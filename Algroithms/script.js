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
            console.log("第step"+step+"排序中: " + srcArray);
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
 * 递归调用
 */
function f(n) {
    console.log(n);
    if(n<1)return-1;
    if(n==1)return 1;
    return n + f(n - 1);
}
/**
 * 归并排序
 */
function mergeSort() {
    var arr = [1,4,7,8,3,6,9];
    let temp = new Array();
    let mid = Math.floor(arr.length/2);
    console.log("中间: "+mid)
    merge(arr, 0,mid, arr.length,temp);
}

function merge(arr, left,mid, right, temp) {
    let i = left;//左序列指针
    let j = mid+1;//右序列指针
    let k = 0;//临时数组指针

    while (i<=mid && j<=right){
        console.log("数组排序中: "+temp);
        if(arr[i]<=arr[j]){
            temp[k] = arr[i];
            i++;
            k++;
        }else {
            temp[k] = arr[j];
            j++;
            k++;
        }
    }
    //左边有遗留
    while(i<=mid){//将左边剩余元素填充进temp中
        temp[k++] = arr[i++];
    }
    //右边有剩下
    while(j<=right){//将右序列剩余元素填充进temp中
        temp[k++] = arr[j++];
    }
    k = 0;
    //将temp中的元素全部拷贝到原数组中
    console.log("数组 "+temp);
    // while(left <= right){
    //     arr[left++] = temp[k++];
    // }
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
