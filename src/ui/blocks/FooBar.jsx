import { Index } from 'solid-js';
import { NAV_FOOBAR_BUTTONS } from 'src/constants/buttons';

import 'src/ui/styles/blocks/foo-bar.scss';

export const FooBar = () => {
  return (
    <footer class="foo-bar">
      <div class="foo-bar__container">
        <Index each={NAV_FOOBAR_BUTTONS}>
          {(button) => {
            return (
              <div class={`nav-button nav-button_${button().buttonColor}`}>
                <div class="nav-button__content">
                  {button().icon}
                  <p class="nav-button__label">{button().label}</p>
                </div>
              </div>
            );
          }}
        </Index>
      </div>
    </footer>
  );
};