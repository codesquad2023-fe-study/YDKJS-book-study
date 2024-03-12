// 두번째 인자가 없으면 두번째 인자를 넘길 수 있도록 하는 함수가 반환!
function range(start, end) {
    // TODO
    const rangeArr = []

    if (start && end){
        for (let i = start; i <= end; i++) rangeArr.push(i)
        
        console.log(rangeArr);
        return;
    }
    else{
        return (newEnd) => {
            range(start, newEnd);
        }
    }

}

range(3, 3);    // [3]
range(3, 8);    // [3,4,5,6,7,8]
range(3, 0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]