import axios from "axios";
 

export const fileUpload = async (File) => {

        
        const userToken = localStorage.getItem('userToken');
        const formData = new FormData();
        formData.append('file', File);
        const config = {
                headers: {
                  'Authorization': `Bearer ${userToken}`,
                  'Content-Type': 'multipart/form-data', // Replace with the appropriate content type if needed
                },
              };
        
        await axios.put('http://localhost:80/api/user/docUpload', formData,config)
                .then(response => {
                        console.log('Document uploaded successfully:', response);
                        
                }).catch((error) => {
                        console.log('error in Upload', error);
                })

}


