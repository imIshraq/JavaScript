// ES6 Module = An external file that contaains reusable code  that can be imported  into other JavaScript files. Write reusable code for many different apps. Can conatian variables, classes, functions....and more, Introduced as part of ECMAScript 2015

 export const PI = 3.14159;

export function getCIrcumference(radius){
    return 2 * PI * radius;
}

 export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius * radius;   
}