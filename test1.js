 /*/*javascript program for factorial of an number 
const a = prompt("Enter a number: ");
if (a <= 0) {
      console.log("Please enter a positive number");
}
else{
      let fact=1;
      for(let i=1;i<=a;i++)
      {
            fact = fact*i;
      }
      console.log("The factorial of "+a+" is "+fact);
}
/*javascript program for to check whether a number is even or odd number 
if(a%2==0)
{
      console.log(+a+" is  a even number"); 
}
else{
      console.log(+a+" is  a odd number");
}
/* javascript progrom for to check whether a number is palindrome or not 
let temp=parseInt(a);
let rev=0;
while(temp>0)
{                         
      let rem=temp%10;   
      rev = rev*10+rem;
      temp=Math.floor(temp/10);
      console.log(temp)
      console.log(rev)
      console.log(a)
}
if(rev==a)
{
      alert(+a+" is a palindrome number");
}
else{
      alert(+a+" is not a palindrome number");
}

/* Javascript progrom for to check wheather a number is a prime number or not 

let count=0;
      for(let i=1;i<=a;i++)
      { 
            if(a%i==0)
            {
                  count = count+1;
            }

      }
      if(count==2)
      {
            console.log(`${a} is a prime number`);
      }
      else{
            console.log(`${a} is not a prime number`);
      }

      /*Javascript program for fibbinoci series 
      const c = prompt('Enter a number to get the fibbinoci series upto:');
      let d = -1
      let e = 1
      for(let i=0;i<c;i++)
      {
            let f = d+e;
            console.log(f)
            d = e
            e = f
      }
      /* javascript program for amstrong number
      const g  = prompt("Enter a number to check wheater the given number is an amstrong number or not:");
      let h = g;
      let i = g;
      let count1 = 0;
      while(i>0)
      {
            let k = i%10;
            count1 = count1+1;
            i = Math.floor(i/10);
      }
      let m = 0;
      while(h>0)
      {
            let n = h%10;
            let o = Math.pow(n,count1);
            h = Math.floor(h/10)
            m = m+o;
      }
      if(m==g)
      {
            console.log(`${m} is an amstrong number`)
      }
      else{
            console.log(`${g} is not an amstrong number`)
      }
     
 javascript datatypes 
1) int
whole numbers ,integers which the stores the value of integers 0,1,2,3,-1,2...
let num = 1

2) float - used for decimal numbers 0.1,0.2
let float = 0.2; 

3)string- group of characters
let str = "Srikar"// str ='sring'
// 
// 4) Boolean it returns false or true*
// 
//5)BigInt = integers 4 bytes
// 6)Null = null /
let c = 5;
let d = 7;
alert(Boolean(c<d))
int,float,boolean,null,bigInt ,string ivi primitive datatypes

NON_PRIMITIVE datatypes
1)Object
2)Arrays

1)objects- key value pairs 

let Person ={
name:'srikar'
age:18
gender:'M"

2)Arrays- collection of elements of  same type or different data types
let arr=[1,2,3,4,5,5]
let arr1=['srikar','sri','srikar']

3) function- blocks of code that can re used multiple TimeRanges
 function function name(){
      //cpde
 }
 function_name();
 // javascript variables
 3 ways to declare a variable
 1) var
 2) let
 3) const
 var a1 = 10;
 let a2 = 20;
 const a3 = 30 --> const and let are block scoped ante 
function add ()
{
      var a = 10;
      let b = 20;
      const c = 30;
}
add();
conditional statements 
1) for loop
2) while loop
3) do while loop

1) for loop

for(let i=0;i<=5;i++)
{
      console.log(i);
      0,1,2,3,4,5 // end  after 5 occurs due to condition fails after i reaching the value of 5
}
2) while loop
let i=0;
while(i<=5)
{
      console.log(i);
      i++;
      0,1,2,3,4,5 // end  after 5 occurs due to condition fails after i reaching the value of 
}

3) do while loop
let i=0;
do{
      console.log(i);
      i++;
}wjile(i<=5)
0,1,2,3,4,5 // end  after 5 occurs due to condition fails after i reaching the value of 5*/
let i =0;
function whileloop()
{
const v = document.body.querySelector('.while');

if(i<=5)
      {
      v.innerHTML=`${i} `;
      i=i+1;
      setTimeout(whileloop,1000);
      
}

}

let s1 = [1,2,3,4,5]
let s2 = ['srikar','sri','srikar',{name:'srikar'}]
s3 = s1.concat(s2)
 console.log(s1.concat(s2))
 s3.forEach(element => {
      console.log(element)
      
 });
      let s4 = s1.join(s2)
      console.log(s4)
      console.log(s4.includes(1))
      console.log
      isArray(s4)