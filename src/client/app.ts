import { Building } from './data/buildings';
import { Item } from './data/items';
import { Recipe, recipes } from './data/recipes';

window.onload = function() {
    loadBuildingDropdown();
    loadRecipeDropdown();
};

function loadBuildingDropdown(item?: Item) {
    const filteredRecipes = !item ? recipes : recipes.filter((recipe) => {
        return recipe.item == item;
    });
   
    const buildingSet = new Set<Building>();
    for (const recipe of filteredRecipes) {
        if (!buildingSet.has(recipe.building)) {
            buildingSet.add(recipe.building);
        }
    }

    loadDropdown(
        document.getElementById('select-building') as HTMLSelectElement,
        Array.from(buildingSet).map(String)
    );
}

function loadRecipeDropdown(building?: Building) {
    const filteredRecipes = !building ? recipes : recipes.filter((recipe) => {
        return recipe.building == building;
    });

    loadDropdown(
        document.getElementById('select-item') as HTMLSelectElement,
        Array.from(filteredRecipes).map((recipe) => recipe.name)
    );
}

function loadDropdown(dropdown: HTMLSelectElement, items: string[]) {
    dropdown.innerHTML = '';
    for (const item of items) {
        const option = document.createElement('option');
        option.textContent = item;
        dropdown.appendChild(option);
    }
}