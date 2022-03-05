export interface IEpisodeData {
    name: string
    _embedded: {
        episodes: [{
            image: {
                medium: string
            }
            name: string
            summary: string
        }]
    }
}