export interface ICurrentShowDetailsData {
    name: string,
    language: string,
    runtime: number,
    rating: {
        average:number
    },
    image:{
        medium:string
    },
    summary: string
}
