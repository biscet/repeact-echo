import { Index } from 'solid-js';
import { NAV_FOOBAR_BUTTONS, NAV_FOOBAR_BUTTONS_FIELDS } from 'src/constants';

import 'src/ui/styles/blocks/foo-bar.scss';

const { LABEL, ICON, BUTTON_COLOR } = NAV_FOOBAR_BUTTONS_FIELDS;

export const FooBar = () => {
  return (
    <footer class="foo-bar">
      <div class="foo-bar__container">
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
      </div>
    </footer>
  );
};