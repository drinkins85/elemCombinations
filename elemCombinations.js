/**
 * Выбирает из массива все комбинации чисел, сумма которых равна 10
 * @param {Array} arr
 * @param {Number} [sum=10]
 * @returns {Array}
 */
function arrayElementsCombinationBySum(arr, sum = 10) {
    let combinations = [];
    // Сортироуем по возрастанию
    arr.sort(function (a,b) {
        return a-b;
    });
    for (let i=0; i<arr.length; i++){
        let item = arr[i];
        if (item > sum){
            break; //Так как массив отсортирован, двигаться дальше нет смысла
        }
        if (item === sum){
            combinations.push([item]);
            continue;
        }
        let res = [];
        // рекурсивно вызываем функцию
        res = arrayElementsCombinationBySum(arr.slice(i+1), sum-item);
        if (res.length === 0){
            continue;
        }
        for( let j=0; j<res.length; j++ )
        {
            combinations.push([item, ...res[j]]);
        }
    }
    return combinations;
}


