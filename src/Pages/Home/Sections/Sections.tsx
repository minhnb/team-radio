import * as React from 'react';
import { Component } from 'react';
import { AddingSongSection } from './AddingSongSection';
import { CreatingSection } from './CreatingSection';
import { SharingSection } from './SharingSection';

export class Sections extends Component {
  public render() {
    return (
      <main>
        <CreatingSection />
        <AddingSongSection />
        <SharingSection />
      </main>
    );
  }
}
