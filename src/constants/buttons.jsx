import {
  BonusSVG, DailySVG, ThemesSVG, TrophySVG
} from 'src/ui/images/svg';

export const NAV_BUTTONS = [
  {
    label: 'Bonus',
    icon: <BonusSVG class="nav-button_icon" />,
    buttonColor: 'blue'
  },
  {
    label: 'Daily',
    icon: <DailySVG class="nav-button_icon" />,
    buttonColor: 'pink'
  },
  {
    label: 'Theme',
    icon: <ThemesSVG class="nav-button_icon" />,
    buttonColor: 'purple'
  },
  {
    label: 'Trophy',
    icon: <TrophySVG class="nav-button_icon" />,
    buttonColor: 'yellow'
  }
];