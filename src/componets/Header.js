import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import PowerSchoolLogo from '../app/assets/img/powerschool-white.svg';
import { BsPrinterFill } from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa';

const Header = () => {
	const createPDF = async () => {
		const printableContent = document.getElementById('pd-to-pdf');
		var opt = {
			margin: 0.5,
			filename: `${window.location.pathname.split('/').pop()}.pdf`,
			image: { type: 'jpeg', quality: 1 },
			enableLinks: true,
			html2canvas: { dpi: 192, scale: 4, letterRendering: true, useCORS: true },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
		};
		printableContent.classList.add('printable');
		html2pdf()
			.set(opt)
			.from(printableContent)
			.save()
			.then(function (pdf) {
				printableContent.classList.remove('printable');
			});
	};

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
					<button id='pd-pdf-btn' className='btn btn-outline-light btn-lg' onClick={createPDF}>
						<FaFilePdf />
					</button>
					<button id='pd-prnt-btn' className='btn btn-outline-light btn-lg' onClick={(e) => window.print()}>
						<BsPrinterFill />
					</button>
				</div>
			</Container>
		</Navbar>
	);
};

export default Header;
