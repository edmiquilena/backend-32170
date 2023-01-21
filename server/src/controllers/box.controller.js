import * as BoxService from '../services/box.service.js'

export const getByLoggedUser = async (req, res) => {
    // ?  req.user.id // req.user._id
    console.log(req.session)
const data = await BoxService.getBoxByUserId('63cb1c036f151256311f92e1')
res.send(data)


}
export const createUserBox = async (req, res) => {
    // ?  req.user.id // req.user._id
const data = await BoxService.createUserBox('63cb1c036f151256311f92e1')
req.session.boxId = data._id;
// * req.session.save();
res.send(data)


}
export const deleteUserBox = async(req, res) => {
// buscar caja por id trainer
    // ?  req.user.id // req.user._id
const data = await BoxService.deleteBoxByUserId('63cb1c036f151256311f92e1')
res.send(data)

}

export const addPokemonToBox = async(req, res) => {
const {type} = req.params;
const {body} = req.body
//  name: { type: String, required: true },
// dex: String,
// types: Array

if(type == 'remove') {

}else { 
const data = await BoxService.addPokemonToBox('63cb1c036f151256311f92e1', req.body)

}
res.send(data)
}