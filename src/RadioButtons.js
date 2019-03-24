import React from "react";

const RadioButton = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                    type="radio"
                    name="sizeSelected"
                    value="small"
                    onChange={props.onChange}
                /> Small
                <br />
                <input
                    type="radio"
                    name="sizeSelected"
                    value="medium"
                    onChange={props.onChange}
                /> Medium
                <br />
                <input
                    type="radio"
                    name="sizeSelected"
                    value="large"
                    onChange={props.onChange}
                /> Large
    
                <br />
                <br />
                
                <input
                    type="submit"
                    value="Request Wisdom"
                />
            </form>
        </div>
    )
}

export default RadioButton;