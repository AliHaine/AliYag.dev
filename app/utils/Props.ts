export type PostProps = {
    statId: number
    title: string
    cardProps: CardProps
    contentHtml: string
}

export type CardProps = {
    id: string
    name: string
    year: number
    date: string
    description: string
    links: {[key: string]: string}
    stacks: string[]
}