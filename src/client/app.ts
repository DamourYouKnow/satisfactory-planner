import { Building } from './data/buildings';
import { Item } from './data/items';
import { recipes } from './data/recipes';
import { 
    Factory,
    FactorySection,
    FactoryRecipe,
    FactoryBuilding,
    FactoryBuildingGroup
} from './factory';
import { BuildingGroupManager, Dropdown, DropdownItem } from './ui';
import { dom } from './dom';

window.onload = function() {
    new App();
};

class App {
    factory: Factory;
    buildingGroupManager: BuildingGroupManager;
    buildingDropdown: Dropdown;
    recipeDropdown: Dropdown;

    constructor() {
        this.factory = new Factory();
        this.load();

        const clearDataBtn = dom().id<HTMLButtonElement>('clear-data-btn');
        clearDataBtn.onclick = () => {
            this.clearData();
        };

        this.buildingDropdown = new Dropdown(dom().id('building-select'));

        this.recipeDropdown = new Dropdown(dom().id('recipe-select'));
        this.recipeDropdown.onSelect = this.handleRecipeSelect;

        this.loadBuildingDropdown();
        this.loadRecipeDropdown();

        const addBuildingBtn = dom().id<HTMLButtonElement>('add-building-btn');
        addBuildingBtn.onclick = () => this.addBuilding();
    }

    private loadBuildingDropdown(item?: Item) {
        let filteredRecipes = recipes;
        if (item) {
            filteredRecipes = recipes.filter((recipe) => recipe.item == item);
        }

        const buildingSet = new Set<Building>();
        for (const recipe of filteredRecipes) {
            if (!buildingSet.has(recipe.building)) {
                buildingSet.add(recipe.building);
            }
        }

        this.loadDropdown(
            this.buildingDropdown,
            Array.from(buildingSet).map((building) => {
                return {
                    value: building,
                    label: building,
                    image: `images/${building}.png`
                };
            })
        );
    }

    private loadRecipeDropdown(building?: Building) {
        let filteredRecipes = recipes;
        if (building) {
            filteredRecipes = recipes.filter((recipe) => {
                return recipe.building == building;
            });
        }

        this.loadDropdown(
            this.recipeDropdown,
            Array.from(filteredRecipes).map((recipe) => {
                return {
                    value: recipe.item,
                    label: recipe.name,
                    image: `images/${recipe.item}.png`
                };
            })
        );
    }

    private loadDropdown(dropdown: Dropdown, items: DropdownItem[]) {
        dropdown.items = items;
        dropdown.update();
    }

    private handleRecipeSelect(item: DropdownItem) {
        return;
    }

    private addBuilding() {
        const item = this.recipeDropdown.selected;

        const recipe = recipes.find((recipe) => recipe.name == item.label);
        const factoryRecipe = new FactoryRecipe(
            recipe.building,
            recipe.item,
            recipe
        );
        const building = new FactoryBuilding(factoryRecipe);
        
        if (this.factory.sections.length == 0) {
            this.factory.sections.push(new FactorySection());
        }
        const group = new FactoryBuildingGroup(building, 1);
        this.factory.sections[0].groups.push(group);
        this.update();
    }

    private update() {
        const sectionView = dom().id('factory-section-view');
        // TODO: Do not redraw everything each update.
        sectionView.innerHTML = '';

        // TODO support multiple sections
        if (this.factory.sections.length > 0) {
            for (const group of this.factory.sections[0].groups) {
                // TODO: Move to App, create managers for loaded content 
                const groupManager = new BuildingGroupManager(
                    dom().create('div'),
                    group
                );
                sectionView.appendChild(groupManager.element);
            }
        }

        this.save();
    }

    private save() {
        const factoriesJSON = localStorage.getItem('factories');
        const factories = factoriesJSON ?  JSON.parse(factoriesJSON): {};
        factories[this.factory.name] = Factory.serializer.toJSON(this.factory);
        localStorage.setItem('factories', JSON.stringify(factories));
    }

    private load() {
        // TODO: Support multiple saves.
        const factoriesJSON = localStorage.getItem('factories');
        if (factoriesJSON) {
            const factories = JSON.parse(factoriesJSON);
            if (Object.keys(factories).length > 0) {
                const factory = factories[Object.keys(factories)[0]];
                this.factory = Factory.serializer.fromJSON(factory);
            }
        }
        this.update();
    }

    private clearData() {
        localStorage.removeItem('factories');
        this.factory = new Factory();
        this.update();
    }
}
