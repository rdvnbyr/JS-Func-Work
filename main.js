// ?? QUESTION ONE. //.

let firstArray = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 9, 'A', 'A', 'B','C','A','B','C','D','D','D', 4, 5, 6, 7, 8, 9,];

let newArrFunc = (current_arr) => current_arr.filter((item, indexNum) => current_arr.indexOf(item) != indexNum );

console.log([...new Set(newArrFunc(firstArray))]);

// =-=-=-=-=-=-  =-=-=-=-=--=-===-  -------========  -------- ----== ====== //
// ??  QUESTION TWO. //

let secondArr =  [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 9];

let arrOut = (arr, strPop) => arr.filter(str => str != strPop) ;

console.log(arrOut(secondArr, 4));

// -=-=---=-=  -=-=-=-=-=-=-=-=-=-=-=  -=-=-=-=-=-=  -=-=-=-=-=-=//
// ?? QUESTION THREE. //

let mustBeSortArray = [1, 7, 13, 5, 11, 24, 38, 17, 13, 52, 77, 88, 61, 39, 43, 99];

let sortFunc = (item, num) => {
    
    item.sort((a,b) => b - a);

    var x = item.slice(num, num + 1);

    	if (num > item.length) {
        return `${num}. element bulunmamaktadir.`
    	}

    return(`${num}. buyuk element = ${x}`)
}

console.log(sortFunc(mustBeSortArray, 5));

//// -------========---------==========------------===========//////
// ?? QUESTION FOUR. //

let queFourFunc = (start, length) => {
	
        var arr = [];
	
		for (var i = 0; i < length; i++, start++) {
			arr[i] = start;
		}  
	
        return arr;             
}

console.log(queFourFunc(18, 6));
