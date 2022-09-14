import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { selectArticleByName } from '../features/articles/articlesSlice';
import BreadCrumbs from './BreadCrumbs';
import ArticleDetail from '../features/articles/ArticleDetail';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import { deFormatRoute } from '../utils/formatRoute';

const ContentArea = () => {
	const { name: articleName } = useParams();
	const article = useSelector(selectArticleByName(deFormatRoute(articleName)));
	return (
		<>
			<LeftNav article={article} />
			<Col id='pd-content-area' lg='8'>
				<Container fluid className='pb-5'>
					<BreadCrumbs />
					<Row>
						<ArticleDetail />
					</Row>
				</Container>
			</Col>
			<RightNav article={article} />
		</>
	);
};
export default ContentArea;
