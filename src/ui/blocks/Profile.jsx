import 'src/ui/styles/blocks/profile.scss';

export const Profile = () => {
  const levelBackground = 'linear-gradient(to right, var(--border-blue, #09b9ff) 0%, transparent 0%)';

  return (
    <>
      <div class="profile-chip">
        biscet
      </div>

      <div
        class="level-chip"
        style={{ background: levelBackground }}
      >
        LEVEL 1
      </div>
    </>
  );
};