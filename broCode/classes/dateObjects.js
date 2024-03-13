// Date objects = Objects that conatian values that represents dates and times ,These date objects can be changed and formatted 
// Date(year,month,day,hour,min,sec,ms)
// const date1= new Date();

// const date= new Date(2025,1,3,4,5,9);
// const date2= new Date("2021-01-02T11:35:00Z");
const date3= new Date(170000000000);
console.log(date3);
const date4= new Date();
const date0=new Date();
const year =date0.getFullYear();
const month =date0.getMonth();
const day=date0.getDay();
const hour=date0.getHours();
const min= date0.getMinutes();
const dayOfWeek=date0.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(min);
console.log(dayOfWeek);

date0.setFullYear(2027);
date0.setMonth(4);
date0.setDate(5);
date0.setHours(5);
date0.setMinutes(36);
console.log(date0);

const date5 = new Date("2023-12-31");
const date6 = new Date ("2023-01-01");
if (date6>date5){
    console.log("happey new year");
}
