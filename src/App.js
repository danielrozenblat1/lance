
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
  <SecondScreen/>
  <WorkflowProcess/>
  <Menu/>
  <EventMenu/>
  <Here/>
  <BasicAccordion/>
  </div>
  </>
}

export default App;
