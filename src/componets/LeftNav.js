import { useSelector } from 'react-redux';
import { Col, Accordion } from 'react-bootstrap';
import ArticlesList from '../features/articles/ArticlesList';
import { selectArticleCategories } from '../features/articles/articlesSlice';

const LeftNav = () => {
	const categories = useSelector(selectArticleCategories);

	return (
		<Col lg='2' className='d-none d-lg-block border-end'>
			<Accordion flush className='sticky-top sticky-offset-leftnav'>
				{categories.map((category, index) => {
					return (
						<Accordion.Item key={index} eventKey={category}>
							<Accordion.Header>
								<span className='fw-semibold'>{category}</span>
							</Accordion.Header>
							<Accordion.Body>
								<ArticlesList category={category} />
							</Accordion.Body>
						</Accordion.Item>
					);
				})}
			</Accordion>
		</Col>
	);
};
export default LeftNav;
