import { combineReducers } from "redux";

// static song reducer
const songsReducer = () => {
  return [
    { title: "Lollipop", duration: "3:04" },
    { title: "Don't lie", duration: "3:33" },
    { title: "The Longest Time", duration: "3:38" },
    { title: "Le Festin", duration: "2:51" },
  ];
};

// select song reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
