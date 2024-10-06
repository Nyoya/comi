import "server-only";

export const fetchRecipes = async () => {
  try {
    const res = await fetch('https://c33845ca-fa81-42ee-9d3f-e58b642421e0.mock.pstmn.io/api/v1/comi/recipe');
    return res.json();
  } catch (error) {
    console.log(error);
  }
}