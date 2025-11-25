'use client';
// About page (Client Component - required for MUI/client-side hooks)
import MainTemplate from 'components/templates/MainTemplate';
import { Button } from '../../dist/standard-bank-react';

export default function AboutPage() {
  return (
    <MainTemplate>
      <Button>Button text</Button>
      <h1>About</h1>
      <p>This page demonstrates an additional route using the App Router.</p>
    </MainTemplate>
  );
}
