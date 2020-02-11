import React, { Component } from 'react';
 
const CatList = () => {
 return (
   <div>
     {props.breeds.Map(cat => <li>cat</li> )}
   </div>
 )
}
 
CatList;
