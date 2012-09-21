// First, find all of the other files in this folder
// Create a new Array, call it candidates_array. 
var candidates_array = [];
// Iterate through the files in this folder. 
	// For each file, create a new Array & call it responces_array.
	// Find the candidate name (either from the filename or the h2). Add this to responces_array.
	// Find the questions and answers section on the page. 
		// Create a new array for each question-answer pairing, call it qa_array. 
		// Add this qa_array to the responces_array.
// So, assuming you've got a folder with 2 files and 2 question-answer pairings in each file, the resulting compound array would look something like this:

// candidates_array [
	// responces_array[
		// candidate 1 name,
		// qa_array[
			// question 1,
			// answer 1
		// ],
		// qa_array[
			// question 2,
			// answer 2
		// ]
	// ],
	// responces_array[
		// candidate 2 name,
		// qa_array[
			// question 1,
			// answer 1
		// ],
		// qa_array[
			// question 2,
			// answer 2
		// ]
	// ]
// ]

// Why are we doing this? So that it is easy to grab comparative info. For example, to output the answer for question 1 in the above theoretical situation you could 
for (i=0; i<candidates_array.length; i++) {
	document.write(candidates_array[i][1][1]);
}
// or to output candidate names you could
for (i=0; i<candidates_array.length; i++) {
	document.write(candidates_array[i][0]);
}
// or to output all of the answers to all of the questions you could
for (i=0; i<candidates_array.length; i++) {
	for (j=1; j<candidates_array[i].length; j++) {
		document.write(candidates_array[i][j][1];
	}
}