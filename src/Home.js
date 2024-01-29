import Header from './components/Header'
import Banner from './components/Banner';
import Session1 from './components/Session1';
function App() { 
  return (
    <div className=' bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen'>
      <div className="container mx-auto ">
      <Header />
      <Banner />
      <Session1 />
      </div>
    </div>
  );
}


export default App;
