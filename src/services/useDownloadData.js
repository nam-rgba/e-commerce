import { useSelector } from 'react-redux';

export const useDownloadData = () => {
    const userData = useSelector((state) => state.user.user); 
    const surveyData = useSelector((state) => state.survey.answers); 
    let finalData={...userData, survey: surveyData};
    

    const downloadDataAsTxtFile = () => {
        const dataText=JSON.stringify(finalData, null, 2);

        const finalText = `User data: ${dataText}`;

        const blob = new Blob([ finalText ], { type: 'text/plain;charset=utf-8' });
        const downloadLink = document.createElement('a');
        
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'data.txt';
        downloadLink.click();
        
        URL.revokeObjectURL(downloadLink.href);
    };

    return downloadDataAsTxtFile;
};
