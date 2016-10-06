'use strict';

var sql = require('../sql').questions;

module.exports = (rep, pgp) => {

    return {
        
        // Selects all entries
        all: () =>
            rep.any(sql.select_all),
        
        // Selects a random entry
        random: () =>
            rep.any(sql.select_random),
        
        // Selects a random entry given a tag id
        randomByID: id =>
            rep.any(sql.select_random_by_tag_id, id),
        
        // Find a question by id
        findById: id =>
            rep.any('SELECT * FROM questions WHERE id = $1', id),
        
        // Find a question by tag
        findByTag: tag =>
            rep.any(sql.select_tag, tag),
        
        // Find a question by tag_id
        findByTagId: tag_id =>
            rep.any(sql.select_by_tag_id, tag_id),
        
        findHebrews: () =>
            // rep.any(sql.select_by_tag_id, 189),
            rep.any(sql.select_tag, 'hebrews'),
        
        // Returns the total number of questions;
        total: () =>
            rep.one('SELECT count(*) FROM questions', [], data => parseInt(data.count))
    };
};
