import { createDomain } from 'effector';

export const loaderDomain = createDomain('loaderDomain');

// ===================== ЮНИТЫ СОБЫТИЙ ===================== //
export const setLoadingFn = loaderDomain.createEvent();

// ===================== ЮНИТЫ ХРАНИЛИЩ ==================== //
export const $loader = loaderDomain.createStore(false);
