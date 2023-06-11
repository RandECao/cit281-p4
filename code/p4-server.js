const fastify = require('fastify')();
const fs = require('fs');
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
} = require("./p4-module.js");

fastify.get("/cit/question", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "", statusCode: 200, questions: getQuestions() });
});

fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "", statusCode: 200, answers: getAnswers() });
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({ error: "", statusCode: 200, questions_answers: getQuestionsAnswers() });
});

fastify.get("/cit/question/:number", (request, reply) => {
    const questionNumber = parseInt(request.params.number);
    const result = getQuestion(questionNumber);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
            error: result.error,
            statusCode: 200,
            question: result.question,
            number: result.number,
        });
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const answerNumber = parseInt(request.params.number);
    const result = getAnswer(answerNumber);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
            error: result.error,
            statusCode: 200,
            answer: result.answer,
            number: result.number,
        });
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const questionAnswerNumber = parseInt(request.params.number);
    const result = getQuestionAnswer(questionAnswerNumber);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
            error: result.error,
            statusCode: 200,
            question: result.question,
            answer: result.answer,
            number: result.number,
        });
});

fastify.get("/cit/*", (request, reply) => {
    reply
        .code(404)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
            error: "Route not found",
            statusCode: 404,
        });
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});