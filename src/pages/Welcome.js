import { Container, Row, Col } from 'react-bootstrap';
import BreadCrumbs from '../componets/BreadCrumbs';
import LeftNav from '../componets/LeftNav';
import RightNav from '../componets/RightNav';

const Welcome = () => {
	return (
		<>
			<LeftNav />
			<Col id='pd-content-area' lg='8'>
				<Container fluid>
					<BreadCrumbs />
					<Row>
						<div id='pd-section-0' className='pd-section'>
							<h1 className='mb-4'>Welcome</h1>
							<p className='blank-full-height'>Welcome to PowerDocs. Please click a guide in the Left side bar</p>
						</div>
					</Row>
				</Container>
			</Col>
			<RightNav />
		</>
	);
};
export default Welcome;
