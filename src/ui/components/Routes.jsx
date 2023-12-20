import { useNavigate } from '@solidjs/router';
import { PAGES_PATH } from 'src/constants/paths';
import { MainMenu } from 'src/pages/children';

const { MAIN_MENU } = PAGES_PATH;

export const routes = [{
  path: MAIN_MENU,
  component: MainMenu
}];

export const Redirect = () => {
  const navigate = useNavigate();
  navigate(`/${MAIN_MENU}`);
  return null;
};
