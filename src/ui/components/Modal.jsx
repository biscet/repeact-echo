import { Show, createComponent } from 'solid-js';
import { Portal } from 'solid-js/web';
import { useUnit } from 'effector-solid';
import { Motion, Presence } from '@motionone/solid';
import { get, isEmpty } from 'src/lib/lodash';
import { $modal } from 'src/models/Helpers/Modal';
import { MODAL_FIELDS, ANIMATION_FIELDS, MODAL_SHOW_ANIMATION } from 'src/constants';

import 'src/ui/styles/components/modal.scss';

const { CHILDREN, PROPS } = MODAL_FIELDS;
const { ANIMATE, TRANSITION, EXIT } = ANIMATION_FIELDS;

const portalMount = document.getElementById('modal');

const portalRef = (content) => (el) => {
  const className = ['modal-shadow'];
  className.push(!isEmpty(content) ? 'modal-shadow_show' : 'modal-shadow_hidden');
  el.setAttribute('class', className.join(' '));
};

export const Modal = () => {
  const contentModal = useUnit($modal);

  const content = () => get(contentModal(), CHILDREN, false);

  const ContentElement = () => {
    if (!isEmpty(content())) {
      return createComponent(content(), get(contentModal(), PROPS, {}));
    }

    return null;
  };

  return (
    <Portal mount={portalMount} ref={portalRef(content())}>
      <Presence>
        <Show when={!isEmpty(content())}>
          <Motion.div
            animate={MODAL_SHOW_ANIMATION[ANIMATE]}
            transition={MODAL_SHOW_ANIMATION[TRANSITION]}
            exit={MODAL_SHOW_ANIMATION[EXIT]}
          >
            {ContentElement}
          </Motion.div>
        </Show>
      </Presence>
    </Portal>
  );
};