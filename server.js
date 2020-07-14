const express = require('express');
const nunjucks = require('nunjucks');
const courses = require('./cursos');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
})

server.get('/', function (req, res){
  const about = {
    logo: 'logo.png',
    name: 'COMPANHIA',
    description: 'Aqui para facilitar sua vida',
    techs: [
      'Node.js',
      'React',
      'React Native',
    ],
    links: [
      { name: 'Github', url: 'https://github.com/'},
      { name: 'Instagram', url: 'https://instagram.com/'},
      { name: 'Facebook', url: 'https://facebook.com/'},
    ]
  }
  res.render('sobre', { about });
});

server.get('/courses', function(req, res){
  res.render('cursos', { courses });
});

server.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  const curso = courses.find(function (curso){
    return curso.id == id;
  });

  if (!curso) {
    return res.render('not-found');
  }

  return res.render('curso', { course: curso });
});

server.use(function(req, res) {
  res.status(404).render('not-found');
});

server.listen(5000, function() {
  console.log('Server is running on port 5000');
});
