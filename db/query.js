const pool = require('./pool.js')

exports.getAllMessages = async () => {
    const { rows } = await pool.query("SELECT * FROM messages;")
    return rows
}

exports.postOneMessage = async (text, user, added) => {
    await pool.query("INSERT INTO messages (text, username, added) VALUES($1,$2,$3);", [text, user, added])
    return
}

