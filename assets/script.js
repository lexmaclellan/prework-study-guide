var topics = ["HTML", "CSS", "Git", "JavaScript"];
var shapes = ["triangle", "square", "pentagon", "circle"];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic(randomTopic);

function helloWorld() {
  console.log("Hello world, I am a function!")
}

function listTopics() {
  for (x = 0; x < topics.length; x++) {
    console.log(topics[x])
  }
}

function selectTopic(topic) {
  if (topic === 'HTML') {
    console.log("Let's study HTML!");
  }
  else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  }
  else if (topic === 'Git') {
    console.log("Let's study Git!");
  }
  else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  }
  else {
   console.log('Please try again!');
  }
}

/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/
