function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i< musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length){
    facts[counter] += '!!!';
    counter++;
  }
}

function iLoveTheBeatles(n){
  var arr = [];
  var counter = 0;
  do{
    arr.push('I love the Beatles!');
    counter++;
  } while(counter < 15 && counter <= n);
}