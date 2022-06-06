import { Client } from "../index.js";

export async function deletebyid(id) {
    return await Client.db("B33WD")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function updatebyid(id, data) {
    return await Client.db("B33WD")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function createmovie(data) {
    return await Client.db("B33WD").collection("movies").insertMany(data);
}
export async function getmoviebyid(id) {
    return await Client.db("B33WD")
        .collection("movies")
        .findOne({ id: id });
}
export async function getallmovies() {
    return await Client.db("B33WD")
        .collection("movies")
        .find({})
        .toArray();
}
