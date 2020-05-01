import {createSelector} from 'reselect';

const SelectDirectory = state => state.directory;

export const selectDirectorySections = createSelector (
   [SelectDirectory],
   directory => directory.sections 
);