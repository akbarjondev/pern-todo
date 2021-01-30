const express = require('express')
const app = express()
const cors = require('cors')
const CONFIG = require('./src/config')
const pool = require('./src/db')


// middleware
app.use(cors())
app.use(express.json())


//ROUTES//

// create a todo
app.post('/todos', async (req, res) => {
	try {
		const { description } = req.body

		const newTodo = await pool.query(
			'INSERT INTO todo (description) VALUES($1) RETURNING *',
			[description]
		)

		res.json(newTodo.rows[0])
	} catch(e) {
		console.log(e.message);
	}
})
