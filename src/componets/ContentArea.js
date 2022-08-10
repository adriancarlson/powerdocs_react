import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from './BreadCrumbs';
import ArticleDetail from '../features/articles/ArticleDetail';

const ContentArea = () => {
	return (
		<Col id='pd-content-area' lg='8'>
			<Container fluid>
				<BreadCrumbs />
				<Row>
					<ArticleDetail />
				</Row>
			</Container>
		</Col>
	);
};
export default ContentArea;
