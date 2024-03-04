import React from 'react';
import { Image, View } from 'react-native';

const Filter10 = ({
	face: {
		bounds: {
			size: { width: faceWidth, height: faceHeight },
            origin:{x:faceX,y:faceY},
		},
		rollAngle,
	
	},
}) => {
	const glassesWidth = faceWidth;
	const glassesHeight = faceHeight / 3;
    const x_face=faceX;
    const y_face = faceY;


	return (
		<View
			style={{
				position: 'absolute',
				left: x_face,
				top: y_face+50,
			}}>
			<Image
				source={require('../assets/Frapp-09.png')}
				style={{
					width: glassesWidth,
					height: glassesHeight,
					resizeMode: 'contain',
					transform: [{ rotate: `${rollAngle}deg` }],
				}}
			/>
		</View>
	);
};

export default Filter10;

