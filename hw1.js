// jQuery Doc Ready

// Set up some data 
const data = [ 4, 6, 5, 7, 1, 2, 3, 8, 9];

$(function () {
	//display data in html
	let displayData = $('.data');
	displayData.text(data);
	
	//  variables
	const input1 = $('.input1'), one = $('.submit1'), resultMap = $('.map');
	const input2 = $('.input2'), two = $('.submit2'), resultFilter = $('.filter');
	const input3 = $('.input3'), three = $('.submit3'), resultFind = $('.find');
	const input4 = $('.input4'), four = $('.submit4'), resultSome = $('.Some');
	const five=$('.submit5'),resultSort=$('.sort');
	const input6 = $('.input6'), six = $('.submit6'), resultEach = $('.forEach');
    
	one.on('click', function () {
			// Verify the user gave us a real number
        const num = parseInt(input1.val());
        if (!isNaN(num)) {
			//creates a new array and adds the provided number to each element of the array
			const result=data.map(v => v + num);
			resultMap.text("Map Method - creates a new array and adds the provided number to each element of the array:" + result);
			input1.val('');
        }
    });
		
	two.on('click', function () {
        const num = parseInt(input2.val());
        if (!isNaN(num)) {
		    //creates a new array with all elements that greater than the provided number
			const result=data.filter(v => v > num);
			//console.log(`result ${result}`);
			resultFilter.text("Filter Method - creates a new array with all elements that greater than the provided number:" +result);
			input2.val('');
        }
    });
	
	three.on('click', function () {
        const num = parseInt(input3.val());
		console.log(`num ${num}`);
        if (!isNaN(num)) {
			// returns the value of the first element in the array that greater than the provided number
			const result=data.find(v => v > num);
			//console.log(`FIND result ${result}`);
			resultFind.text("Find Method - returns the value of the first element in the array that greater than the provided number:" +result);
			input3.val('');
        }
    });

	four.on('click', function () {
        const num = parseInt(input4.val());
		//console.log(`num ${num}`);
        if (!isNaN(num)) {
			// return true if at least one element in the array is greater than the provided numer
			const result=data.some(v => v > num);
			//console.log(`SOME result ${result}`);
			resultSome.text("Some Method - return true if at least one element in the array is greater than the provided numer:" +result);
			input4.val('');
        }
    });
	
	five.on('click', function () {
		console.log(`data ${data}`);
		// sorts the elements of an array
		const result=data.sort();
		//console.log(`SORT result ${result}`);
		resultSort.text("Sort Method - sorts the elements of an array:" +result);
	});
	/*
	six.on('click', function(){
		const num = parseInt(input6.val());
		console.log(`num ${num}`);
		const result=data.forEach(v); 
		console.log(`EACH result ${result}`);
		resultEach.text(`EACH result ${result}`);
	})
*/
});
