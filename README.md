### About

The project visualizes Estonian local goverment budget data. The [bubbletree](https://github.com/okfn/bubbletree) visualization code is created by [Gregor Aisch](http://driven-by-data.net/) for [OpenSpending](https://openspending.org/) / [OKFN](https://okfn.org/).

### Demo

http://meieraha.github.io/budgets

### Add new data

  1. Create new datafile under data directory:
  ```
  touch data/mycity_spending_2014.yml
  ```
  2. Fill the file with data (see existing datafiles how to format it)  
  3. Edit ```data/index.yml``` file and add following lines:
  ```
  - title: "My city spending"
    file: data/mycity_spending_2014.yml
  ```

### Development

To add portability and ease deployment  all third-party libraries are committed to the repository. For development it's recommended to re-download the requirements using npm:

```
sudo rm -R node_modules
npm install
```