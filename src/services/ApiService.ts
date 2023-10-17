import { useAuthStore } from "@/stores/auth";
import { useProfStore } from "@/stores/profile";


export default {
    async grabUser() {
        try {
            let myHeaders:any = new Headers();
                const accessToken = useAuthStore().getAccessToken;

                myHeaders.append("Authorization", `Bearer ${accessToken}`);

                var requestOptions:Object = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                fetch("https://api.spotify.com/v1/me", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    useProfStore().setUserID(result.id);
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            throw error;
        }
    },
    async grabPlaylists() {
        try {
            let myHeaders:any = new Headers();
                const accessToken = useAuthStore().getAccessToken;
                let user_id = useProfStore().getUserID;

                myHeaders.append("Authorization", `Bearer ${accessToken}`);

                var requestOptions:Object = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                let promise = fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    return result;
                    // let data = result;
                    // console.log(data);
                    // return data;
                    // let doc = result.items
                    // doc.forEach((item: any) => {
                    //     console.log(item.id);
                    // });
                })
                .catch(error => console.log('error', error));
                console.log('Promise: ', promise);
                return promise;
        } catch (error) {
            throw error;
        }
    },
    async grabPlaylistInfo(SelectionID:string) {
        try {
            let myHeaders:any = new Headers();
                const accessToken = useAuthStore().getAccessToken;
                let user_id = useProfStore().getUserID;

                myHeaders.append("Authorization", `Bearer ${accessToken}`);

                var requestOptions:Object = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };

                let promise = fetch(`https://api.spotify.com/v1/playlists/${ SelectionID }`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    return result;
                    // let data = result;
                    // console.log(data);
                    // return data;
                    // let doc = result.items
                    // doc.forEach((item: any) => {
                    //     console.log(item.id);
                    // });
                })
                .catch(error => console.log('error', error));
                console.log('Promise: ', promise);
                return promise;
        } catch (error) {
            throw error;
        }
    },
}