import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row, Breadcrumb } from 'react-bootstrap';
import { deFormatRoute } from '../utils/formatRoute';
import { selectArticleByName } from '../features/articles/articlesSlice';

const BreadCrumbs = () => {
	const { name: articleName } = useParams();
	const article = useSelector(selectArticleByName(deFormatRoute(articleName)));
	return (
		<Row id='pd-breadcrumbs-container' className='border-bottom mt-2 sticky-top sticky-offset-breadcrumbs'>
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
			<Col className='col-auto'>{article && <p className='fst-italic text-muted text-end'>Last Updated: {article.last_updated}</p>}</Col>
		</Row>
	);
};
export default BreadCrumbs;
