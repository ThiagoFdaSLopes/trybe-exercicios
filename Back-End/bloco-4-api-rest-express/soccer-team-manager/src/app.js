const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const searchTeam = teams.find((e) => e.id === Number(id));
  
  if (!searchTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  searchTeam.name = name;
  searchTeam.initials = initials;

  res.status(200).json({ searchTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const newTeams = teams.findIndex((e) => e.id === Number(id));
  teams.splice(newTeams, 1);

  if (!newTeams) {
    res.status(404).json({ message: 'Team not found' });
  }

  res.status(200).end();
});

module.exports = app;
