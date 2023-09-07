type SearchFieldProps = {
  onSearchChange: (value: string) => void;
};

export default function SearchField({ onSearchChange }: SearchFieldProps) {
  return (
    <div className="flex justify-center py-3">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="h-10 w-1/2"
      />
    </div>
  );
}
