

import './styles/theme.css'
import './styles/global.css'
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import type React from 'react';
type MainTemplatePros = {
    children: React.ReactNode
}
export function MainTemplate({children}: MainTemplatePros) {

    return(
        <>

        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>
            {children}
        <Container>
            <Footer />
        </Container>

        
        </>
    );
};