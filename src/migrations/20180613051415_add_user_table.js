exports.up = async function(knex) {
    await knex.schema.createTable("user", t => {
        t.increments("id").primary();
        t.string("username").notNullable();
        t.string("salt").notNullable();
        t.string("encrypted_password").notNullable();
        t.timestamps(false, true);
    });

    await knex.schema.createTable("post", t => {
        t.increments("id").primary();
        t.string("title").notNullable();
        t.string("description").notNullable();
        t.timestamps(false, true);
    });

    await knex.schema.createTable("comment", t => {
        t.increments("id").primary();
        t.string("text").notNullable();
        t.integer("user_id").unsigned().references("id").inTable("user").notNullable().onDelete("cascade");
        t.integer("post_id").unsigned().references("id").inTable("post").notNullable().onDelete("cascade");
        t.timestamps(false, true);
    });
};

exports.down = async function(knex) {
    await knex.schema.table("comment", table => {
        table.dropForeign("user_id");
        table.dropForeign("post_id");
    });
    return Promise.all([
        knex.schema.dropTableIfExists("user"),
        knex.schema.dropTableIfExists("post"),
        knex.schema.dropTableIfExists("comment")
    ]);
};
