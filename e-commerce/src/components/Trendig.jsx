import categories from "@/data";
import CategoryButton from "./CategoryButton";


function Trendig() {
  return (
    <section className="py-8 px-4 lg:px-16">
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
            <h1 className='text-2xl sm:text-3xl' >Trending</h1>
            <div className='flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2'>
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