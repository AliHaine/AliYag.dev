export type PostProps = {
    id: string
    statId: number
    title: string
    cardProps: CardProps
}

export type CardProps = {
    id: number
    name: string
    year: number
    description: string
    links: {[key: string]: string}
    stacks: string[]
}