import { get } from 'src/lib/lodash';
import { $modal, closeModalFn, openModalFn } from './index';
import { MODAL_FIELDS } from 'src/constants';

const { PROPS } = MODAL_FIELDS;

// ================== БЛОК ОБРАБОТКИ ХРАНИЛИЩ ============== //
$modal.reset(closeModalFn).on(openModalFn, (_, modal) => {
  const modalProps = get(modal, PROPS, {});

  return ({
    ...modal,
    [PROPS]: { closeModal: closeModalFn, ...modalProps }
  });
});
