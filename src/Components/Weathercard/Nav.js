import React,{ useState} from "react";
import './Weathercard.css'

function Nav(props) {
    const [search, setsearch] = useState('')
    const onChangeHandle = (e)=>{
        setsearch(e.target.value)
    }
    const onSubmitHandle = async e=>{
        e.preventDefault()
        if(search === ''){
          window.alert('Search is empty!')
          setsearch('')
        }
        else{
          props.func(search.trim())
          setsearch('')
        }
    }
  return (
    <div style={{width:'100%',height:'20%'}} className='mt-5 p-5'>
      <div  className="d-flex justify-content-center align-items-center">
        <form className="form" onSubmit={onSubmitHandle}>
          <input
            onChange={onChangeHandle}
            className="form-control me-2"
            style={{width:'70%'}} 
            type="search"
            value={search}
            placeholder="Enter city name to find weather..."
          />
          
          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
