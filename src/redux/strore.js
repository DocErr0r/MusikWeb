import { configureStore } from '@reduxjs/toolkit'
import playerslice from './slices/playerslice'

export const store = configureStore({
    reducer: {
        playreducer: playerslice,
    }
})