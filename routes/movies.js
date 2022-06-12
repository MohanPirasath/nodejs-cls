import express from "express";
import { Router } from "express";

import { getallmovies, getmoviebyid, createmovie, updatebyid, deletebyid } from "./helper.js";
import { auth } from "./middlewear/auth.js";

const router = express.Router();

router.get("/", async function (req, res) {
  const allmovies = await getallmovies();

  res.send(allmovies);
});
router.get("/:id",auth, async function (req, res) {
  const { id } = req.params;


  const onemovie = await getmoviebyid(id);
  

  onemovie ? res.send(onemovie) : res.status("404").send("No such movie found");
});

router.post("/addmovie", async function (req, res) {
  const data = req.body;
  const result = await createmovie(data);
  res.send(result);
});

router.put("/:id", async function (req, res) {
  const data = req.body;
  const { id } = req.params;
  const result = await updatebyid(id, data);
  res.send(result);
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  const deletemovies = await deletebyid(id);
  deletemovies.deletedCount > 0
    ? res.send(deletemovies)
    : res.status("404").send("No such movie found");
});

export const moviesRouter = router;



