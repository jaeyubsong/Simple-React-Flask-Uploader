import React from 'react';

class fileupload extends React.Component {
  constructor(props) {
    super(props);

  this.state = {imageURL: '',};

  this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({imageURL: 'http://localhost:3000/${body.file}'});
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => {this.uploadInput = ref;}} type="file" />
        </div>
        <div>
          <input ref={(ref) => {this.fileName = ref;}} type="text" placeholder="Enter the desired file name" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}

export default fileupload;
  


