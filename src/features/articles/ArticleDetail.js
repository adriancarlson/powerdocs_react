import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { deFormatRoute } from '../../utils/formatRoute';
import { selectArticleByName } from './articlesSlice';
import SectionDetailList from '../sections/SectionDetailList';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ImLink } from 'react-icons/im';
import { BsClipboardCheck } from 'react-icons/bs';

const ArticleDetail = () => {
	const { name: articleName } = useParams();
	const [isHovering, setIsHovering] = useState(-1);
	const [isCopied, setIsCopied] = useState(-1);

	const article = useSelector(selectArticleByName(deFormatRoute(articleName)));
	return (
		article && (
			<>
				<Row className='pd-section'>
					<h1 className='mb-4' onMouseOver={() => setIsHovering(article.id)} onMouseOut={() => setIsHovering(-1)}>
						{article.name}
						<CopyToClipboard onCopy={() => setIsCopied(article.id)} text={`Start Page > PowerSchool Tips > ${article.category} > ${article.name}\r${window.location.href}`}>
							<span>
								{isCopied === article.id ? (
									<BsClipboardCheck color='#0075db' size='.65em' className={`ms-2 ${isCopied === article.id ? '' : 'hidden'}`} />
								) : (
									<ImLink color='#0075db' size='.65em' className={`ms-2 ${isHovering === article.id ? '' : 'hidden'}`} />
								)}
							</span>
						</CopyToClipboard>
					</h1>
					<p>{article.description}</p>
					<p>{article.body}</p>
				</Row>
				<SectionDetailList article={article} />
			</>
		)
	);
};
export default ArticleDetail;
