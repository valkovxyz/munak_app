import { api } from '../utils/api.js';
import { retrieveLaunchParams } from "@tma.js/sdk-react";

const { initDataRaw} = retrieveLaunchParams();
export const checkUser = async (telegramId: any, username: any) => {
    console.log('init data raw', initDataRaw)
    try {
        const response = await api.post('/users/register', {
            telegramId,
            username
        }, {
            headers: {
                Authorization: `tma ${initDataRaw}`
            }
        });
        console.log('User data:', response.data);
    } catch (error) {
        console.error('Error checking user:', error);
    }
};
