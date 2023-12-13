import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
    name: 'misTrabajadores',
    initialState: {
        trabajadores: []
    },
    reducers: {
        agregarUnValor: (state, action) => {
            state.trabajadores = [...state.trabajadores, action.payload]
        },
        modificarUnValor: (state, action) => {
            const { indice, nuevoContinente } = action.payload;
            state.trabajadores[indice].departamento = nuevoContinente;
        },
        eliminarUnValor: (state, action) => {
            const { nombre, apellido, telefono } = action.payload;
            state.trabajadores = state.trabajadores.filter(valor =>
                valor.name.first !== nombre &&
                valor.name.last !== apellido &&
                valor.cell !== telefono
            )
        }
    }
})

export const departamentosSlice = createSlice({
    name: 'misDepartamentos',
    initialState: {
        departamentos: ['África (Ventas)', 'América (Organización)', 'América (Comercial)', 'Asia (Supervisión)', 'Asia (Distribuición)', 'Europa (Distribuición)', 'Europa (Marketing)', 'Ocenía (Distribución)']
    },
    reducers: {

    }
})

export const { agregarUnValor } = miSlice.actions;
export const { modificarUnValor } = miSlice.actions;
export const { eliminarUnValor } = miSlice.actions;