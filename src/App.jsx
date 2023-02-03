import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<React.Fragment>
			<Header setOpen={setOpen} open={open} />
			<div className={`sm:block ${!open && `hidden`}`}>
				<Navbar />
			</div>
		</React.Fragment>
	);
}

export default App;
