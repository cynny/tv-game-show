export interface IShowDetailsDataS {
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