import axios from '../axios';
export const mobileView= (flag)=>{
    return {
        type: "setMobileView",
        payload:flag
    }
}

export const fetchLands = async () => {
    const response = await axios.get('/land');
    return {
        type: 'fetchLand', 
        payload: response.data
    }
};

export const fetchLand = async (id) => {
    const response = await axios.get(`/land/${id}`);
    return { 
        type: 'fetchLand', 
        payload: response.data
    }
};

export const addLand= async(formValues)=>{
    const response= await axios.post(`/land`, formValues);
    console.log(response);
    return {
        type: 'addLand',
        payload: response.data
    }
};

export const editLand = async(id,formValues) =>{
    const response=  await axios.put(`/land/${id}`, formValues);
    console.log(response.data);
    return { 
        type: 'editLand', 
        payload: response.data
    }
};

export const deleteLand = async (id)=> {
    await axios.delete(`/land/${id}`);
    return {
        type: 'deleteLand',
        payload: id
    }
}