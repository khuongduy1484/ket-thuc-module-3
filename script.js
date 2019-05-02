function tryRemoverFromArray(arr,a) {
    for (let  i = 0;i<arr.length;i++) {
        if (a==i) {
            arr.splice(a,1);
        }else {
            arr.splice(a,0);
        }
    };document.write(arr);
}
let b = [1,2,3];
tryRemoverFromArray(b,1);