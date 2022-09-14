import { useSelector } from 'react-redux';
import { selectSectionsByArticleId } from './sectionsSlice';
import { formatRoute } from '../../utils/formatRoute';
import { HashLink } from 'react-router-hash-link';

const SectionsList = ({ article }) => {
	const sections = useSelector(selectSectionsByArticleId(article.id));

	if (sections && sections.length > 0) {
		return (
			<>
				{sections.map((section, index) => {
					if (section.header) {
						return (
							<HashLink
								to={`/${formatRoute(article.category)}/${formatRoute(article.name)}#${formatRoute(section.header)}`}
								key={index}
								className='list-group-item list-group-item-action list-group-item-light rounded-2 border-bottom-0'
							>
								{section.header}
							</HashLink>
						);
					}
					return <div key='-1'></div>;
				})}
			</>
		);
	}
};
export default SectionsList;
