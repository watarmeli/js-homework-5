function Storage(items) {
  this.items = items;
};

Storage.prototype.getItems = function() {
  return this.items;
};

Storage.prototype.addItem = function(newItem) {
  this.items.push(newItem);
};

Storage.prototype.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
};



// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]