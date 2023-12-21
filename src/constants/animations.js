export const ANIMATION_FIELDS = {
  ANIMATE: 'animate',
  TRANSITION: 'transition',
  EXIT: 'exit'
};

export const MODAL_SHOW_FIELDS = {
  [ANIMATION_FIELDS.ANIMATE]: { scale: [0, 1], opacity: [0, 1] },
  [ANIMATION_FIELDS.TRANSITION]: { duration: 0.15, ease: 'ease-in-out' },
  [ANIMATION_FIELDS.EXIT]: { scale: 0, opacity: 0 }
};