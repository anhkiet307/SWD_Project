import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cards: []
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards: (state, actions ) => {
            state.cards = actions.payload.cards
        },
        addCard: (state, actions ) => {
            state.cards = [...state.cards, actions.payload.cards]
        },
        updateCard: (state, actions) => {
            console.log(actions.payload)
            const newData = state.cards.map(item => {
                if(Number(item.id) === Number(actions.payload.card.id)){
                    return {
                        ...actions.payload.card
                    }
                }
                return item
            })
            state.cards = newData

        },
        removeCard: (state, actions) => {
            const index = state.cards.findIndex(item => Number(item.id) == Number(actions.payload.id))
            state.cards.splice(index, 1)
        }
    }
})

export const { setCards, addCard, updateCard, removeCard } = cardsSlice.actions

export default cardsSlice.reducer