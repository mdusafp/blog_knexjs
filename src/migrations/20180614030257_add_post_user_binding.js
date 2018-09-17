exports.up = async function(knex) {
    await knex.schema.table("post", table => {
        table.integer("user_id").unsigned().references("id").inTable("user").notNullable().onDelete("cascade");
    });
};

exports.down = async function(knex) {
    return knex.schema.table("post", table => {
        table.dropForeign("user_id");
        table.dropColumn("user_id");
    });
};
