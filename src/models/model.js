'use strict';


class DataModel {

  /**
   * Model Constructor
   * @param {string} schema - mongo schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Retrieves one or more records
   * @param {string} _id 
   */
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  /**
   * Creates a record
   * @param {string} record 
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   * Updates a record
   * @param {number} _id 
   * @param {string} record 
   */
  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   * Removes a record
   * @param {number} _id 
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = DataModel;