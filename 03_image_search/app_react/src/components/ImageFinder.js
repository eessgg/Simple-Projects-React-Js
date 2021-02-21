import React from 'react';

const ImageFinder = ({searchInput, onClick}) => {
  return (
      <div className="d-flex justify-content-center my-5">
        <form className="text-center"> 
          <div className="row">
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="First name" onChange={e => searchInput(e.target.value)} />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn" onClick={onClick}> Search </button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default ImageFinder;
