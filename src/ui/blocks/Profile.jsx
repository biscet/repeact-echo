import 'src/ui/styles/blocks/header.scss';

export const Profile = () => {
  const levelBackground = 'linear-gradient(to right, var(--border-blue, #09b9ff) 30%, transparent 0%)';

  return (
    <header class='header'>
      <div class="header__profile-chip">
        biscet
      </div>

      <div
        class="header__level-chip"
        style={{ background: levelBackground }}
      >
        LEVEL 1
      </div>
    </header>
  );
};