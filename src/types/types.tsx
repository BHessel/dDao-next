export type WebsiteData = {
  id: number;
  title: string;
  site: string;
  description: string;
  category: string;
};

export type SearchFieldProps = {
  onSearchChange: (value: string) => void;
};
