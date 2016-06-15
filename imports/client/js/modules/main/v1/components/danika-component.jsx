import React from 'react';

export class Danika extends React.Component{
	render(){
		const {children} = this.props;
		return(
			<div>
				Hello {React.Children.map(children, child=>(child))}
			</div>
		);
	}
}
