import {
  BonusSVG, DailySVG, ThemesSVG, TrophySVG
} from 'src/ui/images/svg';

export const NAV_FOOBAR_BUTTONS_FIELDS = {
  LABEL: 'label',
  ICON: 'icon',
  BUTTON_COLOR: 'buttonColor'
};

export const NAV_FOOBAR_BUTTONS = [
  {
    [NAV_FOOBAR_BUTTONS_FIELDS.LABEL]: 'Bonus',
    [NAV_FOOBAR_BUTTONS_FIELDS.ICON]: () => <BonusSVG class="nav-button_icon" />,
    [NAV_FOOBAR_BUTTONS_FIELDS.BUTTON_COLOR]: 'blue'
  },
  {
    [NAV_FOOBAR_BUTTONS_FIELDS.LABEL]: 'Daily',
    [NAV_FOOBAR_BUTTONS_FIELDS.ICON]: () => <DailySVG class="nav-button_icon" />,
    [NAV_FOOBAR_BUTTONS_FIELDS.BUTTON_COLOR]: 'pink'
  },
  {
    [NAV_FOOBAR_BUTTONS_FIELDS.LABEL]: 'Theme',
    [NAV_FOOBAR_BUTTONS_FIELDS.ICON]: () => <ThemesSVG class="nav-button_icon" />,
    [NAV_FOOBAR_BUTTONS_FIELDS.BUTTON_COLOR]: 'purple'
  },
  {
    [NAV_FOOBAR_BUTTONS_FIELDS.LABEL]: 'Trophy',
    [NAV_FOOBAR_BUTTONS_FIELDS.ICON]: () => <TrophySVG class="nav-button_icon" />,
    [NAV_FOOBAR_BUTTONS_FIELDS.BUTTON_COLOR]: 'yellow'
  }
];