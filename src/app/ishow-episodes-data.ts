export interface IShowEpisodesData {
    _embedded: {
        episodes: [{
            name: string,
            summary: string
        }]
    }
}
