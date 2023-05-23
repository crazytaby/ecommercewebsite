import React from 'react'

const Productproperties = (props) => {
    return (
        <>
            <div class="properties">
                <div class="properties-key">ram</div>
                <div class="properties-value">{props.ram}</div>
            </div>
            <div class="properties">
                <div class="properties-key">strorage</div>
                <div class="properties-value">{props.storage}</div>
            </div>
            <div class="properties">
                <div class="properties-key">Frontcamera</div>
                <div class="properties-value">{props.frontcamera}</div>
            </div>
            <div class="properties">
                <div class="properties-key">Backcamera</div>
                <div class="properties-value">{props.backcamera}</div>
            </div>
            <div class="properties">
                <div class="properties-key">Battery</div>
                <div class="properties-value">{props.battery}</div>
            </div>
            <div class="properties">
                <div class="properties-key">Processor</div>
                <div class="properties-value">{props.processor}</div>
            </div>
            <div class="properties">
                <div class="properties-key">Display</div>
                <div class="properties-value">{props.display}</div>
            </div>
        </>
    )
}

export default Productproperties