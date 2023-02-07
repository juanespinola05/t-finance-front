import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Person {
  id: number
  name: string
}

interface PersonState {
  people: Person[]
}

const INITIAL_STATE: PersonState = {
  people: []
}

export const fetchPerson = createAsyncThunk('person/fetch', async (thunkAPI) => {
  const response = await fetch('http://localhost:3000/person', {
    method: 'GET'
  })
  const data = await response.json()
  return data
})

export const savePerson = createAsyncThunk('person/save', async (name: string, thunkApi) => {
  const response = await fetch('http://localhost:3000/person', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name
    })
  })
  const data = await response.json()
  return data
})

export const PersonSlice = createSlice({
  name: 'people',
  initialState: INITIAL_STATE,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.people.push({
        name: action.payload.name,
        id: state.people.length
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.people = action.payload
    })
    // builder.addCase(fetchPerson.rejected, )
    builder.addCase(savePerson.fulfilled, (state, action) => {
      state.people.push(action.payload)
    })
  }
})

export default PersonSlice
export const { addPerson } = PersonSlice.actions
