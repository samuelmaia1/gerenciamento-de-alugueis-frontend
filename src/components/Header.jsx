import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import './Header.css'

export function Header(){
    return (
        <>
            <header className='application-header'>
                <nav className='application-header-navbar'>
                    <ChakraLink as={ReactRouterLink} to='/' className='application-header-navbar-link'>Início</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/materiais' className='application-header-navbar-link'>Materiais</ChakraLink>
                    <ChakraLink as={ReactRouterLink} className='application-header-navbar-link'>Aluguéis</ChakraLink>
                    <ChakraLink as={ReactRouterLink} className='application-header-navbar-link'>Clientes</ChakraLink>
                </nav>
          </header>
        </>
    )
}