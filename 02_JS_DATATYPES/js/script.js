
// var firstName = "Nikhil";
// var lastName = "lanf";
// console.log(`First Name : ${firstName}`);
// console.log(`Last Name : ${lastName}`);

// var firstName = "Nikhil",lastName = "lanf";

// console.log(`\n First Name : ${firstName} \n Last Name : ${lastName} \n First Name : ${typeof(firstName)}`);



var student = [{

    id : 1,
    name:"raja",
    
}]

for(var i=0;i<student.length;i++){// 21 and 27 gives sames result
     console.log(student[i]);
}

     // the above and below gives the same result.

for(var rtu of student){// you can use any word insted of rtu it gives output
console.log(rtu);
}
