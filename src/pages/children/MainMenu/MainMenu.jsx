import { useUnit } from 'effector-solid';
import { Index, Show } from 'solid-js';
import { GAME_MODES_FIELDS, GAME_MODES_NAMES } from 'src/constants';
import { $gameModes } from 'src/models/Game/Navigation';
import { LockSVG } from 'src/ui/images/svg';

import 'src/ui/styles/pages/main-menu.scss';

const { LABEL, CLOSED } = GAME_MODES_FIELDS;
const { CLASSIC } = GAME_MODES_NAMES;

export const MainMenu = () => {
  const gameModes = useUnit($gameModes);

  return (
    <div class="main-menu">
      <div class="main-menu__container">
        <Index each={gameModes()}>
          {(mode) => {
            return (
              <button
                type='button'
                disabled={mode()[CLOSED]}
                class={`main-menu__button button ${mode()[LABEL] === CLASSIC ? 'button_big' : ''}`}
              >
                {mode()[LABEL]}

                <Show when={mode()[CLOSED]}>
                  <div class='button__locked-container'>
                    <LockSVG />
                  </div>
                </Show>
              </button>
            );
          }}
        </Index>
      </div>
    </div>
  );
};
