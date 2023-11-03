import React from 'react'
import {Routes,Route,redirect} from 'react-router-dom';
import {LinksPage} from './LinksPage.jsx';
import {AuthPage} from './AuthPage.jsx';
import {CreatePage} from './CreatePage.jsx';
import {DetailPage} from './DetailPage.jsx';
import {Layout} from '../components/Layout.jsx'

export const useRoute = isAuthentificated => {
  
    if(isAuthentificated){
        
            return (
             
                 <Routes>
                  <Route path="/" element={<Layout/>}>
                    <Route path='/links' element={LinksPage}/>
                    <Route path='/create' element={CreatePage}/>
                    <Route path='/detail/:id' element={DetailPage}/>
                    </Route>
                 </Routes>
             
        )
    }

    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path='/' element={<AuthPage/>}/>
            </Route>
            
        </Routes>
    )
}
