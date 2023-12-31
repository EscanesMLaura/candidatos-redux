import React from 'react'

const Candidato = ({ valor, index, onBuscarUno, onGuardarUno }) => {

    return (
        <>
            <div className='usuario'>
                <div className='foto'>
                    <img src={valor.picture.large} alt='' />
                </div>
                <div className='datos'>
                    <div className='nombre'>{valor.name.title}. {valor.name.first} {valor.name.last}</div>
                    <div> Ubicación: {valor.location.city} ({valor.location.country})</div>
                    <div className="enlace-estilo">{valor.email}</div>
                    <div className="enlace-estilo">{valor.phone}</div>
                </div>
                <div className='botones'>
                    <button onClick={() => onBuscarUno(index)} className='rojo'>Ocultar</button>
                    <button onClick={() => onGuardarUno(valor, index)} className='verde'>Guardar</button>
                </div>
            </div>
        </>
    )
}

export default Candidato