import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { selectSectionsByArticleId } from './sectionsSlice';
import { formatRoute } from '../../utils/formatRoute';

const SectionDetailList = ({ articleId }) => {
	const sections = useSelector(selectSectionsByArticleId(articleId));
	if (sections && sections.length > 0) {
		return (
			<>
				{sections.map((section, index) => {
					if (section.header) {
						return (
							<Row key={index} className='pd-section' id={formatRoute(section.header)}>
								<h2 className='mb-4'>{section.header}</h2>
								<p>{section.body}</p>
							</Row>
						);
					}
					return (
						<Row key={index}>
							<div>{section.body}</div>
						</Row>
					);
				})}
			</>
		);
	}
};
export default SectionDetailList;
