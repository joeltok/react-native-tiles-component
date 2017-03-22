import React, {Component} from 'react';
import { View } from 'react-native';

// Before push, handle paddingTop and paddingBottom

class TilesComponent extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		// styles: padding, width, height, backgroundColor
		// widthTileNumber, widthTileSpacing
		// heightTileNumber, heightTileSpacing
		// tileColor

		var paddingTop = this.props.style.paddingTop || this.props.style.padding;
		var paddingLeft = this.props.style.paddingLeft || this.props.style.padding;
		var paddingBottom = this.props.style.paddingBottom || this.props.style.padding;
		var paddingLeft = this.props.style.paddingRight || this.props.style.padding;

		var marginTop = this.props.style.marginTop || this.props.style.margin;
		var marginLeft = this.props.style.marginLeft || this.props.style.margin;
		var marginBottom = this.props.style.marginBottom || this.props.style.margin;
		var marginLeft = this.props.style.marginRight || this.props.style.margin;


		var contentHeight = this.props.style.height - this.props.style.paddingTop - this.props.style.paddingBottom;
		var tileHeight = ((contentHeight+this.props.heightTileSpacing) / this.props.heightTileNumber) - this.props.heightTileSpacing;

		var contentWidth = this.props.style.width - this.props.style.paddingLeft - this.props.style.paddingRight;
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
					paddingTop: this.props.style.paddingTop,
					paddingLeft: this.props.style.paddingLeft,
					paddingBottom: this.props.style.paddingBottom,
					paddingRight: this.props.style.paddingRight,
					marginTop: this.props.style.marginTop,
					marginLeft: this.props.style.marginLeft,
					marginBottom: this.props.style.marginBottom,
					marginRight: this.props.style.marginRight,
					flexDirection: 'column',
					backgroundColor: this.props.style.backgroundColor,
				}}
			>
				{content}
			</View>
		)

	}

	componentWillMount() {
	}
}

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

export default TilesComponent;

