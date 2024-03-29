import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import userReducer from './slices/auth.slice'
import balanceReducer from './slices/balance.slice'
import appReducer from './slices/app.slice'
import limitReducer from './slices/limit.slice'
import operationsReducer from './slices/operations.slice'

export const store = configureStore({
  reducer: {
    auth: userReducer,
    balance: balanceReducer,
    app: appReducer,
    limit: limitReducer,
    operations: operationsReducer
  },
  devTools: true
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
