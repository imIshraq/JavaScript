import {PI, getCIrcumference, getArea, getVolume} from './es6Modules.js';

console.log(PI);

const circumference= getCIrcumference(10);
console.log(`${circumference.toFixed(2)}cm`);
const area= getArea(10);
console.log(`${area.toFixed(2)}cm^2`);
const volume= getVolume(10);
console.log(`${volume.toFixed(2)}^3`);