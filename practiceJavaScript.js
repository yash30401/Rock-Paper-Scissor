// // const sum = (a,b) => a+b

// // // a= Number(prompt("Type any Number"))
// // // b= Number(prompt("Type any Number"))

// // console.log(sum(3,4))


// // //Arrays in JavaScript
// // groceries=["Apple","Banana","Guava","Orange"]

// // //Print the Groceries List
// // console.log(groceries)

// // //It will Push the kiwi in the end of the list
// // groceries.push("Kiwi")


// // console.log(groceries)

// // //It will Slice the list 
// // console.log(groceries.slice(0,2))


// // //It will return the index of kiwi and if the it is not present there it will return -1
// // console.log(groceries.indexOf("Kiwi"))

// // //It will return the size of an array
// // console.log(groceries.length)


// // //Objects

// // console.log("OBJECTS")

// // //Creating an Object
// // const person={
// //     name:"Yashveer Singh",
// //     shirt:"white",
// //     Salary: 2000,
    

// // }

// // //access Object: dot notation vs bracket notation
// // console.log(person.Salary)

// // console.log(person["name"])

// // //assining values in the objects

// // person.age=21

// // console.log(person)

// // //es6 arrow function
// // //Object
// // //template literals
// // const intro = (name,salary) =>{

// //     const person={
// //         name:name,
// //         salary: salary,
// //         assets:20000,
// //         liability:10000,
// //         networth : function(){
// //         return this.assets-this.liability
// //     }
// //     }

// //     const desc=`Hi my name is ${person.name} and my salary is ${person.salary} my net worth is ${person.networth()}`

// //     return desc


// // }


// // console.log(intro("Yashveer Singh", 200000))

// // //Returning the factorial Of a  Number

// // function yash(n){

// //     let res=1

// //     for(let i=1; i<=n;i++){
// //         res*=i
// //     }

// //     return res

// //  }

// //  console.log(yash(5))


// //  //New Type of Looping

// //  for(const gro of groceries){
// //     console.log(gro)
// //  }


// //  function doubleValue(value, top){

// //     let res=1

// //     for(let i=1; i<=top; i++){

// //         if(value*2<=top){
// //             value*=2
// //             res=value
            
// //         }else{
// //             break
// //         }

// //     }

// //     return res
// //  }

// //  console.log(doubleValue(5,100))




// //  const countLetters=()=>{
// //     const phrase="Hellow yashveer Singh How Are You"

// //     for(letter in phrase){
// //         console.log(letter)
// //     }

// //  }

// //  countLetters()




//  let greet=document.getElementById('title')

 

// greet.style.color="pink"

// greet.style.fontSize="100px"

// greet.style.fontFamily="Arial Black"

// let name=document.getElementById("name")

// name.style.fontSize="50px"

//  console.log(greet)






let rock=document.getElementById("rock")
let paper=document.getElementById("paper")
let scissor=document.getElementById("scissor")
let score=document.getElementById("score")
let computerChoice=document.getElementById("computerchoice")
let winning=document.getElementById("winning")

let count=0



rock.onclick = () =>{

    let random=Math.floor(Math.random()*3)

    if(random==0){
        computerChoice.innerText="Computer's Choice: Rock"
    }else if(random==1){
        computerChoice.innerText="Computer's Choice: Paper"
    }else{
        computerChoice.innerText="Computer's Choice: Scissor"
    }

        if(random==1){
            count-=1
            score.innerText=`Your Score: ${count}`
        }else if(random==2){
            count++
            score.innerText=`Your Score: ${count}`
        }

        
if(count==0){
    winning.innerText=="Draw"
    }else if(count>0){
    
        winning.innerText="You Are Winning"
        winning.style.color="green"
    
    }else{
        winning.innerText="You Are Losing"
        winning.style.color="red"
    }


}

paper.onclick=()=>{

    let random=Math.floor(Math.random()*3)

    if(random==0){
        computerChoice.innerText="Computer's Choice: Rock"
    }else if(random==1){
        computerChoice.innerText="Computer's Choice: Paper"
    }else{
        computerChoice.innerText="Computer's Choice: Scissor"
    }

    if(random==0){
        count++
        score.innerText=`Your Score: ${count}`
    }else if(random==2){
        count--
        score.innerText=`Your Score: ${count}`
    }

    
if(count==0){
    winning.innerText=="Draw"
    }else if(count>0){
    
        winning.innerText="You Are Winning"
        winning.style.color="green"
    
    }else{
        winning.innerText="You Are Losing"
        winning.style.color="red"
    }
}

scissor.onclick = ()=>{

    let random=Math.floor(Math.random()*3)

    if(random==0){
        computerChoice.innerText="Computer's Choice: Rock"
    }else if(random==1){
        computerChoice.innerText="Computer's Choice: Paper"
    }else{
        computerChoice.innerText="Computer's Choice: Scissor"
    }


    if(random==0){
        count--
        score.innerText=`Your Score: ${count}`
    }else if(random==1){
        count++
        score.innerText=`Your Score: ${count}`
    }

    
if(count==0){
    winning.innerText=="Draw"
    winning.style.color="black"
    }else if(count>0){
    
        winning.innerText="You Are Winning"
        winning.style.color="green"
    
    }else{
        winning.innerText="You Are Losing"
        winning.style.color="red"
    }
}

    