function Loading(props) {
    const { message = "Loading" } = props;
    return (
      <>
      <div className="loaderContainer">
      <div className="loader"></div>
      </div>
      <p className="App">{message}</p>
      </>
    )
  }
  
  export default Loading;
  