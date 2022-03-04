export interface IApiResponseData {
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