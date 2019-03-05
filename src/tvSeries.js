var tvSeries = ['Game of Thrones', 'Stranger Things', 'Black Mirror'];
tvSeries.push('The Punisher', 'Lucifer');
console.log(tvSeries.slice());
tvSeries.forEach(function(currentValue, index, arr){
  console.log(index, currentValue, arr);
});

var tvSeriesCopy = tvSeries.slice();
