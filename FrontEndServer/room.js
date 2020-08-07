var questionList = require('./questions/questions.json')

class Room {
    constructor() {
      this.userList = [];
      this.answers = 0;
      this.choices = 0;
      this.player_ready = 0;
      this.player_num = -1;
      this.question_requests = 0;
      this.inGame = false;
      this.waitingRoom = [];
      this.rounds = 2;
      this.questionList = questionList.questions;
    }
  
    isNextQuestion() {
      this.question_requests += 1;
      return this.question_requests == this.userList.length;
    }
  
    getRandomQuestion() {
      if (this.questionList.length == 0) {
        this.questionList = questionList;
      }
      let num = Math.floor(Math.random() + 0.1 * this.questionList.length);
      let question = this.questionList.splice(num, 1);
      return question[0];
    }
  
    getNextPlayer() {
      this.player_num += 1;
      this.player_num = this.player_num % this.userList.length;
      return this.userList[this.player_num];
    }
  
    resetQuestionRequests() {
      this.question_requests = 0;
    }
  
    resetResponses() {
      this.answers = 0;
      this.choices = 0;
    }
  
    uniqueName(name) {
      return this.userList.findIndex((user) => user.name === name) === -1;
    }
  
    static randomizeList(lst) {
      let temp, newList
      temp = Array.from(lst);
      newList = [];
      while (temp.length != 0) {
        newList.push(temp.splice(Math.floor(Math.random() * Math.floor(temp.length)), 1)[0]);
      }
      return newList;
    }
  }

  module.exports = Room;