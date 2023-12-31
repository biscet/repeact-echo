export const GAME_MODES_FIELDS = {
  LABEL: 'label',
  PATH: 'path',
  CLOSED: 'closed'
};

export const GAME_MODES_NAMES = {
  CLASSIC: 'Classic Mode',
  TIME_ATTACK: 'Time Attack Mode',
  ENDLESS: 'Endless Mode',
  LANGUAGE_CHALLENGE: 'Language Challenge Mode',
  CUSTOM: 'Custom Mode'
};

export const GAME_MODES = [
  {
    [GAME_MODES_FIELDS.LABEL]: GAME_MODES_NAMES.CLASSIC,
    [GAME_MODES_FIELDS.PATH]: '',
    [GAME_MODES_FIELDS.CLOSED]: false
  },
  {
    [GAME_MODES_FIELDS.LABEL]: GAME_MODES_NAMES.TIME_ATTACK,
    [GAME_MODES_FIELDS.PATH]: '',
    [GAME_MODES_FIELDS.CLOSED]: true
  },
  {
    [GAME_MODES_FIELDS.LABEL]: GAME_MODES_NAMES.ENDLESS,
    [GAME_MODES_FIELDS.PATH]: '',
    [GAME_MODES_FIELDS.CLOSED]: true
  },
  {
    [GAME_MODES_FIELDS.LABEL]: GAME_MODES_NAMES.LANGUAGE_CHALLENGE,
    [GAME_MODES_FIELDS.PATH]: '',
    [GAME_MODES_FIELDS.CLOSED]: true
  },
  {
    [GAME_MODES_FIELDS.LABEL]: GAME_MODES_NAMES.CUSTOM,
    [GAME_MODES_FIELDS.PATH]: '',
    [GAME_MODES_FIELDS.CLOSED]: true
  }
];