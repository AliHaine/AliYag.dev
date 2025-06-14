export type PostProps = {
    id: string
    statId: number
    type: string
    title: string
    imgSrc: string,
    fullDate: string
    date: number
    category: string
    shortDescription: string
    tech: string[]
}

export type CardProps = {
    id: number
    name: string
    year: number
    description: string
    links: {[key: string]: string}
    stacks: string[]
}