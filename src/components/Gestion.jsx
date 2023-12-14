import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Trabajador from './Trabajador'
import { eliminarUnValor, modificarUnValor } from '../store/miSlice'

const Gestion = () => {
    const dispatch = useDispatch();

    const actualizar = (continente, index) => {
        dispatch(modificarUnValor(
            {
                indice: index,
                nuevoContinente: continente
            }
        ))
    }

    const eliminar = (valor) => {
        dispatch(eliminarUnValor(
            {
                nombre: valor.name.first,
                apellido: valor.name.last,
                telefono: valor.cell
            }
        ))
    }

    const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)

    return (
        <>
            <Link to='/candidatos'>
                <button className='trabajadores'>Candidatos</button>
            </Link>
            <h1>TRABAJADORES SELECCIONADOS</h1>

            {listaTrabajadores.length === 0 ? (
                <h3>No seleccionó ningún candidato.</h3>
            ) : (
                <div className='usuarios'>
                    {listaTrabajadores.map((valor, index) =>
                        <Trabajador valor={valor} index={index} onActualizar={actualizar} onEliminar={eliminar} />
                    )}
                </div>
            )}
        </>
    )
}

export default Gestion