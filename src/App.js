
import { useEffect, useState } from 'react';
import './App.css';
import Here from './components/here/Here';
import ImageGrid from './components/imagegrid/ImageGrid';
import EventMenu from './components/menuEvents/MenuEvents';
import Menu from './components/menuMagashim/MenuMagashim';
import NavBarNew from './components/NewNav/NavBarNew';
import BasicAccordion from './components/questions/Akordion';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import WorkflowProcess from './components/steps/Steps';
import ByMe from './components/ByMe/ByMe';
import BrunchAccordionExample from './components/ways/Ways';
import TermsButton from './components/takanon/Takanon';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <div class="app">
<NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <Here/>
  <ImageGrid useSecondArray={true}/>
  <BrunchAccordionExample/>
  <Menu/>
  <SecondScreen/>
  {/* <EventMenu/> */}

  <WorkflowProcess/>

  <BasicAccordion/>
  <TermsButton/>
  <ByMe/>
  
  </div>
  </>
}

export default App;
