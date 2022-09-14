import { Col, Row, Breadcrumb } from 'react-bootstrap';
const BreadCrumbs = ({ article }) => {
	return (
		<Row id='pd-breadcrumbs-container' className='border-bottom sticky-top sticky-offset-breadcrumbs'>
			<Col id='pd-breadcrumbs' className='col-auto me-auto'>
				<Breadcrumb>
					<Breadcrumb.Item href='https://powerschool.cdolinc.net/admin/'>Start Page</Breadcrumb.Item>
					<Breadcrumb.Item href='/'>PowerDocs</Breadcrumb.Item>
					{article && (
						<>
							<Breadcrumb.Item active>{article.category}</Breadcrumb.Item>
							<Breadcrumb.Item active>{article.name}</Breadcrumb.Item>
						</>
					)}
				</Breadcrumb>
			</Col>
			<Col className='col-auto'>{article && article.last_updated && <p className='fst-italic text-muted text-end'>Last Updated: {article.last_updated}</p>}</Col>
		</Row>
	);
};
export default BreadCrumbs;
