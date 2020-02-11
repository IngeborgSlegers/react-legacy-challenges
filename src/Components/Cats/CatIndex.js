import React, { Component } from 'react';
import CatList from './CatList';
 
class CatIndex {
 constructor(){
   super(props)
   state : {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
 }

   return (
     <div>
      <CatList cats={breeds} />
     </div>
   );

}

