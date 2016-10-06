/*
    Select question.

    Selects all questions and answers from the database that have a specified tag.
    
    SELECT question, answer, choice1, choice2, choice3, explanation FROM questions JOIN answers on questions.answer_id = answers.id JOIN question_tags ON question_tags.question_id = questions.id JOIN tags ON question_tags.tag_id = tags.id WHERE tags.id = 1 ORDER BY questions.id;
*/

SELECT question, answer, choice1, choice2, choice3, explanation
FROM   questions
JOIN   answers 
ON     questions.answer_id = answers.id
JOIN   question_tags 
ON     question_tags.question_id = questions.id
JOIN   tags 
ON     question_tags.tag_id = tags.id 
WHERE  tags.id = $1;