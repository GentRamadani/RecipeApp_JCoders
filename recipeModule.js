// recipeModule.js
class Recipe {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

class RecipeModule {
    constructor() {
        this.recipes = [];
    }

    addRecipe(name, ingredients, instructions) {
        const recipe = new Recipe(name, ingredients, instructions);
        this.recipes.push(recipe);
    }

    getRecipes() {
        return this.recipes;
    }
}
