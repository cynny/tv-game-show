export interface IShowEpisodesData {
    _embedded: {
        episodes: [{
            image: {
                medium: string
            }
            name: string,
            summary: string
        }]
    }
}
