'use client';

// packages
import { useParams } from 'next/navigation';

/*interface Path2IdPageProps {
	params: {
		boardId: string;
	}
}*/

const Path2IdPage = () => {
	const params = useParams();
	const { id } = params;

	return (
		<div>
		</div>
	);
}

export default Path2IdPage;