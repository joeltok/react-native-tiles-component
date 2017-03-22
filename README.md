# React Native Tiles Component (Work-In-Progress, not usable yet)
A simple design component made up of equally sized and spaced tiles.

How to use it:

```js
import React, {Component} from 'react';
import TilesComponent from 'react-native-tiles-component';
	
class TilesComponent extends Component {

	render() {
	 	<TilesComponent
	 		style={{
	 			width: 200, 
	 			height: 200, 
	 			padding: 10
	 		}}
	 		widthTileNumber={5}
	 		widthTileSpacing={4}
	 		heightTileNumber={5}
	 		heightTileSpacing={4}
	 		tileColor={'#A8A8A8'}
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
| tileColor | color code | Optional. But has to be different from backgroundColor or the tiles will not be visible. |

Left to do: 
- Generalize code to include parts about padding
- Test with actual react native app