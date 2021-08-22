interface SearchBarProps {
  search: string;
  onChange: (value: string) => unknown;
  placeholder?: string;
  doSearch?: (value: string) => unknown;
}
