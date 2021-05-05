import axios from '../axios';
export const mobileView= (flag)=>{
    return {
        type: "setMobileView",
        payload:flag
    }
}

export const setSession= (user)=>{
    localStorage.setItem('session', JSON.stringify(user));
    return {
        type: 'SET_SESSION',
        payload: user
    }
}

export const fetchLands = async (token) => {
    const response = await axios.get('/land',{
            headers:{
                'x-auth-token': token
            }
        }
    );
    return {
        type: 'fetchLand', 
        payload: response.data
    }
};

export const fetchLand = async (id,token) => {
    const response = await axios.get(`/land/${id}`,{
            headers:{
                'x-auth-token': token
            }
        }
    );

    return { 
        type: 'fetchLand', 
        payload: response.data
    }
};

export const addLand= (data)=>{
    return {
        type: 'addLand',
        payload: data
    }
};

export const editLand = (data) =>{
    return { 
        type: 'editLand', 
        payload: data
    }
};

export const deleteLand = async (id,token)=> {
    await axios.delete(`/land/${id}`,{
        headers:{
            'x-auth-token': token
        }
    });

    return {
        type: 'deleteLand',
        payload: id
    }
}