export const selectAllPositions = state => state.positions;

export const visiblePositions = (state, filters = []) => {
    if(filters.length == 0){
        return state.positions
    }

    return state.positions.filter(pos => {
        const positionsFilters = [].concat(pos.role, ...pos.tools, ...pos.languages, pos.level)

        return filters.every(filter => positionsFilters.includes(filter))
    })
}