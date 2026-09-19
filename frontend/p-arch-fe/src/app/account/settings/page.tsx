import PageShell from '../../../components/PageShell';
import InfoGrid from '../../../components/InfoGrid';

export default function AccountSettingsPage() {
  const settings = [
    { title: 'Profile', copy: 'Name, email, and preferred contact details.' },
    { title: 'Preferences', copy: 'Marketing updates and archive alerts.' },
  ];

  return (
    <PageShell
      eyebrow="Account"
      title="Settings"
      description="Manage your profile, notifications, and security preferences."
    >
      <InfoGrid
        items={settings}
        renderItem={(setting) => (
          <article key={setting.title} className="panel">
            <h3>{setting.title}</h3>
            <p>{setting.copy}</p>
          </article>
        )}
      />
    </PageShell>
  );
}
