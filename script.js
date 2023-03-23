//class example
function result()
{
    
    class student {
        constructor(name,roll,year,mark) 
        {
          this.name = name;
          this.roll = roll;
          this.year = year;
          this.mark = mark;
        }
        age() 
        {
          if(dob =="")
          {
            return "Null "
          }
          else
          {
            const date = new Date();
          return date.getFullYear() - this.year;
          }
          
        }
        result()
        {
          if(mark =="")
          {
            return "Absent"
          }
          if(mark > 100)
          {
            return "mark should not be above 100";
          }

          if(mark >= 35)
          {
            return "PASS";
          }
          if(mark < 0)
          {
            return "mark should not be below 0";
          } 
          else
          {
            return "FAIL";
          }
        }
      }
      var stuname = String(document.getElementById("stu").value);
      var rollno = Number(document.getElementById("no").value);
      var dob = Number(document.getElementById("year").value);
      var mark = Number(document.getElementById("mark").value);
      const mystudent = new student(stuname,rollno,dob,mark);
      document.getElementById("p1").innerHTML =
      "<h3> Student Data </h3>"+
      "Student Name:"+" "+mystudent.name+"<br>"+
      "Roll number:"+" "+ mystudent.roll+"<br>"+ 
      "Student Age:"+" "+mystudent.age()+"<br>"+
      "Result:"+" "+mystudent.result();
}

// error example
function errorcheck()
{
  const message = document.getElementById("p2");
  message.innerHTML = "";
  let x = document.getElementById("num").value;
  try { 
    if(x.trim() == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x%7 == 0)  throw x+" "+"and it is a Multiple of Seven";
    else throw x+" "+"and it is Not a Multiple of Seven";
  }
  catch(err) {
    message.innerHTML = " The Input is"+" "+ err;
  }
 
}

//promise example
function change()
{ 
   var second = (document.getElementById("seconds")).value;
  const myPromise = new Promise(function(myResolve,_myReject) 
  {
    setTimeout(function(){ myResolve("IMAGE/223305772.webp"); }, second);
  });
  
  myPromise.then(function(value)
   {
    document.getElementById("image").src = value;
  });
  alert("Image is About to Change");
}