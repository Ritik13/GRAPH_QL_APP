const request  = async (url , payload) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const data = response.data;
            return data; // Return the fetched data
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error;
        }
}