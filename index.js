import React, {Component} from 'react';
import { View } from 'react-native';

// Before push, handle paddingTop and paddingBottom

class TilesComponent extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		// styles: padding, width, height
		// widthTileNumber, widthTileSpacing
		// heightTileNumber, heightTileSpacing
		// backgroundColor, tileColor

		var contentHeight = this.props.style.height - this.props.style.padding;
		var tileHeight = ((contentHeight+this.props.heightTileSpacing) / this.props.heightTileNumber) - this.props.heightTileSpacing;

		var contentWidth = this.props.style.width - this.props.style.padding;
		var tileWidth = ((contentWidth+this.props.widthTileSpacing) / this.props.widthTileNumber) - this.props.widthTileSpacing;

		var tileRow = [];
		for (var i = 0; i < this.props.widthTileNumber; i++) {
			tileRow.push(
				<View
					key={'c' + i}
					style={{
						height: tileHeight,
						width: tileWidth,
						backgroundColor: this.props.tileColor
					}}
				/>
			);
			if (i != this.props.widthTileNumber-1) {
				tileRow.push(
					<View
						key={'s' + i}
						style={{
							height: tileHeight,
							width: this.props.widthTileSpacing
						}}
					/>		
				)
			}
		}

		var content = [];
		for (var i = 0; i < this.props.heightTileNumber; i++) {
			content.push(
				<View key={'c' + i} style={{flexDirection: 'row'}}>
					{tileRow}
				</View>
			);
			if (i != this.props.heightTileNumber-1) {
				content.push(
					<View
						key={'s' + i}
						style={{
							height: this.props.heightTileSpacing,
							width: contentWidth
						}}
					/>
				);
			}
		}


		return (
			<View
				style={{
					width: this.props.style.width,
					height: this.props.style.height,
					padding: this.props.style.padding,
					paddingTop: this.props.style.paddingTop,
					paddingLeft: this.props.style.paddingLeft,
					flexDirection: 'column'
				}}
			>
				{content}
			</View>
		)

	}

	componentWillMount() {
	}
}

export default TilesComponent;