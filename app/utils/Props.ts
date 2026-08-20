export type CardProps = {
  id: string;
  name: string;
  year: string;
  date: string;
  description: string;
  links: Record<string, string>;
  stacks: string[];
};

export type PostProps = {
  title: string;
  contentHtml: string;
  cardProps: CardProps;
};
