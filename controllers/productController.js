
const fs=require('fs');
const items = (JSON.parse(fs.readFileSync('items.json')));

const phonesView=(req, res)=> {
    res.render('phones', { message: "" });
}

const booksView=(req, res)=> {
    res.render('books', { message: "" });
}

const sportsView=(req, res) =>{
    res.render('sports', { message: "" });
}

const galaxyView=(req, res)=> {
    res.render('galaxy', { message: "" });
}

const iphoneView=(req, res)=> {
    res.render('iphone', { message: "" });
}

const leavesView=(req, res)=> {
    res.render('leaves', { message: "" });
}

const sunView= (req, res) =>{
    res.render('sun', { message: "" });
}

const tennisView=(req, res)=> {
    res.render('tennis', { message: "" });
}

const boxingView=(req, res) =>{
    res.render('boxing', { message: "" });
}

const searchProducts= (req, res) =>{
  const searchTerm = (req.query.Search).toLowerCase();
  const matchingItems = [];

  // Get matching items
  for (i = 0; i < items.length; i++) {
    const currentItem = items[i];
    // check if the search term is a substring of the current item's name
    if (currentItem.name.toLowerCase().includes(searchTerm)) {
      matchingItems.push(currentItem);
    }
  }
  
  const msg=matchingItems.length ? "" : "No items found";
  res.render('searchresults', { itemlist: matchingItems, msg});
}

module.exports={
  phonesView,
  booksView,
  sportsView,
  galaxyView,
  iphoneView,
  leavesView,
  sunView,
  tennisView,
  boxingView,
  searchProducts
}