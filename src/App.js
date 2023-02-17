
import { useState, useEffect } from 'react';
import { Login } from './pages/Login';
import { supabase } from './servidor/Client'
import { useNavigate } from "react-router-dom";
import { Home } from './pages/Home';

function App() {

  const [session, setSession] = useState(false)

  const navegacion = useNavigate();
  
  useEffect(() => {

    const verifyuser = async () => {

      const { data, error } = await supabase.auth.getSession()

      if (!data.session) {
        setSession(false)
        console.log(error)
      } else {
        setSession(true)
      }

    } 
    verifyuser()

  }, [navegacion])



  return (
    <div className="App">
      {session ? <Home/> : <Login session={session} />}
    </div>
  );
}



export default App;
