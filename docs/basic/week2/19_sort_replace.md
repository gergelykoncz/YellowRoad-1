var arr = [55,9,5,3,1];
for (var i = 0; i < arr.length-1; i++) {
    console.log(arr[i]);
    for (var j = i+1; j < arr.length; j++) {
        console.log(arr[i]+' > '+arr[j]);
        if (arr[i] > arr[j]) {
            var temp = [arr[i], arr[j]];
            arr[i] = temp[1];
            arr[j] = temp[0];
        }
    }
}
console.log(arr);