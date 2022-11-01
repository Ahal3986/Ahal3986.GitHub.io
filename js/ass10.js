// problem1
const section = document.querySelector('section');

const json = 
[
  {
  "FirstName" : "Sam",
  "department" : "Tech",
  "designation" : "Manager",
  "salary" : 40000,
  "RaiseEligible" : true
},
{
    "FirstName" : "Mary",
    "department" : "Finance",
    "designation" : "Manager",
    "salary" : 18500,
    "RaiseEligible" : true
},
{
    "FirstName" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "RaiseEligible" : false
}

]
console.log(json)

// problem2
const section2 = document.querySelector('section');

const json2 = 

{
    "companyNAme": "Tech Stars",
    "website" : "www.techstars.site",
    "Employees" :[
{
  "FirstName" : "Sam",
  "department" : "Tech",
  "designation" : "Manager",
  "salary" : 40000,
  "RaiseEligible" : true
},
{
    "FirstName" : "Mary",
    "department" : "Finance",
    "designation" : "Manager",
    "salary" : 18500,
    "RaiseEligible" : true
},
{
    "FirstName" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "RaiseEligible" : false
}
]
}

console.log(json2)
// problem3


const anna = 
  {
  "FirstName" : "Anna",
  "department" : "Tech",
  "designation" : "Executive",
  "salary" : 25600,
  "RaisEligible" : false,
  };
  
  json.push(anna)
  json2['Employees'].push(anna);
  console.log(json2)

// problem4

const section4 = document.querySelector('section');
const json4 = 
{
    "companyNAme": "Tech Stars",
    "website" : "www.techstars.site",
    "Employees" :[
{
  "FirstName" : "Sam",
  "department" : "Tech",
  "designation" : "Manager",
  "salary" : 40000,
  "RaiseEligible" : true
},
{
    "FirstName" : "Mary",
    "department" : "Finance",
    "designation" : "Manager",
    "salary" : 18500,
    "RaiseEligible" : true
},
{
    "FirstName" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "RaiseEligible" : false
},
{
"FirstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "RaiseEligible" : false
}
]
}

console.log(json4)

let Total = 0;
for(let i=0; i<json4.Employees.length; i++){
  Total +=json4.Employees[i]['salary'];
}

console.log("total salary ",Total)


// problem5

for(let i=0; i<json4.Employees.length; i++)
if (json4.Employees[i]["RaiseEligible"] == true){
  json4.Employees[i]['salary']*=1.1;
  console.log('salary increased ', json4.Employees[i].salary);
  json4.Employees[i]["RaiseEligible"] = false;
}

console.log(json4);

 

// problem6



const workingHome = ['Anna','Sam']


for(let i=0;i<4;i++){

if(json4.Employees[i]['FirstName']=='Anna'|| json4.Employees[i]['FirstName']=='Sam'){
Object.assign(json4.Employees[i],{
  wfh: true
});
console.log()
}
else{
Object.assign(json4.Employees[i],{
  wfh: false
});
console.log()
}}

