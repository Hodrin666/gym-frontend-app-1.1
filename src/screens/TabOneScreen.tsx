import { Button, StyleSheet } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import ImagePicker from 'react-native-image-crop-picker';

const handleImage = () => {
	ImagePicker.openPicker({
		width: 300,
		height: 400,
		cropping: true,
		cropperCircleOverlay: true,
	}).then(image => {
		console.log(image);
	});
};

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<'TabOne'>) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Button title="gggg" onPress={handleImage} />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
