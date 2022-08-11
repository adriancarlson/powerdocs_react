import { useSelector } from 'react-redux';
import { selectSectionsByArticleId } from './sectionsSlice';
import { ListGroup } from 'react-bootstrap';
const SectionsList = ({ articleId }) => {
	const sections = useSelector(selectSectionsByArticleId(articleId));
	if (sections && sections.length > 0) {
		return (
			<>
				{sections.map((section, index) => {
					if (section.header) {
						return (
							<ListGroup.Item key={index} action variant='light' className='rounded-2 border-bottom-0'>
								{section.header}
							</ListGroup.Item>
						);
					}
				})}
			</>
		);
	}
};
export default SectionsList;
