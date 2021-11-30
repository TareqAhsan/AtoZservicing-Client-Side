import React,{useState} from 'react';

import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import EXperts from '../EXperts/EXperts';
import FeatureServices from '../FeatureServices/FeatureServices';
import FeatureType from '../FeatureServices/FeatureType/FeatureType';

const Home = () => {

    
    return (
        <div>
            <Navigation />
            <Banner/>
            <FeatureType/>
            {/* <FeatureServices/> */}
            <EXperts/>
            <AllReview/> 
            <Footer/>       
        </div>
    );
};

export default Home;