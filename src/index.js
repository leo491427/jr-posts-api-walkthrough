const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
// const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();
const morganLog =
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');
app.use(helmet()); 
app.use(morganLog);
// app.use(cors());
app.use(express.json());         // bodyparser package, 把req和res中body的数据转义呈现出来

// app.get('/posts', (req, res) => {
// 	res.json(posts);
// });

// app.get('/posts/:tagId', (req, res) => {
// 	const {tagId} = req.params;
// 	const post = posts.find((item) => item.id === Number(tagId));
// 	if (post) {
// 		res.status(201);
// 		res.json(post);
// 	} else {
// 		res.sendStatus(404);
// 	}
// });

// app.post('/posts', (req, res) => {
// 	const {author, content} = req.body;
// 	const newPost = {author, content, id: currentId++};
// 	posts.push(newPost);
// 	res.status(201).json(newPost);
// });

// app.delete('/posts/:tagId', (req, res) => {
// 	const {tagId} = req.params;
// 	const index = posts.findIndex((item) => item.id === Number(tagId));
// 	if (index === -1) {
// 		res.sendStatus(404);
// 	} else {
// 		const post = posts.splice(index, 1);
// 		res.status(201);
// 		res.json(post);
// 	}
// });

// app.put('/posts/:tagId', (req, res) => {
// 	const {tagId} = req.params;
// 	const {author, content} = req.body;
// 	const post = posts.find((item) => item.id === Number(tagId));
// 	if (!post) {
// 		res.sendStatus(404);
// 	}
// 	post.author = author;
// 	post.content = content;
// 	res.status(201).json(post);
// });

// const morganLog =
//   process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev');

// app.use(helmet());
// app.use(morganLog);
// app.use(cors());
// app.use(express.json());

app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
