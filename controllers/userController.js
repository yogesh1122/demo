const { users: userModel } = require("../models/userModel");
const validations = require("../validations/userValidations");
const { ObjectId } = require("mongoose").Types;

exports.addOrUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (id) return updateUser({ req, res });

    const { error } = validations.addValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    await userModel(req.body).save();

    res.status(201).send("user created successfully.");
  } catch (error) {
    return res.status(500).send("Internal server error.");
  }
};

const updateUser = async ({ req, res }) => {
  const { error } = validations.updateValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { id } = req.body;
  delete req.body.id;
  await userModel.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: req.body },
    { new: true }
  );

  res.status(201).send("user updated successfully.");
};

exports.getUsers = async (req, res, next) => {
  try {
    const { limit = 10, skip = 0 } = req.query;

    const users = await userModel
      .find()
      .limit(Number(limit))
      .skip(Number(limit) * Number(skip));

    res.status(200).send({ msg: "users retrived successfully.", users });
  } catch (error) {
    return res.status(500).send("Internal server error.");
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).send("id is manadatory field.");

    const user = await userModel.findOne({ _id: ObjectId(id) });

    if (!user) return res.status(404).send("user does not exists");

    res.status(200).send({ msg: "user retrived successfully.", user });
  } catch (error) {
    return res.status(500).send("Internal server error.");
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).send("id is manadatory field.");

    await userModel.findOneAndRemove({ _id: ObjectId(id) });

    res.status(204).send({ msg: "users deleted successfully." });
  } catch (error) {
    return res.status(500).send("Internal server error.");
  }
};
