// Storage Controller

// Item Controller
const ItemCtrl = (function () {

  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function () {
      return data;
    },
    addItem: function(name, calories) {
      let ID;
      // Create id
      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new Item
      const newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      console.log(data.items);
      return newItem;
    }
  }

})();

// UI Controller
const UICtrl = (function () {

  const UISelectors = {
    itemList: 'item-list',
    addBtn: '.add-btn',
    itemNameInput: 'item-name',
    itemCaloriesInput: 'item-calories'
  };

  // Public methods
  return {
    populateItemList: function (items) {
      let html = '';
      items.forEach(item => {
        html +=
            `
<li class="collection-item"
     id="item-${item.id}">
    <strong>${item.name}</strong> 
    <em>${item.calories}</em>  
    <a href="#" class="secondary-content">
    <i class="edit-item fa fa-pencil"></i>
    </a>
</li>
`;
      });

      // Insert list items
      document.getElementById(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.getElementById(UISelectors.itemNameInput).value,
        calories: document.getElementById(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      // Show the list
      document.getElementById(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;

      // Add the html
      li.innerHTML =
          `
<strong>${item.name}</strong> 
<em>${item.calories}</em>  
<a href="#" class="secondary-content">
<i class="edit-item fa fa-pencil"></i>
</a>          
          `;
      // Insert item
      document.getElementById(UISelectors.itemList)
          .insertAdjacentElement('beforeend', li);
    },
    getSelectors: function() {
      return UISelectors;
    },
    clearInput: function () {
      document.getElementById(UISelectors.itemNameInput).value = '';
      document.getElementById(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function () {
      document.getElementById(UISelectors.itemList).style.display = 'none';
    }
  }

})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {

  // Load event listeners
  const loadEventListeners = function () {
    const uiSelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(uiSelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calories input
    if(input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Clear fields
      UICtrl.clearInput();

    }

    e.preventDefault();
  }

  // Public methods
  return {
    init: function () {

      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

// Initialise App
App.init();