let array = []

const search_num = document.getElementById('search_num')
const find_num = document.getElementById('find_num')
const check = document.getElementById('check')

const algorithm = document.getElementById('selected_algorithm')
const amount = document.getElementById('num_of_values')
const repeats = document.getElementById('repeat_values')
const start = document.getElementById('button')
const btn_download = document.getElementById('btn_download')
const save_result = document.getElementById('save_file')
const load_result = document.getElementById('load_result')

let result_exec = document.getElementById('result')
let result_exec2 = document.getElementById('result2')
let info = document.getElementById('machine_info')
let min = document.getElementById('min')
let max = document.getElementById('max')

let counter;
let min_time;
let max_time;
let time_array;

function fillArray(amount){
    const array = []
    for(let i = 0; i < amount; i++){
        array.push(Math.floor(Math.random()*1000))
        
    }
    return array
}


start.addEventListener("click",()=>{
    
    time_array = []
    min_time = 0
    let avg_time = 0
    max_time = 0
    counter = 0
    result_exec.innerHTML = ""
    result_exec2.innerHTML = ""
    info.innerHTML = ""
    load_result.style.visibility = "hidden"
    save_result.style.visibility = "hidden"
    if(algorithm && algorithm.value){
        switch(algorithm.value){
            case "bubble_sort" : {
                array = []
                for(let i = 0; i < parseInt(repeats.value); i++){
                    console.log(`Программа запустилась с массивом размера : ${amount}`)
                    console.log(`Программа будет в цикле ${repeats.value - i + 1} повторов`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    console.log(start_time)
                    bubbleSort(array)
                    let end_time = Date.now()
                    console.log(end_time)
                    amount_of_time = end_time - start_time
                    console.log(amount_of_time)
                    if(i >= 0){
                         time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length-1]} мс.</div>`
                for(let i = 0; i < time_array.length; i++){
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : ${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Кол-во операций : ${counter}`

                if(result_exec.innerHTML.length > 1){
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click",() => {
                        download(array, "Назови меня пожалуйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
            }break
            case "insertion_sort" : {
                array = []
                for(let i = 0; i < parseInt(repeats.value); i++){
                    console.log(`Программа запустилась с массивом размера : ${amount}`)
                    console.log(`Программа будет в цикле ${repeats.value - i + 1} повторов`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array)
                    let start_time = Date.now()
                    insertionSort(array)
                    let end_time = Date.now()
                    console.log(end_time)
                    amount_of_time = end_time - start_time
                    console.log(amount_of_time)
                    if(i >= 0){
                         time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length-1]} мс.</div>`
                for(let i = 0; i < time_array.length; i++){
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : ${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Кол-во операций : ${counter}`

                if(result_exec.innerHTML.length > 1){
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click",() => {
                        download(array, "Назови меня пожалуйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
            }break
            case "selection_sort" : {
                array = []
                for(let i = 0; i < parseInt(repeats.value); i++){
                    console.log(`Программа запустилась с массивом размера : ${amount}`)
                    console.log(`Программа будет в цикле ${repeats.value - i + 1} повторов`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    console.log(start_time)
                    selectionSort(array)
                    let end_time = Date.now()
                    console.log(end_time)
                    amount_of_time = end_time - start_time
                    console.log(amount_of_time)
                    if(i >= 0){
                         time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length-1]} мс.</div>`
                for(let i = 0; i < time_array.length; i++){
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : ${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Кол-во операций : ${counter}`

                if(result_exec.innerHTML.length > 1){
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click",() => {
                        download(array, "Назови меня пожалуйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
            }break
            case "quick_sort" : {
                array = []
                for(let i = 0; i < parseInt(repeats.value); i++){
                    console.log(`Программа запустилась с массивом размера : ${amount}`)
                    console.log(`Программа будет в цикле ${repeats.value - i + 1} повторов`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    console.log(start_time)
                    quickSort(array, 0, array.length)
                    let end_time = Date.now()
                    console.log(end_time)
                    amount_of_time = end_time - start_time
                    console.log(amount_of_time)
                    if(i >= 0){
                         time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length-1]} мс.</div>`
                for(let i = 0; i < time_array.length; i++){
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : ${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Кол-во операций : ${counter}`

                if(result_exec.innerHTML.length > 1){
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click",() => {
                        download(array, "Назови меня пожалуйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
            }break
            case "merge_sort" : {
                array = []
                for(let i = 0; i < parseInt(repeats.value); i++){
                    console.log(`Программа запустилась с массивом размера : ${amount}`)
                    console.log(`Программа будет в цикле ${repeats.value - i + 1} повторов`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    console.log(start_time)
                    mergeSort(array, 0, array.length)
                    let end_time = Date.now()
                    console.log(end_time)
                    amount_of_time = end_time - start_time
                    console.log(amount_of_time)
                    if(i >= 0){
                         time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length-1]} мс.</div>`
                for(let i = 0; i < time_array.length; i++){
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : ${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Кол-во операций : ${counter}`

                if(result_exec.innerHTML.length > 1){
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click",() => {
                        download(array, "Назови меня пожалуйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
            }break
            case "bogo_sort" : {
                array = []
                for(let i = 0; i < parseInt(repeats.value); i++){
                    console.log(`Программа запустилась с массивом размера : ${amount}`)
                    console.log(`Программа будет в цикле ${repeats.value - i + 1} повторов`)
                    array = fillArray(parseInt(amount.value))
                    console.log(array);
                    let start_time = Date.now()
                    console.log(start_time)
                    bogoSort(array)
                    let end_time = Date.now()
                    console.log(end_time)
                    amount_of_time = end_time - start_time
                    console.log(amount_of_time)
                    if(i >= 0){
                         time_array.push(amount_of_time)
                    }
                }
                time_array.sort()
                min = `<div>Минимальное время : ${time_array[0]} мс.</div>`
                max = `<div>Максимальное время : ${time_array[time_array.length-1]} мс.</div>`
                for(let i = 0; i < time_array.length; i++){
                    avg_time += time_array[i]
                }
                avg_time > 0 ? avg_time /= time_array.length : 0
                console.log(`Массив времени работы : ${time_array}`)
                result_exec.innerHTML += `\nСреднее время сортировки на этой машине : ${avg_time} мс.`
                info.innerHTML += `${navigator.hardwareConcurrency} ядер использовано.` + "\n"
                result_exec2.innerHTML += `Кол-во операций : ${counter}`

                if(result_exec.innerHTML.length > 1){
                    load_result.style.visibility = "visible"
                    result_exec.style.visibility = "visible"
                    result_exec2.style.visibility = "visible"
                    btn_download.addEventListener("click",() => {
                        download(array, "Назови меня пожалуйста.txt", "text/plain")
                        save_result.style.visibility = "visible"
                    })
                }
            }break
        }
    }
})
function bubbleSort(array){
    counter = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length-i;j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
            counter++
        }
    }
    return array
    return counter
}
function insertionSort(array){
    counter = 0
    for(let i = 0; i < array.length; i++){
        let j = i-1
        while(j > 0 && array[j] < array[j-1]){
            [array[j], array[j-1]] = [array[j-1], array[j]]
            j--
            counter++
        }
    }
    return array
}

function selectionSort(array){
    counter = 0
    let indexOfMin = 0
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length;j++){
            if(array[j] < array[indexOfMin]){
                indexOfMin = j
            }
            counter++
        }
        let temp = array[i]
        array[i] = array[indexOfMin]
        array[indexOfMin] = temp
    }
    return array
}

function partition(array, start, end){
    counter = 0
    const pivot_val = array[end]
    let index = start
    for(let i = start; i<end;i++){
        if(array[i] < pivot_val)
        [array[i], array[index]] = [array[index], array[i]]
        index++
        counter++
    }
    [array[index], array[end]] = [array[end], array[index]]
    return index
}

function quickSort(array, start, end){
    if(start >= end){
        return;
    }
    let index = partition(array, start, end)
    quickSort(array,start,index-1)
    quickSort(array,index+1,end)
}

function mergeSort(array, left, right){
    if(left >= right){
        return
    }

    let middle = left +parseInt((right - left) /2)

    mergeSort(array, left, middle)
    mergeSort(array, middle + 1, right)

    merge(array,left,middle,right)
}

function merge(array,left,middle,right){
    counter++
    let l1 = middle - left + 1
    let l2 = right - middle

    let arr1 = new Array(l1)
    let arr2 = new Array(l2)


    for(let i = 0; i < l1; ++i){
        arr1[i] = array[left + 1]
    }
    for(let i = 0; i < l2; ++i){
        arr2[i] = array[middle + 1 + i]
    }

    let i = 0, j = 0, k = left
    
    while(i < l1 && j < l2){
        if(arr1[i] < arr2[j]){
            array[k] = arr1[i]
            j++
        }else{
            array[k] = arr1[j]
            j++
        }
        k++
    }

    while(i < l1){
        array[k] = arr1[i]
        i++
        k++
    }

    while(j < l2){
        array[k] = arr2[j]
        j++
        k++
    }

    
}



function bogoSort(array){
    var sorted = false;
    while(!sorted) {
        sorted = isSorted(array);
    }
    return array;
}

function isSorted(array){
    for(var i = 1; i < array.length; i++){
        if (array[i-1] > array[i]) {
            return false;
        }
    }
    return true;
};

function download(text, name, type){
    let a = document.getElementById('save_file')
    let file = new Blob([text],{type:type})
    a.href = URL.createObjectURL(file)
    a.download = name
}

function binary_search_recursion(array, start, end, element) {
    cconsole.log(`\nРекурсивно мы имеем след значения в массиве:${array};\n\nstart : ${start};\nend : ${end};\n ${element}`)
    counter++
    let middle = Math.floor((start + end) / 2)
    if(start + 1 >= end){
        console.log("Стратовый элемент дошел др конечного.")
        console.log(`Возможно(точно) искомого элемета : ${element} нет в массиве!`)
        console.log("Если вы считаете иначе, то проверьте сами!")
        return -1
    }

    if(array[middle] === element){
        alert(`Элемент "${element}" найден!\nИндекс элнмента : ${middle}`)
        console.log(`Счетчик зафексировал ${counter} сравнений!`)
        return middle
    }
    else if(array[middle] >element){
        console.log("Левая часть массива используется...")
        console.log(`Новая позиция стартового элемента ${start}; \n середина ${middle};\nконец ${end}`)
        binary_search_recursion(array,start,middle,element)
    }else{
        console.log("Левая часть массива используется...")
        console.log(`Новая позиция стартового элемента ${start}; \n середина ${middle};\nконец ${end}`)
        binary_search_recursion(array,middle,end,element)
    }
    
}