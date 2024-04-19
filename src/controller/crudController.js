class CrudController {
  constructor(data) {
    this.data = data;
  }

  createData = (item) => {
    this.data.push(item);
    return this.data;
  };

  updateData = (index, item) => {
    this.data.splice(index, 1, item);
    return this.data;
  };

  deleteData = (index) => {
    this.data.splice(index, 1);
    return this.data;
  };

  filterData = (key, match) => {
    let filteredData = this.data.filter((state) => state[key] == match);
    return filteredData;
  };
}

export default CrudController;
