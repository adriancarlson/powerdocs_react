import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from './BreadCrumbs';

const ContentArea = () => {
	return (
		<Col id='pd-content-area' lg='8'>
			<Container fluid>
				<BreadCrumbs />
				<Row>
					<div id='pd-section-0' className='pd-section'>
						<h1 className='mb-4'>Welcome</h1>
						<p style={{ marginBottom: '650px' }}>Welcome to PowerDocs. Please click a guide in the Left side bar</p>
					</div>
				</Row>
			</Container>
		</Col>
	);
};
export default ContentArea;
