/*
    Select one random question from the database
*/

SELECT question, answer, choice1, choice2, choice3, explanation
FROM   questions
JOIN   answers ON questions.answer_id = answers.id
offset floor(random() * (select count(*) from questions)) limit 1;
