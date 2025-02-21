import { useDropzone } from 'react-dropzone';
import { usePageContext } from '../context/PageContext';
import UploadIcon from '../assets/images/icon-upload.svg';

export default function DropImage() {
  const { file, onDrop, handleRemoveImage } = usePageContext();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    maxSize: 500000,
    onDrop,
    multiple: false,
  });

  const style = {
    border: isDragActive ? '2px solid red' : '2px dashed gray',
    borderRadius: '10px',
    padding: '1.5rem',
    textAlign: 'center',
  };

  const text = 'Drag and drop or click to upload';

  return (
    <div {...getRootProps()} className="drop-image" style={style}>
      <input className="drop-input" {...getInputProps()} />

      <div className="drop-image-container">
        {file ? (
          <>
            <img className="uploaded-image" src={file} alt="Uploaded" />
            <div className="drop-buttons">
              <button onClick={handleRemoveImage}>Remove Image</button>
              <button {...getRootProps()}>Change Image</button>
            </div>
          </>
        ) : (
          <>
            <img className="upload-icon" src={UploadIcon} alt="Upload Icon" />
            <p>{text}</p>
          </>
        )}
      </div>
    </div>
  );
}
