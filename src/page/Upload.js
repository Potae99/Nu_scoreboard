import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

function Upload() {

    const location = useLocation();
    const { isLogined } = location.state || false;

    const [uploadFile, setUploadFile] = useState(undefined);
    const [fileName, setFileName] = useState(""); // เพิ่ม state เก็บชื่อไฟล์
    const [FileDowload, setfileDowload] = useState("");

    if (!isLogined) {
        return window.location.href = 'login';
    }

    ///Go home
    const Home = (event) => {
        window.location.href = "/"
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setUploadFile(selectedFile);
        if (selectedFile) {
            setFileName(selectedFile.name); // ระบุชื่อไฟล์เมื่อมีการเลือก
        } else {
            setFileName(""); // ล้างชื่อไฟล์ถ้าไม่มีไฟล์ที่เลือก
        }
    };

    const fileDownload = (event) => {
        axios.get(process.env.REACT_APP_API_URL + "/download/score/score.xlsx", { responseType: 'blob' })
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                setfileDowload(url); // ตั้งค่าให้ fileDowload เป็น URL ของไฟล์ที่ดาวน์โหลด
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'score.xlsx');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Handle error while downloading
            });
    };


    const handleFileUpload = async (event) => {
        event.preventDefault();

        if (!uploadFile) {
            Swal.fire({
                icon: 'error',
                title: 'Please select a file to upload.',
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }

        const formData = new FormData();
        formData.append('file', uploadFile);

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/upload/score', formData);
            Swal.fire({
                icon: 'success',
                title: 'File uploaded successfully',
                showConfirmButton: false,
                timer: 1500,

            }).then(() => {
                // Redirect to the homepage after the success alert is closed
                window.location.href = "/Upload";
            });


        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to upload file. Please check your data.',
                showConfirmButton: false,
                timer: 1500,
            });
            // Handle error
        }

    };

    // console.log(uploadFile);

    return (
        <div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
            <div className="flex justify-center w-full mx-auto sm:max-w-lg">
                <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
                    <div className="mt-10 mb-10 text-center">
                        <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
                        <p className="text-xs text-gray-500">File should be of format .exls</p>
                    </div>
                    <div className="relative w-4/5 max-w-xs mb-10 bg-white rounded-lg shadow-inner">
                        <input type="file" id="file-upload" onChange={handleFileChange} className="hidden" />
                        <label htmlFor="file-upload" className="z-20 flex flex-col items-center justify-center w-full h-auto cursor-pointer">
                            <p className="text-xs font-light text-center text-gray-500 mb-2">{fileName ? fileName : "Click here"}</p>
                            <svg className="w-8 h-8 text-indigo-400 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                            </svg>
                        </label>
                        <div className=' flex flex-col justify-center ml-16 mr-16'>
                            <button onClick={handleFileUpload} className="w-50  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
                            <button onClick={fileDownload} className="w-50 mt-4 text-center  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Dowload</button>
                            <button onClick={Home} className="w-50 mt-4 text-center  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Home</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Upload;
