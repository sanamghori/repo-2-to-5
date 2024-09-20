// nested object object k andr ak or object banana
let student={
    name:"anya",
    age:2,
   teacher:{
            name:"miss romana",
            age:25,
            experince:"10years"
        }
    
}
console.log(student.name);
console.log(student.teacher.age);

//type alias repo 5 D
type author={
    firstName:string;
    lastName:string;
}
type book={
    authore:author//nested horha hy opper k auther ki property AE HY
    name:string

}
const myBook:book={
    authore:{
        firstName:'sir',
        lastName:"zia",
    },
        name:"ali",
    }
console.log(myBook.authore.firstName);
console.log(myBook.name);

//5 E interface
interface teacher{ 
    teacher_id:number;
    name:string;
}
interface student{
    student_id:number;
    nameStudent:string;
}
type intersection = teacher&student;
let object:intersection={
teacher_id:12,
name:"miss shaheen",
student_id:13,
nameStudent:"anaya",
};
console.log(object.nameStudent);

// repo 5 f
//any ye data type hy issy ap koch bhi dy skty ho
let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK

////Unknown koi bhi value assgine kar sakty hy type safe hota hy

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types
// is ki value ko ksses or variable ko assgine nhi kar skty
//without explicit type
let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
const val3: boolean = val as boolean; // Will throw error as lagny sy error chla gay
//const val4: number = val; // Will throw error
//const val5: string = val; // Will throw error
//const val6: Record<string, any> = val; // Will throw error
//const val7: any[] = val; // Will throw error
//const val8: (...args: any[]) => void = val; // Will throw error


// Never
// ye fanction kbhi end nhi hoga never jo hy is ki return type hy
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
//yahan error opper sy arha hy jab opper never hy to yhn bhi never ki return type 
//asgine ki
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
//is ki return type never hy or while loop chlta rhy ga kabhi end nhi hoga
//or ye wala code nhi chly ga
function infiniteLoop(): never {
  while (true) {}
}
