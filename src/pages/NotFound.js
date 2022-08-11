import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from '../componets/BreadCrumbs';
import LeftNav from '../componets/LeftNav';
import RightNav from '../componets/RightNav';

const NotFound = () => {
	return (
		<>
			<LeftNav />
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
			<RightNav />
		</>
	);
};
export default NotFound;
