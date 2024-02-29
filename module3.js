import {manufacture} from '/module1.js';
import {shipitem} from '/module2.js';
export function order(){
 
console.log("Ordering");
    manufacture("pencil");
    shipitem("pencil");
}