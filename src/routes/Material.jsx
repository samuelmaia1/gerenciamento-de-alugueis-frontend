import { useParams } from 'react-router-dom'
import {Header} from '../components/Header'
import { useEffect, useState } from 'react'
import {MaterialInfo} from '../components/MaterialInfo'
import { Spinner } from '../components/Spinner'
import './Material.css'

export function Material(){
    const {id} = useParams()

    const [material, setMaterial] = useState(null)

    useEffect(() => {
        async function getMaterial(){

            const response = await fetch(`http://localhost:3000/materiais/${id}`)

            const data = await response.json()

            setMaterial(data)
        }

        getMaterial()

    }, [id])

    useEffect(() => {
        console.log(material)
    }, [material])

    return (
        <>
            <Header/>
            <div>
                {material ? 
                <MaterialInfo material={material} idMaterial={id}/>
                :
                <div className="container-spinner">
                    <Spinner/>
                </div>
                }
            </div>
        </>
    )
}