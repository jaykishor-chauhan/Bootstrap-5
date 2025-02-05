import Accodians from './Accodians';
import './App.css';
// import Grid from './Grid';
import Navbar from './Navbar'
import PricingCard from './PricingCard';
import Tutorial05 from './Tutorial05';
// import Container from './Container';
// import Button from './Button';
// import Tutorial03 from './Tutorial03';
// import Tutorial01 from './Tutorial01';

function App() {
  return (
    <div className="">
      <Navbar/>
      {/* <Tutorial01 /> */}
      {/* <Button/> */}
      {/* <Tutorial03/> */}
      {/* <Container /> */}
      {/* <Grid/> */}
      <Tutorial05/>
      <PricingCard/>
      <Accodians/>
    </div>
  );
}

export default App;