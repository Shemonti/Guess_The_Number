console.log('gaming site')
let button=document.getElementById('btn')
button.addEventListener('click',btn)
//create random number
class RANDOM{
    static random(max){
        return Math.floor(Math.random() * max);
    }
}
//guessing number for user
class Guess{
    static guess(){
        let saw=RANDOM.random(10)
            console.log(saw)
        for(var i=3;i>=1;i--){
            
           var re = /^[0-9]$/
            var txt;
            var person = prompt(`You have ${i} chance to guess the number.
            Enter your number:`, );
            if (re.test(person)) {

            if (person == null || person == "") {
                    txt = alert("User cancelled the prompt.");
            }
             else if(person<saw) {
              txt = alert(`the answer is grater than ${person}`);
            }
            else if(person>saw){
                txt = alert(`the answer is less than ${person}`);   
            }
            else{
                txt = alert(`You guess the correct answer!`);
                break;
            }
            } 
            else{
                txt = alert(`please enter between 0 to 9`);
            }
           
        }
       
        if(person!=saw){
        txt=alert(`You Lose!`);
        } 
    }
}
function btn(){
//  let see= RANDOM.random(10);
Guess.guess()
 
}