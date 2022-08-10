import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';
import '@fontsource/karla';
import { Container, Row } from 'react-bootstrap';
import Header from './componets/Header';
import LeftNav from './componets/LeftNav';
import ContentArea from './componets/ContentArea';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import RightNav from './componets/RightNav';
import { selectArticleCategories } from './features/articles/articlesSlice';
import { formatRoute } from './utils/formatRoute';

function App() {
	const categories = useSelector(selectArticleCategories);
	return (
		<>
			<Header />
			<Container id='pd-main' fluid className='g-0'>
				<Row className='g-0'>
					<LeftNav />
					<Routes>
						<Route path='/' element={<Welcome />} />
						{categories.map((category, index) => {
							return <Route key={index} path={`/${formatRoute(category)}/:name`} element={<ContentArea />} />;
						})}
						<Route path='*' element={<NotFound />} />
					</Routes>
					<RightNav />
				</Row>
			</Container>
		</>
	);
}

export default App;
