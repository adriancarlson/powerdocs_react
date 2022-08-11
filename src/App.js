import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';
import '@fontsource/karla';
import { Container, Row } from 'react-bootstrap';
import Header from './componets/Header';
import ContentArea from './componets/ContentArea';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import { selectArticleCategories } from './features/articles/articlesSlice';
import { formatRoute } from './utils/formatRoute';

function App() {
	const categories = useSelector(selectArticleCategories);
	return (
		<>
			<Header />
			<Container id='pd-main' fluid className='g-0'>
				<Row className='g-0'>
					<Routes>
						<Route path='/' element={<Welcome />} />
						{categories.map((category, index) => {
							return <Route key={index} path={`/${formatRoute(category)}/:name`} element={<ContentArea />} />;
						})}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Row>
			</Container>
		</>
	);
}

export default App;
