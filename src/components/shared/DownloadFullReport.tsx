import React from 'react';

interface Props {
  object: {};
  fileName: string;
}

const DownloadFullReport: React.FC<Props> = ({ object, fileName }) => {
  const json = JSON.stringify(object);
  const blob = new Blob([json], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName + '.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className={'btn btn-primary'} onClick={handleDownload}>
      Download full album report
    </button>
  );
};

export default DownloadFullReport;
