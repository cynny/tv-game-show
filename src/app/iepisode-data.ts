export interface IEpisodeData {    
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