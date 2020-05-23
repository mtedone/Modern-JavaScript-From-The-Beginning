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

      return newItem;
    },
    getTotalCalories: function () {
      let totalCalories = 0;
      data.items.forEach(item => {
        totalCalories += item.calories;
      });
      data.totalCalories = totalCalories;
      return data.totalCalories;
    },
    getItemById: function(id) {
      let found = null;
      data.items.forEach(item => {
        if(item.id === id) {
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(currentItem) {
      data.currentItem = currentItem;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    updateItem: function(name, calories) {
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(item => {
        if(item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    }
  }

})();

// UI Controller
const UICtrl = (function () {

  const UISelectors = {
    listItems: '#item-list li',
    itemList: 'item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: 'item-name',
    itemCaloriesInput: 'item-calories',
    totalCalories: '.total-calories'
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
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    addItemToForm: function() {
      document.getElementById(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.getElementById(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    updateListItem: function(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Converts the NodeList into an array for looping
      listItems = Array.from(listItems);

      listItems.forEach(listItem => {
        const itemID = listItem.getAttribute('id');

        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML =
              `
<strong>${item.name}</strong> 
<em>${item.calories}</em>  
<a href="#" class="secondary-content">
<i class="edit-item fa fa-pencil"></i>
</a>          
          `;
        }
      });
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

    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if(e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event - Uses event delegation
    document.getElementById(uiSelectors.itemList).addEventListener('click', itemEditClick);

    // Update Submit event
    document.querySelector(uiSelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

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

      // Get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();

    }

    e.preventDefault();
  }

  // Update item submit
  const itemEditClick = function (e) {
    // Targets the edit button in the list item clicked
    if (e.target.classList.contains('edit-item')) {
      // Get list item id, eg item-0
      const listId = e.target.parentNode.parentNode.id;
      // Separate dash from number into an array
      const listIdArray = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArray[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  const itemUpdateSubmit = function (e) {
    const input = UICtrl.getItemInput();

    // Update item on data structure
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update the UI
    UICtrl.updateListItem(updatedItem);

    // Get the total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Public methods
  return {
    init: function () {

      // Clear edit state / set initial state
      UICtrl.clearEditState();

      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if(items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

// Initialise App
App.init();