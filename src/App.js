import { useState, useEffect } from 'react';

// import logo from './logo.svg';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  const [fString, setFString] = useState('');
  const [titleString, setTitleString] = useState('');
  const [robots, setRobots] = useState([]);
  const [fRobots, setFRobots] = useState(robots);

  // Only fetch on initial mount
  useEffect(() => {
    setTitleString('Robots Rolodex');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => { setRobots(users) });
  }, []);

  useEffect(() => {
    let dRobots = fString ? robots.filter(robot => robot.name.toLocaleLowerCase().includes(fString)) : robots;

    setFRobots(dRobots.length ? dRobots : [{ id:-1, name: 'No matches' }]);
  }, [robots, fString]);
  
  const onFilterSet = (event) => {
    const fStr = event.target.value.toLocaleLowerCase();
    setFString(fStr);
  };

  const onTitleChange = (event) => {
    const tStr = event.target.value;
    setTitleString(tStr);
  };

  return (
    <div className="App">
      <h1 className='app-title'>{titleString}</h1>
      <SearchBox
        className='robot-search-box'
        placeholder='Enter new title'
        onChangeHandler={onTitleChange}
        title={titleString}
      />
      <SearchBox
        className='robot-search-box'
        placeholder='Search Robots by Name'
        onChangeHandler={onFilterSet}
      />
      <CardList listSrc={fRobots} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       fString: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => { this.setState({ monsters: users }) });
//   }

//   onFilterSet = (event) => {
//     const fString = event.target.value.toLocaleLowerCase();
//     this.setState({ fString });
//   };

//   render() {
//     const { monsters, fString } = this.state;
//     const { onFilterSet } = this;

//     const fMonsters = fString ? monsters.filter(monster => monster.name.toLocaleLowerCase().includes(fString)) : monsters;
//     const dispMonsters = fMonsters.length ? fMonsters : [{ id:-1, name: 'No matches' }];

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className=' monster-search-box'
//           placeholder='Search Monsters by Name'
//           onChangeHandler={onFilterSet}
//         />
//         <CardList listSrc={dispMonsters} />
//       </div>
//     );
//   }  
// }

export default App;
