import { render } from 'solid-js/web';

import 'src/ui/styles/core/colors.scss';
import 'src/ui/styles/core/reset.scss';
import 'src/ui/styles/core/global.scss';

import { App } from 'src/pages/App';

render(() => <App />, document.getElementById('app'));

postMessage({ payload: 'removeLoading' }, '*');
