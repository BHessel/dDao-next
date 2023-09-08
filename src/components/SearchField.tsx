type SearchFieldProps = {
  onSearchChange: (value: string) => void;
};

export default function SearchField({ onSearchChange }: SearchFieldProps) {
  return (
    <div className="flex justify-center bg-slate-200">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="h-10 w-10/12 sm:w-1/2 shadow-md placeholder:pl-4 placeholder:text-slate-500"
      />
    </div>
  );
}
