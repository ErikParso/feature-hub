import { createFeatureHub } from '@feature-hub/core';
import { defineExternals, loadAmdModule } from '@feature-hub/module-loader-amd';
import { FeatureAppLoader, FeatureHubContextProvider } from '@feature-hub/react';
import * as MaterialUI from '@material-ui/core';
import * as MaterialUIStyles from '@material-ui/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

defineExternals({
	'react': React,
	'react-dom': ReactDOM,
	'@material-ui/core': MaterialUI,
	'@material-ui/styles': MaterialUIStyles
});

const { featureAppManager } = createFeatureHub('test:integrator', {
	moduleLoader: loadAmdModule,
	providedExternals: {
		react: process.env.REACT_VERSION as string
	}
});

ReactDOM.render(
	<div style={{ background: 'gray' }}>
		<FeatureHubContextProvider value={{ featureAppManager }}>
			<FeatureAppLoader
				featureAppId="test:fuel-savings"
				src="https://skoda-fuel-savings-calculator-dev.azurewebsites.net/feature-app/fuel-savings-calculator.min.js"
				config={{
					endpoint: 'https://skoda-fuel-savings-calculator-dev.azurewebsites.net',
					bid: '260',
					culture: 'cs-cz',
					isPreview: true
					// other widget settings
				}}
			/>
		</FeatureHubContextProvider>
	</div>,
	document.querySelector('main')
);
