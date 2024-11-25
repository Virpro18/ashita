export interface data {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface database {
    length: number,
    data: data[]
}