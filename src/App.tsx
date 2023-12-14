import './App.css';
import { Container } from './components/Container'
import { Greet } from './components/Great'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {

  const personName = {
    first: 'Renata',
    last: 'Keković'
  }

  const nameList = [
    {
      first: 'Miloš',
      last: 'Keković'
    },
    {
      first: 'Renata',
      last: 'Keković'
    },
    {
      first: 'Aleksandar',
      last: 'Keković'
    },
  ]

  return (
    <div className="App">
      <Container styles={{border: '1px solid black', padding: '1rem', margin: '1rem', backgroundColor: 'yellowgreen'}}/>
        <Greet name='Miloš' isLoggedIn={false}/>
        {/* <Person name={personName}/>
        <PersonList names={nameList}/> */}
        <Status status='loading'/>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicaprio</Heading>
        </Oscar>
        <Input value='' handleChange={(event) => console.log(event)}></Input>
        <Button handleClick={(event, id) => {
          console.log('Button clicked!', event, id)
        }}/>
    </div>
  );
}

export default App;
