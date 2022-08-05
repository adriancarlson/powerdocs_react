import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import ArticleDetail from '../features/articles/ArticleDetail';

const ContentArea = () => {
	const { state: articleName } = useLocation();
	return (
		<Col id='pd-content-area' lg='8'>
			<Container fluid>
				<BreadCrumbs />
				<Row>
					<ArticleDetail articleName={articleName} />
				</Row>
			</Container>
		</Col>
	);
};
export default ContentArea;
