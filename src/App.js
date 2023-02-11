import logo from './logo.svg';
import './App.css';
import Customer from './componets/Customer';
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김완준2',
  'birthday': '961212',
  'gender': 'male',
  'job': '억만장자'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍찬의',
  'birthday': '961212',
  'gender': 'male',
  'job': '부자'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '조영민',
  'birthday': '961212',
  'gender': 'male',
  'job': '평범'
},

]
function App() {
  return (

    <div className="App">
      {
        customers.map(c => {
          return(
          <Customer
          key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthdat={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          )
        })
      }
      <header className="App-header">
        <div className="gray-background">
          <img src={logo} lat="logo"></img>
        </div>
      </header>


    </div>


  );
}

export default App;
