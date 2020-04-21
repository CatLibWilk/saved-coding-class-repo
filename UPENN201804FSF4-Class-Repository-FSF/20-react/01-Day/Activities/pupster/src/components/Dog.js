import React, { Component } from 'react';

const Dog = (props) => (
        <div class="col-6 m-3 mx-auto justify-content-center">
                <img class="img dog-image" src={props.src}>{console.log(props.src)}</img>
        </div>
)


export default Dog;