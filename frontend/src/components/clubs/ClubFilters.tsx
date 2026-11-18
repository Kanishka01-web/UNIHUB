type ClubFiltersProps = {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

function ClubFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ClubFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            selectedCategory === category
              ? "bg-foreground text-background"
              : "border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ClubFilters
