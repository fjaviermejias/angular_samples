export class CardModel {
    question = '';
    answers: string[] = [];
    correctAnswer = '';
    constructor(jsonCard?: any) {
        if (jsonCard !== undefined) {
            this.question = jsonCard.question;
            this.answers = jsonCard.incorrect_answers;
            this.correctAnswer = jsonCard.correct_answer;
            this.answers.push(jsonCard.correct_answer);
        }
    }
}