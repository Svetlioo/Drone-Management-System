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

  return <input type="file" onChange={handleFileUpload} />;
}

export default FileInput;
