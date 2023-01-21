export default function({_id, name, types,dex }) {

return {id: _id, name, types, dex, multiType: types.length > 1}


}