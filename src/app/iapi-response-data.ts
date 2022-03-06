export interface IApiResponseData {
    schedule: any;
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