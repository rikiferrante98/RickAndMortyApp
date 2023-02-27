import Logo from "../assets/images/logo.png"

export const zeroPad = (num, places) => String(num).padStart(places, '0');
export const getRickandMortyImage = (id) =>
    `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
export const characterDefaultImage = (onErrorEvent) =>  onErrorEvent.target.src = Logo;

export const removeDashesAndUnderscores  = (text) => text.replace(/[\-_]/g, ' ');

export const cleanText = (text) => text.replace(/[^ -~]+/g, " ");