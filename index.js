const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {

  tutorials.map(function(tutorial){
    tutorialW = tutorial.split(" ");
    let sentence=""
    for(let i = 0;i<tutorialW.length;i++){
      tutorialW[i].charAt(0).toUpperCase();
      sentence += tutorialW[i]+" ";
    }
    console.log(tutorial)
    tutorial = sentence;;
    return tutorial;

  })

  return tutorials
}
