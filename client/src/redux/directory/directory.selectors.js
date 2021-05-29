import {createSelector} from 'reselect'

const selectdirectory = (state) => {return state.directory}

export const selectSections = createSelector(
    [selectdirectory],
    (directory) => directory.sections
)