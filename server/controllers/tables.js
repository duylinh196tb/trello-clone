const mongoose = require('mongoose');
const Table = require('../models/table');
const service = require('../service');
const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(service.response.success('Success!!!', tables));
  } catch (error) {
    throw error;
  }
};

const getTable = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.json(service.response.objectNotFound('Du lieu khong ton tai'));
    }
    const table = await Table.findById(_id);
    if (table) {
      res.json(service.response.success('Success!!!', table));
    } else {
      res.json(service.response.objectNotFound('Du lieu khong ton tai'));
    }
  } catch (error) {
    throw error;
  }
};

const createTable = async (req, res) => {
  try {
    const { title } = req.body;
    const table = await Table.create({
      title
    });

    res.json(service.response.success('Success!!!', table));
  } catch (error) {
    throw error;
  }
};

const deleteTable = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.json(service.response.objectNotFound('Du lieu khong ton tai'));
    }

    const table = await Table.findByIdAndRemove({ _id });
    if (table) {
      res.json(service.response.success('Success!!!', { _id }));
    } else {
      res.json(service.response.objectNotFound('Du lieu khong ton tai'));
    }
  } catch (error) {
    throw error;
  }
};
module.exports = { getAllTables, createTable, getTable, deleteTable };
