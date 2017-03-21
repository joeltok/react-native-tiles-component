# React Native Tiles Component
A simple design component made up of equally sized and spaced tiles.

How to use it:

```js
import React, {Component} from 'react';
import TilesComponent from 'react-native-tiles-component';
	
class TilesComponent extends Component {

	render() {
	 	<TilesComponent
	 		style={{
	 			width: moveOuterSize, 
	 			height: moveOuterSize, 
	 			padding: 10, 
	 			paddingTop: 0, 
	 			paddingLeft: 0
	 		}}
	 		widthTileNumber={5}
	 		widthTileSpacing={4}
	 		heightTileNumber={5}
	 		heightTileSpacing={4}
	 		tileColor={defaultStyles.colors.contentBackground}
	 	/>
	}

}

```

## TilesComponent props
| Prop | Type | Description |
:----------------- |:-----------:| :-----|
| style.width | number | Width of Component. |
| style.height | number | Height of Component.  |
| style.padding | number | Optional. Defaults to null. |
| style.padding[Top, Left, Bottom, Right] | number | Optional. |
| style.backgroundColor | color code | Optional. Defaults to null. |
| widthTileNumber | number | Number of columns of tiles. |
| widthTileSpacing | number | Horizontal spacing between tiles in pixels. |
| heightTileNumber | number | Number of rows of tiles. |
| heightTileSpacing | number | Vertical spacing between tiles in pixels. |
| tileColor | color code | Optional. But has to be different from backgroundColor or it will change. |
