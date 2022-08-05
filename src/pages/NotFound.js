import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from '../componets/BreadCrumbs';

const NotFound = () => {
	return (
		<Col id='pd-content-area' lg='8'>
			<Container fluid>
				<BreadCrumbs />
				<Row>
					<div id='pd-section-0' className='pd-section'>
						<h1 className='mb-4'>Not Found</h1>
						<p className='blank-full-height'>Sorry the page you requested is not found or does not exist</p>
					</div>
				</Row>
			</Container>
		</Col>
	);
};
export default NotFound;
