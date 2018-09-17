
exports.up = async function(knex) {
    await knex.schema.table("user", t => {
        t.unique("username");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("user", t => {
        t.dropUnique("username");
    })
};
