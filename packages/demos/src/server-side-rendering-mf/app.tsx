import {FeatureAppLoader} from '@feature-hub/react';
import * as React from 'react';

export interface AppProps {
  readonly port?: number;
}

export function App({port}: AppProps): JSX.Element {
  return (
    <FeatureAppLoader
      featureAppId="test:hello-world"
      src="feature-app.umd.js"
      serverSrc={port ? `http://localhost:${port}/remoteEntry.js` : ''}
      css={[
        {href: 'normalize.css'},
        {href: 'blueprint-icons.css'},
        {href: 'blueprint.css'},
      ]}
    />
  );
}
