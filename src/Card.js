import React from 'react'

export default function Card(props) {
    return (
        <div className="card m-4 h-100">
            <img src={props.recipe.recipe.image}
             class="img-thumbnail rounded-circle mx-auto d-block my-4"
             style={{height: 200, width: 200}}
             alt="Recipe Image"/>
            <div className="card-body">
                <h3 className="card-title">{props.recipe.recipe.label}</h3>
                <div className="row">
                    <div className="col-sm">
                        Total weight: {props.recipe.recipe.totalWeight}
                    </div>
                    <div className="col-sm">
                        Calories: {props.recipe.recipe.calories}
                    </div>
                    <div className="col-sm">
                        Jump into the <a href={props.recipe.recipe.url} target="_blank">
                            tutorial
                        </a> page
                    </div>
                </div>
                <br/><br />
                <h4> Ingredients required </h4>  
                <div>
                    {props.recipe.recipe.ingredientLines.map((each, index) => {
                        return <p key={index}> {each} | </p>
                    })}
                </div>
            </div>
        </div>
    )
}
