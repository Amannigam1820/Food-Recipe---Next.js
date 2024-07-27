import Link from "next/link";
import { Button } from "../ui/button";

export default function RecipeDetailsItems({ recipeDetail }) {
  //console.log(recipeDetail);
  return (
    <div>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={recipeDetail?.image}
              alt={recipeDetail?.name}
              className="w-4/5 rounded-md object-cover"
            />

             
             
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {recipeDetail.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl  text-gray-700">
                Meal Type :- {recipeDetail.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl  text-gray-700">Cuisine :- {recipeDetail.cuisine}</p>
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-lg text-gray-600">Ingredients :-</h3>
              <ul className="space-y-2 list-disc mt-4 pl-4 text-sm text-gray700">
                    {
                        recipeDetail?.ingredients.map((item)=>(
                            <li>{item}</li>
                        ))
                    }
              </ul>
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-lg text-gray-600">Instructions :-</h3>
              <ul className="space-y-2 list-disc mt-4 pl-4 text-sm text-gray700">
                    {
                        recipeDetail?.instructions.map((item)=>(
                            <li>{item}</li>
                        ))
                    }
              </ul>
            </div>
           
            <div className="mt-5 ml-[430px] ">
                    <Link href={"/recipe-list"}><Button>Go Back</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
