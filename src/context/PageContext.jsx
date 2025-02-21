import { useState, useCallback, createContext, useContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const PageProvider = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  return useContext(PageProvider);
}

// eslint-disable-next-line react/prop-types
export default function PageContext({ children }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    github_name: '',
  });
  const [randNumber, setRandNumber] = useState(999999);
  const [errorForm, setErrorForm] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      setError('No file attached. Please upload an image.');
      setFile(null);
      return;
    }

    const image = acceptedFiles[0];

    if (!image || !image.size) {
      setError('File too large. Please upload a photo under 500kb');
      setFile(null);
      return;
    }

    setFile(URL.createObjectURL(image));
    setError('');
  }, []);

  const handleRemoveImage = () => {
    setFile(null);
  };

  return (
    <PageProvider.Provider
      value={{
        file,
        error,
        onDrop,
        errorForm,
        values,
        setValues,
        setErrorForm,
        setRandNumber,
        randNumber,
        handleRemoveImage,
        setError,
        setFile,
      }}
    >
      {children}
    </PageProvider.Provider>
  );
}
