import Link from "../model/Link.js";
export const getAllLink = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const Page = req.query.page;
    const link = await Link.find({}).limit(Limit).skip(Skip);
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createLink = async (req, res) => {
  try {
    const link = await Link.create(req.body);

    res.status(200).send({
      data: {
        url: link,
      },
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getLink = async (req, res) => {
  try {
    const { shortid } = req.params;
    const links = await Link.findOne({ shortId: shortid });
    res.status(200).send({
      data: links,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const deleteLink = async (req, res) => {
  try {
    const id = req.params.id;
    const link = await Link.findByIdAndRemove({ _id: id });
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
