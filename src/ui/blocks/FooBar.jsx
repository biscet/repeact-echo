import { Motion, Presence } from '@motionone/solid';
import { Index, Show } from 'solid-js';
import {
  ANIMATION_FIELDS, FOO_SHOW_ANIMATION,
  NAV_FOOBAR_BUTTONS, NAV_FOOBAR_BUTTONS_FIELDS
} from 'src/constants';

import 'src/ui/styles/blocks/foo-bar.scss';

const { ANIMATE, TRANSITION } = ANIMATION_FIELDS;
const { LABEL, ICON, BUTTON_COLOR } = NAV_FOOBAR_BUTTONS_FIELDS;

export const FooBar = () => {
  return (
    <footer class="foo-bar">
      <Presence>
        <Show when={true}>
          <Motion.div
            class="foo-bar__container"
            animate={FOO_SHOW_ANIMATION[ANIMATE]}
            transition={FOO_SHOW_ANIMATION[TRANSITION]}
          >
            <Index each={NAV_FOOBAR_BUTTONS}>
              {(button) => {
                return (
                  <button type='button' class={`nav-button nav-button_${button()[BUTTON_COLOR]}`}>
                    <div class="nav-button__content">
                      {button()[ICON]}
                      <p class="nav-button__label">{button()[LABEL]}</p>
                    </div>
                  </button>
                );
              }}
            </Index>
          </Motion.div>
        </Show>
      </Presence>
    </footer>
  );
};