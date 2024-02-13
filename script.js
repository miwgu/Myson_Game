const quiz = [
     "ÄPPLE",
     "PANDA",
     
]

const quizLength = quiz.length;
console.log(quizLength)

const correctMessage=document.getElementById("correct");
correctMessage.style.display="none"

let index =0 

console.log("First_index", index)
/*
const setQuiz=()=>{ 
    document.getElementById("question1").textContent=quiz[index];
}
setQuiz();
*/

const questionElement = document.getElementById("question");
//const quizEachLetter=quiz[index].split('');
//console.log(quizEachLetter)
//console.log("quizEachLetter_length",quizEachLetter.length)

const newQuiz=() =>{

console.log("INDEX in newQuiz:", index);
const quizEachLetter=quiz[index].split('');
const quizText_space= quizEachLetter.join(' ').replace(/,/g, '');
console.log(quizText_space)
console.log("quizText_space_length", quizText_space.length)

questionElement.innerHTML= quizText_space
   .split('')
   .map(letter=> {
    if(letter.trim() !==''){
        return `<span class="underline">${letter}</span>`
    }else{
        return `<span>${letter}</span>`
    }
})
   .join('');

};

newQuiz();





//STEG3

/*
const questionElement = document.getElementById("question");
const setEachLetter= ()=>{
   //document.getElementById("question").textContent=quizText_space;
   
   
   questionElement.innerHTML= quizText_space
   .split('')
   .map(letter=> {
    if(letter.trim() !==''){
        return `<span class="underline">${letter}</span>`
    }else{
        return `<span>${letter}</span>`
    }
})
   .join('');

};
setEachLetter();
*/


//STEG1
//const getAnswer=document.getElementById("answer").textContent.trim().toLowerCase();
//console.log(getAnswer)
let imgNumber=0;
const findLetter =(userAnswer)=>{
 //STEG2
 // const matchLetter=quizEachLetter.find((e)=>e.trim().toLowerCase()===userAnswer);
 
 //STEG4 
 // Add each letter which match this word to array  
 const matcedLetters= [];

 console.log("findLetter_Index", index)
 const quizEachLetter=quiz[index-1].split('');// index-1 because already add 1

 for (let i=0; i<quizEachLetter.length; i++){
 if(quizEachLetter[i].trim().toLowerCase()=== userAnswer){
    matcedLetters.push(i);
 };
 }
 
 
 //if (matchLetter!==undefined){

 // Check if all letters have been guessed correctly
 const underlineSpans = questionElement.querySelectorAll(".underline");
 console.log(underlineSpans)
 
 if(matcedLetters.length>0){
    console.log("Den bokstaven finns i ordet! : "+ userAnswer)
    alert("Den bokstaven finns i ordet!: "+ userAnswer)

    //STEG4
    //const index = quizEachLetter.indexOf(matchLetter.toUpperCase()); // Get the index of the matched letter

           matcedLetters.forEach(i=>{
            underlineSpans[i].style.borderBottom ="transparent";
            underlineSpans[i].style.color= "black";
           });

        
    } else {
       console.log("Den bokstaven finns inte med")
       alert("Den bokstaven finns inte med")
       imgNumber++;
       console.log(imgNumber);
       document.getElementById("switchImg").src =`images/${imgNumber}.png`
       if(imgNumber==2){
        document.getElementById("gameOver").style.display="block";
        decideButtonElement.disabled =true;//Buttoon does not work

       }
       

    } 

    const allGuessed = [...underlineSpans].every(span => span.style.color === "black");
    if (allGuessed) {
     //alert("Grattis!");
     correctMessage.style.display="block"

 } 

}

//STEG2
//BUTTON
const decideButtonElement = document.getElementById("decide");

//STEG1
//const matchLetter = findLetter(getAnswer);
//console.log(matchLetter);

//STEG2
decideButtonElement.addEventListener("click", function(){
    const getAnswer= document.getElementById("answer").value.trim().toLowerCase();

    findLetter(getAnswer);
    document.getElementById("answer").value="";// clear the input
    //console.log(matchLetter);
/*
    if (matchLetter!==undefined){
        console.log("Text matchad: "+ matchLetter)
        alert("Text matchad: "+ matchLetter)

    }else{
        console.log("Denna text hittades inte")
        alert("Denna text hittades inte")
    }
    */
});


/*
//STEG1
if (matchLetter!==undefined){
    console.log("Text matchad: "+ matchLetter)
    alert("Text matchad: "+ matchLetter)
}else{
    console.log("Denna text hittades inte")
    alert("Denna text hittades inte")
}
*/


const nextQuiz= () => {

    if(index<quizLength){
    
     newQuiz()
     document.getElementById("correct").style.display="none";
     document.getElementById("switchImg").src ="images/0.png"
    } else {
        document.getElementById("correct").style.display="none";
        document.getElementById("finish").style.display="block";

    }
    index++;
    console.log(index)

}

nextQuiz();
