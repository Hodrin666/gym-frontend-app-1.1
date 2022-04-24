import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Raleway_900Black } from '@expo-google-fonts/raleway';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { useEffect, useState } from 'react';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...FontAwesome.font,
					'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
					'raleway-black': require('../../assets/fonts/Raleway-Black.ttf'),
					'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
					'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
					'roboto-thin': require('../../assets/fonts/Roboto-Thin.ttf'),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
