import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import userReducer from './slices/auth.slice'
import balanceReducer from './slices/balance.slice'

export const store = configureStore({
  reducer: {
    auth: userReducer,
    balance: balanceReducer
  }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
