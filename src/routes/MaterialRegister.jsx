import { Header } from "../components/Header";
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './MaterialRegister.css'
import { useState } from "react";

export function MaterialRegister(){

    const [name, setName] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }

    const [rent_price, setRent_Price] = useState('')
    const handleRent_Price = (e) => {
        setRent_Price(e.target.value)
    }


    const [reposition_price, setReposition_Price] = useState('')
    const handleReposition_Price = (e) => {
        setReposition_Price(e.target.value)
    }


    const [type, setType] = useState('')
    const handleType = (e) => {
        setType(e.target.value)
    }

    const [stock, setStock] = useState(0)
    const handleStock = (e) => {
        setStock(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const insertData = async () => {
            const response = await fetch('http://localhost:3000/materiais/adicionar', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nome: name,
                    preco_aluguel: rent_price,
                    preco_reposicao: reposition_price,
                    tipo: type,
                    estoque: stock
                })
            })

            console.log(response)

            if (response.ok){
                alert('Adicionado com sucesso!')
                setName('')
                setRent_Price('')
                setReposition_Price('')
                setType('')
                setStock('')
            } else {
                console.log(response)
                alert('Erro ao adicionar produto.')
            }
        }

        insertData()
    }

    return (
        <>
            <Header/>
            <h1 className="page-title">Cadastre um novo produto!</h1>
            <form className="form-material-register" onSubmit={handleSubmitForm}>
                
                <div className="form-register-container-input">
                    <label htmlFor="nome">Nome do material: </label>
                    <Input variant='filled' placeholder='Nome do material' className="input-form-chakra" name="nome" value={name}  onChange={handleName}/>
                </div>
                <div className="form-register-container-input">
                    <label htmlFor="preco-aluguel">Preço do aluguel:</label>
                    <Input variant='filled' placeholder='Exemplo: 25.00' className="input-form-chakra" name="preco-aluguel" value={rent_price} onChange={handleRent_Price}/>
                </div>
                <div className="form-register-container-input">
                    <label htmlFor="preco-reposicao">Preço da reposição: </label>
                    <Input variant='filled' placeholder='Exemplo: 100.00' className="input-form-chakra" name="preco-reposicao" value={reposition_price} onChange={handleReposition_Price}/>
                </div>
                <div className="form-register-container-input">
                    <label htmlFor="tipo">Tipo do material: </label>
                    <Input variant='filled' placeholder='Acrílico, Ferro, Madeira...' className="input-form-chakra" name="tipo" value={type} onChange={handleType}/>
                </div>
                <div className="form-register-container-input">
                    <label htmlFor="estoque">Estoque: </label>
                    <Input variant='filled' placeholder='Acrílico, Ferro, Madeira...' className="input-form-chakra" name="estoque" value={stock} onChange={handleStock}/>
                </div>
                <Button className="btn-submit-form-register" type="submit">Criar</Button>
            </form>
        </>
    )
}