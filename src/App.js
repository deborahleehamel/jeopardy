import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rep from './Rep';

const data = [
  {
    title: 'Colorado',
    reps: [
      { name: 'Diana DeGette', twitter_id: '@RepDianaDeGette' },
      { name: 'Mike Coffman', twitter_id: '@RepMikeCoffman' },
      { name: 'Ed Perlmutter', twitter_id: '@RepPerlmutter' },
      { name: 'Ken Buck', twitter_id: '@RepKenBuck' },
      { name: 'Jared Polis', twitter_id: '@jaredpolis' },
      { name: 'Scott Tipton', twitter_id: '@RepTipton' },
      { name: 'Doug Lamborn', twitter_id: '@RepDLamborn' },
      { name: 'Cory Gardner', twitter_id: '@CoryGardner' },
      { name: 'Michael Bennet', twitter_id: '@SenBennetCO' },
  ]
},

{
  title: 'Texas',
  reps: [
    { name: 'Diana DeGette', twitter_id: '@RepDianaDeGette' },
    { name: 'Mike Coffman', twitter_id: '@RepMikeCoffman' },
    { name: 'Ed Perlmutter', twitter_id: '@RepPerlmutter' },
    { name: 'Ken Buck', twitter_id: '@RepKenBuck' },
    { name: 'Jared Polis', twitter_id: '@jaredpolis' },
    { name: 'Scott Tipton', twitter_id: '@RepTipton' },
    { name: 'Doug Lamborn', twitter_id: '@RepDLamborn' },
    { name: 'Cory Gardner', twitter_id: '@CoryGardner' },
    { name: 'Michael Bennet', twitter_id: '@SenBennetCO' },
]
},

{
  title: 'Tennessee',
  reps: [
    { name: 'Diana DeGette', twitter_id: '@RepDianaDeGette' },
    { name: 'Mike Coffman', twitter_id: '@RepMikeCoffman' },
    { name: 'Ed Perlmutter', twitter_id: '@RepPerlmutter' },
    { name: 'Ken Buck', twitter_id: '@RepKenBuck' },
    { name: 'Jared Polis', twitter_id: '@jaredpolis' },
    { name: 'Scott Tipton', twitter_id: '@RepTipton' },
    { name: 'Doug Lamborn', twitter_id: '@RepDLamborn' },
    { name: 'Cory Gardner', twitter_id: '@CoryGardner' },
    { name: 'Michael Bennet', twitter_id: '@SenBennetCO' },
]
}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to Repspeak</h2>
        </div>



        <div>
          {data.map(col => (<div className="col">
            <h3>{col.title}</h3>
            <div className="reps">
              {col.reps.map((rep, i) => (
                <Rep n={rep.name} t={rep.twitter_id} value={(i + 1) * 200} smiley={'💩'}></Rep>
              ))}
            </div>
        </div>))}
        </div>
      </div>
    );
  }
}

export default App;
