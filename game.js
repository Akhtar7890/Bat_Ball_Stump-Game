
    //Creating a object to store a final result
    function generateRandomNumber(){
      let randomNumber=Math.random()*3;
      if(randomNumber >0 && randomNumber <=1){
        return 'Bat';
      }
      else if(randomNumber >1 && randomNumber <=2){
        return 'Ball';
      }
      else{
        return 'Stump';
      }
    }

    function getResult( userChoice ,computerChoice){
      if(userChoice==='Bat')
      {
        if(computerChoice==='Bat'){
          Score.Tie++;
          return 'Its tie';
        }
        else if(computerChoice==='Ball'){
          Score.Win++;
          return 'You won';
        }
        else 
        {
          Score.loss++;
          return 'Computer won'
        }
      }
      else if(userChoice==='Ball'){
        if(computerChoice==='Bat'){
          Score.loss++;
          return 'Computer won';
        }
        else if(computerChoice==='Ball'){
          Score.Tie++;
          return 'Its tie';
        }
        else 
        {
          Score.Win++;
          return 'You won';
        }
      }
       else{
        if(computerChoice==='Bat'){
          Score.Win++;
          return 'You won';
        }
        else if(computerChoice==='Ball'){
          Score.loss++;
          return 'Computer won';
        }
        else {
          Score.Tie++;
          return 'Its tie';
        }
       }
    }

    let scoreStr=localStorage.getItem('Score');
    let Score;
    resetScore(scoreStr);
    
    function resetScore(scoreStr){
      Score=scoreStr ? JSON.parse(scoreStr):{
      Win : 0,
      loss: 0,
      Tie : 0,
      }

      Score.displayScore = function(){
        return `Won: ${Score.Win}. loss: ${Score.loss} Tie: ${Score.Tie}`;
      };
      displayResult();
    }
    
    if(scoreStr!==undefined) {
      Score=JSON.parse(scoreStr);
    }else{
      Score={
      Win : 0,
      loss: 0,
      Tie : 0,
    };
    }
    function displayResult(userChoice,computerChoice,resulMsg){
     localStorage.setItem('Score', JSON.stringify(Score));

        document.querySelector('#user-move').innerText=userChoice ? `You have chosen : ${userChoice}.`: '';
        document.querySelector('#computer-move').innerText=computerChoice ? `Computer has chosen : ${computerChoice}`: '';
        document.querySelector('#resulMsg').innerText=resulMsg ? resulMsg : ''; 
        document.querySelector('#Score').innerText=Score.displayScore();
    }
