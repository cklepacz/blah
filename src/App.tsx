import React from 'react';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: 'Beastie Boys',
    members: 'Ad Rock, MCA, Mike D',
    formed: 1979,
  },
  {
    name: 'Big Chungus',
    members: 'Wascally Wabbit, Elmer Fudd, Bugs Bunny',
    formed: 1950,
  },
  {
    name: 'Ur Mom',
    members: "Name, Lettuce Rest I'm feeling beat,  Q",
    formed: 2004,
  },
  {
    name: 'Another one',
    members: 'DJ Khalid, Potato Salad, Gosh Darn',
    formed: 2045,
  },
];

function Welcome() {
  return <h1>La La La bunch of random crap</h1>;
}

class Band extends React.Component<BandProps> {
  render() {
    const oneBand = this.props;
    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map((bandNum) => (
        <Band {...bandNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
