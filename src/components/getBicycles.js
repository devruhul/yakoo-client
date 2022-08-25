import axios from "axios";

const getBicycles = async () => {
    const {data} = await axios.get('http://localhost:5000/bicycles')
    return data;
}

export default getBicycles;