import { Col, Container, Row, ListGroup } from 'react-bootstrap';
const RightNav = () => {
	return (
		<Col id='pd-side-bar' lg='2' className='d-none d-lg-block border-start'>
			<Container fluid className='sticky-top sticky-offset-sidebar'>
				<Row className='mt-4 ms-2 me-2'>
					<h6 className='border-bottom mb-0 pb-1'>On this Page</h6>
					<ListGroup variant='flush' className='small'>
						<ListGroup.Item action variant='light' className='rounded-2 border-bottom-0'>
							Common Start Page Searches
						</ListGroup.Item>
					</ListGroup>
				</Row>
			</Container>
		</Col>
	);
};
export default RightNav;
