import { createDomain, sample } from 'effector';
import { persist } from 'effector-storage/local';
import { createForm } from 'effector-forms';
import { DEFAULT_PROFILE_LEVEL, DEFAULT_PROFILE_NAME, PROFILE_NAME_FIELD } from 'src/constants';
import { rules } from 'src/lib/rules';

export const profileDomain = createDomain('profileDomain');

// ===================== ЮНИТЫ СОБЫТИЙ ===================== //
export const setProfileNameFn = profileDomain.createEvent();

// ===================== ЮНИТЫ ХРАНИЛИЩ ==================== //
export const $profileName = profileDomain.createStore(DEFAULT_PROFILE_NAME, { name: 'profileName' });
export const $profileLevel = profileDomain.createStore(DEFAULT_PROFILE_LEVEL, { name: 'profileLevel' });

persist({ store: $profileName });
persist({ store: $profileLevel });

// ====================== ЮНИТЫ ФОРМ ======================= //
export const playerNameForm = createForm({
  fields: {
    [PROFILE_NAME_FIELD]: {
      rules: [rules.required()],
      init: '',
      validateOn: ['onchange']
    }
  },
  validateOn: ['submit'],
  domain: profileDomain
});

sample({
  clock: playerNameForm.formValidated,
  fn: (e) => {
    console.log('sumbit', e);
  }
});