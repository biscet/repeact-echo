import { createDomain } from 'effector';

export const loaderDomain = createDomain('loaderDomain');

// ===================== ЮНИТЫ СОБЫТИЙ ===================== //
export const setLoadingFn = loaderDomain.createEvent();

// ===================== ЮНИТЫ ХРАНИЛИЦ ==================== //
export const $loader = loaderDomain.createStore(false);
