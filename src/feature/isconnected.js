import axios from "axios";

/**
 * renvoit les données d'un utilisateur donnée
 * @param {string} id id de l'utilisateur
 * @param {Object} params query de la requette avec le token
 * @returns {Promise}
 */
export const about = (id,params) =>{
    return axios.get(process.env.REACT_APP_BASE_URI+"/user/"+id,{params})
     .then(({data})=>data);
}

/**
 * 
 * @param {String} comId l'id de la publication dont on souhaite obtenir les commentaires
 * @param {Object} params parametre de la requete e.g. {token}
 * @returns 
 */
export const com=(comId,params= {}) =>{
    return axios.get(process.env.REACT_APP_BASE_URI+"/coms/"+comId,params)
     .then(({data})=>data)
}

export default function isconnected(token) {
    return axios.get(process.env.REACT_APP_BASE_URI+"/user",{
        params:{token}
    }).then(({data})=>data)
}