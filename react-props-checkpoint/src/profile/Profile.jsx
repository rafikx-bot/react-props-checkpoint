import PropTypes from 'prop-types';


export const Profile = ({fullName, bio, profession, children,handleName}) => {
    return (
        <div className="card" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"300px",height:"500px",border:"1px solid black"}}>
                {children}
                <h5 >{fullName}</h5>
                <p style={{paddingLeft:"20px"}}>{bio}</p>
                <p >{profession}</p>
                <button onClick={()=>{handleName(fullName)}}>Name</button>
              
        </div>
  )
}


Profile.proptype={
  fullName:PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,
}




