import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { deFormatRoute } from '../../utils/formatRoute';
import { selectArticleByName } from './articlesSlice';
import SectionDetailList from '../sections/SectionDetailList';

const ArticleDetail = () => {
	const { name: articleName } = useParams();
	const article = useSelector(selectArticleByName(deFormatRoute(articleName)));
	return (
		article && (
			<>
				<Row className='pd-section'>
					<h1 className='mb-4'>{article.name}</h1>
					<p>{article.description}</p>
					<p>{article.body}</p>
				</Row>
				<SectionDetailList articleId={article.id} />
			</>
		)
	);
};
export default ArticleDetail;
