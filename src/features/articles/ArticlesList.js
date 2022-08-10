import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectArticlesByCategory } from './articlesSlice';
import { formatRoute } from '../../utils/formatRoute';

const ArticlesList = ({ category }) => {
	const articles = useSelector(selectArticlesByCategory(category));

	let activeClassName = 'list-group-item list-group-item-light ps-4 rounded-2 border-bottom-0 ps-active';
	let regularLinkClasses = 'list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0';
	if (articles && articles.length > 0) {
		return (
			<>
				{articles.map((article) => {
					return (
						<NavLink key={article.id} to={`/${formatRoute(category)}/${formatRoute(article.name)}`} className={({ isActive }) => (isActive ? activeClassName : regularLinkClasses)}>
							{article.name}
						</NavLink>
					);
				})}
			</>
		);
	}

	return <div>No Articles for Category</div>;
};
export default ArticlesList;
