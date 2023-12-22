export const ANIMATION_FIELDS = {
  ANIMATE: 'animate',
  TRANSITION: 'transition',
  EXIT: 'exit'
};

export const MODAL_SHOW_ANIMATION = {
  [ANIMATION_FIELDS.ANIMATE]: { scale: [0, 1], opacity: [0, 1] },
  [ANIMATION_FIELDS.TRANSITION]: { duration: 0.15 },
  [ANIMATION_FIELDS.EXIT]: { scale: 0, opacity: 0 }
};

export const FOO_SHOW_ANIMATION = {
  [ANIMATION_FIELDS.ANIMATE]: { y: ['115%', 0] },
  [ANIMATION_FIELDS.TRANSITION]: { duration: 0.6 }
};

export const HEADER_SHOW_ANIMATION = {
  [ANIMATION_FIELDS.ANIMATE]: { y: ['-115%', 0] },
  [ANIMATION_FIELDS.TRANSITION]: { duration: 0.6 }
};