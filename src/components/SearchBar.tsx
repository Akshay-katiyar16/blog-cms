export default function SearchBar({ value, onChange }: any) {
  return (
    <input
      placeholder="Search by title..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
