import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { selectSectionsByArticleId } from './sectionsSlice';
import { formatRoute } from '../../utils/formatRoute';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ImLink } from 'react-icons/im';
import { BsClipboardCheck } from 'react-icons/bs';

const SectionDetailList = ({ article }) => {
	const { id: articleId } = article;
	const [isHovering, setIsHovering] = useState(-1);
	const [isCopied, setIsCopied] = useState(-1);

	const sections = useSelector(selectSectionsByArticleId(articleId));

	if (sections && sections.length > 0) {
		return (
			<>
				{sections.map((section, index) => {
					if (section.header) {
						return (
							<Row key={index} className='pd-section' id={formatRoute(section.header)}>
								<h2 className='mb-4' onMouseOver={() => setIsHovering(index)} onMouseOut={() => setIsHovering(-1)}>
									{section.header}

									<CopyToClipboard
										onCopy={() => setIsCopied(index)}
										text={`Start Page > PowerSchool Tips > ${article.category} > ${article.name} > ${section.header} \r ${window.location.href.replace(window.location.hash, '')}#${formatRoute(
											section.header,
										)}`}
									>
										<span>
											{isCopied === index ? (
												<BsClipboardCheck color='#0075db' size='.75em' className={`ms-2 ${isCopied === index ? '' : 'hidden'}`} />
											) : (
												<ImLink color='#0075db' size='.75em' className={`ms-2 ${isHovering === index ? '' : 'hidden'}`} />
											)}
										</span>
									</CopyToClipboard>
								</h2>
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
