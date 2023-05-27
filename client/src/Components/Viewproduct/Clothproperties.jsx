import React from 'react'

const Productproperties = (props) => {
    return (
        <>
            <div class="properties">
                <div class="properties-key">color</div>
                <div class="properties-value">{props.color}</div>
            </div>
            <div class="properties">
                <div class="properties-key">occasion</div>
                <div class="properties-value">{props.occasion}</div>
            </div>
            <div class="properties">
                <div class="properties-key">salespackage</div>
                <div class="properties-value">{props.salespackage}</div>
            </div>
            <div class="properties">
                <div class="properties-key">pattern</div>
                <div class="properties-value">{props.pattern}</div>
            </div>
            <div class="properties">
                <div class="properties-key">fabric</div>
                <div class="properties-value">{props.fabric}</div>
            </div>
            <div class="properties">
                <div class="properties-key">fabriccare</div>
                <div class="properties-value">{props.fabriccare}</div>
            </div>
            <div class="properties">
                <div class="properties-key">Display</div>
                <div class="properties-value">{props.display}</div>
            </div>
        </>
    )
}

export default Productproperties