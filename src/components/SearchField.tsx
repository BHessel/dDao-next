import { SearchFieldProps } from "@/types/types";

export default function SearchField: React.FC<SearchFieldProps> = ({ onSearchChange }) => {
  <div>
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>;
}
