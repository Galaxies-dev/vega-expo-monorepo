export type FeedItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
};

export const FEED_ITEMS: FeedItem[] = [
  {
    id: '1',
    title: 'Getting started with Vega OS',
    summary: 'Learn how to build and deploy apps for Amazon Fire TV with Vega OS.',
    category: 'Development',
  },
  {
    id: '2',
    title: 'Designing for the big screen',
    summary: 'Best practices for TV layouts, focus states, and 10-foot UI.',
    category: 'Design',
  },
  {
    id: '3',
    title: 'Remote and D-pad navigation',
    summary: 'Implement focus management and keyboard/remote navigation.',
    category: 'Development',
  },
  {
    id: '4',
    title: 'Content discovery on Fire TV',
    summary: 'How users find and browse content on the TV home screen.',
    category: 'Product',
  },
];
