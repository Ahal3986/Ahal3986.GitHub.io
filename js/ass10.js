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
  }
  
  json2['employees'].push(anna);
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
for(let i=0; i<json.Employees.length; i++){
  Total +=json4.Employees[i]['salary'];
}

console.log(Total)


// problem5

for(let i=0; i<json4.Employees.length; i++)
if (json4.Employees[i]["RaiseEligible"] == true){
  json4.Employees[i]['salary'] += (json4.Employees[i]["RaiseEligible"]*0.1);
  json4.Employees[i]["RaiseEligible"] == false;
}

console.log(json4);

for(let i=0; i<json4.Employees.length; i++){
  let wfh= false;
  let name= json4.Employees[i]['first name']
}

for(let x =0;x <workingHome.length[j]['first name'];x++)
{}
if(wfh==true){
employees[i]['wfh']=true;}

const json5 = 
{
    "companyNAme": "Tech Stars",
    "website" : "www.techstars.site",
    "Employees" :[
{
  "FirstName" : "Sam",
  "department" : "Tech",
  "designation" : "Manager",
  "salary" : 40000,
  "RaiseEligible" : true,
  "WorkingFromHome": true
},
{
    "FirstName" : "Mary",
    "department" : "Finance",
    "designation" : "Manager",
    "salary" : 18500,
    "RaiseEligible" : true,
    "WorkingFromHome": false
},
{
    "FirstName" : "Bill",
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "RaiseEligible" : False,
    "WorkingFromHome": false
},
{
"FirstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "RaiseEligible" : False,
    "WorkingFromHome": true
}
]
}
  

for(let i=0;i<4;i++){

let wfh= false;
if(json5.Employees[i]['firstname']=='Anna'|| json5.Employees[i]['firstname']=='Sam'){
wfh=true;
}
else{
json5.Employees[i]["Working from Home"]=false;
}
  }
  console.log(json5); 
// problem5

let workingHome 
