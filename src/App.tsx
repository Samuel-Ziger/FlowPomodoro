

import './styles/theme.css'
import './styles/global.css'
import { Home } from './pages/Home';



export function App() {

import { Heading } from './components/Heading';
import { useState } from 'react';
const [numero, setNumero] = useState(() => {
    console.log('Lazy initialization')
    return 0;
});
const [numero, setNumero] = useState(0)
 function handleClick(){
//setNumero ( preveState => preveState + 1 );
setNumero(1);
<Heading>Numero:{numero}</Heading>
<button onClick={handleClick}>Auemnta</button>
}*/
    return <Home />
    
};