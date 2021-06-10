import React from 'react'

export default function Map() {
    return (
        <div>
            <div style={{position:"relative",textAlign:"right",height:"383px",width:"100%"}}>
                <div style={{overflow:"hidden",height:"383px",width:"100%"}}>
                    <iframe title="address" width="100%" height="383" id="gmap_canvas" src="https://maps.google.com/maps?q=santosh%20sakar%20pustak%20pasal&t=&z=17&ie=UTF8&iwloc=&output=embed" ></iframe>
                    <br/>
                </div>
            </div>
        </div>
    )
}