export class CardModel {
    question = '';
    answers: string[] = [];
    constructor(jsonCard?: any) {
        if (jsonCard !== undefined) {
            this.question = jsonCard.question;
            this.answers = jsonCard.incorrect_answers;
            this.answers.push(jsonCard.correct_answer);
        }
    }
}