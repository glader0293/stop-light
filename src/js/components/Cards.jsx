export const Cards = (props) =>{
  const {cardDetail} = props;
  const {image, title, description} = cardDetail;

return(
    <div className="container p-0 card g-2" style={{width: "20rem"}}>
      <img className="card-img-top" src={image} alt="Card image cap"/>
      <div className="card-body m-0">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">{description}</p>
      </div>
      <hr className = "m-0 p-0"></hr>
      <div className ="container d-flex justify-content-center my-2">
      <button type="button" class="btn btn-primary">Find out more!</button>
      </div>
      
    </div>
    
)


}




