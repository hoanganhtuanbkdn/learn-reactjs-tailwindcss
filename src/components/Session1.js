import Photo from '../assets/images/photo1.png';
import BlogItem from './BlogItem';

const listPost = [
	{
		id: 1,
		name: 'Ha Noi',
	},
	{
		id: 2,
		name: 'Ho Chi Minh',
	},
	{
		id: 3,
		name: 'Da Nang',
	},
	{
		id: 4,
		name: 'Da Lat',
	},
];

function Session1() {
	return (
		<div className="pb-[105px]">
			<p className="text-[36px] font-bold mb-[8px]">
				Popular Destinations
			</p>
			<p>Vacations to make your experience enjoyable in Indonesia!</p>
			<div className="mt-[60px] grid grid-cols-4 gap-[30px]">
				{listPost.map((item) => (
					<BlogItem photo={Photo} item={item} key={item.id} />
				))}
			</div>
		</div>
	);
}
export default Session1;
