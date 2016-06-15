import {Danika} from './../components/danika-component.jsx';
import React from 'react';

export default (PageCtx, {FlowRouter, mount}, {Components}) =>{
	const{
		CLLayout,
		CLHeader,
		CLDrawer,
		CLHeaderRow,
		CLBody,
		CLNav,
		CLLogo
	} = Components;
	FlowRouter.route('/danika',{
		action: () => {
			mount(PageCtx, {
				content: (
					<CLLayout>
						<CLHeader>
							<CLHeaderRow>
								<CLLogo label="danika" />
								<CLNav links = {[
									{
										url: '/',
										name: 'Home'
									}
								]} />
							</CLHeaderRow>
						</CLHeader>
						<CLDrawer>
							<CLLogo label="danika" />
							<CLNav links = {[
									{
										url: '/',
										name: 'Home'
									}
								]} />
						</CLDrawer>
						<CLBody>
							<div>
								Hello World!!
							</div>
						</CLBody>
					</CLLayout>
				)
			});
		}
	});
}
