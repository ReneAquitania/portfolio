import './App.css';
import ContactLinks from './ContactLinks';
import Header from './Header';

function App() {
  return (
    <div className="w-full h-screen grid overflow-auto bg-gradient-to-t from-zinc-800 to-zinc-900">
      <Header />
      <ContactLinks />
    </div>
    
  );
}

export default App;
