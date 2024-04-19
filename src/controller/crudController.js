class CrudController {
  constructor(data) {
    this.data = data;
  }

  validateData = (data, keys) => {
    let errors = {};
    let valid = true;
    keys.map((key) => {
      if (!data[key] || data[key].trim().length == 0) {
        valid = false;
        errors[key] = `${key} is required`;
      }
    });

    if (valid) {
      return false;
    }

    return errors;
  };

  createData = (item, validate) => {
    let checkErrors = this.validateData(item, validate);
    if (checkErrors) {
      return { errors: checkErrors };
    }

    item.id = this.data.length + 1;
    this.data.push(item);
    return this.data;
  };

  updateData = (index, item, validate) => {
    item.id = index;

    let checkErrors = this.validateData(item, validate);
    if (checkErrors) {
      return { errors: checkErrors };
    }

    if (!this.data[index - 1]) {
      return { errors: "No record Found" };
    }

    this.data.splice(index - 1, 1, item);
    return this.data;
  };

  deleteData = (index) => {
    let itemIndex = this.data.findIndex((item) => item.id == index);
    if (itemIndex >= 0) {
      this.data.splice(itemIndex, 1);
    }
    return this.data;
  };

  filterData = (key, match) => {
    let filteredData = this.data.filter((state) => state[key] == match);
    return filteredData;
  };
}

export default CrudController;
