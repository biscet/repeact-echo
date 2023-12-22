import { Motion, Presence } from '@motionone/solid';
import { Show } from 'solid-js';
import { ANIMATION_FIELDS, HEADER_SHOW_ANIMATION } from 'src/constants';

import 'src/ui/styles/blocks/header.scss';

const { ANIMATE, TRANSITION } = ANIMATION_FIELDS;

export const Header = () => {
  const levelBackground = 'linear-gradient(to right, var(--border-blue, #09b9ff) 30%, transparent 0%)';

  return (
    <header class='header'>
      <Presence>
        <Show when={true}>
          <Motion.div
            class="header__container"
            animate={HEADER_SHOW_ANIMATION[ANIMATE]}
            transition={HEADER_SHOW_ANIMATION[TRANSITION]}
          >
            <div class="header__profile-chip">
              biscet
            </div>

            <div
              class="header__level-chip"
              style={{ background: levelBackground }}
            >
              LEVEL 1
            </div>
          </Motion.div>
        </Show>
      </Presence>
    </header>
  );
};