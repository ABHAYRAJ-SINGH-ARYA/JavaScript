// objects

//const obj1 = new Object();
const tinder_user = {};

tinder_user.id = "1232"
tinder_user.name = "samay"
tinder_user.isLogged = false
console.log(tinder_user);

// object inside object

const other_user = {
    fullname : {
        name : {
            first_name : "Abhay",
            last_name : "Arya"
        }
    }
}

console.log(other_user);

console.log(other_user.fullname);
console.log(other_user.fullname.name);
console.log(other_user.fullname.name.last_name);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj4 = {obj1, obj2}
console.log(obj4);

const obj3 =  Object.assign({}, obj1, obj2)
console.log(obj3);
console.log(obj1);


const obj5 ={... obj1, ...obj2}
console.log(obj5);

const arr = [
    {
        id : "12434", 
        user_name : "Abhayraj",
        isLogged : false
    },
    {},
    {}
]


console.log(arr[0]);
console.log(arr[0].id);
console.log(arr[0].user_name);
console.log(arr[0].isLogged);

console.log(Object.keys(arr[0]));
console.log(Object.values(arr[0]));
console.log(Object.entries(arr[0]));
console.log(arr[0].hasOwnProperty('name'));
console.log(arr[0].hasOwnProperty('id'));


const course= {
    course_id : "123",
    course_fee : 2000,
    course_duration : "3 year"
}

// destructure of objects

const {course_fee} = course;

console.log(course_fee);

// json

{
    "course_name": "js",
    "fee": 2000,
    "duration": 2
}











