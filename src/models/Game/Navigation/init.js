import { GAME_MODES_FIELDS } from 'src/constants';
import {
  $gameModes, unlockAllModesFn, lockAllModesFn, setModeFn
} from './index';

const { CLOSED, LABEL } = GAME_MODES_FIELDS;

// ================== БЛОК ОБРАБОТКИ ХРАНИЛИЩ ============== //
$gameModes
  .reset(lockAllModesFn)
  .on(setModeFn, (modes, setMode) => {
    return modes.map((mode) => {
      if (mode[LABEL] === setMode[LABEL]) {
        return ({ ...mode, [CLOSED]: setMode[CLOSED] });
      }

      return mode;
    });
  })
  .on(unlockAllModesFn, (modes) => {
    return modes.map((mode) => ({ ...mode, [CLOSED]: false }));
  });