function DownloadPDF() {
    const link = document.createElement('a');
    link.href = './docs/CV_2024-11-12_Noé_LECHAT.pdf';
    link.download = 'CV_Noé_Lechat.pdf';
    link.click();
}


function DisplayBack(){
    event.preventDefault();
    document.getElementById('1').style.display = 'block';
    document.getElementById('2').style.display = 'none';
}

function Refresh(){
    event.preventDefault();
    document.getElementById('2').style.display = 'block';
    document.getElementById('1').style.display = 'none';
}