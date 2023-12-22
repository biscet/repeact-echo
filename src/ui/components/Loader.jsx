import { Show, createEffect } from 'solid-js';
import { useUnit } from 'effector-solid';
import { $loader } from 'src/models/Helpers/Loader';
import { Portal } from 'solid-js/web';

import 'src/ui/styles/components/loader.scss';

const loaderMount = document.getElementById('loader');

const loaderRef = (el) => {
  el.setAttribute('class', 'loader-shadow');
};

export const Loader = () => {
  const loading = useUnit($loader);

  createEffect(() => {
    if (loading()) {
      loaderMount.setAttribute('class', 'loader_show');
    } else {
      loaderMount.setAttribute('class', 'loader_hidden');
    }
  });

  return (
    <Show when={loading()}>
      <Portal mount={loaderMount} ref={loaderRef}>
        <svg
          id="svg-loader"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 500.00001 500.00001"
        >
          <g>
            <path id="b0" d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z" />
            <path id="b2" d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z" />
            <path id="b1" d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z" />
            <path id="b3" d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z" />
            <path id="b4" d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z" />
          </g>
        </svg>
      </Portal>
    </Show>
  );
};