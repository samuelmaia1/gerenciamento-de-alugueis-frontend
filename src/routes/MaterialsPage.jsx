import { Header } from "../components/Header"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import './MaterialsPage.css'
import { useEffect, useState } from "react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { CardMaterial } from "../components/CardMaterial"
import { Spinner } from "../components/Spinner"

export function MaterialsPage(){

    const [materials, setMaterials] = useState([])

    const [filtered, setFiltered] = useState(false)

    const [filteredMaterials, setFilteredMaterials] = useState([])

    const [search, setSearch] = useState('')

    const [isLoading, setIsLoading] = useState(true)

    const handleSearch = (e) => {
        const value = e.target.value
        setSearch(value)

        if (value.trim() !== ''){
            setFiltered(true)
        } else {
            setFiltered(false)
        }
        
        setFilteredMaterials(materials.filter((material) => material.nome.toLowerCase().includes(search.toLowerCase())))
    }

    useEffect(() => {
        const loadMaterials = async () => {
            const response = await fetch('http://localhost:3000/materiais')

            const data = await response.json()

            setMaterials(data)
        }

        loadMaterials()
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [materials])

    return (
        <>
            <Header/>
            <FormControl className="form-search">
                <FormLabel>Pesquisar material: </FormLabel>
                <div className="form-search-container-input">
                    <Input variant='outline' placeholder='Nome do material' width={500} className="input-search" value={search} onChange={handleSearch}/>
                    <ChakraLink as={ReactRouterLink} to='/materiais/adicionar' className='form-search-new-material'>Criar novo</ChakraLink>
                </div>
            </FormControl>
            {
                !isLoading? 
                <div className="container-materials">
                {
                    filtered? filteredMaterials?.map((material) => (
                        <CardMaterial material={material} key={material.id}/>
                    ))
                    :
                    materials?.map((material) => (
                        <CardMaterial material={material} key={material.id}/>
                    ))
                    
                }
                </div>
                :
                <div className="container-spinner">
                    <Spinner/>
                </div>
            }
            
        </>
    )
}