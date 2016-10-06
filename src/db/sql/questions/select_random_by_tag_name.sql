/*
    Select a random question, given a tag name
    
    SELECT question, answer, choice1, choice2, choice3, explanation FROM questions JOIN answers on questions.answer_id = answers.id JOIN question_tags ON question_tags.question_id = questions.id JOIN tags ON question_tags.tag_id = tags.id WHERE tags.name ILIKE 'Abraham' offset random() * (select count(*) from questions) limit 1;
*/

/* 
    ********************************************
    NOTICE!!! TO DO:
    ********************************************
    There is a bit of an error with this method:
    The offset is being conducted over the entire questions table query set
    whereas the questions are only a limited subset of values from this query set.
    Often, the offset lies outside the range of IDs to which the tag questions belong, 
    returning an empty set.
*/

SELECT question, answer, choice1, choice2, choice3, explanation
FROM   questions
JOIN   answers ON questions.answer_id = answers.id
JOIN   question_tags ON question_tags.question_id = questions.id
JOIN   tags ON question_tags.tag_id = tags.id
WHERE  tags.name ILIKE 'Hebrews'
offset random() * (select count(*) from questions) limit 1;