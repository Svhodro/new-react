import React from "react";
function Card({pd,hendleproduct}) {    

    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={pd.recipe_img} alt="Shoes" className="rounded-xl w-60 h-40" />
                </figure>
                <div className="card-body  text-left ">
                    <p className="font-bold">{pd.recipe_name}</p>
                    <p>{pd.short_description}</p>
                        <hr className="w-[95%]"/>
                        <p className="font-bold ">Ingredients:1</p>
                        <ol className="list-disc list-inside text-left">
                            <li>{pd.ingredients[0]}</li>
                            <li>{pd.ingredients[1]}</li>
                            <li>{pd.ingredients[2]}</li>
                        </ol>
                        <hr className="w-[95%] "/>
                        <div className="flex gap-4 justify-between">
                            <div>
                                <p>{pd.preparing_time}</p>
                            </div>
                            <div>
                                <p>{pd.calories}</p>
                            </div>
                        </div>
                    <div className="card-actions">
                    <button onClick={(e)=>hendleproduct(pd)}  className="btn btn-accent ">Want to Cook</button>
                    </div>
                </div>
            </div>        
        </>
    )
}
export default Card