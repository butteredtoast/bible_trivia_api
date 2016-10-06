'use strict';

var QueryFile = require('pg-promise').QueryFile;

// Helper for linking to external query files;
function sql(file) {

    var path = './src/db/sql/' + file;

    var options = {

        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true,

        // Replace ${schema} pre-formatting parameter with "public"
        params: {
            schema: 'public'
        }
    };

    return new QueryFile(path, options);

    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}

module.exports = {
    questions: {
        select_all: sql('questions/select_all.sql'),
        select_by_tag_id: sql('questions/select_by_tag_id.sql'),
        select_tag: sql('questions/select_tag.sql'),
        select_random: sql('questions/select_random.sql'),
        select_random_by_tag_id: sql('questions/select_random_by_tag_id.sql')
    }
};
