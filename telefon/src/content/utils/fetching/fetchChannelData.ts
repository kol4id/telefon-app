import axios from "axios";
import { IChannel } from "../../interfaces/IChannel";

const FetchChannelData = async(id: number): Promise<IChannel>=>{
    const response = await axios.get<IChannel>('http://localhost:4200/api/channels/id', {params: {id: id}});
    let data: IChannel = response.data;

    if (response.status == 200){
        return data;
    } else {
        console.log(response.status);
    }
    return data;
}
export default FetchChannelData;