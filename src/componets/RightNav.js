import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectArticleByName } from '../features/articles/articlesSlice';
import SectionsList from '../features/sections/SectionsList';
import { deFormatRoute } from '../utils/formatRoute';

const RightNav = () => {
	const { name: articlePath } = useParams();
	const article = useSelector(selectArticleByName(deFormatRoute(articlePath)));

	if (article) {
		const { name: articleName, id: articleId } = article;
		return (
			<Col id='pd-side-bar' lg='2' className='d-none d-lg-block border-start'>
				<Container fluid className='sticky-top sticky-offset-sidebar'>
					<Row className='mt-4 ms-2 me-2'>
						<h6 className='border-bottom mb-0 pb-1'>On this Page</h6>
						<ListGroup variant='flush' className='small'>
							<a href='#top' class='list-group-item list-group-item-action list-group-item-light rounded-2 border-bottom-0'>
								{articleName}
							</a>
							<SectionsList articleId={articleId} />
						</ListGroup>
					</Row>
				</Container>
			</Col>
		);
	}
	return (
		<>
			<Col id='pd-side-bar' lg='2' className='d-none d-lg-block border-start'>
				<Container fluid className='sticky-top sticky-offset-sidebar'></Container>
			</Col>
		</>
	);
};
export default RightNav;
