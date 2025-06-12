import { Button } from "./ui/button"

function CategoryButton({category}) {
  return (
    <div>
        <Button>
            {category.name}
        </Button>
    </div>
  )
}

export default CategoryButton