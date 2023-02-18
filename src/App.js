
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {getsession} from './services/services'


function App() {

  const navegacion = useNavigate();
  
  useEffect(() => {

    const verifyuser = async () => {

      if (!getsession.data) {
        navegacion('/login')
      } else {
        navegacion('/home')
      }

    } 
    verifyuser()

  }, [navegacion])

}



export default App;
