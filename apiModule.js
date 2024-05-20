// apiModule.js
class APIModule {
    constructor(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
    }

    async fetchRecipes(query) {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${this.appId}&app_key=${this.appKey}`);
        const data = await response.json();
        return this.parseRecipes(data.hits);
    }

    parseRecipes(recipesData) {
        return recipesData.map(hit => {
            const recipeData = hit.recipe;
            return {
                name: recipeData.label,
                ingredients: recipeData.ingredients.map(ingredient => ingredient.text),
                instructions: recipeData.url // In this example, using the recipe URL as instructions
            };
        });
    }
}

// Instantiate with your app ID and app key
const apiModule = new APIModule('a71c578b', '5839a6d020bf38babb4d43194f2ecb9c');

