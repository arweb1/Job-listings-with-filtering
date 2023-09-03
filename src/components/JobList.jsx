import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions } from 'store/positions/position-selector';
import { addFilter } from 'store/filters/filter-actions';
const JobList = () => {
  const dispatch = useDispatch();

  const positons = useSelector(selectAllPositions);
  const handleAddFilter = filter => {
      dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positons.map(item => (
        <JobPosition key={item.id} {...item} handleAddFilter={handleAddFilter}/>
      ))}
    </div>
  )
}

export {JobList};