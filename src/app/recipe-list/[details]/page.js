import RecipeDetailsItems from "@/components/recipe-details";

async function fetchRecipeDetails(currentId){
    try {
        const apiRes = await fetch(`https://dummyjson.com/recipes/${currentId}`)
        const res = await apiRes.json();
        return res;
    } catch (error) {
        throw new Error(error)
    }
}



export default async function RecipeDetail({params}){
    const recipeDetail = await fetchRecipeDetails(params?.details)
   // console.log(recipeDetail);
    return(
        <div>
            <RecipeDetailsItems recipeDetail ={recipeDetail}/>

        </div>
    )
}