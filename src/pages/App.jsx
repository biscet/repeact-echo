import { Router, Route, Routes } from '@solidjs/router';
import { Index } from 'solid-js';
import { FooBar, Profile } from 'src/ui/blocks';
import {
  routes, Redirect, Modal, Loader
} from 'src/ui/components';

export const App = () => {
  return (
    <Router>
      <Profile />

      <Routes>
        <Index each={routes}>
          {(linkRoute) => {
            return (
              <Route
                path={`/${linkRoute().path}`}
                component={linkRoute().component}
              />
            );
          }}
        </Index>

        <Route path="*" component={Redirect} />
      </Routes>

      <FooBar />
      <Modal />
      <Loader />
    </Router>
  );
};
