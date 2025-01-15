import { Link } from 'react-router';

const Card = ({effectName, className}: {effectName: string, className: string}) => {
  return (
    <div className={`bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-6 flex justify-center items-center max-w-sm h-32 text-xl font-semibold border border-gray-800/25 cursor-pointer ${className}`}>
      <Link to={`/effect/${effectName}`} className='h-full w-full flex justify-center items-center'>
        {effectName}
      </Link>
    </div>
  );
};

export default Card;
