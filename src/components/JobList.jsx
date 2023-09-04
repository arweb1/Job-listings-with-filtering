import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectAllPositions, selectVisiblePositions } from 'store/positions/position-selector';
import { addFilter } from 'store/filters/filter-actions';
import { selectAllFilters } from 'store/filters/fitler-selectors';
const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectAllFilters)
  const positons = useSelector(state => selectVisiblePositions(state, currentFilters));
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