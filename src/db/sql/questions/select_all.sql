/*
    Select question.

    Selects all questions and answers from the database.
    
    SELECT question, answer, choice1, choice2, choice3, explanation FROM questions offset random() * (select count(*) from questions) limit 1 JOIN answers ON questions.answer_id = answers.id;
*/

SELECT question, answer, choice1, choice2, choice3, explanation
FROM   questions 
JOIN   answers
ON     questions.answer_id = answers.id;