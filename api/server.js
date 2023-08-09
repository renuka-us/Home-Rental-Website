const express = require('express');
const { Pool } = require('pg');
const cors = require('cors')
const app = express();
const port = 3000;

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'home-rental',
  password: '2345',
  port: 5432,
});
app.use(cors());
app.use(express.json());


// Handle POST request for user registration
app.post('/registration', (req, res) => {
  const {fname,lname, email,phone,address,pin, password } = req.body;
  pool.connect((error, client, release) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: error.message });
  } else {
    console.log('Connected to the database successfully');
    release(); // Release the client back to the pool
  }
  });
  console.log(req.body);
  // Insert user data into the database
  pool.query(
    `INSERT INTO users (firstname,lastname, email, phoneno,address,pin,password) VALUES ($1, $2, $3,$4,$5,$6,$7)`,
    [fname,lname, email,phone,address,pin, password],
    (error, results) => {
      if (error) {
        console.log('Error inserting user:', error);
        res.status(500).json({ error: error.message});
      } else {
        console.log('User registered successfully');
       res.status(200).json({ OK: 'User registered successfully'});
      }
    }
  );
});
async function checkCredentials(email, password) {
  try {
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [email, password];

    const { rows } = await pool.query(query, values);
    if (rows.length > 0) {
      // User with matching email and password found
      return true;
    } else {
      // No user found with matching email and password
      return false;
    }
  } catch (error) {
    console.error('Error checking credentials:', error);
    throw error;
  }
}
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  checkCredentials(email, password)
  .then(result => {
    if (result) {
      console.log('Credentials are valid');
      res.status(200).json({"OK":"Credentials are valid"})
    } else {
      console.log('Invalid credentials');
      res.status(500).json({"error":"Invalid credentials"})
    }
  })
  .catch(error => {
    console.error('Error checking credentials:', error);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
