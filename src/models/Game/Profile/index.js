import { createDomain } from 'effector';
import { persist } from 'effector-storage/local';
import { DEFAULT_PROFILE_LEVEL, DEFAULT_PROFILE_NAME } from 'src/constants';

export const profileDomain = createDomain('profileDomain');

// ===================== ЮНИТЫ СОБЫТИЙ ===================== //
export const setProfileNameFn = profileDomain.createEvent();

// ===================== ЮНИТЫ ХРАНИЛИЩ ==================== //
export const $profileName = profileDomain.createStore(DEFAULT_PROFILE_NAME, { name: 'profileName' });
export const $profileLevel = profileDomain.createStore(DEFAULT_PROFILE_LEVEL, { name: 'profileLevel' });

persist({ store: $profileName });
persist({ store: $profileLevel });