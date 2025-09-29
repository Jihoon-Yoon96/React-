import { createSlice } from "@reduxjs/toolkit";

const modals = createSlice({
    name: "modals",
    initialState: {
        modals: []
    },
    reducers: {
        closeModal: (state, action) => {
            state.modals = state.modals.filter(modal => modal.key !== action.payload);
        },
        openModal: (state, action) => {
            state.modals.push(action.payload);
        },
    }
})

// 커스텀 Thunk
export const openModalWithPromise = (modalprops) => (dispatch) => {
    return new Promise((resolve) => {
        const key = Math.floor(Math.random() * 10000); // 모달 고유 key

        const close = (result, _key) => {
            resolve(result);
            dispatch(modals.actions.closeModal(_key));
        }
        dispatch(modals.actions.openModal({ ...modalprops, key, close }));
    });
}

export const {closeModal} = modals.actions;
export default modals.reducer