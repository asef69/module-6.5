
function calculateGrade(marks) {
    if (marks >= 80) return 'A+';
    else if (marks >= 70) return 'A';
    else if (marks >= 60) return 'A-';
    else if (marks >= 40) return 'B';
    else if (marks < 40) return 'C';
    else return 'F';
}


console.log(calculateGrade(62)); 