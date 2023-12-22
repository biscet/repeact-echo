import { createDomain } from 'effector';

export const modalDomain = createDomain('modalDomain');

// ===================== ЮНИТЫ СОБЫТИЙ ===================== //
export const openModalFn = modalDomain.createEvent();
export const closeModalFn = modalDomain.createEvent();

// ===================== ЮНИТЫ ХРАНИЛИЩ ==================== //
export const $modal = modalDomain.createStore({});
