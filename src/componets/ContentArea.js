import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from './BreadCrumbs';
import ArticleDetail from '../features/articles/ArticleDetail';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

const ContentArea = () => {
	return (
		<>
			<LeftNav />
			<Col id='pd-content-area' lg='8'>
				<Container fluid>
					<BreadCrumbs />
					<Row>
						<ArticleDetail />
					</Row>
				</Container>
			</Col>
			<RightNav />
		</>
	);
};
export default ContentArea;
