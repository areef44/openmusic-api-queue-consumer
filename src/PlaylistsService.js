const { Pool } = require("pg");

class PlaylistsService {
    constructor() {
        this._pool = new Pool();
    }

    async getPlaylistSongs(playlistId){
        const queryPlaylist = {
            text: `SELECT id, name
                   FROM playlists
                   WHERE id = $1`,
            values: [playlistId],
        };
        
        let result = await this._pool.query(queryPlaylist);

        const playlist = result.rows[0];

        const querySong = {
            text: `SELECT songs.id, songs.title, songs.performer 
                   FROM playlists
                   JOIN playlist_songs ON playlist_songs.playlist_id = playlists.id
                   JOIN songs ON songs.id = playlist_songs.song_id
                   WHERE playlists.id = $1`,
            values: [playlistId],
        };
        
        result = await this._pool.query(querySong);

        playlist.songs = result.rows;

        return playlist;
    }
}

module.exports = PlaylistsService;