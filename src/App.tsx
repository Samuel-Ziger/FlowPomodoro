

import './styles/theme.css'
import './styles/global.css'



import { Container } from './components/Container';
import { Logo } from './components/Logo';
import {Menu} from './components/Menu'
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';



export function App() {
// Que todos os componentes que usam "número"
// Saibam das mudanças em seu valor
// Sempre que eu usar useState não vou suar  atribuição diretamente
/*
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
    return(
        <>

        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>

        <Container>
            <CountDown />
        </Container>

        <Container >
            <form className= 'form' action=''>
                <div className="formRow">
                    <DefaultInput
                        //labelText={numero.toString()}
                        labelText='task'
                        id='meuInput' 
                        type='text' 
                        placeholder='Digite algo' 
                    />
                </div>
                <div className="formRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="formRow">
                    <Cycles />
                </div>
                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon />} />
                    
                </div>
            </form>
        </Container>
        <Container>
            <Footer />
        </Container>

        
        </>
    );
};