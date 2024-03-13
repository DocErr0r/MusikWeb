
const clientId = '6a86dfae87b14572bc36fd76a0c58330';
const redirectUrl = 'http://localhost:3000';
const apiUrl = 'https://accounts.spotify.com/authorize';
const scope = ['user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played'];
export const loginendpoin = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`;



