exports.up = async function(knex) {
    await knex.schema.table("user", t => {
        t.renameColumn("encrypted_password", "hash");
    });
};

exports.down = function(knex) {
    return knex.schema.table("user", t => {
        t.renameColumn("hash", "encrypted_password");
    });
};
