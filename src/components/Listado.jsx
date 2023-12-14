import React, { useEffect, useState } from 'react'
import Candidato from './Candidato'
import { useDispatch, useSelector } from 'react-redux'
import { agregarUnValor } from '../store/miSlice'
import { Link } from 'react-router-dom'

const Listado = () => {
    const [candidatos, setCandidatos] = useState([])
    const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=9')
            .then((response) => response.json())
            .then((datos) => setCandidatos(datos.results))
    }, [])

    const buscarUno = (indice) => {
        fetch('https://randomuser.me/api/?results=1')
            .then((response) => response.json())
            .then((datos) => {
                const provisional = [...candidatos]
                provisional[indice] = { ...datos.results[0] }
                setCandidatos(provisional)
            })
    }

    const guardarUno = (valor, index) => {
        const nuevoValor = { ...valor, departamento: '' }
        dispatch(agregarUnValor(nuevoValor))
        buscarUno(index)
    }

    return (
        <>
          
            <h1>CANDIDATOS DISPONIBLES</h1>

            <div className='presentacion'>
                {candidatos.map((valor, index) =>
                    <Candidato valor={valor} index={index} onBuscarUno={buscarUno} onGuardarUno={guardarUno} />
                )}
                  <Link to='/gestion'> <button className='trabajadores'>Seleccionados</button></Link>
            </div>
            <hr />
            
            <div className='candidatos'>
                {listaTrabajadores.map((valor, i) =>
                    <Link key={i} to='/gestion'> <button>{valor.name.first}</button> </Link>
                )}
            </div>

        </>
    )
}

export default Listado