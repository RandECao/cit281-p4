//CIT281 P4
//Randy Cao

const {data} = require('./p4-data.js');

function getQuestions() {
    return data.map(i => i.question);
}

function getAnswers() {
    return data.map(i => i.answer)
}

function getQuestionsAnswers() {
    const dataCopy = [...data];
    return dataCopy;
}

function getQuestion(number = "") {
    let result = {
        error: "",
        question: "",
        number: "",
    };

    if (!Number.isInteger(number)) {
      result.error = "Question number must be an integer";
    } 
    else if (number > data.length) {
      result.error = `Question number must be less than the number of questions (${data.length})`;
    } 
    else if (number <= 0) {
      result.error = "Question number must be >= 1";
    } 
    else{
      const index = number - 1;
      result.number = number;
      result.question = data[index].question;
  }
  
  return result
}


function getAnswer(number = "") {
    let result = {
        error: "",
        answer: "",
        number: ""
    };

    if (!Number.isInteger(number)) {
      result.error = "Answer number must be an integer";
    } 
    else if (number < 1) {
      result.error = "Answer number must be >= 1";
    } 
    else if (number > data.length) {
      result.error = `Answer number must be less than the number of questions (${data.length})`;
    } 
    else {
      const index = number - 1;
      result.number = number;
      result.answer = data[index].answer;
  }
  return result;
}




function getQuestionAnswer(number = "") {
  if (typeof number !== "number") {
    return {
      error: "Question number must be an integer",
      question: "",
      number: "",
    };
  }

  if (number <= 0) {
    return {
      error: "Question number must be >= 1",
      question: "",
      number: "",
    };
  }

  if (number > data.length) {
    return {
      error: "Question number must be less than the number of questions (3)",
      question: "",
      number: "",
    };
  }

  const index = number - 1;
  const qaObj = data[index];

  return {
    error: "",
    question: qaObj.question,
    answer: qaObj.answer,
    number: number,
  };
}


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
};