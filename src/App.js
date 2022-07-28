import React from 'react';
import './App.scss';
import '@fontsource/karla';
import { Container, Row } from 'react-bootstrap';
import Header from './componets/Header';
import LeftNav from './componets/LeftNav';
import ContentArea from './componets/ContentArea';
import RightNav from './componets/RightNav';

function App() {
	return (
		<>
			<Header />
			<Container id='pd-main' fluid>
				<Row className='g-0'>
					<LeftNav />
					<ContentArea />
					<RightNav />
				</Row>
			</Container>
		</>
	);
}

export default App;
