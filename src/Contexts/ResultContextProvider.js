import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    
    const getResults = async (type) =>{
        setIsLoading(true);
        // console.log(process.env.REACT_APP_API_KEY);
        const response = await fetch(`${baseUrl}${type}`,{
            method:  'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              },
        });
        
        const data = await response.json();
        
        // console.log(type,'data',data);

        if (type.includes('/news')){
            setResults({'news': true, 'news_data':data.entries});
        }else if (type.includes('/image')){
            setResults({'images': true, 'image_data':data.image_results});
        } else if (type.includes('/search')){
            setResults({'search': true, 'search_data':data.results});
        } else{
            setResults({'videos': true, 'videos_data':data.results});
        }

        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );

} 

export const useResultContext =() => useContext(ResultContext);