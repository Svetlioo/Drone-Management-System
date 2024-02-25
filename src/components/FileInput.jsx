function FileInput() {
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const config = JSON.parse(e.target.result);
      console.log(config);
    };

    reader.readAsText(file);
  }

  const fileInputStyle = {
    margin: "1rem 0",
    fontSize: "1rem",
    display: "block",
  };

  return (
    <input style={fileInputStyle} type="file" onChange={handleFileUpload} />
  );
}

export default FileInput;
