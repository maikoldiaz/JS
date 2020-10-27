// let tic = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(array[i][j] === find){
                
//             }
//         }        
//     }
// }


// let finded = (triqui2(arr,"X") || triqui2(arr,"O"))

// let triqui2 = (arr,find) => {
//     let result = false
//     if(arr[0][0]===find && arr[0][1] ===find && arr[0][2] === find) result =  true
//     if(arr[1][0]===find && arr[1][1] ===find && arr[1][2] === find) result =  true
//     if(arr[2][0]===find && arr[2][1] ===find && arr[2][2] === find) result =  true
//     if(arr[0][0]===find && arr[1][0] ===find && arr[2][0] === find) result =  true
//     if(arr[0][1]===find && arr[1][1] ===find && arr[2][1] === find) result =  true
//     if(arr[0][2]===find && arr[1][2] ===find && arr[2][2] === find) result =  true
//     if(arr[0][0]===find && arr[1][1] ===find && arr[2][2] === find) result =  true
//     if(arr[0][2]===find && arr[1][1] ===find && arr[2][0] === find) result =  true
// }

console.log(sort([6,2,9,7,8,3]))


let sort = (x) => {
    let sorted = [];
    let count = x.length - 1;
    for (let i = 0; i < count; i++) {
        let value = arrayMin(x);
        sorted.push(value);
        x = x.filter(z => z !== value);
    }
    return  sorted;
}


function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
}


function sumarImpares(arr){
    try
    {    
    return arr.filter(e => e % 2==1).reduce((e,i) => e + i)
    }catch{
        return 0
    }
}