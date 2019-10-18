const pgp = require('pg-promise')();
// const db = pgp('postgres://ucxnvete:LYmAXi2W7lM8xrsLxPVD6fkHDI26arLq@salt.db.elephantsql.com:5432/ucxnvete');
const db = pgp('postgres://postgres:Iffritman56@localhost:5432/dnd');

function getClasses() {
    return db.any("SELECT class_name FROM classes;");
}

module.exports = {
    getClasses: getClasses,
}