import Header from './components/Header';
import Event from './components/Event';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Event url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p4cVwOKBptyayoZDai7kAiwkRfN5jlFRQoRKEx2aW21iaMX5EZaI62WQ05LC7VAWk8&usqp=CAU" name = "Festa Junia" date =" June 24th" time = "11 AM - 5 PM" des = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum possimus vitae esse, officia exercitationem voluptatem culpa ab mollitia nobis." />
    </div>
  );
}

export default App;


