// camelCase //
// snake_case //
// PascalCase //

//  Example.1 camelCase //
let fullName = "Fizza";
// Example.2 snake_case //
let full_name = "Jawed";
// Example.3 PascalCase //
let FullName= "Fizza Jawed";


//  Example.1 camelCase //
let userName = true;
// Example.2 snake_case //
let user_name = false;
// Example.3 PascalCase //
let UserName = 7;

// is assignment operator //
console.log(fullName,full_name,FullName);
console.log(userName,user_name,UserName);



// practice.2//

//  Example.1 camelCase //
let persnolName : string = "Fia";
// Example.2 snake_case //
let persnol_name : string = "Javed";
// Example.3 PascalCase //
let PersnolName : boolean = true;

//is assignment operator //

//  Example.1 camelCase //
let firstName : boolean = true;
// Example.2 snake_case //
let middle_name :boolean = false;
// Example.3 PascalCase //
let LastName :number = 7
// Example.4 (undefined) varible any DataType //
let anyType;

console.log(persnolName, persnol_name, PersnolName);
console.log(firstName, middle_name, LastName);
console.log(anyType);//


// Arrays => []
// => arrays address =0,1,2,3.... ( called index )//

let student =["Fizza", "Maidah", "Sonia", "Neha", 1, 2, 3, true, false ];
let students : any=["Fizza", "Maidah", "Sonia", "Neha", 1, 2, 3, true, false ];
let secondStudentName = students[1]
console.log(student);
console.log(students);
console.log(secondStudentName);
console.log(students[4]);
console.log(students[7]);
console.log(students[9]);

let anotherStudent : string[] =["Fizza","Maidah","Sonia","Neha"];
console.log(anotherStudent[0], anotherStudent[3], anotherStudent[7]);

//  number array //

let names : number[] =[1, 5, 7, 9];
console.log(names[0], names[2], names[11]);

// boolean array //

let question : boolean[] =[ true , false];
console.log(question[0], question[1], question[7]);























