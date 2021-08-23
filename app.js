var s = [
    {
        student1: "A",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:0,
    },
    {
        student1: "B",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:0,
    },
    {
        student1: "C",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:1,
    },
    {
        student1: "D",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:1,
    },
    {
        student1: "E",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:0,
    },
    {
        student1: "F",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:1,
    },
    {
        student1: "G",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:0,
    },
    {
        student1: "H",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:0,
    },
    {
        student1: "I",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:0,
    },
    {
        student1: "J",
        contactNo: "03429155910",
        Institute:"Aadam ji",
        age : 25,
        result:1,
    }
    

]


for(i = 0; i<s.length; i++){
    s[i].rollNo = i
}

for(i = 0; i<s.length; i++){
  if (s[i].result == 0) {
      console.log("Pass")
  }else {
      console.log("Fail")
  }
}


var inp = document.getElementById('rollNumber')
var dName = document.getElementById('displayName')
var dRes = document.getElementById('displayRes')

function searchRes(){
for (var j = 0; j<s.length;j++){
    if(s[j].rollNo == inp.value){
   if (s[j].result ==1){
            dName.innerHTML = s[j].student1
            dRes.innerHTML = "pass"
     }
        else{
            dName.innerHTML = s[j].student1
            dRes.innerHTML = "fail"
        }
}

}
}




