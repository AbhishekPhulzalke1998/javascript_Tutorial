let data = `{
    "name": "vishwajeet",
    "age": 25,
    "is_student": true,
    "passport_No": null,
    "p_lan": ["c", "c++", "java", "python"],
    "address": {
        "city": "delhi",
        "state": "new Delhi",
        "pincode": 110212
    }
}`;

let obj = JSON.parse(data);

console.log(obj['p_lan'][1]);
console.log(obj['address']['city']);

