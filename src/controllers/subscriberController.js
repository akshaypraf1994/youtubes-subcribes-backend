const Subscriber = require("../models/subscribers");

exports.getSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find({});

  res.json(subscribers);
};

exports.getSubscriberNames = async (req, res) => {
  const subscribers = await Subscriber.find({}).select(
    "name subscribedChannel"
  );
  res.json(subscribers);
};

exports.getSubscriberById = async (req, res) => {
  const subscriber = await Subscriber.findById(req.params.id);

  if (!subscriber) {
    return res
      .status(400)
      .json({ message: "No Subscriber found related to this ID!" });
  }

  res.json(subscriber);
};
