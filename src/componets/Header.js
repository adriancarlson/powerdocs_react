import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar } from 'react-bootstrap';
import PowerSchoolLogo from '../app/assets/img/powerschool-white.svg';
import { BsPrinterFill } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa';

const Header = () => {
	return (
		<Navbar bg='Primary' sticky='top' variant='dark' className='pd-navbar'>
			<Container fluid>
				<LinkContainer to='/'>
					<Navbar.Brand href='/' className='ms-2'>
						<img alt='PowerSchool Logo' src={PowerSchoolLogo} width='30' height='40' className='d-inline-block align-text-center' />
						<span className='ps-2 fs-4 fw-semibold pd-font'> PowerDocs </span>
					</Navbar.Brand>
				</LinkContainer>
				<div className='d-flex btn-group me-2'>
					<button id='pd-pdf-btn' className='btn btn-outline-light btn-lg'>
						<FaFilePdf />
					</button>
					<button id='pd-prnt-btn' className='btn btn-outline-light btn-lg'>
						<BsPrinterFill />
					</button>
				</div>
			</Container>
		</Navbar>
	);
};

export default Header;
