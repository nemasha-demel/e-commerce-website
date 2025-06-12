import categories from "@/data";
import CategoryButton from "./CategoryButton";


function Trendig() {
  return (
    <section className="py-8 px-4 lg:px-16">
        <div>
            <h1 >Trending</h1>
            <div>
                {
                    categories?.map((category)=>(
                        <CategoryButton key={category._id} category={category}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Trendig