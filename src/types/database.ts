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

export interface ProjectData {
  lenght: number;
  data: ProjectData_SubData[];
}

export interface ProjectData_SubData {
  id: string;
  title: string;
  description: string;
  creator: string;
  imageUrl: string;
  projectURL: string;
  date: string;
}