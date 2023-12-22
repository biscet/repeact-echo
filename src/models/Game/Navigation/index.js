import { createDomain } from 'effector';
import { persist } from 'effector-storage/local';
import { GAME_MODES } from 'src/constants';

export const navigationDomain = createDomain('navigationDomain');

// ===================== ЮНИТЫ СОБЫТИЙ ===================== //
export const unlockAllModesFn = navigationDomain.createEvent();
export const setModeFn = navigationDomain.createEvent();
export const lockAllModesFn = navigationDomain.createEvent();

// ===================== ЮНИТЫ ХРАНИЛИЦ ==================== //
export const $gameModes = navigationDomain.createStore(GAME_MODES, { name: 'gameModes' });

persist({ store: $gameModes });