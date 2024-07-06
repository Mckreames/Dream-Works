const sqlite = require("sqlite3").verbose();
const axios = require("axios");
let sql;

// Connect to DB
const db = new sqlite.Database("./blog.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) console.error(err);
});

// Create Table
// sql = `CREAT TABLE entries(ID INTEGER PRIMARY KEY, title TEXT NOT NULL, createdAt DATE NOT NULL, description TEXT NOT NULL, image BLOB)`;
// db.run(sql);

// Get Data
async function getData(url) {
  try {
    const { data } = await axios.get(url);
    data.forEach((d) => {
      let entryData = {};
    });
  } catch (error) {
    console.log(error);
  }
}
getData("https://random-data-api.com/api/users/random_user/?size=20");
