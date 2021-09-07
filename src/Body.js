import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css'


function Body() {

    const[items,setitems]=useState([]) 

    useEffect(()=>{

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(res=>{

            console.log(res.data);

            setitems(res.data.drinks)

        }).catch(err=>{

            console.log(err);

        })


    },[])

    const itemslist=items.map((obj)=>{

        return <div className='col-md-4'> 
            <p>{obj.strDrink}</p>
            <img src={obj.strDrinkThumb} className='img-fluid'/>
            <p>{obj.idDrink}</p>
        </div>

    })

    return (
    <div>

      <div className='row'>
        {itemslist}
      </div>

    </div>
    )
}

export default Body