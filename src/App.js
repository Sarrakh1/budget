import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Income />
      case 3:
        return <Expenses />
      case 4: 
        return <Dashboard />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  background-color: #303030;
  main{
    flex: 1;
    background:  #4d4d4d;
    border: 3px solid #303030;

    border-radius: 32px;
    overflow-x: hidden;)
  }
`;

export default App;
