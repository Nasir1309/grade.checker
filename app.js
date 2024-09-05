// Function to calculate grade
function calculateGrade(marks) {
    if (marks >= 90) {
      return "A";
    } else if (marks >= 80) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else if (marks >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Main function
  function calculateMarks() {
    // Ask for marks using prompt()
    var mark1 = parseInt(prompt("Enter mark for Subject math:"));
    var mark2 = parseInt(prompt("Enter mark for Subject english:"));
    var mark3 = parseInt(prompt("Enter mark for Subject science:"));
  
      // Calculate total marks
  var totalMarks = mark1 + mark2 + mark3;

 // Calculate average marks
 var averageMarks = totalMarks / 3;

    // Calculate grade
    var grade = calculateGrade(averageMarks);
  
    // Display results using alert()
    alert("Total Marks: " + totalMarks);
    alert("Grade: " + grade);
  }
  
  // Call main function
  calculateMarks();
  