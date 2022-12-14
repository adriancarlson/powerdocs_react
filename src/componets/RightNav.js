import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import SectionsList from '../features/sections/SectionsList';
import { HashLink } from 'react-router-hash-link';

const RightNav = ({ article }) => {
	if (article) {
		return (
			<Col id='pd-side-bar' lg='2' className='d-none d-lg-block border-start'>
				<Container fluid className='sticky-top sticky-offset-sidebar'>
					<Row className='pt-1 ms-2 me-2'>
						<h6 className='border-bottom mb-0 pb-1'>On this Page</h6>
						<ListGroup variant='flush' className='small'>
							<HashLink smooth to='#top' className='list-group-item list-group-item-action list-group-item-light rounded-2 border-bottom-0'>
								{article.name}
							</HashLink>
							<SectionsList article={article} />
						</ListGroup>
					</Row>
				</Container>
			</Col>
		);
	}
	return (
		<>
			<Col id='pd-side-bar' lg='2' className='d-none d-lg-block border-start'>
				<Container fluid className='sticky-top sticky-offset-sidebar'></Container>
			</Col>
		</>
	);
};
export default RightNav;
