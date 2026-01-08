interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onChange: (tag: string) => void;
}

export default function TagFilter({
  tags,
  selectedTag,
  onChange,
}: TagFilterProps) {
  return (
    <select
      value={selectedTag}
      onChange={(e) => onChange(e.target.value)}
      className="p-3 border rounded-lg w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {/* IMPORTANT: empty value means NO FILTER */}
      <option value="">All Tags</option>

      {tags.map((tag) => (
        <option key={tag} value={tag}>
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </option>
      ))}
    </select>
  );
}
