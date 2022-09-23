//create a class component
const url = 'https://6298beb2f2decf5bb74a9edb.mockapi.io/comments';

class API {
    //get request
    get = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    //post request
    post = async (newComment) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    //update request
    update = async (id, newComment) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export const api = new API();