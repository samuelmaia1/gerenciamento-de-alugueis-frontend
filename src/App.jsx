import { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Header } from './components/Header'


function App() {
  return (
    <>
      <div className="application">
        <main className="main">
          <Header/>
          <div className='apresentation'>
            <h1>Bem vindo ao gerenciador de Aluguéis!</h1>
            <p>Selecione a opção desejada: </p>
            <div className="apresentation-options">
              <ChakraLink as={ReactRouterLink} className='apresentation-options-link' to='/materiais'>Materiais</ChakraLink>
              <ChakraLink as={ReactRouterLink} className='apresentation-options-link'>Aluguéis</ChakraLink>
              <ChakraLink as={ReactRouterLink} className='apresentation-options-link'>Aluguéis</ChakraLink>
            </div>
          </div>
        </main>
        <footer className='application-footer'>
          Desenvolvido por Samuel Maia
        </footer>
      </div>
    </>
  )
}

export default App
