/*
    Select question at random given a particular tag ID
    
    SELECT question, answer, choice1, choice2, choice3, explanation FROM questions JOIN answers on questions.answer_id = answers.id JOIN question_tags ON question_tags.question_id = questions.id JOIN tags ON question_tags.tag_id = tags.id WHERE tags.id = 189 offset random() * (select count(*) from questions) limit 1;
*/

SELECT question, answer, choice1, choice2, choice3, explanation
FROM   questions
JOIN   answers on questions.answer_id = answers.id
JOIN   question_tags ON question_tags.question_id = questions.id
JOIN   tags ON question_tags.tag_id = tags.id
WHERE  tags.id = $1
offset random() * (select count(*) from questions) limit 1;