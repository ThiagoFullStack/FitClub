import './App.css';
import Hero from './Components/Hero';
import Programs from './Components/Programs';
import Reasons from './Components/Reasons';
import Plans from './Components/Plans';
import Testimonials from './Components/Testimonials';
import Join from './Components/Join';
import Footer from './Components/Footer';

//https://fkhadra.github.io/react-toastify/introduction
import { ToastContainer } from 'react-toastify'; // npm install --save react-toastify
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <ToastContainer autoClose={3000}/>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
