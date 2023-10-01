import React from 'react';
import { useParams } from 'react-router-dom';

export function Category() {
	const { categoryId } = useParams();
	return (
		<React.Fragment>
			<p>{categoryId}</p>
		</React.Fragment>
	);
}
