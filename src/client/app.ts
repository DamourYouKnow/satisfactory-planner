import Sortable from "sortablejs"; 

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
import { 
    BuildingGroupManager,
    Dropdown, 
    DropdownItem,
    ProductionTable 
} from './ui';
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

        this.buildingDropdown = null;

        this.recipeDropdown = new Dropdown(dom().id('recipe-select'));
        this.recipeDropdown.onSelect = this.handleRecipeSelect;

        this.loadRecipeDropdown();

        const addBuildingBtn = dom().id<HTMLButtonElement>('add-building-btn');
        addBuildingBtn.onclick = () => this.addBuilding();

        const exportBtn = dom().id<HTMLButtonElement>('save-to-file');
        exportBtn.onclick = () => {
            this.export();
        };

        const importBtn = dom().id<HTMLButtonElement>('load-from-file');
        importBtn.onclick = () => {
            this.import();
        };
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
        sectionView.classList.add('factory-section');
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
                groupManager.onchange = () => {
                    this.save();
                    this.update();
                };
                groupManager.ondelete = (index) => {
                    this.factory.sections[0].groups.splice(index, 1);
                    this.save();
                    this.update();
                };
                sectionView.appendChild(groupManager.element);
            }

            // TODO: Apply to each factory section
            Sortable.create(sectionView, {
                group: 'building-group',
                preventOnFilter: false,
                filter: '.building-count-input',
                onSort: (event) => {
                    const groups = this.factory.sections[0].groups;
                    const newTemp = groups[event.newIndex];
                    groups[event.newIndex] = groups[event.oldIndex];
                    groups[event.oldIndex] = newTemp;
                    this.save();
                }
            });

            new ProductionTable(
                dom().id('production-overview-view'),
                this.factory.sections[0]
            );
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

    private export() {   
        const filename = `${this.factory.name || 'factory'}.json`;
        const content = JSON.stringify(
            Factory.serializer.toJSON(this.factory),
            null,
            2
        );
        const file = new Blob([content], { type: 'application/json'});
        const link = dom(document.body).create('a');
        link.download = filename;
        link.href = URL.createObjectURL(file);
        link.click();
        link.remove();
    }

    private import() {
        const input = dom(document.body).create('input', {
            attributes: {
                type: 'file',
                style: 'display: none;'
            }
        });
        input.onchange = () => {
            const reader = new FileReader();
            reader.onload = () => {
                const content = reader.result;
                this.factory = Factory.serializer.fromJSON(
                    JSON.parse(content.toString())
                );
                input.remove();
                this.update();
            };
            reader.readAsText(input.files[0]);
        };
        input.click();
    }

    private clearData() {
        localStorage.removeItem('factories');
        this.factory = new Factory();
        this.update();
    }
}
