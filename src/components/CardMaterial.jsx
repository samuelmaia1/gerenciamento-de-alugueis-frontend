import './CardMaterial.css'
import { Link } from 'react-router-dom'
export function CardMaterial({material}){
    return (
        <>
            <Link to={`/materiais/${material.id}`}>
                <div className="card-material">
                    <h3>{material.nome}</h3>
                    <p className='card-material-info'>Aluguel: R{material.preco_aluguel}</p>
                    <p className='card-material-info'>Reposição: R{material.preco_reposicao}</p>
                    <p className='card-material-info'>Tipo: {material.tipo || 'Tipo não registrado'}</p>
                    <p className='card-material-info'>Estoque: {material.estoque || 'Sem estoque'}</p>
                </div>
            </Link>
        </>
    )
}