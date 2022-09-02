import { useSelector } from 'react-redux';
import { selectSectionsByArticleId } from './sectionsSlice';
import { formatRoute } from '../../utils/formatRoute';
const SectionsList = ({ articleId }) => {
	const sections = useSelector(selectSectionsByArticleId(articleId));
	if (sections && sections.length > 0) {
		return (
			<>
				{sections.map((section, index) => {
					if (section.header) {
						return (
							<a href={`#${formatRoute(section.header)}`} class='list-group-item list-group-item-action list-group-item-light rounded-2 border-bottom-0' key={index}>
								{section.header}
							</a>
						);
					}
					return <div key='-1'></div>;
				})}
			</>
		);
	}
};
export default SectionsList;
