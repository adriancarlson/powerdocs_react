import { useSelector } from 'react-redux';
import { selectArticlesByCategory } from './articlesSlice';

const ArticlesList = ({ category }) => {
	const articles = useSelector(selectArticlesByCategory(category));
	console.log(articles);

	if (articles && articles.length > 0) {
		return (
			<>
				{articles.map((article) => {
					return <span>{article.name}</span>;
				})}
			</>
		);
	}

	return <div>No Articles for Category</div>;
};
export default ArticlesList;
