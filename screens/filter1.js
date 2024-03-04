import React from 'react';
import { Image, View } from 'react-native';

const Filter1 = ({
	face: {
		bounds: {
			size: { width: faceWidth, height: faceHeight },
            origin:{x:faceX,y:faceY},
		},
		rollAngle
		//LEFT_EYE,
	//	RIGHT_EYE,
       
	},
}) => {
    
	const glassesWidth = faceWidth;
	const glassesHeight = faceHeight / 3;
    const x_face=faceX;
    const y_face = faceY;

/*	const transformAngle = (
		//angleRad = Math.atan((RIGHT_EYE.y - LEFT_EYE.y) / (RIGHT_EYE.x - LEFT_EYE.x))
        angleRad=Math.atan(y_face/x_face)
	) => (angleRad * 180) / Math.PI;
    */
	return (
		<View
			style={{
				position: 'absolute',
				left: faceX,
				top: faceY+50,
			}}>
			<Image
				source={require('../assets/glasses.png')}
				style={{
					width: glassesWidth,
					height: glassesHeight,
					resizeMode: 'contain',
					transform: [{ rotate: `${rollAngle}deg` }]
				}}
			/>
		</View>
	);
};

export default Filter1;
