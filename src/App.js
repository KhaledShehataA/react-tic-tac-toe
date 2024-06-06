import { useState } from 'react';
import Cell from './Components/Cell';

const App = () => {
	const [Cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
	return (
		<div className='app'>
			<div className='gameboard'>
				{Cells.map((cell, index) => (
					<Cell key={index} id={index} cell={cell} />
				))}
			</div>
			<p></p>
		</div>
	);
};

export default App;
