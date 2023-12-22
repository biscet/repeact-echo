import { Motion, Presence } from '@motionone/solid';
import { useUnit } from 'effector-solid';
import { Show } from 'solid-js';
import {
  ANIMATION_FIELDS, HEADER_SHOW_ANIMATION, PROFILE_LEVEL_FIELDS
} from 'src/constants';
import { $profileLevel, $profileName } from 'src/models/Game/Profile';

import 'src/ui/styles/blocks/header.scss';

const { ANIMATE, TRANSITION } = ANIMATION_FIELDS;
const { LEVEL, PERCENT_FOR_LEVEL } = PROFILE_LEVEL_FIELDS;

const levelBackground = (percent) => ({
  background: (
    `linear-gradient(to right, var(--border-blue, #09b9ff) ${percent}%, transparent 0%)`
  )
});

export const Header = () => {
  const { name, levelInfo } = useUnit({
    name: $profileName,
    levelInfo: $profileLevel
  });

  return (
    <header class='header'>
      <Presence>
        <Show when={true}>
          <Motion.div
            class="header__container"
            animate={HEADER_SHOW_ANIMATION[ANIMATE]}
            transition={HEADER_SHOW_ANIMATION[TRANSITION]}
          >
            <div class="header__profile-chip">{name()}</div>

            <div
              class="header__level-chip"
              style={levelBackground(levelInfo()[PERCENT_FOR_LEVEL])}
            >
              LEVEL {levelInfo()[LEVEL]}
            </div>
          </Motion.div>
        </Show>
      </Presence>
    </header>
  );
};