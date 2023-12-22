import { $profileName, setProfileNameFn } from './index';

// ================== БЛОК ОБРАБОТКИ ХРАНИЛИЩ ============== //
$profileName.on(setProfileNameFn, (_, name) => name);