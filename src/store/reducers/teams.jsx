import { createSlice } from "@reduxjs/toolkit";

const teamsSlice = createSlice({
    name: "teams",
    initialState: {
        list: [],
        currentTeam: null,
        loading: false,
        error: null,
    },
    reducers: {
        // Fetch all teams
        getTeamsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getTeamsSuccess: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        },
        getTeamsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Get single team
        getTeamRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getTeamSuccess: (state, action) => {
            state.loading = false;
            state.currentTeam = action.payload;
        },
        getTeamFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Create team
        createTeamRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        createTeamSuccess: (state, action) => {
            state.loading = false;
            state.list.push(action.payload);
        },
        createTeamFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Update team
        updateTeamRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        updateTeamSuccess: (state, action) => {
            state.loading = false;
            const index = state.list.findIndex(team => team.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
            if (state.currentTeam?.id === action.payload.id) {
                state.currentTeam = action.payload;
            }
        },
        updateTeamFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Delete team
        deleteTeamRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteTeamSuccess: (state, action) => {
            state.loading = false;
            state.list = state.list.filter(team => team.id !== action.payload);
            if (state.currentTeam?.id === action.payload) {
                state.currentTeam = null;
            }
        },
        deleteTeamFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Set current team
        setCurrentTeam: (state, action) => {
            state.currentTeam = action.payload;
        },

        // Clear error
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    getTeamsRequest,
    getTeamsSuccess,
    getTeamsFailure,
    getTeamRequest,
    getTeamSuccess,
    getTeamFailure,
    createTeamRequest,
    createTeamSuccess,
    createTeamFailure,
    updateTeamRequest,
    updateTeamSuccess,
    updateTeamFailure,
    deleteTeamRequest,
    deleteTeamSuccess,
    deleteTeamFailure,
    setCurrentTeam,
    clearError,
} = teamsSlice.actions;

export default teamsSlice.reducer;
