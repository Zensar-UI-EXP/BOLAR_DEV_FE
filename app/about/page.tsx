// About page (Server Component)
import MainTemplate from 'components/templates/MainTemplate';

export const metadata = {
  title: 'About - Next 15 Atomic Scaffold',
};

export default function AboutPage() {
  return (
    <MainTemplate>
      <h1>About</h1>
      <p>This page demonstrates an additional route using the App Router.</p>
    </MainTemplate>
  );
}
