import {useEffect, useState} from 'react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './MaterialInfo.css'

export function MaterialInfo({material, idMaterial}){

    const [alugando, setAlugando] = useState(false)

    const [devolvendo, setDevolvendo] = useState(false)

    const [quantidade, setQuantidade] = useState(0)

    const handleQuantidade = (e) => {
        const value = Number(e.target.value)
        setQuantidade(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        async function alugar(){
            await fetch(`http://localhost:3000/materiais/alugar/${idMaterial}`,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    quantidade: quantidade
                })
            })
        }

        if (material.estoque >= quantidade){
            alugar()
            alert('Alugado com sucesso!')
            location.reload()
        } else {
            alert('Quantidade insuficiente no estoque.')
        }
        
    }

    const handleDevolver = (e) => {
        setAlugando(false)
        setQuantidade(0)
        setDevolvendo(true)
    }
    

    const handleAlugar = (e) => {
        if (material.estoque == 0){
            alert('O material não está disponível. Todas as peças estão alugadas.')
        } else {
            setAlugando(true)
            setDevolvendo(false)
        }
    }

    const handleDeletar = (e) => {
        async function deletar(){
            await fetch(`http://localhost:3000/materiais/deletar/${idMaterial}`, {
                method: 'DELETE'
            })
        }

        const option = confirm('Tem certeza que deseja excluir este item?')

        if (option){
            deletar()
            alert('Material deletado.')
        }
           
    }
    return (
        <>
            <div className="container">
                <div className="container-info">
                    <h1>{material.nome}</h1>
                    <p>Preço de aluguel: R{material.preco_aluguel}</p>
                    <p>Preço de reposição: R{material.preco_reposicao}</p>
                    <p>Tipo de material: {material.tipo}</p>
                    <p>Quantidade em estoque: {material.estoque}</p>
                    <div className="container-buttons">
                        <button className='btn-alugar' onClick={handleAlugar}>Alugar 🚀</button>
                        <button className='btn-alugar' onClick={handleDevolver}>Devolver 📩</button>
                        <button className='btn-alugar' onClick={handleDeletar}>Deletar ❌</button>
                    </div>
                </div>
                {
                    alugando?
                    <>
                        <form className='form-aluguel' onSubmit={handleSubmit}>
                            <div className="container-input">
                                <label htmlFor="quantidade">Informe quantas peças deseja alugar: </label>
                                <Input variant='filled' placeholder='Digite a quantidade de peças:' className="input-form-chakra" name="quantidade" value={quantidade} onChange={handleQuantidade}/>
                                <Button className="btn-alugar" type="submit">Confirmar</Button>
                            </div>
                        </form>
                        
                    </>
                    :
                    <>
                    </>
                }
                {
                    devolvendo?
                    <>
                        <form className='form-devolucao' onSubmit={handleSubmit}>
                            <div className="container-input">
                                <label htmlFor="quantidade">Informe quantas peças deseja devolver: </label>
                                <Input variant='filled' placeholder='Digite a quantidade de peças:' className="input-form-chakra" name="quantidade" value={quantidade} onChange={handleQuantidade}/>
                                <Button className="btn-submit-form-register" type="submit">Confirmar ✅</Button>
                            </div>
                        </form>
                    </>
                    :
                    <>
                    </>
                }
            </div>
        </>
    )
}