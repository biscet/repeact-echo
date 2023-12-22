import { $loader, setLoadingFn } from './index';

// ================== БЛОК ОБРАБОТКИ ХРАНИЛИЩ ============== //
$loader.on(setLoadingFn, (_, loading) => loading);