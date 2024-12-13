// Load and initialize the Google API
gapi.load('client:auth2', () => {
    gapi.client.init({
        apiKey: 'AIzaSyAkCgk1aKtppvMp6n8DwWmxo2RGhwQ1R7U',
        clientId: '1039339701467-dtjv7svtgjkkda386oq3c6fotjth4h4o.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive.file',
    }).then(() => {
        console.log('Google API initialized');
    });
});

// Function to create and upload file to Google Drive
const createAndUploadFile = () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const fileContent = `<html><body><h1>${title}</h1><p>${content}</p></body></html>`;
    const file = new Blob([fileContent], { type: 'text/html' });

    const metadata = {
        name: `${title}.html`,
        mimeType: 'text/html',
    };

    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    formData.append('file', file);

    fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${gapi.auth.getToken().access_token}`,
        },
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('File uploaded successfully:', data);
        alert('File uploaded successfully!');
    })
    .catch((error) => {
        console.error('Error uploading file:', error);
    });
};

// Add event listener for Publish Blog button
document.getElementById('publish').addEventListener('click', () => {
    gapi.auth2.getAuthInstance().signIn().then(createAndUploadFile);
});

// Function to save file locally
document.getElementById('save').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const fileContent = `<html><body><h1>${title}</h1><p>${content}</p></body></html>`;
    const blob = new Blob([fileContent], { type: 'text/html' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.html`;
    link.click();
});
