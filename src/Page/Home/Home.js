import '../../App.css'
import NavScrollExample from '../../components/Navbar/Navbar';
import UncontrolledExample from '../../components/Slider/Slider';
import Text from '../../components/Text/Text';
import GroupExample from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className='App'>
      <NavScrollExample/>
      <UncontrolledExample/>
      <Text/>
      <GroupExample/>
      <Footer/>
    </div>
  )
}

export default Home;