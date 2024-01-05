import { StarIcon } from '@heroicons/react/20/solid'
const Ratings = () => {

    const product = {rating: 3,}

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
  return ( <>

  <div className="flex items-center">
    {[0, 1, 2, 3, 4].map((rating) => (
      <StarIcon
        key={rating}
        className={classNames(
          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
          'h-5 w-5 flex-shrink-0'
        )}
        aria-hidden="true"
      />
    ))}
  </div>
  </>

 

)}

export default Ratings;