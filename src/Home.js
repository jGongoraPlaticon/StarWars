import './App.css';
import UncontrolledExample from './components/Slider/Slider';
import Text from './components/Text/Text';
import GroupExample from './components/Card/Card';
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div className='App'>

      <UncontrolledExample/>
      <Text/>
      <GroupExample/>
      <Footer/>
    </div>
  )
}

export default Home;