

const Cate = ({cate}) => {
    

    const {logo,category_name,availability}=cate;
    return (
        <div>
          
            <div className="card card-compact my-4 p-4 bg-base-200 text-center">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-center">{category_name}</h2>
    <p>{availability}?</p>
    
  </div>
</div>
         
        </div>
    );
};

export default Cate;